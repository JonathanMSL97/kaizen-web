'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
// Asegúrate de que aquí importas MainButton si cambiaste el nombre, o Button si lo arreglaste de otra forma
import { Button } from "@/components/ui/MainButton" 
import { Menu, X, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Bloquear el scroll cuando el menú móvil está abierto (UX Pro)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // --- LÓGICA DE ESTILOS CORREGIDA ---
  const isHome = pathname === "/"

  // 1. Definimos el estilo "normal" (cuando el menú está cerrado)
  const normalStyle = isScrolled || !isHome 
    ? "bg-white/95 backdrop-blur-md shadow-sm text-stone-800" 
    : "bg-transparent text-white"

  // 2. Definimos el estilo "abierto" (transparente y texto blanco para verse sobre el fondo negro)
  const openStyle = "bg-transparent text-white"

  // 3. Elegimos cuál usar
  const navClasses = mobileMenuOpen ? openStyle : normalStyle

  // Lógica para el hover de los enlaces
  const linkHover = (mobileMenuOpen || !isHome || isScrolled) 
    ? "hover:text-emerald-500" 
    : "hover:text-emerald-200"
  
  const isActive = (path: string) => pathname === path ? "font-bold text-emerald-500" : ""

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          {/* El z-index alto asegura que el logo siempre esté clicable */}
          <Link 
            href="/" 
            className="font-serif text-3xl font-bold tracking-tight z-50 relative"
            onClick={() => setMobileMenuOpen(false)}
          >
            KAIZEN
          </Link>

          {/* DESKTOP MENU (Oculto en móvil) */}
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
                variant={(!isHome || isScrolled) ? "default" : "outline"}
                className={(!isHome || isScrolled) 
                  ? "bg-emerald-700 hover:bg-emerald-800 text-white rounded-full" 
                  : "border-white text-white hover:bg-white/20 rounded-full"
                }
              >
                <Instagram className="w-4 h-4 mr-2" /> Síguenos
              </Button>
            </a>
          </div>

          {/* MOBILE TOGGLE (HAMBURGUESA/X) */}
          <button 
            className="md:hidden z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {/* Usamos un div fijo negro que cubre TODA la pantalla */}
      <div className={`
        fixed inset-0 bg-stone-900/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden
        ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">Inicio</Link>
        <Link href="/servicios" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">Servicios</Link>
        <Link href="/quienes-somos" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">Quiénes Somos</Link>
        <Link href="/comunidad" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-emerald-400 font-bold">Comunidad</Link>
        
        {/* Redes en menú móvil */}
        <div className="flex gap-6 mt-8 pt-8 border-t border-stone-800 w-1/2 justify-center">
            <a href="https://www.instagram.com/kaizen.fitnessclub/" target="_blank" className="text-white hover:text-pink-500"><Instagram className="w-8 h-8"/></a>
        </div>
      </div>
    </nav>
  )
}