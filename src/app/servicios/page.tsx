'use client'

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Users, Leaf } from "lucide-react"

export default function Servicios() {
  return (
    <div className="pt-20"> 
      
      {/* HEADER */}
      <div className="bg-stone-100 py-20 text-center px-6">
        <h1 className="font-serif text-5xl font-bold text-stone-900 mb-6">Nuestros Servicios</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Entrenamiento y nutrición adaptados a tu vida. Sin soluciones mágicas, solo hábitos reales.
        </p>
      </div>

      {/* ENTRENAMIENTO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full font-bold text-sm">
                <Users className="w-4 h-4" /> ENTRENAMIENTO
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
                Movimiento Consciente
              </h2>
              <div className="prose prose-stone text-lg text-stone-600 leading-relaxed">
                <p>
                  En KAIZEN ofrecemos entrenamientos totalmente personalizados, adaptados al estado físico, experiencia y objetivos de cada persona.
                </p>
                <p>
                  No importa si tu objetivo es perder grasa, ganar fuerza o simplemente sentirte mejor: optimizamos tu biomecánica para prevenir lesiones y asegurar resultados.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 border border-stone-200 rounded-xl hover:border-emerald-200 transition-colors">
                  <h3 className="font-bold text-xl mb-2">Personal 1:1</h3>
                  <p className="text-stone-500 text-sm">Atención exclusiva para maximizar tu potencial.</p>
                </div>
                <div className="p-6 border border-stone-200 rounded-xl hover:border-emerald-200 transition-colors">
                  <h3 className="font-bold text-xl mb-2">Small Groups</h3>
                  <p className="text-stone-500 text-sm">Máximo 4 personas. Energía de grupo con atención individualizada.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
               <img src="/reto-planchas.jpeg" alt="Gimnasio Kaizen" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* NUTRICIÓN */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
               <img src="/alba-fondo-verde.jpeg" alt="Nutrición Kaizen" className="w-full h-full object-cover" />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-bold text-sm">
                <Leaf className="w-4 h-4" /> NUTRICIÓN
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
                Alimentación Real
              </h2>
              <div className="prose prose-stone text-lg text-stone-600 leading-relaxed">
                <p>
                  Olvídate de las dietas restrictivas. Nuestro enfoque se basa en la ciencia y en la educación nutricional para que aprendas a comer según tu estilo de vida.
                </p>
                <p>
                  Somos especialistas en <strong>Nutrición Femenina</strong> y <strong>Nutrición Deportiva</strong>. Entendemos que cada etapa vital requiere un enfoque diferente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="font-medium text-stone-900 mb-4">Adaptamos el plan a:</p>
                <ul className="grid grid-cols-2 gap-4 text-stone-600 text-sm">
                  <li className="flex gap-2"><span>•</span> Tus objetivos personales</li>
                  <li className="flex gap-2"><span>•</span> Tu nivel de actividad</li>
                  <li className="flex gap-2"><span>•</span> Tu etapa vital</li>
                  <li className="flex gap-2"><span>•</span> Tus gustos y horarios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="bg-emerald-900 py-16 text-center text-white">
        <div className="px-6">
          <h2 className="font-serif text-3xl mb-6">¿Dudas sobre qué plan elegir?</h2>
          <Link href="/quienes-somos">
             <Button className="bg-white text-emerald-900 hover:bg-stone-100 rounded-full px-8 h-12 text-lg">
                Habla con nosotros
             </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}