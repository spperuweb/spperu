import React, { useState } from "react";
import { 
  ArrowLeft, 
  Battery, 
  ShieldCheck, 
  Zap, 
  Waves, 
  ChevronDown,
  Navigation,
  Anchor,
  Compass,
  Award,
  Wrench,
  GraduationCap,
  Users,
  CheckCircle,
  Video,
  Wind,
  Plus,
  HelpCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  PhoneCall
} from "lucide-react";
import InteractiveBentoGallery from "../components/InteractiveBentoGallery";

// Helper for prefilled WhatsApp link
const getWhatsAppUrl = (text: string) => {
  return `https://api.whatsapp.com/send?phone=51949643347&text=${encodeURIComponent(text)}`;
};

interface GalleryItem {
  id: string;
  url: string;
  tag: string;
  title: string;
  desc: string;
  category: 'drone' | 'accesorios' | 'detalle';
}

const fd2GalleryImages: GalleryItem[] = [
  {
    id: "fd2-galeria-capturas-01",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936854/fd2-image-14_ehirnu.jpg",
    tag: "Foto de Estudio",
    title: "SwellPro FD2 Max",
    desc: "Vista del drone principal junto a su mando en mesa.",
    category: "drone"
  },
  {
    id: "fd2-galeria-capturas-02",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936853/fd2-image-13_jfeh6h.jpg",
    tag: "Maletín Oficial",
    title: "Caja de Foam Rígido",
    desc: "Interior acolchado para amortiguar golpes de campo.",
    category: "accesorios"
  },
  {
    id: "fd2-galeria-capturas-03",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936852/fd2-image-02_cvikgc.jpg",
    tag: "Foto de Estudio",
    title: "Perfil Frontal",
    desc: "Plano horizontal mostrando la estanqueidad sellada.",
    category: "drone"
  },
  {
    id: "fd2-galeria-capturas-04",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936851/fd2-image-01_k6qmjs.jpg",
    tag: "Foto a Detalle",
    title: "Compartimento de Batería",
    desc: "Compuerta trasera con empaquetaduras de silicona.",
    category: "detalle"
  },
  {
    id: "fd2-galeria-capturas-05",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936849/fd2-image-05_lms8bf.jpg",
    tag: "Foto a Detalle",
    title: "Hélices y Motor",
    desc: "Conexión reforzada para resistir ráfagas de aire.",
    category: "detalle"
  },
  {
    id: "fd2-galeria-capturas-06",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936848/fd2-image-11_gcznor.jpg",
    tag: "Foto de Estudio",
    title: "Estación de Vuelo",
    desc: "Conjunto del drone y radiocontrol listo para usar.",
    category: "drone"
  },
  {
    id: "fd2-galeria-capturas-07",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936847/fd2-image-12_ygllt9.jpg",
    tag: "Cuerpo Sellado",
    title: "Integridad",
    desc: "Resina sellada resistente a la humedad constante.",
    category: "drone"
  },
  {
    id: "fd2-galeria-capturas-08",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936846/fd2-image-08_hlhda4.jpg",
    tag: "Bateria",
    title: "Bateria",
    desc: "Bateria extraible para alta duración.",
    category: "accesorios"
  },
  {
    id: "fd2-galeria-capturas-09",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936845/fd2-image-09_e1exa9.jpg",
    tag: "Bateria",
    title: "Bateria",
    desc: "Bateria extraible para alta duración.",
    category: "accesorios"
  },
  {
    id: "fd2-galeria-capturas-10",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936845/fd2-image-10_f07vps.jpg",
    tag: "Bateria",
    title: "Bateria",
    desc: "Bateria extraible para alta duración.",
    category: "accesorios"
  },
  {
    id: "fd2-galeria-capturas-11",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936843/fd2-image-07_c1bgzj.jpg",
    tag: "Foto a Detalle",
    title: "Vista de helices",
    desc: "Helices listas para vuelo.",
    category: "detalle"
  },
  {
    id: "fd2-galeria-capturas-12",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936842/fd2-image-06_wnpcam.jpg",
    tag: "Foto a Detalle",
    title: "Cámara  Frontal",
    desc: "Cámara excelente para ver lo que vas a capturar",
    category: "detalle"
  },
  {
    id: "fd2-galeria-capturas-13",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936842/fd2-image-03_zurk9e.jpg",
    tag: "Foto a Detalle",
    title: "Vista de helices",
    desc: "Helices listas para vuelo.",
    category: "detalle"
  },
  {
    id: "fd2-galeria-capturas-14",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779936841/fd2-image-04_mvxodh.jpg",
    tag: "Foto a Detalle",
    title: "Vista de abajo",
    desc: "Helices y cámara listas para vuelo.",
    category: "detalle"
  }
];

