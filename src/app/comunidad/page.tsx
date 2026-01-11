'use client'

import { Button } from "@/components/ui/Button"
import { Instagram, MessageCircle, ArrowRight, Heart, Users } from "lucide-react"

export default function Comunidad() {
  // AQUÍ ESTÁ TU ENLACE ACTUALIZADO
  const whatsappLink = "https://chat.whatsapp.com/E1BEm7lCqxBK1DhdrfZsVm"
  const instagramLink = "https://www.instagram.com/kaizen.fitnessclub/"

  return (
    <div className="pt-20 min-h-screen bg-white">
      
      {/* HEADER INTRO */}
      <div className="bg-stone-50 py-20 px-6 text-center border-b border-stone-100">
        <h1 className="font-serif text-5xl font-bold text-stone-900 mb-6">La Tribu Kaizen</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          El gimnasio es solo una parte. Lo que pasa fuera es lo que realmente importa.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">

        {/* --- SECCIÓN 1: INSTAGRAM (El Protagonista Visual) --- */}
        <section className="relative">
           <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
           <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

           <div className="relative bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl transition-all hover:shadow-purple-900/10">
              <div className="grid md:grid-cols-2">
                 
                 {/* Lado Visual (Foto Grande) */}
                 <div className="relative h-[400px] md:h-auto overflow-hidden">
                    <img 
                      src="/estilo-kaizen.jpeg" 
                      alt="Instagram Kaizen" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Overlay gradiente para texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                       <div className="text-white space-y-2">
                          <p className="font-bold text-lg flex items-center gap-2">
                             <Instagram className="w-5 h-5" /> @kaizen.fitnessclub
                          </p>
                          <p className="text-sm opacity-90">Tu dosis diaria de motivación y técnica.</p>
                       </div>
                    </div>
                 </div>

                 {/* Lado Contenido */}
                 <div className="p-10 md:p-16 flex flex-col justify-center space-y-8">
                    <div className="space-y-4">
                       <h2 className="font-serif text-4xl font-bold text-stone-900">
                         Sigue el día a día
                       </h2>
                       <p className="text-lg text-stone-600 leading-relaxed">
                         Instagram es nuestra ventana principal. Ahí compartimos entrenamientos, correcciones de técnica, logros de nuestros alumnos y el ambiente real del centro.
                       </p>
                       <ul className="space-y-3 pt-2">
                          <li className="flex items-center gap-3 text-stone-600">
                             <div className="p-1 bg-purple-100 rounded text-purple-600"><Heart className="w-4 h-4"/></div>
                             <span>Tips de nutrición y recetas</span>
                          </li>
                          <li className="flex items-center gap-3 text-stone-600">
                             <div className="p-1 bg-orange-100 rounded text-orange-600"><Users className="w-4 h-4"/></div>
                             <span>Eventos y retos de la comunidad</span>
                          </li>
                       </ul>
                    </div>

                    <a href={instagramLink} target="_blank" rel="noreferrer">
                      <Button className="w-full md:w-auto h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-orange-500 hover:opacity-90 text-white rounded-xl shadow-lg transition-all hover:-translate-y-1">
                         <Instagram className="mr-2 w-5 h-5" /> Ir a nuestro Instagram
                      </Button>
                    </a>
                 </div>
              </div>
           </div>
        </section>


        {/* --- SECCIÓN 2: WHATSAPP (La Comunidad "Insider") --- */}
        <section className="max-w-4xl mx-auto text-center space-y-8 bg-stone-50 p-12 rounded-3xl border border-stone-100">
           <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8" />
           </div>
           
           <h2 className="font-serif text-3xl font-bold text-stone-900">
             ¿Hablamos? Únete al grupo
           </h2>
           
           <p className="text-lg text-stone-600 max-w-xl mx-auto">
             Tenemos un grupo de WhatsApp donde hablamos de cosas "reales": quedadas improvisadas, dudas sobre comidas, memes y apoyo mutuo. Sin spam, solo buen rollo.
           </p>

           <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-block">
              <Button variant="outline" className="h-12 px-8 border-green-600 text-green-700 hover:bg-green-50 rounded-full text-base">
                 Unirme al Grupo de WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
           </a>
        </section>

      </div>
    </div>
  )
}