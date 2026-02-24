"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, ShieldCheck, Heart, Users } from "lucide-react";

const values = [
    {
        icon: <Award className="text-primary" size={32} />,
        title: "Kualitas Premium",
        desc: "Kami hanya menggunakan bahan-bahan terbaik untuk memastikan setiap gigitan dimsum kami memberikan pengalaman rasa yang luar biasa."
    },
    {
        icon: <ShieldCheck className="text-primary" size={32} />,
        title: "Kebersihan Terjamin",
        desc: "Proses pembuatan kami mengikuti standar kebersihan yang ketat untuk menjamin keamanan dan kesegaran produk kami."
    },
    {
        icon: <Heart className="text-primary" size={32} />,
        title: "Resep Otentik",
        desc: "Resep kami adalah hasil inovasi bertahun-tahun yang menggabungkan tradisi dimsum dengan selera modern masyarakat Kediri."
    },
    {
        icon: <Users className="text-primary" size={32} />,
        title: "Produk Lokal",
        desc: "Bangga menjadi brand asli Kediri, kami berkomitmen untuk berkontribusi pada ekonomi lokal dan komunitas kami."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 bg-neutral/30">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Cerita <span className="text-primary">GoldenCrumbs</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-dark/60 max-w-2xl mx-auto"
                    >
                        Lebih dari sekadar dimsum, kami adalah dedikasi untuk rasa dan kualitas yang menyatukan orang-orang di Kediri.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">Awal Mula Perjalanan</h2>
                            <div className="text-lg text-dark/70 leading-relaxed space-y-4">
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
                        </div>
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border-2 border-primary/10">
                            <Image
                                src="/images/sampul.png"
                                alt="Perjalanan GoldenCrumbs"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-dark text-neutral">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-16 text-center text-accent">Nilai-Nilai Kami</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-neutral/5 p-8 rounded-3xl border border-neutral/10 hover:bg-neutral/10 transition-colors"
                            >
                                <div className="mb-6">{v.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                                <p className="text-neutral/60 text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Kualitas Bahan Adalah Kunci</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8">
                            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h4 className="font-bold text-xl mb-4">Ayam Fillet Segar</h4>
                            <p className="text-dark/60">Kami hanya menggunakan daging ayam fillet tanpa lemak yang diproses setiap hari.</p>
                        </div>
                        <div className="p-8">
                            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h4 className="font-bold text-xl mb-4">Keju Pilihan</h4>
                            <p className="text-dark/60">Keju mozzarella dan cheddar berkualitas tinggi untuk lumeran yang sempurna.</p>
                        </div>
                        <div className="p-8">
                            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h4 className="font-bold text-xl mb-4">Bumbu Rempah</h4>
                            <p className="text-dark/60">Racikan bumbu rempah alami tanpa tambahan kimia yang berbahaya.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
