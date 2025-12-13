import type { Metadata } from "next";
// Importamos las fuentes de Google: Inter (Texto) y Playfair Display (Títulos)
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Coincide con tu tailwind.config.ts
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Coincide con tu tailwind.config.ts
});

export const metadata: Metadata = {
  title: "Kaizen Fitness Club",
  description: "Entrenamiento consciente y mejora continua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
