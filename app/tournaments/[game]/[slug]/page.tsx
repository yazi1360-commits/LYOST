import Link from "next/link";
import { notFound } from "next/navigation";
import { tournaments } from "@/app/lib/tournaments";

type Params = { game: "fortnite" | "valorant"; slug: string };

export default async function TournamentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { game, slug } = await params;

  const tournament = tournaments.find((t) => t.game === game && t.slug === slug);

  if (!tournament) return notFound();

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "radial-gradient(circle at 20% 20%, #0b2a3a, #060a14 55%, #180a2b)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <Link href="/tournaments" style={{ opacity: 0.9 }}>
            ← Retour tournois
          </Link>
          <span style={{ opacity: 0.35 }}>|</span>
          <Link href={`/tournaments/${game}`} style={{ opacity: 0.9 }}>
            Voir toutes les cups {game}
          </Link>
        </div>

        <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 6 }}>
          {tournament.title}
        </h1>

        <p style={{ opacity: 0.8, marginBottom: 24 }}>
          {tournament.game.toUpperCase()} • {tournament.date}
        </p>

        <div
          style={{
            borderRadius: 18,
            padding: 18,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "grid", gap: 10 }}>
            <div>
              <b>Entrée :</b> {tournament.entry}
            </div>
            <div>
              <b>Prix :</b> {tournament.prize}
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <button
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 14,
                border: "none",
                fontWeight: 800,
                cursor: "pointer",
                background:
                  tournament.game === "fortnite"
                    ? "linear-gradient(90deg,#00d4ff,#6f00ff)"
                    : "linear-gradient(90deg,#ff00c8,#7c3aed)",
                color: "#061018",
              }}
              onClick={() => alert("Inscription bientôt (prototype)")}
            >
              S’inscrire
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