export default function FD2Page() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Pre-filled WhatsApp message templates
  const msgHero = "Hola SwellPro Perú, estoy sumamente interesado en el Fisherman FD2 Max (la máquina de asedio de 3.5 kg de carga). Deseo recibir asesoría técnica y cotización formal.";
  const msgWhy = "Hola SwellPro Perú, busco un drone resistente para lanzar carnadas grandes y pesadas con viento fuerte de orilla. Me interesa el FD2 Max, ¿me brindan más información?";
  const msgBenefits = "Hola SwellPro Perú, me interesa conocer más sobre la transmisión de video en vivo del Fisherman FD2 Max y su estabilidad en vientos nivel 7.";
  const msgProduct = "Hola SwellPro Perú, he leído la ficha técnica del FD2 Max con cámara Gimbal 4K y control impermeable. ¿Tienen el equipo en stock para Lima o envían a provincias?";
  const msgCompare = "Hola SwellPro Perú, comparé el FD2 Max con otros modelos y veo que es el rey de la capacidad de carga. Quisiera coordinar una demostración o compra.";
  const msgFooter = "Hola SwellPro Perú, solicito información y cotización del Fisherman FD2 Max.";

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#ff4d00] selection:text-white antialiased">
      
      {/* Dynamic Style Link to import Space Grotesk & DM Sans */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap');
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-sans-dm {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      {/* Sutil bandera peruana muy decorativa y discreta en el borde superior */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#ff4d00]" />
        <div className="h-full w-1/3 bg-neutral-100" />
        <div className="h-full w-1/3 bg-[#ff4d00]" />
      </div>

      {/* STICKY HEADER INTERNAL NAV */}
      <nav className="border-b border-neutral-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="../index.html" 
            className="flex items-center gap-2 text-neutral-500 hover:text-[#ff4d00] transition font-sans-dm text-xs sm:text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#ff4d00]" />
            Volver al Inicio
          </a>
          
          <div className="flex items-center gap-2.5">
            <img 
              src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
              alt="SwellPro Perú" 
              className="w-9 h-9 object-contain"
            />
            <span className="font-display font-extrabold tracking-tight text-neutral-900 text-base sm:text-lg">
              SWELLPRO <span className="text-[#ff4d00]">PERÚ</span>
            </span>
          </div>

          <a 
            href={getWhatsAppUrl(msgHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl transition shadow-md shadow-[#ff4d00]/15"
          >
            Preguntar Stock
          </a>
        </div>
      </nav>

      {/* HERO SECTION - ROBUST, POWERFUL, PRESTIGE */}
      <header className="relative py-16 lg:py-24 overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50 via-white to-white">
        {/* Subtle radial ambient orange and grey glows suggesting strength */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-neutral-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="bg-neutral-900 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block font-display">
                  🦾 CARGA MÁXIMA MULTIPLICADA — EL REY DE LA COSTA
                </span>
                <span className="bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full inline-block font-display">
                  FD2 MAX
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-none uppercase tracking-tight text-neutral-900">
                La máquina de <br />
                <span className="text-[#ff4d00]">asedio marina.</span>
              </h1>
              
              <p className="text-neutral-600 font-sans-dm text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                El drone de pesca impermeable que levanta hasta 3.5 kg y te ayuda a colocar la carnada justo donde se esconden los grandes de nuestra costa. Potencia bruta sin fricciones físicas.
              </p>

              {/* Bold feature badges */}
              <div className="grid sm:grid-cols-2 gap-3.5 text-sm text-neutral-700 font-sans-dm font-semibold pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>3.5 kg de arrastre bruto sólido</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Vientos Nivel 7 y Mar Estado 5</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Cámara Gimbal 4K incorporada</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Transmisión digital segura de video</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={getWhatsAppUrl(msgHero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4.5 px-8 rounded-2xl text-center shadow-xl shadow-[#ff4d00]/20 transition-all duration-250 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Anchor className="w-4 h-4" />
                  Quiero asesoría por WhatsApp
                </a>
                
                <a 
                  href="#fd2-evidencia"
                  className="border border-neutral-300 hover:border-neutral-400 bg-white/80 hover:bg-neutral-50 text-neutral-700 font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl text-center transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Camera className="w-4 h-4 text-[#ff4d00]" />
                  Ver toda la galería
                </a>
              </div>

              {/* Macro Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-100 max-w-xl">
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-4xl block">3.5 kg</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Carga de arrastre</span>
                </div>
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-4xl block">1.2 km</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Lanzamiento Máx</span>
                </div>
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-4xl block">4K UHD</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Cámara Transmisora</span>
                </div>
              </div>
            </div>

            {/* Right Transparent Product Showcase */}
            <div className="lg:col-span-12 lg:col-start-8 lg:col-end-13 relative flex justify-center items-center">
              <div className="absolute w-80 h-80 bg-[#ff4d00]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute w-[290px] h-[290px] bg-neutral-100 rounded-full -z-20 border border-neutral-200/50"></div>
              
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/fisherman-max-fd2-drone-thumbnail_k1yona.png" 
                alt="SwellPro Fisherman FD2 Max de SwellPro Perú" 
                className="w-full max-w-sm relative z-10 transition duration-500 hover:scale-105 filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)]"
              />

              {/* Floater Cert */}
              <div className="absolute bottom-4 right-4 sm:right-6 bg-white border border-neutral-200 p-3.5 rounded-xl shadow-lg flex items-center gap-2.5 z-20">
                <div className="w-1.5 h-6 bg-[#ff4d00] rounded-sm" />
                <div className="text-left">
                  <span className="text-[9px] text-neutral-400 block font-bold uppercase tracking-wider">GARANTÍA NACIONAL</span>
                  <span className="text-[11px] text-neutral-900 block font-display font-extrabold leading-none uppercase">1 Año en Perú 🇵🇪</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* BARRA DE CREDIBILIDAD DE 5 HITOS */}
      <section className="bg-neutral-50 py-10 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-6 items-center text-left">
            
            {/* item 1 */}
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/45 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <Award className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Representación</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-sans-dm">
                  Único canal oficial legítimo en el país.
                </p>
              </div>
            </div>

            {/* item 2 */}
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/45 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <Wrench className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Taller en Lima</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-sans-dm">
                  Servicio técnico rápido con piezas genuinas.
                </p>
              </div>
            </div>

            {/* item 3 */}
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/45 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Garantía Real</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-sans-dm">
                  12 meses de cobertura sin esperas.
                </p>
              </div>
            </div>

            {/* item 4 */}
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/45 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <GraduationCap className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Capacitación</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-sans-dm">
                  Clase presencial de vuelo en playa.
                </p>
              </div>
            </div>

            {/* item 5 */}
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/45 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <Users className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Soporte Continuo</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5 font-sans-dm">
                  Asesoría y manuales por WhatsApp 24/7.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN "POR QUÉ FD2 MAX" - EL REY DEL EMPUJE */}
      <section id="por-que-fd2max" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] text-[#ff4d00] font-black uppercase tracking-widest bg-neutral-100 px-4 py-2 rounded-full font-display">
            ¿POR QUÉ EL FISHERMAN FD2 MAX?
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-900 mt-6 mb-8 uppercase tracking-tight">
            Diseñado para dominar la rompiente con carnadas de verdad.
          </h2>

          <div className="bg-neutral-950 text-neutral-100 p-8 sm:p-12 rounded-3xl text-left relative overflow-hidden shadow-xl">
            {/* Visual background hint */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d00]/5 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-neutral-300 font-sans-dm text-base sm:text-lg leading-relaxed mb-6">
              El pescador serio sabe que los grandes trofeos costeros (como las lenguadas gigantes o corvinas de fondo) no se acercan a la orilla arenosa ruidosa. Requieren ser tentados con carnadas grandes, cabezas enteras de pejerrey, calamares de buen porte y plomadas de 150 gramos para anclarse con fuerza en corrientes bravas del Pacífico peruano.
            </p>

            <blockquote className="border-l-4 border-[#ff4d00] pl-4 sm:pl-6 my-6 italic text-white font-bold font-display text-sm sm:text-lg bg-neutral-900 py-4 pr-4 rounded-r-lg">
              "El FD2 Max no se inmuta ante los pesos pesados. Su tren propulsor entrega un empuje masivo capaz de traccionar hasta 3.5 kilogramos de manera continua, elevándose y cruzando con elegancia la barrera de vientos costeros más agresivos de nuestro litoral."
            </blockquote>

            <p className="text-neutral-400 font-sans-dm text-sm sm:text-base leading-relaxed">
              Tener un Fisherman FD2 Max es sinónimo de control. No necesitas desgastar tus hombros ni realizar lances sobrehumanos. Todo se ejecuta desde una pantalla digital en tiempo real que te enseña el fondo marino y te permite depositar la carnada viva exactamente donde las corrientes crean el comedero natural de los peces.
            </p>

            <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-neutral-500 font-display text-xs font-bold uppercase tracking-wide">
                🔥 LA MÁXIMA ARMA DE SEDIO PARA EL PESCADOR QUE VA EN SERIO
              </span>
              <a 
                href={getWhatsAppUrl(msgWhy)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-200 text-center cursor-pointer shadow-md shadow-[#ff4d00]/25"
              >
                Solicitar demostración por WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE BENEFICIOS CLAVE */}
      <section className="py-24 bg-neutral-50/50 border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-semibold text-xs uppercase tracking-widest block">
              INGENIERÍA MARINA SIN CONCESIONES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 leading-tight tracking-tight">
              Beneficios que marcan la diferencia
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans-dm">
              No es solo un juguete volador. Es una estación de trabajo robusta, impermeable e incansable para tus jornadas de playa fines de semana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit card 1 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Wind className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Empuje Masivo de 3.5 kg</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Lidera la industria como el drone de costa con mayor capacidad de carga del mercado nacional. Arrastra múltiples anzuelos con carnada pesada entera e inertes de gran volumen sin perder altitud ni estabilidad aérea.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                El rey indiscutible de la carga
              </div>
            </div>

            {/* Benefit card 2 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Video className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Video en Vivo 4K y Gimbal</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Visualiza la topografía submarina, localiza cardúmenes, fosas profundas y canales de comedero desde tu control remoto con pantalla color. El gimbal permite inclinar la cámara para un apuntado preciso de soltado.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Exploración submarina real
              </div>
            </div>

            {/* Benefit card 3 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Waves className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Flotación IP67 e Impermeable</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Estructura sellada al vacío que resiste caídas en agua de mar y oleaje fuerte. Si se voltea al acuatizar, su tecnología inteligente permite voltearlo automáticamente (PowerFlip) desde los mandos del control.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Sistema PowerFlip™ integrado
              </div>
            </div>

            {/* Benefit card 4 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Navigation className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Lanzamiento 1.2 Kilómetros</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Cruza con absoluta solvencia la rompiente y colócate a una distancia segura donde los peces grandes nadan sin miedos de ruidos ni depredadores terrestres. Retorno satelital automático directo al punto de partida.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Retorno redundante seguro GPS
              </div>
            </div>

            {/* Benefit card 5 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Vientos Nivel 7 Soportado</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Estable frente a corrientes de viento continuas de hasta 61 km/h. No sufre de la inclinación ni vibración brusca de drones recreacionales pequeños de plástico liviano, manteniendo un vuelo firme y estable.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Aerodinámica marina pesada
              </div>
            </div>

            {/* Benefit card 6 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Control Estanco IP54</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  El control remoto no teme a la arena húmeda de playa, salpicaduras aleatorias, ni dedos mojados de carnada. Cuenta con una pantalla brillante de gran contraste, perfectamente visible bajo la luz del sol más inclemente.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Resistente a la intemperie marina
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <a 
              href={getWhatsAppUrl(msgBenefits)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4.5 px-8 rounded-2xl inline-flex items-center gap-2 shadow-lg shadow-[#ff4d00]/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Anchor className="w-4 h-4" /> Deseo consultar promociones de stock local
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE PRODUCTO: FICHA TÉCNICA Y ESPECIFICACIONES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              DETALLE COMERCIAL OFICIAL EN PERÚ
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 tracking-tight">
              Especificaciones Técnicas Fisherman FD2 Max
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans-dm">
              Cada número, sensor y aleación metálica tiene el objetivo claro de dar una potencia y tracción insuperable frente a la playa:
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Image & Accent block) */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-150 w-full flex justify-center items-center shadow-xs">
                <img 
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/fisherman-max-fd2-drone-thumbnail_k1yona.png" 
                  alt="Fisherman FD2 Max SwellPro Perú" 
                  className="w-full max-w-xs object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] transform hover:-rotate-2 transition duration-500"
                />
              </div>
              <div className="mt-4 bg-[#ff4d00]/5 border border-[#ff4d00]/15 rounded-xl p-4 text-center max-w-xs">
                <span className="text-neutral-850 text-xs font-sans-dm font-bold">
                  "El modelo consagrado por la comunidad costera como la bestia de arrastre para carnada pesada."
                </span>
              </div>
            </div>

            {/* Right Column (Specifications table) */}
            <div className="lg:col-span-7">
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-xs bg-white">
                {[
                  { 
                    item: "Capacidad de Carga", 
                    value: "Carga máxima: 3.5 kg de arrastre bruto", 
                    explain: "Capacidad para llevar plomos de hasta 200g y carnadas enteras pesadas (lisas, calamares) sin esfuerzos mecánicos." 
                  },
                  { 
                    item: "Alcance Máximo de Lanzado", 
                    value: "Alcance máximo: 1.2 km de distancia real", 
                    explain: "Te coloca con solvencia en la zona de pozas profundas más lejanas, superando con creces la orilla costera." 
                  },
                  { 
                    item: "Cámara & Gimbal", 
                    value: "Gimbal 4K, 12 MP, 1/2.3\" CMOS, f/2.65", 
                    explain: "Estabilizado para transmisión digital directa de video. Permite estudiar la topología de la playa para un fijado de línea óptimo." 
                  },
                  { 
                    item: "Autonomía de Batería", 
                    value: "Tiempo de vuelo: 27 min de autonomía real", 
                    explain: "Suficiente autonomía para realizar múltiples mapeos y soltadas consecutivas de líneas sin recargas intermedias." 
                  },
                  { 
                    item: "Estanqueidad y Mar", 
                    value: "Sistema WaterProf con resistencia al viento nivel 7 y mar 5", 
                    explain: "Vuela estable y ancla firme incluso en días de ráfagas continuas de invierno y oleaje costero peruano duro." 
                  },
                  { 
                    item: "Control Remoto", 
                    value: "Control impermeable: IP54 con pantalla brillante", 
                    explain: "Soporta salpicaduras marinas directas, arena húmeda fina y llovizna densa playera sin contratiempos." 
                  },
                  { 
                    item: "Estructura y Anticorrosión", 
                    value: "PowerFlip™ + SeaSheld™ anticorrosión especial", 
                    explain: "Tratamiento anticorrosivo que evita deterioros por salitre marino, condensación costera y humedad progresiva." 
                  },
                  { 
                    item: "Peso y Dimensiones", 
                    value: "Peso: 3.78 kg | Dimensiones: 522 × 522 × 192 mm", 
                    explain: "Estructura de compuestos de policarbonato y fibra moldeada marina para una rigidez y anclaje brutales." 
                  },
                ].map((spec, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/50 transition duration-150 grid sm:grid-cols-12 gap-2 sm:gap-4 items-center"
                  >
                    <div className="sm:col-span-4">
                      <span className="font-display font-black text-neutral-850 text-xs sm:text-sm uppercase tracking-tight block">
                        {spec.item}
                      </span>
                    </div>
                    <div className="sm:col-span-8 space-y-1 text-left sm:border-l sm:border-neutral-100 sm:pl-4">
                      <span className="font-sans-dm font-bold text-[#ff4d00] text-sm sm:text-base block">
                        {spec.value}
                      </span>
                      <span className="font-sans-dm text-xs text-neutral-500 block leading-normal">
                        {spec.explain}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-right">
                <a 
                  href={getWhatsAppUrl(msgProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#ff4d00] hover:text-[#e04400] font-bold font-sans-dm uppercase tracking-widest"
                >
                  Solicitar cotización formal para Clubes de Pesca o particulares por WhatsApp →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN "CÓMO SE SIENTE COMPRARLO" (Tranquilidad y Ventaja Real local) */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        {/* Peruvian red glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-neutral-850/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-semibold text-xs uppercase tracking-widest block">
              ADQUIRIR EL PODER CON TOTAL RESPALDO LOCAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase mt-3 mb-6 leading-tight tracking-tight">
              ¿Por qué adquirir tu FD2 Max con SwellPro Perú?
            </h2>
            <p className="text-neutral-400 text-sm font-sans-dm">
              Invertir en una máquina de asalto como el FD2 Max requiere tener la absoluta seguridad de que el respaldo postventa, los tutoriales de vuelo y el mantenimiento local estarán siempre vigentes:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Capacitación de Soltado Presencial</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                Un drone de gran empuje requiere conocer técnicas apropiadas de tensión de línea. Te brindamos de forma presencial y complementaria por tu compra una asesoría de campo en playa. Aprenderás a nivelar las fuerzas mecánicas, calibrar la soltada remota y retornar de forma autónoma con total seguridad y soltura.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Taller Con Repuesto Directo</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                En nuestro local físico de Lima poseemos un stock permanente de partes para el FD2 Max: hélices reforzadas, trenes de aterrizaje rígidos, baterías de alto rendimiento, conectores, sensores ToF y motores de alto torque. Resolveremos cualquier eventualidad mecánica local sin esperas de tres meses de importación internacional.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Soporte Continuo por WhatsApp</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                Entendemos que el mar de nuestra costa tiene características complejas de vientos por la tarde. Estamos listos por WhatsApp para darte soporte técnico, guiarte sobre el lavado del equipo con agua dulce para evitar depósitos de salitre y recomendarte los mejores aparejos para drones. Nunca estarás solo.
              </p>
            </div>

          </div>

          <div className="mt-16 text-center border-t border-neutral-800 pt-10">
            <p className="text-xs uppercase tracking-widest font-bold text-[#ff4d00]">
              ✓ EL PODER DE LA CARGA, RESPALDADO AL 100%
            </p>
            <p className="text-neutral-400 italic font-sans-dm text-sm mt-2 max-w-xl mx-auto">
              "El Fisherman FD2 Max te colocará en la cima de tu liga local de pesca de orilla. Nosotros nos encargamos de que vueles siempre con calma y el soporte que mereces como profesional."
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN — EVIDENCIA DE CAMPO REAL EXCLUSIVA FD2 MAX */}
      <InteractiveBentoGallery
        id="fd2-evidencia"
        title="Análisis Fotográfico"
        subtitle="Colección de Estudio SwellPro"
        description="Galería técnica del Fisherman FD2 Max. Inspección de componentes estancos, sistemas de protección y estructura del chasis de alta tecnología."
        mediaItems={fd2GalleryImages}
        whatsappMessagePrefix="Hola SwellPro Perú, he estado revisando su galería de evidencias reales en uso con el Fisherman FD2 Max. Deseo recibir más información y coordinar detalles sobre este equipo."
      />

      {/* SECCIÓN COMPARATIVA DE MODELOS */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              VALIDAR TU DECISIÓN DE COMPRA
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 tracking-tight">
              Tabla Comparativa de la Flota SwellPro Perú
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans-dm font-medium">
              Elige el equipo ideal con base en tus objetivos particulares sobre la arena o rompiente costera:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-neutral-150 min-w-[750px] rounded-2xl overflow-hidden shadow-xs">
              <thead>
                <tr className="bg-neutral-50 text-neutral-800 font-display font-bold uppercase text-[10px] sm:text-xs tracking-wider border-b border-neutral-200">
                  <th className="p-4 sm:p-5">Atributo</th>
                  <th className="p-4 sm:p-5">SwellPro FD1S</th>
                  <th className="p-4 sm:p-5 bg-orange-50 border-x border-orange-100 text-[#ff4d00]">
                    🔥 SwellPro FD2 Max (Este Drone)
                  </th>
                  <th className="p-4 sm:p-5">SwellPro FD3</th>
                  <th className="p-4 sm:p-5">SplashDrone 4 Plus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-150 font-sans-dm text-xs sm:text-sm text-neutral-750">
                
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Enfoque Principal</td>
                  <td className="p-4 sm:p-5">Iniciación amigable y pesca práctica ligera</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-neutral-900 italic">
                    Pesca de costa pesada, máxima capacidad de arrastre con carnada viva
                  </td>
                  <td className="p-4 sm:p-5">Visión en tiempo real con cámara Gimbal 4K y precisión en pozas</td>
                  <td className="p-4 sm:p-5 font-bold">Plataforma sumergible multipropósito Pro</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Carga Máxima de Arrastre</td>
                  <td className="p-4 sm:p-5">Hasta 2.2 Kilogramos</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-extrabold text-[#ff4d00] text-sm">
                    Hasta 3.5 Kilogramos (Carga máxima)
                  </td>
                  <td className="p-4 sm:p-5">Hasta 2 kg (Capacidad máxima de carga)</td>
                  <td className="p-4 sm:p-5">Hasta 2.0 Kilogramos</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Alcance Operativo Real</td>
                  <td className="p-4 sm:p-5">1.3 Kilómetros</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-[#ff4d00]">
                    1.2 Kilómetros (Alcance máximo)
                  </td>
                  <td className="p-4 sm:p-5">1.2 km</td>
                  <td className="p-4 sm:p-5 font-bold text-neutral-800">7.0 Kilómetros</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Tiempo de Vuelo</td>
                  <td className="p-4 sm:p-5">27 minutos</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-800 font-bold">
                    ⏱ 27 minutos (Tiempo de vuelo)
                  </td>
                  <td className="p-4 sm:p-5">27 min</td>
                  <td className="p-4 sm:p-5">29 minutos</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Cámara Incluida</td>
                  <td className="p-4 sm:p-5">Opcional externa de fácil adición</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-800 font-medium">
                    🎦 Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65
                  </td>
                  <td className="p-4 sm:p-5">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65, equivalente a 25mm</td>
                  <td className="p-4 sm:p-5">Gimbal Estabilizado 3-Ejes 4K y Visión Nocturna</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Estabilidad en Rompiente</td>
                  <td className="p-4 sm:p-5">Impermeable IP67 simple</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-medium text-neutral-850">
                    Sistema WaterProf con resistencia al viento nivel 7 y mar 5 (Herraje IP67)
                  </td>
                  <td className="p-4 sm:p-5">Estanqueidad IP67 con resistencia viento 7, mar 5 y SeaSheld™</td>
                  <td className="p-4 sm:p-5 font-bold">Hermético grado militar</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Control Remoto</td>
                  <td className="p-4 sm:p-5">Estándar IP54</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-neutral-850">
                    SwellPro IP54 (Control impermeable)
                  </td>
                  <td className="p-4 sm:p-5">IP54 Impermeable</td>
                  <td className="p-4 sm:p-5">IP66 Waterproof con pantalla</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Peso y Dimensiones</td>
                  <td className="p-4 sm:p-5">No especificado</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-800">
                    Peso: 3.78 kg | Dimensiones: 522 × 522 × 192 mm
                  </td>
                  <td className="p-4 sm:p-5">2.54 kg | 372 × 372 × 202 mm</td>
                  <td className="p-4 sm:p-5">No especificado</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Sistemas de Seguridad</td>
                  <td className="p-4 sm:p-5">PowerFlip™</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-[#ff4d00] font-bold">
                    PowerFlip™ + SeaSheld™ Anticorrosión
                  </td>
                  <td className="p-4 sm:p-5">PowerFlip™ + SeaSheld™ + Sistema BAP</td>
                  <td className="p-4 sm:p-5">PowerFlip™ + SeaSheld™</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-neutral-50 rounded-2xl p-6 border border-neutral-100 max-w-2xl mx-auto">
            <span className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wider block mb-2">
              ¿Deseas consultarle tus dudas sobre la tabla directo a un asesor?
            </span>
            <p className="text-neutral-500 font-sans-dm text-xs mb-4 animate-pulse">
              Nuestro WhatsApp corporativo técnico oficial en Lima atiende de inmediato tu consulta.
            </p>
            <a 
              href={getWhatsAppUrl(msgCompare)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-[#ff4d00]"
              style={{
                color: "white",
                display: "inline-block",
                padding: "12px 24px",
                borderRadius: "12px",
                fontSize: "12px",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "all 0.15s ease",
              }}
            >
              Hablar con un asesor comparativo de flota →
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN RESPALDO LOCAL RESUMIDO */}
      <section className="py-20 bg-neutral-50-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-1.5 bg-[#ff4d00] mx-auto rounded-full mb-6"></div>
          
          <h2 className="text-2xl sm:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mb-4">
            Respaldo Local Exclusivo
          </h2>
          
          <p className="text-neutral-600 font-sans-dm text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            En SwellPro Perú le damos la espalda a la venta rápida sin acompañamiento. Nuestro taller físico, la disponibilidad permanente al 100% de repuestos originales listos en Lima y la capacitación guiada por profesionales te garantizan que tu inversión por el FD2 Max estará plenamente respaldada al instante.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">12 MESES</span>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block mt-1 tracking-wider">GARANTÍA TOTAL</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">SIEMPRE</span>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block mt-1 tracking-wider">HÉLICES Y PARTES</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">LIMA, PE</span>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block mt-1 tracking-wider">DIAGNÓSTICO EN LOCAL</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">INCLUIDA</span>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block mt-1 tracking-wider">CLASE DE LANCE EN PLAYA</span>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES DEL FD2 MAX */}
      <section className="py-20 bg-white border-t border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              ACLARAMOS TUS DUDAS DE INMEDIATO
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mt-2 mb-4">
              Preguntas Frecuentes - FD2 Max
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué tipo de carnadas puede traccionar el Fisherman FD2 Max de forma real?",
                a: "El FD2 Max posee un motor de alta potencia con hélices de gran paso de paso agresivo optimizado. Esto le permite despegar y arrastrar con solvencia lisas enteras de buen porte, cabezas de pejerrey, calamares grandes de más de 300g, plomadas pesadas de destorcedor tipo araña de hasta 200g y aparejos con múltiples anzuelos. Puede empujar con total firmeza un arrastre de hasta 3.5 kg."
              },
              {
                q: "¿El drone FD2 Max flota en agua dulce o salada?",
                a: "Sí. Su fuselaje está herméticamente sellado al vacío y cuenta con un nivel de estanqueidad grado comercial IP67. Su centro de flotación está balanceado para quedar descansando de pie sobre el oleaje marino indefinidamente. Si el viento de racha extrema lo voltea boca abajo, se emplea el switch de control PowerFlip y el drone gira sobre sí mismo volviendo a flotar de pie para un despegue inmediato desde el agua."
              },
              {
                q: "¿Qué alcance real tiene para el lanzado de línea?",
                a: "Tiene un alcance de transmisión digital de 1.2 kilómetros óptimo. Esto te permite salir con total tranquilidad de su radio de visión de orilla y situarte de lleno sobre de la rompiente lejana de la rompiente crítica, posicionando el aparejo en las profundidades de la poza donde los peces de gran tamaño transitan cómodos."
              },
              {
                q: "¿Cómo es el control impermeable IP54?",
                a: "El control remoto del FD2 Max cuenta con protección IP54 contra polvo seco, arena húmeda fina y salpicaduras continúas de agua de mar. Viene con una pantalla brillantes a color que te enseña los parámetros automáticos de vuelo y altitud, además de la transmisión digital en tiempo real de lo que la cámara Gimbal 4K está registrando bajo el agua."
              },
              {
                q: "¿Tienen todas las piezas y servicio postventa en caso de percances?",
                a: "Absolutamente sí. Como representantes oficiales en Perú, poseemos stock listo al instante para el Fisherman FD2 Max: hélices reforzadas, carcasas herméticas, tarjetas lógicas, baterías LIHV de alto rendimiento, conectores SeaSheld™ y motores en Lima. Nuestro laboratorio físico garantiza diagnósticos y calibraciones rápidas por ingenieros peruanos autorizados."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-50 border border-neutral-100/80 rounded-2xl p-5 hover:bg-neutral-50/80 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-neutral-900 text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#ff4d00] transition duration-200 shrink-0 ${
                      activeFaq === idx ? "transform rotate-180" : ""
                    }`} 
                  />
                </button>
                {activeFaq === idx && (
                  <p className="mt-4 font-sans-dm text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-neutral-200/50 pt-4">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA FINAL EMOCIONAL */}
      <footer className="py-20 text-center bg-black text-white border-t border-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <span className="text-[#ff4d00] font-display font-black text-[10px] uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full inline-block">
            SWELLPRO PERÚ — SOCIO TÉCNICO OFICIAL
          </span>
          
          <h2 className="text-3.5xl sm:text-5xl font-display font-black text-white uppercase mt-6 mb-4 tracking-tight leading-none">
            La potencia de costa te espera.
          </h2>
          
          <p className="text-neutral-400 font-sans-dm text-sm leading-relaxed mb-8">
            Coloca tu plomada donde nadie más llega, multiplica tus capturas dominando los pozos lejanos y vuela con la tranquilidad absoluta de tener un respaldo local e inmediato de por vida en el litoral peruano.
          </p>

          <a
            href={getWhatsAppUrl(msgFooter)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest py-4.5 px-10 rounded-2xl transition duration-150 inline-block shadow-lg shadow-[#ff4d00]/20 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Quiero mi FD2 Max por WhatsApp
          </a>

          {/* Social handles */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <a 
              href="https://www.facebook.com/share/195TLy8GEY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-neutral-400 flex items-center justify-center hover:scale-105" 
              aria-label="Facebook Oficial SwellPro"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/swellproperu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-neutral-400 flex items-center justify-center hover:scale-105" 
              aria-label="Instagram Oficial SwellPro"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@swellproperu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-neutral-400 flex items-center justify-center hover:scale-105" 
              aria-label="TikTok Oficial SwellPro"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.18-.3-.21v6.94c0 5.59-4.56 10.13-10.15 10.13-5.59 0-10.13-4.54-10.13-10.13C0 9.4 4.54 4.86 10.13 4.86c.38 0 .76.02 1.14.07v4.09c-.38-.05-.76-.07-1.14-.07-3.33 0-6.04 2.71-6.04 6.04 0 3.33 2.71 6.04 6.04 6.04 3.33 0 6.04-2.71 6.04-6.04V.02z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com/@swellproperu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-neutral-400 flex items-center justify-center hover:scale-105" 
              aria-label="YouTube Oficial SwellPro"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          <div className="mt-12 text-neutral-600 font-sans-dm text-[11px] border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © 2026 SwellPro Perú. Único Representante Técnico Oficial. Todos los derechos reservados.
            </div>
            <a 
              href="../index.html" 
              className="text-neutral-500 hover:text-[#ff4d00] uppercase font-bold tracking-wider text-[10px] flex items-center gap-1"
            >
              Volver al Inicio
            </a>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE SIEMPRE VISIBLE DE WHATSAPP (Mantenemos coherencia) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={getWhatsAppUrl(msgFooter)}
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).playPopSound) {
              (window as any).playPopSound();
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition duration-200 transform hover:scale-105"
          title="Consúltanos al WhatsApp Directo"
          id="whatsapp-floating-button"
        >
          {/* SVG WhatsApp Icon original */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.518 0 10.007-4.489 10.01-10.007.002-2.673-1.025-5.186-2.893-7.058C16.596 1.666 14.1 .64 11.66 24V2h-.1C6.014 2.1 1.5 6.6 1.49 12.1c0 1.7.45 3.3 1.35 4.7l-1 3.65 3.8-.996zM17.5 14.3c-.3-.15-1.7-.85-2-.95-.25-.1-.45-.15-.65.15-.2.3-.75.95-.9 1.1-.15.2-.3.2-.6.05-1.15-.5-1.95-.9-2.7-1.55-.6-.5-1.2-1.15-1.6-1.8-.15-.3 0-.45.15-.6.1-.1.25-.3.35-.45.1-.1.15-.25.25-.4.1-.15.05-.3 0-.45-.05-.15-.65-1.55-.9-2.15-.25-.6-.5-.5-.65-.5h-.55c-.2 0-.5.1-.75.4-.25.3-1 1-1 2.4s1 2.75 1.15 2.95c.15.2 2 3.05 4.8 4.25.7.3 1.2.45 1.6.6.7.2 1.35.15 1.85.1.55-.1 1.7-.7 1.95-1.35.25-.65.25-1.2.15-1.35-.1-.2-.3-.3-.6-.45z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
