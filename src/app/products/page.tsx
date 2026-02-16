"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const products = [
    { id: "1", name: "Dimsum Original", price: 15000, image: "/images/orisaus.jpg", isBestSeller: true, category: "Best Seller", tag: "Favorit" },
    { id: "2", name: "Dimsum Keju Lumer", price: 20000, image: "/images/keju.jpg", isBestSeller: true, category: "Keju Lumer", tag: "Hot Item" },
    { id: "3", name: "Dimsum", price: 150000, image: "/images/oridimsum.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Premium" },
    { id: "4", name: "Dimsum Mentai", price: 18000, image: "/images/mentai.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Special" },
    { id: "5", name: "Dimsum Mozzarella", price: 25000, image: "/images/mozza.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Pedas" },
    { id: "6", name: "Dimsum Kuah Pedas", price: 20000, image: "/images/dimkuah.jpg", isBestSeller: false, category: "Best Seller", tag: "Premium" },
    { id: "7", name: "Air Mineral", price: 10000, image: "/images/air.jpg", isBestSeller: true, category: "Keju Lumer", tag: "Cheesy" },
    { id: "9", name: "Es Teh", price: 10000, image: "/images/esteh.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
    { id: "10", name: "Lemon Tea", price: 10000, image: "/images/lemon.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
    { id: "11", name: "Japanese Cake Roll", price: 10000, image: "/images/cakeroll.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
    { id: "12", name: "Brownies ChocoBerrie", price: 10000, image: "/images/brownies.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
    { id: "13", name: "Puding Caramell", price: 10000, image: "/images/caramel.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
    { id: "14", name: "Churros", price: 10000, image: "/images/churros.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
    { id: "15", name: "Choco Frapucino", price: 75000, image: "/images/chocofrap.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
    { id: "16", name: "Ice Cream", price: 75000, image: "/images/icecream.jpg", isBestSeller: false, category: "Menu Favorit", tag: "Hemat" },
];

const chartData = [
    { name: "Ayam Ori", value: 450, color: "#D97706" },
    { name: "Keju Lumer", value: 680, color: "#FBBF24" },
    { name: "Udang Prem", value: 320, color: "#92400E" },
    { name: "Mentai", value: 510, color: "#451A03" },
    { name: "Kepiting", value: 280, color: "#D97706" },
];

const categories = ["Semua", "Best Seller", "Keju Lumer", "Menu Favorit"];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filteredProducts = activeCategory === "Semua"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 bg-primary/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8"
                    >
                        Menu <span className="text-primary italic">Kami</span>
                    </motion.h1>
                    <p className="text-xl text-dark/60 max-w-2xl mx-auto mb-12">
                        Pilih varian dimsum favoritmu dan rasakan kelezatannya hari ini.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full font-bold transition-all ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-white text-dark/60 hover:bg-primary/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ProductCard {...product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Most Loved Chart Section */}
            <section className="py-24 bg-neutral border-y border-primary/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-8">Paling Banyak Dicintai</h2>
                            <p className="text-lg text-dark/70 mb-8 leading-relaxed">
                                Keju Lumer tetap menjadi juara di hati para pecinta dimsumkediri. Berikut adalah statistik penjualan mingguan kami yang membuktikan varian mana yang paling diburu!
                            </p>
                            <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
                                <div className="flex items-center justify-between text-sm font-bold">
                                    <span>Varian Teratas</span>
                                    <span className="text-primary">Terjual per Minggu</span>
                                </div>
                                <div className="space-y-2">
                                    {chartData.map((data, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }} />
                                            <span className="text-dark/70 text-sm flex-1">{data.name}</span>
                                            <span className="font-bold">{data.value}+</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="h-[400px] w-full bg-white p-8 rounded-[3rem] shadow-2xl border border-primary/5">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#451A03', fontSize: 12 }} />
                                    <YAxis hide />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(217, 119, 6, 0.05)' }}
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                    />
                                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
