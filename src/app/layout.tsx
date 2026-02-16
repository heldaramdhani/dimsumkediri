import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dimsumkediri | Premium Modern Local Dimsum",
  description: "Experience the premium taste of local Kediri dimsum with a modern twist. Cheese melt, best sellers, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        <CartProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
