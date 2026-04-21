"use client";

import { useState } from "react";
import { AccountCard } from "@/components/AccountCard";

const listings = [
  {
    id: "ml-001",
    title: "Akun Sultan MLBB - Hero 120 Skins 250+ (Collectors Inside)",
    game: "Mobile Legends" as const,
    price: "Rp 1.500.000",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    seller: "GamingMaster",
    specs: [
      { label: "Rank", value: "Mythic Glory" },
      { label: "Hero", value: "120" },
      { label: "Skin", value: "284" },
      { label: "Tier", value: "High End" }
    ]
  },
  {
    id: "ff-001",
    title: "Akun FF Full Old - Bundle Hip Hop & Sakura",
    game: "Free Fire" as const,
    price: "Rp 3.200.000",
    image: "https://images.unsplash.com/photo-1580234797302-39d4eebeccdd?q=80&w=2070&auto=format&fit=crop",
    seller: "LegendSeller",
    specs: [
      { label: "Level", value: "75" },
      { label: "Bundle", value: "Rare Old" },
      { label: "Evo Gun", value: "6 Max" },
      { label: "Win Rate", value: "65%" }
    ]
  },
  {
    id: "ml-002",
    title: "Mythic Glory Account - Cheap & Clean",
    game: "Mobile Legends" as const,
    price: "Rp 450.000",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    seller: "FastTrade",
    specs: [
      { label: "Rank", value: "Mythic" },
      { label: "Hero", value: "85" },
      { label: "Skin", value: "45" },
      { label: "Win Rate", value: "58%" }
    ]
  },
  {
    id: "ff-002",
    title: "Akun FF Level 60 - Banyak Emote Menarik",
    game: "Free Fire" as const,
    price: "Rp 250.000",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop",
    seller: "ChillGamer",
    specs: [
      { label: "Level", value: "62" },
      { label: "Emote", value: "40+" },
      { label: "Rank", value: "Diamond" },
      { label: "Tier", value: "Mid" }
    ]
  }
];

export default function Marketplace() {
  const [filter, setFilter] = useState<string>("All");

  const filteredListings = filter === "All" 
    ? listings 
    : listings.filter(item => item.game === filter);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground/95">Akun Game</h1>
            <p className="text-foreground/50 text-base md:text-lg">Cari akun game sultan atau menengah dengan harga terbaik dan aman.</p>
          </div>

          <div className="flex p-1.5 bg-foreground/[0.03] border border-foreground/[0.05] rounded-xl self-start">
            {["All", "Mobile Legends", "Free Fire"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === category 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-foreground/40 hover:text-foreground"
                }`}
              >
                {category === "All" ? "Semua" : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredListings.map((item) => (
            <AccountCard key={item.id} {...item} />
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-foreground/30 font-medium italic">Tidak ada akun yang tersedia untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}
