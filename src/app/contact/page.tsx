export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground/95">Hubungi <span className="text-foreground/40 italic font-light">Kami</span></h1>
              <p className="text-foreground/50 text-base md:text-lg mb-12 leading-relaxed">
                Punya pertanyaan atau kendala? Hubungi tim kami. Kami siap membantu Anda setiap hari.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6">
                   <div className="w-10 h-10 rounded-lg border border-foreground/10 flex items-center justify-center shrink-0 text-foreground/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground/80 text-sm mb-1">Email</h4>
                     <p className="text-foreground/50 text-sm">support@purwadigital.com</p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-10 h-10 rounded-lg border border-foreground/10 flex items-center justify-center shrink-0 text-foreground/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground/80 text-sm mb-1">WhatsApp</h4>
                     <p className="text-foreground/50 text-sm">+62 812 3456 7890</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl border border-foreground/[0.03] bg-foreground/[0.01]">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider ml-1">Nama</label>
                  <input 
                    type="text" 
                    className="w-full bg-foreground/[0.02] border border-foreground/[0.05] rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-gaming-primary/40 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-foreground/[0.02] border border-foreground/[0.05] rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-gaming-primary/40 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider ml-1">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-foreground/[0.02] border border-foreground/[0.05] rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-gaming-primary/40 transition-colors"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-foreground text-background font-bold rounded-xl transition-all hover:opacity-90"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
