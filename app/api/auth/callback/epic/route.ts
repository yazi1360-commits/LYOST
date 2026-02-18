// app/api/auth/callback/epic/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabaseAdmin";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const stateParam = url.searchParams.get("state"); // optionnel

    if (!code) {
      return NextResponse.json({ error: "No code received" }, { status: 400 });
    }

    const clientId = process.env.EPIC_CLIENT_ID;
    const clientSecret = process.env.EPIC_CLIENT_SECRET;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const redirectUri = `${baseUrl}/api/auth/callback/epic`;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: "Missing EPIC_CLIENT_ID or EPIC_CLIENT_SECRET" },
        { status: 500 }
      );
    }

    // ✅ 1) Exchange code -> token (IMPORTANT: epicgames.dev)
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const tokenRes = await fetch("https://api.epicgames.dev/epic/oauth/v2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    const tokenText = await tokenRes.text();
    let tokenData: any = null;
    try {
      tokenData = JSON.parse(tokenText);
    } catch {
      tokenData = { raw: tokenText };
    }

    if (!tokenRes.ok) {
      return NextResponse.json(
        { error: "Token exchange failed", details: tokenData },
        { status: 500 }
      );
    }

    const epicAccountId = tokenData?.account_id as string | undefined;
    const accessToken = tokenData?.access_token as string | undefined;

    if (!epicAccountId || !accessToken) {
      return NextResponse.json(
        { error: "Missing account_id or access_token in token response", tokenData },
        { status: 500 }
      );
    }

    // ✅ 2) Get basic profile from Epic (displayName)
    let displayName: string | null = null;
    let avatarUrl: string | null = null;

    // (API Account publique Epic)
    const meRes = await fetch(
      `https://api.epicgames.dev/epic/id/v2/accounts/${encodeURIComponent(epicAccountId)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (meRes.ok) {
      const me = await meRes.json();
      displayName = me?.displayName ?? null;
      // avatarUrl pas toujours dispo ici (souvent null)
    } else {
      // si l’appel profile échoue, on met une valeur par défaut pour éviter NOT NULL
      displayName = "Epic Player";
    }

    if (!displayName) displayName = "Epic Player";

    // ✅ 3) Upsert Supabase (table: profiles)
    const { error: upsertError } = await supabaseAdmin
      .from("profiles")
      .upsert(
        {
          epic_account_id: epicAccountId,
          display_name: displayName,
          avatar_url: avatarUrl,
          last_login_at: new Date().toISOString(),
        },
        { onConflict: "epic_account_id" }
      );

    if (upsertError) {
      return NextResponse.json(
        { error: "Supabase upsert failed", supabase_error: upsertError },
        { status: 500 }
      );
    }

    // ✅ 4) Redirect (par défaut tournaments)
    let returnTo = "/tournaments";

    // optionnel: si tu veux passer un returnTo dans state
    if (stateParam) {
      try {
        const decoded = JSON.parse(
          Buffer.from(stateParam, "base64url").toString("utf8")
        );
        if (
          decoded?.returnTo &&
          typeof decoded.returnTo === "string" &&
          decoded.returnTo.startsWith("/")
        ) {
          returnTo = decoded.returnTo;
        }
      } catch {
        // ignore
      }
    }

    const res = NextResponse.redirect(new URL(returnTo, req.url));
    res.cookies.set("epic_account_id", epicAccountId, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (e: any) {
    return NextResponse.json(
      { error: "Callback crash", message: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}
