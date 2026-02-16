"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, Send, CheckCircle2, ChevronRight, User, Phone, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
    const { cartItems, addToCart, removeFromCart, totalPrice, clearCart } = useCart();
    const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
    const [customerInfo, setCustomerInfo] = useState({ name: "", phone: "", address: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderId, setOrderId] = useState("");

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate order processing and Saving to API
        const newOrderId = `DS-${Math.floor(1000 + Math.random() * 9000)}`;
        setOrderId(newOrderId);

        const orderData = {
            id: newOrderId,
            customer: customerInfo,
            items: cartItems,
            total: totalPrice,
            date: new Date().toLocaleString("id-ID"),
        };

        try {
            await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            // Automatically send to WhatsApp
            sendToWhatsApp(newOrderId, customerInfo, cartItems, totalPrice);
        } catch (error) {
            console.error("Failed to save order", error);
        }

        setIsSubmitting(false);
        setStep("success");
    };

    const sendToWhatsApp = (id = orderId, info = customerInfo, items = cartItems, total = totalPrice) => {
        const date = new Date().toLocaleDateString("id-ID", {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        let message = `*NOTA PESANAN - DIMSUM KEDIRI*\n`;
        message += `------------------------------------------\n`;
        message += `*No. Pesanan:* ${id}\n`;
        message += `*Tanggal:* ${date}\n`;
        message += `------------------------------------------\n`;
        message += `*Pelanggan:* ${info.name}\n`;
        message += `*WhatsApp:* ${info.phone}\n`;
        message += `*Alamat:* ${info.address}\n`;
        message += `------------------------------------------\n\n`;
        message += `*Daftar Pesanan:*\n`;

        items.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (x${item.quantity}) - Rp ${(item.price * item.quantity).toLocaleString("id-ID")}\n`;
        });

        message += `\n*TOTAL PEMBAYARAN: Rp ${total.toLocaleString("id-ID")}*\n`;
        message += `------------------------------------------\n`;
        message += `Mohon segera diproses ya Min. Terima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, "_blank");
    };

    const handleClose = () => {
        if (step === "success") {
            clearCart();
            setStep("cart");
            setCustomerInfo({ name: "", phone: "", address: "" });
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-neutral w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="p-8 border-b border-primary/10 flex justify-between items-center bg-white">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-dark">
                                {step === "cart" && "Keranjang Belanja"}
                                {step === "checkout" && "Informasi Pengiriman"}
                                {step === "success" && "Pesanan Berhasil!"}
                            </h2>
                            <p className="text-dark/50 text-sm">
                                {step === "cart" && `${cartItems.length} menu terpilih`}
                                {step === "checkout" && "Lengkapi data diri Anda"}
                                {step === "success" && "Nota pesanan Anda telah siap"}
                            </p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-3 bg-neutral rounded-2xl text-dark/40 hover:text-primary transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-8">
                        {step === "cart" && (
                            <div className="space-y-6">
                                {cartItems.length === 0 ? (
                                    <div className="py-20 text-center">
                                        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Trash2 size={40} className="text-primary/20" />
                                        </div>
                                        <h3 className="text-xl font-bold text-dark mb-2">Keranjang Kosong</h3>
                                        <p className="text-dark/40 mb-8">Anda belum menambahkan menu apapun.</p>
                                        <button
                                            onClick={onClose}
                                            className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-secondary transition-all"
                                        >
                                            Mulai Belanja
                                        </button>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-6 p-4 bg-white rounded-3xl border border-primary/5 group">
                                            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-sm">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-bold text-lg text-dark group-hover:text-primary transition-colors">{item.name}</h4>
                                                    <span className="font-bold text-secondary">
                                                        Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-dark/40">Rp {item.price.toLocaleString("id-ID")} / porsi</span>
                                                    <div className="flex items-center gap-4 bg-neutral px-3 py-1.5 rounded-xl border border-primary/5">
                                                        <button onClick={() => removeFromCart(item.id)} className="text-primary hover:scale-125 transition-transform"><Minus size={14} /></button>
                                                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                                                        <button onClick={() => addToCart(item)} className="text-primary hover:scale-125 transition-transform"><Plus size={14} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}

                        {step === "checkout" && (
                            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark/60 ml-2">Nama Lengkap</label>
                                    <div className="relative">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Masukkan nama Anda..."
                                            className="w-full bg-white border border-primary/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                            value={customerInfo.name}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark/60 ml-2">Nomor WhatsApp</label>
                                    <div className="relative">
                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="0812xxxx..."
                                            className="w-full bg-white border border-primary/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                            value={customerInfo.phone}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark/60 ml-2">Alamat Pengiriman</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-5 top-4 text-primary" size={20} />
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="Masukkan alamat lengkap..."
                                            className="w-full bg-white border border-primary/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                                            value={customerInfo.address}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </form>
                        )}

                        {step === "success" && (
                            <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-28 h-28 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                    <CheckCircle2 size={56} className="text-secondary" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-dark mb-4">Pesanan Diterima!</h3>
                                <div className="bg-white p-6 rounded-[2rem] border border-primary/5 shadow-sm text-left mb-8 max-w-sm mx-auto">
                                    <div className="flex justify-between items-center mb-4 border-b border-neutral pb-4">
                                        <span className="text-dark/40 text-sm font-bold">No. Pesanan</span>
                                        <span className="text-primary font-bold">#{orderId}</span>
                                    </div>
                                    <div className="space-y-3">
                                        {cartItems.map((item, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-dark/60">{item.name} x{item.quantity}</span>
                                                <span className="font-bold text-dark">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-dashed border-primary/20 flex justify-between items-center">
                                        <span className="font-bold text-dark">Total Akhir</span>
                                        <span className="text-2xl font-serif font-bold text-secondary">
                                            Rp {totalPrice.toLocaleString("id-ID")}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-dark/50 mb-8 max-w-xs mx-auto">
                                    Silakan kirim nota pesanan Anda ke WhatsApp admin untuk konfirmasi pembayaran.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-8 bg-neutral border-t border-primary/10">
                        {step === "cart" && cartItems.length > 0 && (
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-dark/60 font-bold">Total Harga</span>
                                    <span className="text-3xl font-serif font-bold text-primary">
                                        Rp {totalPrice.toLocaleString("id-ID")}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setStep("checkout")}
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-secondary transition-all group"
                                >
                                    <span>Lanjut ke Checkout</span>
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}

                        {step === "checkout" && (
                            <div className="flex flex-col gap-4">
                                <button
                                    form="checkout-form"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-secondary transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? "Memproses..." : "Konfirmasi & Buat Nota"}
                                </button>
                                <button
                                    onClick={() => setStep("cart")}
                                    className="w-full text-dark/40 py-2 font-bold hover:text-primary transition-colors"
                                >
                                    Kembali ke Keranjang
                                </button>
                            </div>
                        )}

                        {step === "success" && (
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleClose}
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold font-serif text-lg shadow-xl hover:bg-secondary transition-all"
                                >
                                    Selesai & Tutup
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
