import GameCard from "@/components/GameCard";

const games = [
  {
    title: "Mobile Legends",
    developer: "Moonton",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    slug: "mobile-legends"
  },
  {
    title: "Free Fire",
    developer: "Garena",
    image: "https://images.unsplash.com/photo-1580234797302-39d4eebeccdd?q=80&w=2070&auto=format&fit=crop",
    slug: "free-fire"
  },
  {
    title: "PUBG Mobile",
    developer: "Tencent Games",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop",
    slug: "pubg-mobile"
  },
  {
    title: "Valorant",
    developer: "Riot Games",
    image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=2066&auto=format&fit=crop",
    slug: "valorant"
  },
  {
    title: "Genshin Impact",
    developer: "HoYoverse",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    slug: "genshin-impact"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground/95">Semua Layanan</h1>
          <p className="text-foreground/50 text-sm">Pilih game favorit Anda untuk memulai top-up.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {games.map((game) => (
            <GameCard key={game.slug} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
}
