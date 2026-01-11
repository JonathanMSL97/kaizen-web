'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Leaf, Users, Sparkles, Calendar, Instagram, MapPin, Mail } from "lucide-react"

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVEGACIÓN (Sin botón de reservar) */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <div 
              onClick={scrollToTop}
              className="font-serif text-3xl tracking-tight text-primary font-bold cursor-pointer hover:opacity-80 transition-opacity"
            >
              KAIZEN
            </div>

            {/* ENLACES */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#metodo" className="text-sm font-medium hover:text-primary transition-colors">Método</a>
              <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">Servicios</a>
              <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO (PORTADA) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 
                  onClick={scrollToTop}
                  className="font-serif text-5xl lg:text-7xl text-foreground font-bold leading-tight cursor-pointer hover:opacity-80 transition-opacity"
                >
                  KAIZEN <br />
                  <span className="text-primary italic">Mejora Continua</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Más que un gimnasio, un espacio de transformación. Entrenamiento consciente y nutrición real en un entorno diseñado para tu paz mental.
                </p>
              </div>
            </div>
            {/* Placeholder para imagen */}
            {/* Imagen Hero Real */}
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2000&auto=format&fit=crop"
                alt="Espacio Kaizen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN FILOSOFÍA (Nueva) */}
      <section id="metodo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagen Izquierda */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2000&auto=format&fit=crop"
                alt="Detalle Zen"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto Derecha */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground font-bold">
                El Método Kaizen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kaizen significa "mejora continua". No creemos en transformaciones radicales de un día, sino en el progreso constante, el 1% mejor cada día.
              </p>
              <ul className="space-y-4 pt-4">
                {["Grupos reducidos (máx 8 personas)", "Atención a la biomecánica", "Ambiente libre de estrés"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary mb-4 font-bold">Nuestros Servicios</h2>
            <p className="text-muted-foreground">Todo lo que necesitas para tu evolución.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Entrenamiento Personal", icon: Users, desc: "Planes 100% adaptados a tu biomecánica." },
              { title: "Nutrición Deportiva", icon: Leaf, desc: "Alimentación real, sin dietas restrictivas." },
              { title: "Actividades Grupales", icon: Sparkles, desc: "Participa en sesiones dinámicas con otros miembros." },
            ].map((item, i) => (
              <Card key={i} className="hover:border-primary transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CONTACTO */}
      {/* CONTACTO & SOCIAL */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Izquierda: Datos Físicos */}
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-primary font-bold">
                Conecta con nosotros
              </h2>
              <p className="text-muted-foreground text-lg text-pretty">
                La mejor forma de entender la filosofía Kaizen es viéndola en acción. Síguenos para tu dosis diaria de motivación o ven a conocernos.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="bg-secondary p-4 rounded-full group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Nuestro Espacio</h3>
                    <p className="text-muted-foreground">Rua Irmáns Maristas 1 bajo, Túy 36700</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="bg-secondary p-4 rounded-full group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Escríbenos</h3>
                    <p className="text-muted-foreground">hola@kaizenclub.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Derecha: Tarjeta Instagram con Foto de Fondo Zen */}
            <a 
              href="https://www.instagram.com/kaizen.fitnessclub/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-secondary/30 border border-gray-100 p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 isolate"
            >
              {/* FOTO DE FONDO EN ESQUINA CON MÁSCARA */}
              {/* Usamos 'mask-image' para que la foto se desvanezca hacia el centro y no toque el texto */}
              <div 
                className="absolute top-0 right-0 w-[70%] h-[70%] z-0 pointer-events-none opacity-100 mix-blend-overlay transition-all duration-700 group-hover:opacity-00 group-hover:scale-105"
                style={{
                    maskImage: 'radial-gradient(circle at 100% 0%, black 0%, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 0%, transparent 60%)'
                }}
              >
                <img 
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop" 
                    alt="Atmósfera Zen" 
                    className="w-full h-full object-cover"
                />
              </div>
              
              {/* Contenido Central (z-10 para asegurar que está encima de la foto) */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6 py-8">
                {/* Icono colorido */}
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 font-sans">
                   <Instagram className="w-10 h-10 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-foreground">@kaizen.fitnessclub</h3>
                  <p className="text-muted-foreground">Únete a nuestra comunidad</p>
                </div>

                <Button className="bg-white text-primary hover:bg-white hover:text-primary border border-gray-200 shadow-sm group-hover:shadow-md transition-all">
                  Seguir en Instagram
                </Button>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f2937] text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl font-bold mb-2">KAIZEN</div>
            <p className="text-gray-400 text-sm">© 2025 Kaizen Fitness Club. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}