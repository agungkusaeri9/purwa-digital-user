"use client";

import Image from "next/image";
import Link from "next/link";

interface AccountListingProps {
  id: string;
  title: string;
  game: "Mobile Legends" | "Free Fire";
  price: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  seller: string;
}

export function AccountCard({ id, title, game, price, image, specs, seller }: AccountListingProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-foreground/[0.05] bg-foreground/[0.01] transition-all hover:border-gaming-primary/30 hover:shadow-xl hover:shadow-gaming-primary/5">
      <div className="aspect-video relative overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-md border border-foreground/5">
          <span className="text-[9px] font-bold tracking-wider uppercase text-gaming-primary">{game}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-foreground/90 mb-4 line-clamp-1 group-hover:text-gaming-primary transition-colors">{title}</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          {specs.slice(0, 4).map((spec, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[9px] text-foreground/30 uppercase font-bold tracking-tight">{spec.label}</span>
              <span className="text-xs text-foreground/60 font-medium truncate">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-foreground/[0.05] flex items-center justify-between">
          <div>
            <p className="text-[9px] text-foreground/30 uppercase font-bold">Harga</p>
            <p className="text-lg font-bold text-foreground">{price}</p>
          </div>
          <Link 
            href={`/akun-game/${id}`}
            className="px-4 py-2 bg-foreground text-background text-xs font-bold rounded-lg hover:opacity-90 transition-all shadow-sm"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
