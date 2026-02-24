"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Apakah GoldenCrumbs halal?",
        answer: "Ya, 100% halal. Kami sangat menjaga kualitas bahan baku kami. Seluruh bahan daging dan bumbu yang kami gunakan telah bersertifikat halal."
    },
    {
        question: "Bagaimana cara melakukan pemesanan online?",
        answer: "Anda dapat memesan melalui WhatsApp kami yang tersedia di halaman Contact atau klik tombol 'Pesan Sekarang' di Navbar. Selain itu, kami juga tersedia di platform ojek online."
    },
    {
        question: "Berapa lama daya tahan dimsum jika disimpan?",
        answer: "Dalam keadaan beku (frozen) di dalam freezer, dimsum kami dapat bertahan hingga 1 bulan. Jika di dalam chiller, tahan 2-3 hari. Kami menyarankan untuk segera mengonsumsinya setelah dikukus untuk rasa terbaik."
    },
    {
        question: "Apakah ada minimal pembelian?",
        answer: "Untuk makan di tempat (dine-in) tidak ada minimal pembelian. Untuk layanan pesan antar (delivery), minimal pembelian adalah 3 porsi atau sesuai jarak pengiriman."
    },
    {
        question: "Menerima pesanan untuk acara besar atau catering?",
        answer: "Tentu saja! Kami sering melayani pesanan untuk acara pernikahan, ulang tahun, dan gathering kantor. Silakan hubungi admin kami minimal H-3 untuk pemesanan dalam jumlah besar."
    },
    {
        question: "Di mana lokasi kedai GoldenCrumbs?",
        answer: "Kedai pusat kami berlokasi di Jalan Panglima Sudirman Kelurahan Ringin Anom Kota Kediri. Lokasi kami sangat strategis dan mudah ditemukan di <a href='https://www.google.com/maps/search/Jalan+Panglima+Sudirman+Kelurahan+Ringin+Anom+Kota+Kediri' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline font-bold'>Google Maps</a> dengan kata kunci 'GoldenCrumbs'."
    }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className={`border-b border-primary/10 mb-4 rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-xl shadow-primary/5" : "bg-transparent"}`}>
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
            >
                <span className={`text-lg md:text-xl font-bold ${isOpen ? "text-primary" : "text-dark"}`}>{question}</span>
                <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-primary text-white rotate-180" : "bg-primary/5 text-primary"}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-6 md:p-8 pt-0 text-dark/60 leading-relaxed text-lg italic">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 bg-primary/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary"
                    >
                        <HelpCircle size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Pertanyaan <span className="text-primary italic">SeringDiajukan</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-dark/60 max-w-2xl mx-auto"
                    >
                        Temukan jawaban untuk segala keraguan Anda tentang produk dan layanan kami.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-dark rounded-[3rem] text-center text-neutral relative overflow-hidden">
                        <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Masih Ada Pertanyaan Lain?</h3>
                        <p className="text-neutral/70 mb-10 max-w-xl mx-auto relative z-10">
                            Tim kami selalu siap membantu Anda dengan informasi yang lebih mendetail melalui layanan pelanggan kami.
                        </p>
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-2xl relative z-10 hover:scale-105 transition-transform">
                            Hubungi WhatsApp Kami
                        </button>
                        <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-[100px] -z-0" />
                        <div className="absolute bottom-0 left-0 p-32 bg-accent/5 rounded-full blur-[100px] -z-0" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
