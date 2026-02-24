"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// ThreeScene dynamic import removed to use static image for better aesthetics

const bestSellers = [
  { id: "1", name: "Dimsum Goreng Original", price: 18000, image: "/images/oridimsum.jpg", isBestSeller: true, description: "Dimsum ayam premium dengan balutan kulit crispy keemasan." },
  { id: "2", name: "Dimsum Goreng Keju Lumer", price: 20000, image: "/images/keju.jpg", isBestSeller: true, description: "Dimsum goreng dengan isian keju meleleh yang creamy." },
  { id: "5", name: "Dimsum Mozzarella", price: 20000, image: "/images/mozza.jpg", isBestSeller: true, description: "Dimsum isi mozzarella yang stretch saat digigit." },
  { id: "12", name: "Japanese Cake Roll", price: 20000, image: "/images/cakeroll.jpg", isBestSeller: true, description: "Cake lembut dengan tekstur fluffy dan isian krim manis yang ringan." },
  { id: "14", name: "Pudding Caramel", price: 20000, image: "/images/caramel.jpg", isBestSeller: true, description: "Pudding lembut dengan lapisan saus karamel manis legit yang lumer di mulut." },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                Premium Dimsum in Kediri
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight mb-8">
                Nikmati Kelezatan <span className="text-primary italic">Dimsum</span> Modern Terbaik.
              </h1>
              <p className="text-lg text-dark/70 mb-10 max-w-lg leading-relaxed">
                Dibuat dengan bahan premium pilihan dan resep rahasia yang menghadirkan rasa otentik dengan sentuhan modern. Rasakan lumeran kejunya!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
                  >
                    Lihat Menu <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border-2 border-primary/20 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors flex items-center justify-center cursor-pointer"
                >
                  Pesan via WhatsApp
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[400px] md:h-[550px]"
            >
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/10">
                <Image
                  src="/images/mozza.jpg"
                  alt="Premium Mozzarella Dimsum"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-4 bg-white p-4 rounded-2xl shadow-2xl border border-primary/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle2 className="text-dark" size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm">100% Halal</p>
                  <p className="text-xs text-dark/50">Bahan Premium</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Brand Story Preview */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl p-2 rotate-3">
                <Image
                  src="/images/sampul.png"
                  alt="Cerita GoldenCrumbs"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary rounded-3xl -z-10 rotate-12 opacity-20" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Cerita di Balik <span className="text-secondary">GoldenCrumbs</span>
              </h2>
              <div className="text-lg text-dark/70 mb-8 leading-relaxed space-y-4">
                <p>
                  Berawal dari kecintaan pada cita rasa dimsum yang autentik, kedai ini lahir dengan satu tujuan sederhana: menghadirkan dimsum premium dan dessert berkualitas dalam satu tempat yang nyaman dan modern. Dari dapur kecil dengan eksperimen rasa, hingga berkembang menjadi kedai dengan konsep yang lebih matang, setiap langkah kami dipenuhi dedikasi untuk menjaga kualitas dan konsistensi.
                </p>
                <p>
                  Kami percaya bahwa makanan bukan hanya tentang rasa, tetapi juga tentang pengalaman. Karena itu, setiap dimsum dan dessert diracik dari bahan pilihan, disajikan fresh, dan dikemas dengan sentuhan premium.
                </p>
                <p>
                  Perjalanan ini masih panjang, dan kami akan terus berinovasi untuk menghadirkan rasa terbaik di setiap momen Anda.
                </p>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Menggunakan Daging Ayam Segar Pilihan",
                  "Tanpa Pengawet & MSG Berlebihan",
                  "Topping Keju Lumer yang Melimpah",
                  "Resep Autentik yang Terus Berinovasi"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-dark/80">
                    <CheckCircle2 className="text-primary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary/20 pb-1 hover:gap-4 transition-all">
                Pelajari Lebih Lanjut <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Menu Terlaris Kami</h2>
              <p className="text-dark/60 max-w-md">
                Savory dimsum and sweet delights, crafted for your perfect bite.
              </p>
            </div>
            <button className="bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-full font-bold transition-all">
              Semua Menu
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Cheese Melt Blast Section */}
      <section className="py-32 bg-dark text-neutral overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-extrabold mb-12">
            Savory & Sweet <span className="text-accent underline decoration-primary underline-offset-8">Perfection</span>
          </h2>
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            Nikmati perpaduan dimsum premium yang gurih dan dessert manis yang lembut dalam satu pengalaman rasa yang istimewa. Dibuat dari bahan pilihan dan disajikan fresh setiap hari untuk menghadirkan kualitas terbaik di setiap sajian.
          </p>
          <div className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral/10 group">
            <Image
              src="/images/sampul2.png"
              alt="Cheese Melt Blast"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 p-32 bg-accent/10 rounded-full blur-[120px] -z-0" />
      </section>

      {/* Testimonial Section Preview placeholder */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-16">Apa Kata Mereka?</h2>
          <div className="bg-neutral p-12 rounded-[3rem] border border-primary/10">
            <p className="text-2xl font-serif italic text-dark/80 mb-8 max-w-3xl mx-auto">
              "Sekali coba langsung suka. Rasa, kualitas, dan penyajiannya semuanya terasa premium."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20" />
              <div className="text-left">
                <p className="font-bold">Helda Rizky Ramadhani</p>
                <p className="text-sm text-dark/50 italic">Food Blogger Kediri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
