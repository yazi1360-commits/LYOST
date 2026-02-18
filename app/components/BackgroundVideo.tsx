"use client";

import { usePathname } from "next/navigation";

export default function BackgroundVideo() {
  const pathname = usePathname();

  // Choix auto selon la page
  // /tournaments -> fond neutre (fortnite par défaut)
  // /tournaments/... -> selon l'id si tu veux, mais simple ici:
  const isValorant = pathname.includes("valorant");
  const isFortnite = pathname.includes("fortnite");

  const src = isValorant
    ? "/videos/valorant.mp4"
    : isFortnite
    ? "/videos/fortnite.mp4"
    : "/videos/fortnite.mp4";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Filtre bleu néon LYOST */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#00e5ff22,transparent_55%),radial-gradient(ellipse_at_right,#b100ff18,transparent_50%),linear-gradient(180deg,#020b2aCC,#020b2aE6)]" />

      {/* Légère vignette (pro) */}
      <div className="absolute inset-0 [box-shadow:inset_0_0_140px_50px_rgba(0,0,0,0.55)]" />
    </div>
  );
}
