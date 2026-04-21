export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-foreground/95">Tentang <span className="text-gaming-primary">Purwa Digital</span></h1>
          
          <div className="space-y-12 text-foreground/50 text-base md:text-lg leading-relaxed">
            <p>
              Purwa Digital adalah platform penyedia layanan top-up game online terkemuka di Indonesia. Kami berdedikasi untuk memberikan pengalaman top-up yang aman, cepat, dan transparan bagi para gamers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-foreground/[0.03] bg-foreground/[0.01] text-left">
                <h3 className="text-foreground/80 font-bold text-lg mb-3">Visi</h3>
                <p className="text-foreground/50 text-sm">Menjadi platform top-up game pilihan utama yang mengutamakan kecepatan dan kemudahan akses.</p>
              </div>
              <div className="p-8 rounded-2xl border border-foreground/[0.03] bg-foreground/[0.01] text-left">
                <h3 className="text-foreground/80 font-bold text-lg mb-3">Misi</h3>
                <p className="text-foreground/50 text-sm">Menghadirkan sistem otomatisasi handal dan layanan pelanggan yang responsif setiap saat.</p>
              </div>
            </div>

            <p>
              Dengan sistem yang terintegrasi penuh, Purwa Digital menjamin setiap transaksi diproses dalam hitungan detik. Kami terus berinovasi untuk menambah daftar game dan metode pembayaran guna memenuhi kebutuhan gaming Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
