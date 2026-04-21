"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-foreground/[0.05] shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 border border-foreground/10 rounded-lg flex items-center justify-center transition-all group-hover:border-gaming-primary/50">
            <span className="text-xl font-bold text-gaming-primary">P</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
            Purwa<span className="text-gaming-primary font-medium ml-0.5">Digital</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Akun Game", href: "/akun-game" },
            { name: "Layanan", href: "/services" },
            { name: "Tentang", href: "/about" },
            { name: "Kontak", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <ThemeToggle />
            <Link
              href="/#popular"
              className="px-6 py-2 border border-gaming-primary/40 text-gaming-primary hover:bg-gaming-primary/5 hover:border-gaming-primary rounded-lg text-sm font-medium transition-all"
            >
              Mulai Topup
            </Link>
          </div>
        </div>

        {/* Mobile menu button would go here */}
      </div>
    </nav>
  );
}
