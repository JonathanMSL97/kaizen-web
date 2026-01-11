'use client'

import TeamSlider from "@/components/ui/TeamSlider"
import { Quote } from "lucide-react"

export default function QuienesSomos() {
  return (
    <div className="pt-20 min-h-screen bg-stone-50">
      
      {/* HEADER */}
      <div className="bg-white py-20 px-6 text-center">
        <h1 className="font-serif text-5xl font-bold text-stone-900 mb-6">Nuestra Familia</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          "Cada persona avanza a su propio ritmo. Nuestro trabajo consiste en acompañar ese proceso."
        </p>
      </div>

      {/* SECCIÓN INTERACTIVA (LAS TARJETAS ANIMADAS) */}
      <section className="py-12 max-w-7xl mx-auto px-4 md:px-8">
         <p className="text-center text-sm text-stone-400 mb-6 uppercase tracking-widest">
            Conoce al equipo (Pasa el ratón o toca)
         </p>
         
         {/* Aquí va el componente nuevo */}
         <TeamSlider />
         
      </section>

      {/* MANIFIESTO / TEXTO EXTRA */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center space-y-12">
         <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
               <h3 className="font-serif text-2xl font-bold text-stone-900">Enfoque Humano</h3>
               <p className="text-stone-600 leading-relaxed">
                  Detrás de Kaizen no hay una franquicia ni algoritmos. Estamos Alba y Kleiton, dos personas apasionadas que han convertido su vocación en este espacio. Creemos que la salud no se mide solo en la báscula, sino en tu energía vital.
               </p>
            </div>
            <div className="space-y-4">
               <h3 className="font-serif text-2xl font-bold text-stone-900">Profesionalidad</h3>
               <p className="text-stone-600 leading-relaxed">
                  Combinamos la ciencia de la nutrición con la biomecánica del entrenamiento. No improvisamos. Cada plan está pensado para que progreses de forma segura, evitando lesiones y creando hábitos que duren para siempre.
               </p>
            </div>
         </div>
      </section>

      {/* CIERRE */}
      <section className="bg-stone-900 text-stone-300 py-24 px-6 text-center">
         <div className="max-w-3xl mx-auto space-y-8">
            <Quote className="w-12 h-12 mx-auto text-emerald-600 opacity-50" />
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              "Ayudar a las personas a mejorar su salud, optimizar su rendimiento y crear una relación sana con el ejercicio."
            </h2>
            <div className="w-24 h-1 bg-emerald-700 mx-auto rounded-full"></div>
         </div>
      </section>

    </div>
  )
}