import type { Metadata } from "next";
// Asegúrate de tener configurada tu fuente (ej. Inter o una Serif)
import { Inter, Playfair_Display } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Kaizen Fitness Club | Tui",
  description: "Centro de entrenamiento personal y nutrición en Tui. Mejora continua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
