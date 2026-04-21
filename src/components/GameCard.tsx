import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
  title: string;
  image: string;
  slug: string;
  developer: string;
}

export default function GameCard({ title, image, slug, developer }: GameCardProps) {
  return (
    <Link href={`/games/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border border-foreground/[0.05] transition-all duration-300 group-hover:border-gaming-primary/30 group-hover:bg-background group-hover:shadow-xl group-hover:shadow-gaming-primary/5 dark:group-hover:shadow-none dark:group-hover:bg-foreground/[0.02]">
        <div className="aspect-[3/4] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="p-4 relative">
          <p className="text-[10px] text-gaming-primary/80 font-bold tracking-[0.2em] uppercase mb-1">{developer}</p>
          <h3 className="text-lg font-bold text-foreground/90 group-hover:text-foreground transition-colors">{title}</h3>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] text-foreground/40 font-medium">Proses Instan</span>
            <div className="w-6 h-6 rounded-md border border-foreground/10 flex items-center justify-center group-hover:border-gaming-primary/50 transition-colors">
              <svg className="w-3 h-3 text-foreground/40 group-hover:text-gaming-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
