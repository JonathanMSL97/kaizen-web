import { MapPin, Mail, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white font-bold">KAIZEN</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Mejora continua, día a día. Entrenamiento consciente y nutrición real en un entorno diseñado para tu bienestar.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Rua Irmáns Maristas 1 bajo,<br/>Túy 36700</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>hola@kaizenclub.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Comunidad */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Comunidad</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.instagram.com/kaizen.fitnessclub/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-emerald-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@kaizen.fitnessclub</span>
              </a>
              
              <a 
                href="https://chat.whatsapp.com/E1BEm7lCqxBK1DhdrfZsVm" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Comunidad WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Kaizen Fitness Club. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}