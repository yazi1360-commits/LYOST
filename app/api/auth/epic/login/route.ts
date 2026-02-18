import { NextResponse } from "next/server";

function b64url(obj: any) {
  return Buffer.from(JSON.stringify(obj)).toString("base64url");
}

export async function GET(req: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const redirectUri = `${baseUrl}/api/auth/callback/epic`;

  const clientId = process.env.EPIC_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: "Missing EPIC_CLIENT_ID" }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const returnTo = searchParams.get("returnTo") || "/tournaments"; // ✅ ta page tournois
  const state = b64url({ returnTo });

  const authUrl =
    "https://www.epicgames.com/id/authorize" +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&response_type=code` +
    `&scope=basic_profile` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${encodeURIComponent(state)}`;

  return NextResponse.redirect(authUrl);
}
