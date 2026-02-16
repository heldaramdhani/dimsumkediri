"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 bg-accent/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Hubungi <span className="text-primary italic">Kami</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-dark/60 max-w-2xl mx-auto"
                    >
                        Punya pertanyaan atau ingin memesan dalam jumlah besar? Kami siap melayani Anda.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-serif font-bold mb-8">Informasi Kontak</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <Phone className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold">Telepon / WA</p>
                                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-dark/60 text-sm hover:text-primary transition-colors">
                                                +62 812-3456-7890
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <Mail className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold">Email</p>
                                            <p className="text-dark/60 text-sm">goldencrums@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <Instagram className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold">Instagram</p>
                                            <p className="text-dark/60 text-sm">@goldencrums_official</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <Clock className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold">Jam Buka</p>
                                            <p className="text-dark/60 text-sm">Setiap Hari 10:00 - 21:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-6">Lokasi Kedai</h3>
                                <div className="p-8 bg-neutral rounded-[2rem] border border-primary/10 flex items-start gap-4">
                                    <MapPin className="text-primary mt-1 shrink-0" size={24} />
                                    <div>
                                        <p className="font-bold text-lg mb-2">Kedai dimsumkediri Pusat</p>
                                        <p className="text-dark/60 leading-relaxed mb-6">
                                            Jl. Mayor Bismo No. 12, Kelurahan Semampir, Kota Kediri, Jawa Timur 64121
                                        </p>
                                        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                                            Petunjuk Lokasi (Google Maps)
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-6">Pesan Cepat</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://wa.me/6283846783539"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 hover:scale-[1.02] transition-transform"
                                    >
                                        <MessageCircle size={24} />
                                        WhatsApp Admin 1
                                    </a>
                                    <a
                                        href="https://wa.me/6285941395232"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 hover:scale-[1.02] transition-transform"
                                    >
                                        <MessageCircle size={24} />
                                        WhatsApp Admin 2
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map Placeholder */}
                        <div className="h-full min-h-[500px] bg-white rounded-[3rem] shadow-2xl border border-primary/5 p-4 relative overflow-hidden">
                            <div className="w-full h-full bg-primary/5 rounded-[2.5rem] flex flex-col items-center justify-center text-primary/40 relative">
                                <MapPin size={64} className="mb-4 opacity-20" />
                                <p className="font-bold text-xl mb-2">Interactive Map Kediri</p>
                                <p className="text-sm">Klik untuk memuat Google Maps</p>

                                {/* Decorative map elements */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-primary/20 rotate-45" />
                                    <div className="absolute top-1/2 left-1/3 w-48 h-1 bg-primary/20 -rotate-12" />
                                    <div className="absolute bottom-1/4 right-1/4 w-40 h-1 bg-primary/20 30" />
                                </div>
                            </div>

                            {/* Quick Action Overlay */}
                            <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-primary/10">
                                <p className="font-bold text-dark mb-1">Cari Kami Lebih Mudah</p>
                                <p className="text-xs text-dark/60 mb-4">Berlokasi strategis di dekat pusat kota Kediri.</p>
                                <div className="flex gap-4 justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold">1.2km</div>
                                        <span className="text-xs font-medium">Dari Alun-alun</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold">500m</div>
                                        <span className="text-xs font-medium">Dari Stasiun</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
