import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "LYOST",
  description: "Plateforme tournois LYOST",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <header className="nav">
          <div className="nav-inner">
            <Link className="brand" href="/">
              LYOST
            </Link>

            <nav className="links">
              <Link href="/tournaments">Tournois</Link>
              <Link href="/rules">Règlement</Link>
            </nav>
          </div>
        </header>

        {children}

        <style>{css}</style>
      </body>
    </html>
  );
}

const css = `
  body{
    margin:0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
    background:#040818;
  }
  .nav{
    position:sticky;
    top:0;
    z-index:50;
    padding:14px 16px;
    background: rgba(0,0,0,.25);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .nav-inner{
    width:min(980px,100%);
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .brand{
    font-weight:900;
    letter-spacing:.2em;
    text-decoration:none;
    color:#00f0ff;
    text-shadow: 0 0 18px rgba(0,240,255,.45);
  }
  .links{
    display:flex;
    gap:16px;
  }
  .links a{
    color: rgba(234,246,255,.8);
    text-decoration:none;
    font-weight:700;
    font-size:13px;
  }
  .links a:hover{
    color:#ffffff;
  }
`;
