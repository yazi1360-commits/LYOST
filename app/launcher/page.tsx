export default function LauncherPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #0b1220 0%, #05070c 60%)",
      color: "white",
      padding: 30,
      fontFamily: "Arial",
    }}>
      <h1 style={{ fontSize: 42, marginBottom: 10 }}>LYOST Launcher</h1>
      <p style={{ opacity: 0.8, marginBottom: 30 }}>
        Connecte-toi et lance ton tournoi.
      </p>

      <div style={{ display: "flex", gap: 14 }}>
        <a
          href="/api/auth/epic/login?returnTo=/tournaments"
          style={{
            background: "#2b2f3a",
            padding: "14px 18px",
            borderRadius: 10,
            textDecoration: "none",
            color: "white",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          Se connecter avec Epic
        </a>

        <a
          href="/tournaments"
          style={{
            background: "#0f172a",
            padding: "14px 18px",
            borderRadius: 10,
            textDecoration: "none",
            color: "white",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          Aller aux tournois
        </a>
      </div>
    </div>
  );
}
