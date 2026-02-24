"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartModal from "./CartModal";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Pesanan Saya", href: "/orders" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { totalItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-3 bg-neutral/80 backdrop-blur-md shadow-lg border-b border-primary/10"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-serif font-bold text-primary tracking-tight"
                    >
                        Golden<span className="text-secondary">Crumbs</span>
                    </motion.span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative group text-dark/80 hover:text-primary transition-colors font-medium text-sm tracking-wide"
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <div className="relative">
                        <motion.button
                            onClick={() => setIsCartOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                        >
                            <ShoppingBag size={18} />
                            <span>Pesan Sekarang</span>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-neutral font-bold animate-bounce">
                                    {totalItems}
                                </span>
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative text-dark p-2"
                    >
                        <ShoppingBag size={24} className="text-primary" />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {totalItems}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-dark p-2 focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Cart Modal */}
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral border-b border-primary/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium ${pathname === link.href ? "text-primary" : "text-dark/70"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-white text-center py-3 rounded-xl font-bold"
                            >
                                Pesan Sekarang
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
