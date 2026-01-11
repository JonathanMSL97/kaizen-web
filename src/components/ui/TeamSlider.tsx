'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"

type Member = {
  id: number
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: Member[] = [
  {
    id: 1,
    name: "Alba",
    role: "Nutrición & Dirección",
    description: "Especialista en nutrición femenina. Te ayuda a entender tus ciclos y a comer real sin culpas.",
    image: "/alba-fondo-cesped.jpeg",
  },
  {
    id: 2,
    name: "Kleiton",
    role: "Entrenador Principal",
    description: "Experto en biomecánica. Su obsesión es que ganes fuerza cuidando la técnica al milímetro.",
    image: "/kleiton-fondo-cesped.jpeg",
  },
  {
    id: 3,
    name: "Vosotros",
    role: "El corazón de Kaizen",
    description: "Gente real con objetivos reales. Aquí no compites contra nadie, solo te superas a ti mismo.",
    image: "/estilo-kaizen.jpeg",
  },
]

export default function TeamSlider() {
  const [activeId, setActiveId] = useState<number>(2)

  return (
    <div className="w-full h-[600px] md:h-[600px] flex flex-col md:flex-row gap-2 md:gap-4 overflow-hidden">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          onClick={() => setActiveId(member.id)}
          onMouseEnter={() => setActiveId(member.id)}
          className={cn(
            "relative cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-700 ease-in-out border border-white/20",
            activeId === member.id 
              ? "flex-[5] md:flex-[4]" 
              : "flex-[1] grayscale hover:grayscale-0"
          )}
        >
          {/* IMAGEN DE FONDO */}
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* CAPA OSCURA */}
          <div className={cn(
             "absolute inset-0 bg-gradient-to-t md:bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500",
             activeId === member.id ? "opacity-100" : "opacity-60 md:opacity-40"
          )} />

          {/* --- CONTENIDO CUANDO ESTÁ CERRADO --- */}
          {activeId !== member.id && (
             <>
               {/* MÓVIL: Texto horizontal centrado */}
               <div className="md:hidden absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif font-bold tracking-widest text-xl uppercase drop-shadow-lg">
                    {member.name}
                  </span>
               </div>

               {/* DESKTOP (PC): AQUI ESTABA EL ERROR, CORREGIDO */}
               {/* Usamos un contenedor flex centrado que ocupa todo el espacio (inset-0) */}
               <div className="hidden md:flex absolute inset-0 items-center justify-center">
                  {/* Rotamos el texto dentro del contenedor centrado */}
                  <span className="text-white font-serif font-bold tracking-widest text-3xl opacity-90 -rotate-90 whitespace-nowrap">
                    {member.name.toUpperCase()}
                  </span>
               </div>
             </>
          )}

          {/* --- CONTENIDO CUANDO ESTÁ ABIERTO --- */}
          <div className={cn(
            "absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transition-all duration-500",
            activeId === member.id 
              ? "translate-y-0 opacity-100" 
              : "translate-y-10 opacity-0"
          )}>
             <div className={activeId === member.id ? "block" : "hidden"}>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-1 shadow-black drop-shadow-md">
                  {member.name}
                </h3>
                <p className="text-emerald-400 font-bold uppercase tracking-wider text-xs md:text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-stone-200 text-sm md:text-base leading-relaxed max-w-md line-clamp-4 md:line-clamp-none">
                  {member.description}
                </p>
             </div>
          </div>
        </div>
      ))}
    </div>
  )
}