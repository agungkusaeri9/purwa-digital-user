"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GameCard from "@/components/GameCard";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "Berapa lama proses top-up?", 
      a: "Proses top-up kami adalah otomatis. Biasanya item akan masuk ke akun Anda dalam hitungan 1-5 menit setelah pembayaran terverifikasi." 
    },
    { 
      q: "Apa saja metode pembayaran yang tersedia?", 
      a: "Kami mendukung berbagai metode pembayaran populer seperti E-Wallet (DANA, OVO, GoPay), QRIS, Transfer Bank (BCA, Mandiri), dan Virtual Account." 
    },
    { 
      q: "Apakah transaksi di sini aman?", 
      a: "Tentu saja. Purwa Digital menggunakan sistem keamanan terenkripsi dan terhubung langsung dengan provider game resmi untuk menjamin keamanan akun Anda." 
    },
    { 
      q: "Bagaimana jika Diamond tidak masuk?", 
      a: "Jika dalam 30 menit Diamonds belum masuk, silakan hubungi Customer Service kami melalui WhatsApp dengan melampirkan bukti transaksi." 
    }
  ];

  return (
    <section className="py-24 bg-foreground/[0.01]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground/95 leading-tight">
              Pertanyaan yang <br/><span className="text-foreground/40 italic font-light">Sering Diajukan</span>
            </h2>
            <p className="text-foreground/50 text-lg">Punya kendala? Cek daftar FAQ kami atau langsung hubungi tim support kami.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-foreground/[0.05] rounded-2xl overflow-hidden bg-background">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group"
                >
                  <span className={`font-bold transition-colors ${openIndex === i ? "text-gaming-primary" : "text-foreground/60"}`}>
                    {faq.q}
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-gaming-primary" : "text-foreground/20"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="px-8 pb-8 text-sm text-foreground/50 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const popularGames = [
  {
    title: "Mobile Legends",
    developer: "Moonton",
    slug: "mobile-legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Free Fire",
    developer: "Garena",
    slug: "free-fire",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "PUBG Mobile",
    developer: "Level Infinite",
    slug: "pubg-mobile",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop",
  },
  {
    title: "Genshin Impact",
    developer: "HoYoverse",
    slug: "genshin-impact",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gaming-primary/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-gaming-accent/10 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/[0.05] bg-foreground/[0.02] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gaming-primary" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">Terpercaya & Tercepat</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground/95 leading-[1.1]">
              Topup Game Favoritmu <br />
              <span className="text-foreground/40 italic font-light">Tanpa Ribet.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-foreground/50 text-base md:text-lg mb-10 leading-relaxed">
              Nikmati layanan top-up otomatis 24 jam dengan harga terbaik dan beragam pilihan metode pembayaran aman.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#popular"
                className="px-8 py-3.5 bg-foreground text-background rounded-xl font-bold transition-all hover:opacity-90 shadow-lg shadow-gaming-primary/10 dark:shadow-none"
              >
                Pilih Game
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 border border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/20 rounded-lg font-bold transition-all"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section id="popular" className="py-24 border-y border-foreground/[0.02] bg-foreground/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground/95">Game Terpopuler</h2>
              <p className="text-foreground/50 text-sm">Pilih game favoritmu dan top-up sekarang juga.</p>
            </div>
            <Link href="/services" className="text-sm font-bold text-gaming-primary hover:opacity-80 transition-all flex items-center gap-2">
              Lihat Semua Layanan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {popularGames.map((game) => (
              <GameCard key={game.slug} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background dark:bg-foreground/[0.02] dark:text-foreground dark:border dark:border-foreground/[0.05] p-10 md:p-16">
             <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-gaming-primary blur-[120px]" />
             </div>
             
             <div className="relative z-10 max-w-xl">
               <span className="inline-block px-3 py-1 rounded-full bg-background/10 dark:bg-foreground/[0.05] text-[10px] font-bold tracking-widest uppercase mb-6 text-background/60 dark:text-foreground/40 border border-background/5 dark:border-foreground/10">Promo Minggu Ini</span>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Dapatkan Cashback Hingga 20% <br/><span className="text-gaming-primary/80">Khusus Mobile Legends!</span></h2>
               <p className="text-background/40 dark:text-foreground/50 text-base md:text-lg mb-10 leading-relaxed">Gunakan kode promo <span className="text-background dark:text-foreground font-bold px-2 py-1 bg-background/10 dark:bg-foreground/10 rounded">PURWASULTAN</span> untuk setiap transaksi minimal Rp 100.000.</p>
               <Link href="/games/mobile-legends" className="inline-flex items-center gap-3 px-8 py-4 bg-background dark:bg-foreground text-foreground dark:text-background font-bold rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-black/20">
                 Topup Sekarang
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Visual How It Works */}
      <section className="py-24 bg-foreground/[0.01]">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground/95">Proses Cepat & Mudah</h2>
              <p className="text-foreground/50">Hanya butuh 3 langkah sederhana untuk mendapatkan item game favoritmu.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-foreground/[0.03] -translate-y-12 -z-10" />
              
              {[
                { step: "01", title: "Pilih Game", desc: "Cari dan pilih game yang ingin Anda top-up dari katalog kami." },
                { step: "02", title: "Isi Data", desc: "Masukkan User ID Anda dan pilih nominal yang diinginkan." },
                { step: "03", title: "Bayar & Selesai", desc: "Pilih metode pembayaran dan item akan terkirim otomatis." }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-20 h-20 rounded-[2rem] bg-background border border-foreground/[0.05] flex items-center justify-center mx-auto mb-8 transition-all group-hover:border-gaming-primary group-hover:shadow-xl group-hover:shadow-gaming-primary/5 relative">
                    <span className="text-xl font-bold text-foreground/80 group-hover:text-gaming-primary">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground/90 mb-3">{item.title}</h4>
                  <p className="text-sm text-foreground/40 leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground/95">Apa Kata Gamers?</h2>
            <p className="text-foreground/50">Ribuan transaksi berhasil diproses setiap harinya.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Andi Wijaya", role: "Mobile Legends Player", text: "Prosesnya super cepat, gak sampe 1 menit Diamond udah masuk ke akun. Trusted banget!" },
              { name: "Siska Putri", role: "Free Fire Enthusiast", text: "Harganya paling bersaing dibanding web sebelah. CS-nya juga fast response pas aku tanya-tanya." },
              { name: "Budi Santoso", role: "Valorant Radiant", text: "Tampilan webnya cakep, bersih, dan gampang banget dipake. Recomended buat top up rutin." }
            ].map((t, i) => (
              <div key={i} className="p-10 rounded-3xl border border-foreground/[0.03] bg-foreground/[0.01] hover:bg-background hover:shadow-xl transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400">★</span>)}
                </div>
                <p className="text-foreground/60 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gaming-primary/10 flex items-center justify-center font-bold text-gaming-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground/80 text-sm">{t.name}</h5>
                    <p className="text-[10px] text-foreground/30 uppercase font-bold tracking-tight">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Accounts */}
      <section className="py-24 border-t border-foreground/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground/95">Akun Game Sultan</h2>
              <p className="text-foreground/50 text-sm">Cari akun impianmu di marketplace kami.</p>
            </div>
            <Link href="/akun-game" className="text-sm font-bold text-gaming-primary hover:opacity-80 transition-all flex items-center gap-2">
              Lihat Semua Akun
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "ml-001", title: "Akun Sultan MLBB", game: "Mobile Legends", price: "Rp 1.500.000", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
              { id: "ff-001", title: "Akun FF Full Old", game: "Free Fire", price: "Rp 3.200.000", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" },
              { id: "ml-002", title: "Mythic Glory Account", game: "Mobile Legends", price: "Rp 450.000", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop" },
              { id: "ff-002", title: "Akun FF Level 60", game: "Free Fire", price: "Rp 250.000", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop" }
            ].map((acc, idx) => (
              <Link key={idx} href={`/akun-game/${acc.id}`} className="group p-4 rounded-2xl border border-foreground/[0.05] bg-foreground/[0.01] hover:bg-background hover:shadow-xl transition-all">
                <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                  <Image src={acc.image} alt={acc.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-sm text-foreground/80 mb-1">{acc.title}</h4>
                <p className="text-[10px] text-gaming-primary font-bold uppercase mb-3">{acc.game}</p>
                <p className="font-bold text-foreground">{acc.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Payment Partners */}
      <section className="py-24 border-t border-foreground/[0.02]">
        <div className="container mx-auto px-6">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {["DANA", "OVO", "GoPay", "ShopeePay", "LinkAja", "QRIS", "BCA", "Mandiri"].map(p => (
               <div key={p} className="text-xl md:text-2xl font-black text-foreground/50 tracking-tighter">{p}</div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
