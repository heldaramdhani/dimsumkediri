"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Package, Calendar, Clock, ChevronRight, ShoppingBag, Phone, User, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function OrdersPage() {
    const { cartItems, totalItems, totalPrice } = useCart();
    const [phone, setPhone] = useState("");
    const [orders, setOrders] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone) return;

        setIsSearching(true);
        try {
            const response = await fetch(`/api/orders?phone=${phone}`);
            const data = await response.json();
            setOrders(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to fetch orders:", error);
            setOrders([]);
        }
        setIsSearching(false);
        setHasSearched(true);
    };

    return (
        <main className="min-h-screen bg-neutral/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-primary/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6"
                    >
                        Pesanan <span className="text-primary italic">Saya</span>
                    </motion.h1>
                    <p className="text-lg text-dark/60 max-w-xl mx-auto">
                        Kelola keranjang belanja Anda dan lacak riwayat pesanan GoldenCrumbs favorit Anda.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Cart Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 overflow-hidden border border-primary/5"
                        >
                            <div className="p-8 bg-primary text-white">
                                <h2 className="text-2xl font-serif font-bold flex items-center gap-3">
                                    <ShoppingBag size={24} />
                                    Keranjang Anda
                                </h2>
                            </div>
                            <div className="p-8">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-10">
                                        <div className="w-16 h-16 bg-neutral rounded-full flex items-center justify-center mx-auto mb-4">
                                            <ShoppingBag size={28} className="text-dark/20" />
                                        </div>
                                        <p className="text-dark/40 font-medium">Keranjang masih kosong</p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="flex gap-4">
                                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-dark truncate">{item.name}</h4>
                                                        <p className="text-sm text-dark/40">x{item.quantity}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-primary text-sm">
                                                            Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-6 border-t border-neutral space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-dark/40 font-bold uppercase text-xs tracking-widest">Total</span>
                                                <span className="text-2xl font-serif font-bold text-secondary">
                                                    Rp {totalPrice.toLocaleString("id-ID")}
                                                </span>
                                            </div>
                                            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-secondary transition-all">
                                                Lanjut ke Checkout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Tracking */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5"
                        >
                            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                                <Package size={24} className="text-primary" />
                                Lacak Pesanan
                            </h2>
                            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                                    <input
                                        type="tel"
                                        placeholder="Masukkan nomor WhatsApp Anda (0812...)"
                                        className="w-full bg-neutral/50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-4 pl-14 pr-6 outline-none transition-all font-medium"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSearching}
                                    className="bg-dark text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-lg active:scale-95 disabled:opacity-50"
                                >
                                    <Search size={20} />
                                    {isSearching ? "Mencari..." : "Cari Pesanan"}
                                </button>
                            </form>
                        </motion.div>

                        {/* Results */}
                        <div className="space-y-6">
                            <AnimatePresence mode="wait">
                                {!hasSearched ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-white/50 border-2 border-dashed border-primary/10 rounded-[2.5rem] p-16 text-center"
                                    >
                                        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Search size={32} className="text-primary/20" />
                                        </div>
                                        <p className="text-dark/40 font-medium">Masukkan nomor WhatsApp untuk melihat riwayat pesanan</p>
                                    </motion.div>
                                ) : orders.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-white/50 border-2 border-dashed border-secondary/10 rounded-[2.5rem] p-16 text-center"
                                    >
                                        <div className="w-20 h-20 bg-secondary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Clock size={32} className="text-secondary/20" />
                                        </div>
                                        <h3 className="text-xl font-bold text-dark mb-2">Tidak Menemukan Pesanan</h3>
                                        <p className="text-dark/40">Maaf, kami tidak menemukan riwayat pesanan untuk nomor "{phone}".</p>
                                    </motion.div>
                                ) : (
                                    orders.map((order, index) => (
                                        <motion.div
                                            key={order.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-[2.5rem] shadow-lg shadow-primary/5 border border-primary/5 p-8 flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-primary/20 transition-all group"
                                        >
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                                <Package size={28} className="text-primary" />
                                            </div>

                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-xl font-bold text-dark">#{order.id}</h3>
                                                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase tracking-widest">
                                                        Selesai
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-dark/40 font-medium">
                                                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {order.date.split(',')[0]}</span>
                                                    <span className="flex items-center gap-1.5"><Clock size={14} /> {order.date.split(',')[1]}</span>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-xs text-dark/30 font-bold uppercase tracking-widest mb-1">Total Transaksi</p>
                                                <p className="text-2xl font-serif font-bold text-primary">
                                                    Rp {order.total.toLocaleString("id-ID")}
                                                </p>
                                            </div>

                                            <button className="p-4 bg-neutral rounded-2xl text-dark/20 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                                                <ChevronRight size={24} />
                                            </button>
                                        </motion.div>
                                    ))
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
