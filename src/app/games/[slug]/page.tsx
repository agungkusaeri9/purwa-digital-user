"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const GAME_DATA: Record<string, any> = {
  "mobile-legends": {
    title: "Mobile Legends",
    developer: "Moonton",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    fields: [
      { label: "User ID", placeholder: "Masukkan User ID", name: "userId" },
      { label: "Zone ID", placeholder: "Masukkan Zone ID", name: "zoneId" },
    ],
    nominals: [
      { id: 1, label: "5 Diamonds", price: "Rp 1.500" },
      { id: 2, label: "12 Diamonds", price: "Rp 3.500" },
      { id: 3, label: "50 Diamonds", price: "Rp 14.500" },
      { id: 4, label: "184 Diamonds", price: "Rp 52.000" },
      { id: 5, label: "568 Diamonds", price: "Rp 155.000" },
      { id: 6, label: "1163 Diamonds", price: "Rp 310.000" },
    ]
  },
  "free-fire": {
    title: "Free Fire",
    developer: "Garena",
    banner: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    fields: [
      { label: "Player ID", placeholder: "Masukkan Player ID", name: "userId" },
    ],
    nominals: [
      { id: 1, label: "5 Diamonds", price: "Rp 1.000" },
      { id: 2, label: "50 Diamonds", price: "Rp 8.000" },
      { id: 3, label: "140 Diamonds", price: "Rp 20.000" },
      { id: 4, label: "355 Diamonds", price: "Rp 50.000" },
      { id: 5, label: "720 Diamonds", price: "Rp 100.000" },
      { id: 6, label: "1450 Diamonds", price: "Rp 200.000" },
    ]
  }
};

export default function GameTopUp() {
  const { slug } = useParams();
  const game = GAME_DATA[slug as string] || GAME_DATA["mobile-legends"];
  const [selectedNominal, setSelectedNominal] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const payments = [
    { id: "qris", name: "QRIS", icon: "📱", group: "E-Wallet" },
    { id: "dana", name: "DANA", icon: "💠", group: "E-Wallet" },
    { id: "ovo", name: "OVO", icon: "🟣", group: "E-Wallet" },
    { id: "gopay", name: "GoPay", icon: "🟢", group: "E-Wallet" },
    { id: "bca", name: "BCA Virtual Account", icon: "🏦", group: "Bank Transfer" },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
           <div className="w-20 h-20 relative rounded-2xl overflow-hidden border border-foreground/10 shrink-0">
             <Image src={game.banner} alt={game.title} fill className="object-cover" />
           </div>
           <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground/95">{game.title}</h1>
            <p className="text-sm text-foreground/40 font-medium tracking-widest uppercase mt-1">{game.developer}</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Step 1: Account Info */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gaming-primary/60">01</span>
                <h2 className="text-lg font-bold text-foreground/90">Informasi Akun</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.fields.map((field: any) => (
                  <div key={field.name} className="space-y-2">
                    <label className="text-xs font-bold text-foreground/40 ml-1">{field.label}</label>
                    <input 
                      type="text" 
                      placeholder={field.placeholder}
                      className="w-full bg-foreground/[0.02] border border-foreground/[0.05] rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-gaming-primary/40 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Step 2: Select Nominal */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gaming-primary/60">02</span>
                <h2 className="text-lg font-bold text-foreground/90">Pilih Nominal</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {game.nominals.map((item: any) => (
                  <button 
                    key={item.id}
                    onClick={() => setSelectedNominal(item.id)}
                    className={`p-5 rounded-xl border transition-all text-left ${
                      selectedNominal === item.id 
                      ? "bg-gaming-primary/5 border-gaming-primary/40" 
                      : "bg-foreground/[0.01] border-foreground/[0.03] hover:border-foreground/10"
                    }`}
                  >
                    <p className={`text-sm font-bold mb-1 ${selectedNominal === item.id ? "text-gaming-primary" : "text-foreground/80"}`}>{item.label}</p>
                    <p className="text-[10px] text-foreground/40">{item.price}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 3: Select Payment */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gaming-primary/60">03</span>
                <h2 className="text-lg font-bold text-foreground/90">Metode Pembayaran</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {payments.map((payment) => (
                  <button 
                    key={payment.id}
                    onClick={() => setSelectedPayment(payment.id)}
                    className={`p-5 rounded-xl border transition-all flex items-center justify-between ${
                      selectedPayment === payment.id 
                      ? "bg-foreground/[0.05] border-foreground/20" 
                      : "bg-foreground/[0.01] border-foreground/[0.03] hover:border-foreground/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl opacity-80">{payment.icon}</span>
                      <div className="text-left">
                        <p className={`text-sm font-bold ${selectedPayment === payment.id ? "text-foreground" : "text-foreground/70"}`}>{payment.name}</p>
                        <p className="text-[9px] text-foreground/40 uppercase tracking-widest">{payment.group}</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPayment === payment.id ? "border-gaming-primary bg-gaming-primary/20" : "border-foreground/10"}`}>
                      {selectedPayment === payment.id && <div className="w-1.5 h-1.5 rounded-full bg-gaming-primary" />}
                    </div>
                  </button>
                ))}
              </div>
            </section>

          </div>

          {/* Checkout Info */}
          <div className="space-y-8">
            <section className="p-8 border border-foreground/[0.03] bg-foreground/[0.01] rounded-2xl sticky top-24">
              <h2 className="text-lg font-bold mb-8">Checkout</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider ml-1">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="0812xxxx"
                    className="w-full bg-foreground/[0.02] border border-foreground/[0.05] rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-gaming-primary/40 transition-colors"
                  />
                  <p className="text-[9px] text-foreground/30 italic">Pesanan akan dikonfirmasi via WhatsApp.</p>
                </div>

                <div className="pt-6 border-t border-foreground/[0.03] space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-foreground/40">Total Pembayaran</span>
                    <span className="text-xl font-bold text-foreground">
                      {selectedNominal ? game.nominals.find((n: any) => n.id === selectedNominal)?.price : "-"}
                    </span>
                  </div>
                </div>

                <button 
                  disabled={!selectedNominal || !selectedPayment}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-3 ${
                    selectedNominal && selectedPayment 
                    ? "bg-foreground text-background hover:opacity-90" 
                    : "bg-foreground/[0.02] text-foreground/20 cursor-not-allowed border border-foreground/[0.05]"
                  }`}
                >
                  Bayar Sekarang
                </button>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
