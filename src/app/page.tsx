'use client'

import { Button } from "@/components/ui/MainButton"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/instalaciones.jpeg"
            alt="Comunidad Kaizen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-10">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight">
            KAIZEN
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Mejora continua, día a día.<br />
            Más que un gimnasio, un espacio de transformación personal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/servicios">
              <Button className="h-14 px-8 text-lg bg-emerald-700 hover:bg-emerald-800 text-white rounded-full w-full sm:w-auto transition-all shadow-lg shadow-emerald-900/20">
                Ver Servicios
              </Button>
            </Link>
            <Link href="/quienes-somos">
              <Button variant="outline" className="h-14 px-8 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full w-full sm:w-auto transition-all">
                Conoce al Equipo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* METODO SHORT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Opción A: Logo integrado con fondo suave */}
            <div className="order-2 md:order-1 relative h-[450px] rounded-2xl overflow-hidden shadow-xl bg-stone-100 flex items-center justify-center border border-stone-200">
              {/* El padding (p-12) es para que el logo no toque los bordes */}
              {/* mix-blend-multiply borra visualmente el fondo blanco del jpeg */}
              <img
                src="/kaizen-logo.jpeg"
                alt="Método Kaizen"
                className="w-full h-full object-contain p-12 mix-blend-multiply opacity-80"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="font-serif text-4xl text-stone-900 font-bold">
                El Método Kaizen
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Kaizen significa "mejora continua". No buscamos soluciones rápidas ni transformaciones radicales de un día.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Creemos en el <strong>progreso constante</strong> y en los pequeños cambios sostenidos en el tiempo.
              </p>
              <div className="pt-4">
                <Link href="/servicios" className="inline-flex items-center text-emerald-700 font-bold hover:gap-3 transition-all group">
                  Descubre cómo trabajamos <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}