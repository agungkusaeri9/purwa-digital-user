"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const listings = [
  {
    id: "ml-001",
    title: "Akun Sultan MLBB - Hero 120 Skins 250+ (Collectors Inside)",
    game: "Mobile Legends",
    price: "Rp 1.500.000",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    seller: "GamingMaster",
    description: "Akun koleksi pribadi, skin collector banyak, win rate mantap. Email aman, bisa ganti moonton.",
    specs: [
      { label: "Rank", value: "Mythic Glory" },
      { label: "Hero", value: "120" },
      { label: "Skin", value: "284" },
      { label: "Tier", value: "High End" },
      { label: "Emblem", value: "Max All" },
      { label: "Win Rate", value: "68%" }
    ]
  },
  {
    id: "ff-001",
    title: "Akun FF Full Old - Bundle Hip Hop & Sakura",
    game: "Free Fire",
    price: "Rp 3.200.000",
    image: "https://images.unsplash.com/photo-1580234797302-39d4eebeccdd?q=80&w=2070&auto=format&fit=crop",
    seller: "LegendSeller",
    description: "Akun super old, bundle incaran banyak orang. Senjata evo banyak yang max. Login FB, data lengkap sampai akar.",
    specs: [
      { label: "Level", value: "75" },
      { label: "Bundle", value: "Rare Old" },
      { label: "Evo Gun", value: "6 Max" },
      { label: "Win Rate", value: "65%" },
      { label: "Elite Pass", value: "Season 1-20" },
      { label: "Like", value: "15.000+" }
    ]
  }
];

export default function AccountDetail() {
  const { id } = useParams();
  const account = listings.find(item => item.id === id) || listings[0];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link href="/akun-game" className="inline-flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Daftar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image & Gallery */}
          <div className="space-y-6">
            <div className="aspect-video relative rounded-3xl overflow-hidden border border-foreground/[0.05] bg-foreground/[0.01]">
              <Image src={account.image} alt={account.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-foreground/5">
                <span className="text-xs font-bold tracking-wider uppercase text-gaming-primary">{account.game}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative rounded-xl overflow-hidden border border-foreground/[0.05] bg-foreground/[0.01] cursor-pointer hover:border-gaming-primary/50 transition-all opacity-50 hover:opacity-100">
                  <Image src={account.image} alt="Thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-[0.2em] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gaming-primary" />
                Akun Terverifikasi
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground/95 leading-tight mb-4">{account.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 p-1 pr-3 bg-foreground/[0.03] rounded-full border border-foreground/[0.05]">
                  <div className="w-6 h-6 rounded-full bg-gaming-primary/20 flex items-center justify-center text-[10px] font-bold text-gaming-primary">
                    {account.seller[0]}
                  </div>
                  <span className="text-xs font-bold text-foreground/60">{account.seller}</span>
                </div>
                <span className="text-xs text-foreground/30">• 2 Jam yang lalu</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-foreground/[0.03] bg-foreground/[0.01]">
              <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-wider mb-2">Harga Akun</p>
              <p className="text-3xl font-bold text-foreground mb-8">{account.price}</p>
              
              <button className="w-full py-4 bg-foreground text-background font-bold rounded-xl transition-all hover:opacity-90 shadow-lg shadow-foreground/5 mb-4">
                Beli Sekarang
              </button>
              <button className="w-full py-4 border border-foreground/10 text-foreground/60 font-bold rounded-xl transition-all hover:border-foreground/20 hover:text-foreground">
                Tanya Penjual via WhatsApp
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-foreground/80">Spesifikasi Akun</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {account.specs.map((spec, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-[10px] text-foreground/30 uppercase font-bold tracking-tight">{spec.label}</p>
                    <p className="text-sm text-foreground/80 font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-foreground/80">Deskripsi</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {account.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
