import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/[0.03] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 border border-gaming-primary/30 rounded flex items-center justify-center">
                <span className="text-sm font-bold text-gaming-primary">P</span>
              </div>
              <span className="text-base font-bold tracking-tight text-foreground/90">Purwa Digital</span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed">
              Platform top-up game tercepat dan terpercaya di Indonesia. Layanan otomatis 24 jam untuk pengalaman gaming terbaik.
            </p>
          </div>

          <div>
            <h4 className="text-foreground/80 text-sm font-bold mb-6">Navigasi</h4>
            <ul className="space-y-3 text-foreground/50 text-sm">
              <li><Link href="/" className="hover:text-foreground transition-colors">Beranda</Link></li>
              <li><Link href="/akun-game" className="hover:text-foreground transition-colors">Akun Game</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Layanan</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">Tentang Kami</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/80 text-sm font-bold mb-6">Produk</h4>
            <ul className="space-y-3 text-foreground/50 text-sm">
              <li><Link href="/games/mobile-legends" className="hover:text-foreground transition-colors">Mobile Legends</Link></li>
              <li><Link href="/games/free-fire" className="hover:text-foreground transition-colors">Free Fire</Link></li>
              <li><Link href="/games/pubg-mobile" className="hover:text-foreground transition-colors">PUBG Mobile</Link></li>
              <li><Link href="/games/valorant" className="hover:text-foreground transition-colors">Valorant</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground/80 text-sm font-bold mb-6">Kontak</h4>
            <p className="text-foreground/50 text-sm mb-4 leading-relaxed">
              Ada kendala? Hubungi tim kami melalui WhatsApp setiap hari.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-foreground/5 flex items-center justify-center rounded-lg hover:border-gaming-primary/50 transition-all">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-4 h-4 text-foreground/40" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.249-4.148l.33.196c1.551.921 3.35 1.488 5.232 1.489 5.626 0 10.203-4.579 10.205-10.206.002-5.626-4.579-10.204-10.205-10.204-5.627 0-10.205 4.579-10.205 10.206 0 2.016.593 3.987 1.713 5.7l.214.327-1.11 4.052 4.14-.108zm10.741-7.054c-.13-.217-.481-.347-.999-.607s-3.056-1.507-3.53-1.68c-.474-.173-.82-.26-.1.173.346.433.13.737.52.26.866.13.259.26.41.389.217s.217.39.217.65c0 .26-.13.52-.259.78-.13.26-.52.65-.909.996-.433.39-1.212 1.04-2.424 1.514-.13.043-.26.087-.389.13l1.817.65c.346.129 1.558.823 1.947 1.3.389.477.562.909.562 1.34s-.173 1.472-.26 1.775c-.087.303-.52 1.3-.996 1.3-.476 0-2.337-.866-2.554-1.04-.216-.173-.52-.39-1.3-.866-2.078-1.256-3.419-3.245-3.506-3.376-.086-.13-.736-.952-.736-1.817 0-.866.434-1.212.65-1.472.216-.26.476-.346.606-.346h.433c.13 0 .303.043.477.433l.909 2.164c.043.13.086.26.086.39 0 .13-.043.26-.13.39-.433.65-.65.866-.866 1.082-.217.217-.433.433-.217.78s.866 1.515 2.1 2.6c1.04.909 1.905 1.169 2.164 1.255.259.087.433.043.563-.13.13-.173.563-.65.736-.866.173-.217.346-.173.563-.086.216.086 1.385.65 1.644.78.259.13.433.217.477.303s.043.477-.087.909c-.13.433-.65 1.04-.909 1.255-.259.216-.65.433-2.12.433a8.96 8.96 0 01-5.108-2.12c-2.12-1.818-4.111-4.24-4.111-6.75 0-1.516.52-2.598 1.04-3.116s1.039-.65 1.3-.65h.346c.173 0 .346.043.52.433l1.171 2.813c.086.216.13.433.043.606-.087.173-.217.346-.433.563-.173.173-.346.39-.563.606s-.476.477-.216.909c.26.433.866 1.385 1.775 2.25 1.34 1.255 2.424 1.601 2.857 1.775s.909.087 1.212-.217c.303-.303.909-1.04 1.169-1.385s.52-.303.78-.217c.26.087 1.645.78 1.991 1.04.346.26.563.39.65.52.086.13.086.39-.044.606z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-foreground/[0.02] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/20 text-[10px]">
            © 2026 Purwa Digital. Independent platform for gamers.
          </p>
        </div>
      </div>
    </footer>

  );
}
