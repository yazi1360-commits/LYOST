export type Tournament = {
  id: string
  slug: string
  title: string
  game: "fortnite" | "valorant"
  date: string
  entry: string
  prize: string
}

export const tournaments: Tournament[] = [
  {
    id: "1",
    slug: "fn-rookie-1",
    title: "Cup Fortnite Rookie #1",
    game: "fortnite",
    date: "Samedi - 20:00",
    entry: "Gratuit",
    prize: "À venir",
  },
  {
    id: "2",
    slug: "fn-pro-1",
    title: "Cup Fortnite Pro #1",
    game: "fortnite",
    date: "Dimanche - 18:00",
    entry: "5€",
    prize: "200€",
  },
  {
    id: "3",
    slug: "valo-open-1",
    title: "Cup Valorant Open #1",
    game: "valorant",
    date: "Dimanche - 19:00",
    entry: "Gratuit",
    prize: "À venir",
  },
  {
    id: "4",
    slug: "valo-pro-1",
    title: "Cup Valorant Pro #1",
    game: "valorant",
    date: "Samedi - 21:00",
    entry: "10€",
    prize: "500€",
  },
]
