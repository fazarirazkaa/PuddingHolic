'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { googleFormUrl, heroImages, menus, testimonials } from './data';

export default function Home() {
  // Logic State 1: Hero Automatic Slideshow
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [heroFade, setHeroFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroFade(false); // Mulai animasi fade-out
      setTimeout(() => {
        setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setHeroFade(true); // Nyalakan animasi fade-in setelah ganti gambar
      }, 700); // Sinkron dengan durasi transition-opacity 700ms
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Logic State 2: Flavor Image Showcase Selector menggunakan Object Key-Value Map
  const [selectedVariants, setSelectedVariants] = useState({});

  const changeFlavorImage = (menuIndex, imgName) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [menuIndex]: imgName,
    }));
  };

  return (
    <div className="bg-slate-50 text-slate-800 antialiased selection:bg-sky-200 min-h-screen">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo-puddingholic.png" 
                alt="Logo PuddingHolic" 
                width={40} 
                height={40} 
                className="h-10 w-auto object-contain"
                priority
              />
              <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                PuddingHolic
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
              <a href="#hero" className="hover:text-sky-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-sky-500 transition-colors">Tentang Kami</a>
              <a href="#menu" className="hover:text-sky-500 transition-colors">Varian Menu</a>
              <a href="#testimonials" className="hover:text-sky-500 transition-colors">Testimoni</a>
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full shadow-md shadow-sky-200 transition-all transform hover:-translate-y-0.5"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white pt-10 pb-20 lg:pt-20 lg:pb-32">
        <div className="absolute top-10 left-5 text-6xl opacity-20 pointer-events-none select-none">☁️</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-20 pointer-events-none select-none">☁️</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-sky-200/60 text-sky-800">
                ✨ Premium Homemade Pudding
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Sensasi Kelembutan <br />
                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Setingkat Awan</span>
              </h1>
              <p className="text-lg font-medium text-sky-600 italic">
                &quot;Lembut di Mulut, Nyaman di Perut&quot;
              </p>
              <p className="text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Nikmati kelezatan pudding premium dari PuddingHolic yang diolah dengan penuh kasih sayang. Tekstur yang super lembut berpadu seimbang dengan manis yang pas, siap memanjakan harimu!
              </p>
              <div className="pt-4">
                <a href="#menu" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-sky-200 transition-all transform hover:-translate-y-1">
                  Lihat Menu & Pesan Sekarang
                </a>
              </div>
            </div>
            
            <div className="flex justify-center relative">
              <div className="absolute inset-0 bg-sky-300 rounded-full filter blur-3xl opacity-30 w-72 h-72 m-auto"></div>
              <div className="relative h-[400px] w-full max-w-md flex items-center justify-center">
                <Image 
                  src={heroImages[currentHeroIndex]} 
                  alt="PuddingHolic Showcase" 
                  width={400}
                  height={400}
                  className={`h-full w-auto object-contain drop-shadow-2xl transition-opacity duration-700 ${heroFade ? 'opacity-100' : 'opacity-0'}`}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Kenapa Harus PuddingHolic?</h2>
            <div className="h-1 w-20 bg-sky-400 mx-auto rounded-full"></div>
            <p className="text-slate-600">Kami percaya bahwa makanan manis haruslah membawa kebahagiag serta kenyamanan bagi tubuh.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 transition-all text-center space-y-4">
              <div className="text-3xl">🥛</div>
              <h3 className="font-bold text-lg text-slate-900">Bahan Premium</h3>
              <p className="text-sm text-slate-600">Menggunakan susu pilihan berkualitas tinggi dan ekstrak rasa alami terbaik.</p>
            </div>
            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 transition-all text-center space-y-4">
              <div className="text-3xl">🌱</div>
              <h3 className="font-bold text-lg text-slate-900">Tanpa Pengawet</h3>
              <p className="text-sm text-slate-600">Dibuat fresh berdasarkan pesanan secara higienis, sepenuhnya aman dikonsumsi segala kalangan.</p>
            </div>
            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 transition-all text-center space-y-4">
              <div className="text-3xl">☁️</div>
              <h3 className="font-bold text-lg text-slate-900">Tekstur Super Lembut</h3>
              <p className="text-sm text-slate-600">Formulasi khusus menghasilkan kelembutan tiada tara layaknya menyantap awan.</p>
            </div>
            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 transition-all text-center space-y-4">
              <div className="text-3xl">✨</div>
              <h3 className="font-bold text-lg text-slate-900">Inovasi Chia Seed</h3>
              <p className="text-sm text-slate-600">Inovasi sehat khusus varian Pudot yang kaya serat tinggi untuk kebaikan pencernaan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Menu Varian Pudding</h2>
            <div className="h-1 w-20 bg-sky-400 mx-auto rounded-full"></div>
            <p className="text-slate-600">Klik pilihan varian rasa di bawah kartu untuk melihat langsung foto produknya!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {menus.map((menu, menuIndex) => {
              // Jika state rasa belum di-klik, otomatis tampilkan varian indeks pertama (0)
              const currentImageName = selectedVariants[menuIndex] || menu.variants[0].img;
              
              return (
                <div key={menuIndex} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                  <div>
                    <div className="relative overflow-hidden h-72 bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-4">
                      <Image 
                        src={`/images/${currentImageName}`} 
                        alt={menu.name} 
                        width={250}
                        height={250}
                        className="h-full w-auto object-contain transition-all duration-300 transform hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">
                        {menu.price}
                      </span>
                      <span className="absolute top-4 left-4 bg-sky-500 text-white font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">
                        {menu.tag}
                      </span>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900">{menu.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{menu.description}</p>
                      
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                          Pilih Varian Rasa (Klik untuk lihat foto):
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {menu.variants.map((variant, variantIndex) => {
                            // Cek keaktifan tombol berdasarkan nama file gambar yang sedang aktif
                            const isActive = currentImageName === variant.img;
                            
                            return (
                              <button 
                                key={variantIndex}
                                type="button"
                                onClick={() => changeFlavorImage(menuIndex, variant.img)}
                                className={`text-xs px-3 py-2 rounded-xl font-medium border transition-all ${
                                  isActive 
                                    ? 'bg-sky-500 text-white border-sky-500 shadow-sm' 
                                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-sky-50'
                                }`}
                              >
                                {variant.flavor}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-sky-500 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors shadow-md">
                      <span>Pesan Via Google Form</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-slate-500 mb-3">Tunggu apalagi? Ayo pesan sekarang!</p>
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-sky-100 transition-transform transform hover:-translate-y-0.5">
              <span>Isi Form Pemesanan</span>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONI SECTION */}
      <section id="testimonials" className="py-20 bg-sky-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Review Para Jiggly Friends</h2>
            <div className="h-1 w-20 bg-sky-400 mx-auto rounded-full"></div>
            <p className="text-slate-600">Cerita jujur dari mereka yang telah merasakan kelembutan pudding kami.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm flex flex-col justify-between space-y-6">
                <p className="text-slate-600 italic text-sm leading-relaxed">
                  &quot;{testi.comment}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold text-sky-600 text-sm">
                    {testi.name.substring(0, 1)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{testi.name}</h4>
                    <span className="text-xs text-slate-400">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Image 
                  src="/images/logo-puddingholic.png" 
                  alt="Logo Footer" 
                  width={32} 
                  height={32} 
                  className="h-8 w-auto object-contain brightness-110"
                />
                <span className="font-bold text-lg tracking-wide">PuddingHolic</span>
              </div>
              <p className="text-sm leading-relaxed">
                Menghadirkan kudapan dessert pudding kekinian berkualitas premium. Super lembut dan ramah pencernaan.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Kontak Resmi</h4>
              <p className="text-sm">📍 Bandung, Jawa Barat, Indonesia</p>
              <p className="text-sm flex items-center gap-1.5">
                <span>📞</span> Telepon/WA: <a href="https://wa.me/6281324439541" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">+62 813-2443-9541</a>
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Media Sosial Kami</h4>
              <div className="flex flex-col gap-2.5 text-sm">
                <a href="https://www.instagram.com/puddingholic.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-400 transition-colors w-fit">
                  <span>📸</span> Instagram (@puddingholic.id)
                </a>
                <a href="https://wa.me/6281324439541" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-400 transition-colors w-fit">
                  <span>💬</span> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} PuddingHolic. All rights reserved. Made with ☁️ comfort.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}