"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    isBestSeller?: boolean;
    tag?: string;
}

export default function ProductCard({ id, name, price, image, isBestSeller, tag }: ProductCardProps) {
    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const quantity = getItemQuantity(id);

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group bg-neutral rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5"
        >
            <div className="relative h-64 overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-accent/20 flex items-center justify-center text-accent/50">
                        [Dimsum Image]
                    </div>
                )}

                {isBestSeller && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Best Seller
                    </div>
                )}

                {tag && (
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {tag}
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-dark group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <span className="text-lg font-bold text-secondary">
                        Rp {(price / 1000).toFixed(0)}k
                    </span>
                </div>
                <div className="flex items-center gap-1 text-accent mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                    ))}
                    <span className="text-xs text-dark/40 ml-2">(48 reviews)</span>
                </div>
                <p className="text-dark/60 text-sm line-clamp-2 mb-6">
                    Dimsum premium dengan bahan ayam pilihan dan topping melimpah. Lezat dan bergizi.
                </p>

                {/* Actions Section */}
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <button
                            onClick={() => addToCart({ id, name, price, image })}
                            className="w-full bg-primary text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-secondary transition-all hover:shadow-lg"
                        >
                            <ShoppingCart size={18} />
                            Pesan Sekarang
                        </button>
                    ) : (
                        <div className="w-full bg-primary/5 border border-primary/10 py-2 rounded-2xl font-bold flex items-center justify-between px-4">
                            <button
                                onClick={() => removeFromCart(id)}
                                className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all"
                            >
                                <Minus size={18} />
                            </button>
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-serif text-primary leading-none">{quantity}</span>
                                <span className="text-[10px] text-primary/40 uppercase tracking-widest mt-0.5">Porsi</span>
                            </div>
                            <button
                                onClick={() => addToCart({ id, name, price, image })}
                                className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-all"
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
