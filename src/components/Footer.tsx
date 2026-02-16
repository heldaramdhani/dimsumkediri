import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark text-neutral pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-3xl font-serif font-bold text-primary mb-6 block">
                            dimsum<span className="text-accent">kediri</span>
                        </Link>
                        <p className="text-neutral/70 leading-relaxed mb-6">
                            Menghadirkan kelezatan dimsum premium dengan sentuhan modern di jantung kota Kediri. Kualitas rasa yang tak terlupakan.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Quick Links</h4>
                        <ul className="space-y-4 text-neutral/70">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">Semua Menu</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Jam Operasional</h4>
                        <ul className="space-y-4 text-neutral/70">
                            <li className="flex justify-between"><span>Senin - Jumat</span> <span>10:00 - 21:00</span></li>
                            <li className="flex justify-between"><span>Sabtu - Minggu</span> <span>10:00 - 22:00</span></li>
                            <li className="pt-2 text-primary font-semibold italic">Kedai Libur di Hari Besar</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-accent">Hubungi Kami</h4>
                        <ul className="space-y-4 text-neutral/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span>Jl. Mayor Bismo No. 12, Kediri, Jawa Timur</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={20} />
                                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    +62 812-3456-7890
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span>halo@dimsunkediri.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral/40">
                    <p>© 2026 dimsumkediri. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-neutral/60">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral/60">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
