import Link from "next/link";

export default function HomePage() {
  return (
    <main className="lyost-bg">
      <div className="lyost-wrap">
        <header className="lyost-hero">
          <div className="lyost-badge">LYOST</div>

          <h1 className="lyost-title">
            Plateforme <span className="lyost-neon">LYOST</span>
          </h1>

          <p className="lyost-sub">
            Inscription simple • Check-in • Scores vérifiés • Staff LYOST
          </p>

          <div className="lyost-actions">
            <Link className="lyost-btn lyost-btn-cyan" href="/tournaments">
              Voir les tournois
            </Link>
            <Link className="lyost-btn lyost-btn-dark" href="/rules">
              Lire le règlement
            </Link>
          </div>
        </header>

        <section className="lyost-grid">
          <div className="lyost-card">
            <div className="lyost-card-top">🎮 Jeux</div>
            <div className="lyost-card-text">
              Fortnite via Epic • Valorant via Riot (bientôt)
            </div>
          </div>

          <div className="lyost-card">
            <div className="lyost-card-top">✅ Check-in</div>
            <div className="lyost-card-text">
              Check-in avant l’heure, puis lancement du tournoi
            </div>
          </div>

          <div className="lyost-card">
            <div className="lyost-card-top">🏆 Classement</div>
            <div className="lyost-card-text">
              Résultats & classement visibles (proto, on branche l’API ensuite)
            </div>
          </div>
        </section>

        <footer className="lyost-footer">© 2026 LYOST • Prototype</footer>
      </div>

      {/* ✅ PAS de styled-jsx */}
      <style>{css}</style>
    </main>
  );
}

const css = `
  .lyost-bg{
    min-height:100vh;
    color:#eaf6ff;
    background:
      radial-gradient(1200px 600px at 50% -10%, rgba(0,255,255,.18), transparent 60%),
      radial-gradient(900px 500px at 80% 20%, rgba(160,0,255,.14), transparent 55%),
      radial-gradient(900px 500px at 20% 25%, rgba(0,160,255,.16), transparent 55%),
      linear-gradient(180deg, #040818 0%, #050a22 45%, #040818 100%);
    display:flex;
    justify-content:center;
    padding:48px 16px;
  }
  .lyost-wrap{ width: min(980px, 100%); }
  .lyost-hero{
    border:1px solid rgba(120,210,255,.18);
    background: rgba(8, 20, 40, .55);
    box-shadow: 0 0 0 1px rgba(0,255,255,.06), 0 20px 70px rgba(0,0,0,.45);
    border-radius:18px;
    padding:28px 28px 22px;
    backdrop-filter: blur(10px);
  }
  .lyost-badge{
    font-weight:800;
    letter-spacing:.22em;
    font-size:12px;
    opacity:.9;
    margin-bottom:10px;
  }
  .lyost-title{
    font-size:38px;
    line-height:1.1;
    margin:0;
    font-weight:900;
  }
  .lyost-neon{
    color:#00f0ff;
    text-shadow: 0 0 16px rgba(0,240,255,.55);
  }
  .lyost-sub{
    margin:10px 0 16px;
    opacity:.78;
    font-size:14px;
  }
  .lyost-actions{ display:flex; gap:10px; flex-wrap:wrap; }
  .lyost-btn{
    padding:10px 14px;
    border-radius:12px;
    font-weight:700;
    font-size:13px;
    border:1px solid rgba(255,255,255,.12);
    text-decoration:none;
    display:inline-flex;
    align-items:center;
    justify-content:center;
  }
  .lyost-btn-cyan{
    background: linear-gradient(90deg, rgba(0,255,255,.25), rgba(0,170,255,.22));
    box-shadow: 0 0 18px rgba(0,255,255,.18);
  }
  .lyost-btn-dark{
    background: rgba(255,255,255,.06);
  }
  .lyost-grid{
    margin-top:14px;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:12px;
  }
  .lyost-card{
    border:1px solid rgba(120,210,255,.14);
    background: rgba(5, 14, 30, .55);
    border-radius:14px;
    padding:14px;
    backdrop-filter: blur(10px);
  }
  .lyost-card-top{ font-weight:800; margin-bottom:6px; }
  .lyost-card-text{ opacity:.8; font-size:13px; line-height:1.4; }
  .lyost-footer{
    text-align:center;
    margin-top:18px;
    opacity:.55;
    font-size:12px;
  }

  @media (max-width: 860px){
    .lyost-grid{ grid-template-columns:1fr; }
    .lyost-title{ font-size:32px; }
  }
`;
