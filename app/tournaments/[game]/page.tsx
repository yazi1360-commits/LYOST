import Link from "next/link";
import { notFound } from "next/navigation";
import { tournaments } from "@/app/lib/tournaments";

type Params = { game: "fortnite" | "valorant" };

export default async function GameTournamentsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { game } = await params;

  if (game !== "fortnite" && game !== "valorant") return notFound();

  const list = tournaments.filter((t) => t.game === game);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "radial-gradient(circle at 20% 20%, #0b2a3a, #060a14 55%, #180a2b)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Link href="/tournaments" style={{ opacity: 0.9 }}>
          ← Retour tournois
        </Link>

        <h1 style={{ fontSize: 48, fontWeight: 900, marginTop: 14 }}>
          Cups {game.toUpperCase()}
        </h1>
        <p style={{ opacity: 0.75, marginTop: 6 }}>
          Choisis une cup pour voir les détails et t’inscrire.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
            marginTop: 24,
          }}
        >
          {list.map((t) => (
            <div
              key={t.id}
              style={{
                borderRadius: 18,
                padding: 18,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 18 }}>{t.title}</div>
              <div style={{ opacity: 0.8, marginTop: 8 }}>
                <div>Début : {t.date}</div>
                <div>Entrée : {t.entry}</div>
                <div>Prix : {t.prize}</div>
              </div>

              <Link
                href={`/tournaments/${t.game}/${t.slug}`}
                style={{
                  display: "block",
                  marginTop: 14,
                  textAlign: "center",
                  padding: "12px 14px",
                  borderRadius: 14,
                  fontWeight: 800,
                  background:
                    t.game === "fortnite"
                      ? "linear-gradient(90deg,#00d4ff,#6f00ff)"
                      : "linear-gradient(90deg,#ff00c8,#7c3aed)",
                  color: "#061018",
                  textDecoration: "none",
                }}
              >
                Ouvrir / S’inscrire
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
