'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/MainButton"
import { Menu, X, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Estilos dinámicos
  const isHome = pathname === "/"
  const navBackground = isScrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-sm text-stone-800" : "bg-transparent text-white"
  const linkHover = isScrolled || !isHome ? "hover:text-emerald-700" : "hover:text-emerald-200"
  
  const isActive = (path: string) => pathname === path ? "font-bold text-emerald-600" : ""

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <Link href="/" className="font-serif text-3xl font-bold tracking-tight z-50">
            KAIZEN
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${linkHover} ${isActive('/')}`}>Inicio</Link>
            <Link href="/servicios" className={`text-sm font-medium transition-colors ${linkHover} ${isActive('/servicios')}`}>Servicios</Link>
            <Link href="/quienes-somos" className={`text-sm font-medium transition-colors ${linkHover} ${isActive('/quienes-somos')}`}>Quiénes Somos</Link>
            <Link href="/comunidad" className={`text-sm font-medium transition-colors ${linkHover} ${isActive('/comunidad')}`}>Comunidad</Link>
            
            <a 
              href="https://www.instagram.com/kaizen.fitnessclub/" 
              target="_blank" 
              rel="noreferrer"
            >
              <Button 
                variant={isScrolled || !isHome ? "default" : "outline"}
                className={isScrolled || !isHome 
                  ? "bg-emerald-700 hover:bg-emerald-800 text-white rounded-full" 
                  : "border-white text-white hover:bg-white/20 rounded-full"
                }
              >
                <Instagram className="w-4 h-4 mr-2" /> Síguenos
              </Button>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-stone-900 text-white flex flex-col items-center justify-center space-y-8 md:hidden z-40 animate-in slide-in-from-top-10">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">Inicio</Link>
          <Link href="/servicios" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">Servicios</Link>
          <Link href="/quienes-somos" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">Quiénes Somos</Link>
          <Link href="/comunidad" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-emerald-400">Comunidad</Link>
        </div>
      )}
    </nav>
  )
}