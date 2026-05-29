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
  Eye,
  Target,
  Sparkles,
  Search,
  X,
  PhoneCall
} from "lucide-react";

// Helper for prefilled WhatsApp link
const getWhatsAppUrl = (text: string) => {
  return `https://api.whatsapp.com/send?phone=51949643347&text=${encodeURIComponent(text)}`;
};

// GALERÍA ESPECÍFICA PREMIUM SWELLPRO FD3
const fd3GalleryItems = [
  {
    id: "fd3-galeria-capturas-01",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933451/fd3-image-02_he20xj.jpg",
    tag: "Vista",
    title: "Vista del drone",
    desc: "Vista del equipo completo sobre una mesa."
  },
  {
    id: "fd3-galeria-capturas-02",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933450/fd3-image-15_tbt2kv.jpg",
    tag: "Control",
    title: "Control remoto",
    desc: "Detalle del mando con sus palancas y botones."
  },
  {
    id: "fd3-galeria-capturas-03",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933449/fd3-image-16_by5vdb.jpg",
    tag: "Hélices",
    title: "Hélice instalada",
    desc: "Detalle de una de las hélices lista para usar."
  },
  {
    id: "fd3-galeria-capturas-04",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933449/fd3-image-03_azjd6s.jpg",
    tag: "Mecanismo",
    title: "Pinza de soltado",
    desc: "Gancho en la parte inferior para llevar la carga."
  },
  {
    id: "fd3-galeria-capturas-05",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933448/fd3-image-01_p7jyan.jpg",
    tag: "Cámara",
    title: "Cámara delantera",
    desc: "Cámara que gira para ver durante el vuelo."
  },
  {
    id: "fd3-galeria-capturas-06",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933446/fd3-image-10_ncvfer.jpg",
    tag: "Detalle",
    title: "Parte trasera",
    desc: "Luces indicadoras y antenas detrás del equipo."
  },
  {
    id: "fd3-galeria-capturas-07",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933447/fd3-image-17_e1q8iz.jpg",
    tag: "Mecanismo",
    title: "Disparador de carga",
    desc: "Gancho para soltar el hilo con el mando."
  },
  {
    id: "fd3-galeria-capturas-08",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933445/fd3-image-12_qwroy3.jpg",
    tag: "Fuselaje",
    title: "Chasis naranja",
    desc: "Cuerpo principal de color llamativo para buena visibilidad."
  },
  {
    id: "fd3-galeria-capturas-09",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933444/fd3-image-14_rrsm2e.jpg",
    tag: "Batería",
    title: "Batería extraíble",
    desc: "Batería recargable que alimenta el equipo."
  },
  {
    id: "fd3-galeria-capturas-10",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933443/fd3-image-11_z3epa5.jpg",
    tag: "Sellado",
    title: "Goma de sellado",
    desc: "Borde de goma que evita filtraciones en el chasis."
  },
  {
    id: "fd3-galeria-capturas-11",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933442/fd3-image-13_amw3nh.jpg",
    tag: "Cámara",
    title: "Lente de la cámara",
    desc: "Vidrio protector de la cámara frontal."
  },
  {
    id: "fd3-galeria-capturas-12",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933441/fd3-image-09_nyyfdq.jpg",
    tag: "Cargador",
    title: "Cargador eléctrico",
    desc: "Cargador para rellenar la batería de forma segura."
  },
  {
    id: "fd3-galeria-capturas-13",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933441/fd3-image-08_ngiopi.jpg",
    tag: "Soporte",
    title: "Patas de apoyo",
    desc: "Soportes tubulares para mantener el drone elevado de la base."
  },
  {
    id: "fd3-galeria-capturas-14",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933440/fd3-image-05_yivhd4.jpg",
    tag: "Mecanismo",
    title: "Base de conexión",
    desc: "Entrada para el dispositivo soltador de plomadas."
  },
  {
    id: "fd3-galeria-capturas-15",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933440/fd3-image-04_qltlkx.jpg",
    tag: "Preparación",
    title: "Drone sobre la mesa",
    desc: "El equipo completo visto desde arriba."
  },
  {
    id: "fd3-galeria-capturas-16",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933439/fd3-image-07_o0ahno.jpg",
    tag: "Control",
    title: "Joysticks del mando",
    desc: "Palancas de control del radio control remoto."
  },
  {
    id: "fd3-galeria-capturas-17",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779933439/fd3-image-06_qz20uf.jpg",
    tag: "Estructura",
    title: "Detalle de motores",
    desc: "Motor resistente de alta fuerza debajo de la hélice."
  }
];

export default function FD3Page() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<typeof fd3GalleryItems[0] | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Pre-filled WhatsApp message templates
  const msgHero = "Hola SwellPro Perú, estoy muy interesado en el Fisherman FD3 (el drone de precisión con cámara Gimbal 4K en vivo). Deseo recibir asesoría técnica y cotización formal de stock local.";
  const msgWhy = "Hola SwellPro Perú, quiero saber cómo la cámara en vivo del Fisherman FD3 me ayuda a leer el mar de mi playa habitual y encontrar pozos de pesca. ¿Me asesoran por favor?";
  const msgBenefits = "Hola SwellPro Perú, deseo información detallada sobre la planificación de calado y el sistema de suelta electromecánica de 2 kg del Fisherman FD3.";
  const msgProduct = "Hola SwellPro Perú, he leído la ficha técnica del FD3 con cámara Gimbal 4K y control impermeable. ¿Tienen stock en Lima o envían a provincias con garantía local?";
  const msgCompare = "Hola SwellPro Perú, comparé el FD3 en su tabla de flota y me parece el modelo más equilibrado en visión y precisión. Me gustaría conversar con un asesor técnico.";
  const msgFooter = "Hola SwellPro Perú, estoy listo para revolucionar mi pesca de costa con la ventaja visual del Fisherman FD3. Solicito comunicarme con un especialista técnico de inmediato.";

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

      {/* Sutil bandera peruana decorativa y sumamente discreta en el extremo superior */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#ff4d00]" />
        <div className="h-full w-1/3 bg-neutral-100" />
        <div className="h-full w-1/3 bg-[#ff4d00]" />
      </div>

      {/* STICKY HEADER INTERNAL NAV */}
      <nav id="fd3-nav" className="border-b border-neutral-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="../index.html" 
            id="back-btn-home"
            className="flex items-center gap-2 text-neutral-550 hover:text-[#ff4d00] transition font-sans-dm text-xs sm:text-sm font-bold uppercase tracking-wider"
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
            id="quick-whatsapp-quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl transition shadow-md shadow-[#ff4d00]/15"
          >
            Preguntar Stock
          </a>
        </div>
      </nav>

      {/* HERO SECTION - CLEAN, LIGHT, HIGH-PRECISION VISUAL */}
      <header id="fd3-hero" className="relative py-16 lg:py-24 overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50 via-white to-white">
        {/* Subtle radial ambient orange and light-grey glows for analytical focus */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-neutral-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-neutral-900 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block font-display">
                  👁️ EXPLORACIÓN MARINA Y PRECISIÓN CIENTÍFICA
                </span>
                <span className="bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full inline-block font-display">
                  FD3
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-none uppercase tracking-tight text-neutral-900">
                Ve la estructura. <br />
                <span className="text-[#ff4d00]">Apunta a la captura.</span>
              </h1>
              
              <p className="text-neutral-600 font-sans-dm text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                El drone de pesca impermeable que te da ojos reales sobre el agua para leer corrientes, ubicar canales de arena profunda y lanzar tu carnada con absoluta precisión y confianza. No más tiros a ciegas.
              </p>

              {/* Bold premium benefits points */}
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-700 font-sans-dm font-semibold pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Cámara Gimbal 4K en tiempo real</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>2 kg de capacidad de carga útil</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>1.2 km de lanzamiento estable</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Protección anticorrosión SeaSheld™</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={getWhatsAppUrl(msgHero)}
                  id="cta-hero-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4.5 px-8 rounded-2xl text-center shadow-xl shadow-[#ff4d00]/20 transition-all duration-250 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Anchor className="w-4 h-4" />
                  Quiero asesoría por WhatsApp
                </a>
                
                <a 
                  href="#por-que-fd3"
                  id="cta-hero-why"
                  className="border border-neutral-300 hover:border-neutral-400 bg-white/80 text-neutral-750 font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl text-center transition-all duration-200 shadow-sm"
                >
                  Ver por qué el FD3 es distinto
                </a>
              </div>

              {/* Macro Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-100 max-w-xl">
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-4xl block">2 kg</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Carga de precisión</span>
                </div>
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-4xl block font-sans-dm">1.2 km</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Lanzamiento Máx</span>
                </div>
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-4xl block">Gimbal 4K</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Visión en vivo</span>
                </div>
              </div>
            </div>

            {/* Right Transparent Product Showcase */}
            <div className="lg:col-span-12 lg:col-start-8 lg:col-end-13 relative flex justify-center items-center">
              <div className="absolute w-80 h-80 bg-[#ff4d00]/8 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute w-[290px] h-[290px] bg-neutral-100/80 rounded-full -z-20 border border-neutral-200/50"></div>
              
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/swellpro-fisherman-fd3-drone-thumnail_mdxsb2.png" 
                alt="SwellPro Fisherman FD3 de SwellPro Perú" 
                className="w-full max-w-sm relative z-10 transition duration-500 hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.1)]"
              />

              {/* Floater Cert */}
              <div className="absolute bottom-4 right-4 sm:right-6 bg-white border border-neutral-200 p-3.5 rounded-xl shadow-lg flex items-center gap-2.5 z-20">
                <div className="w-1.5 h-6 bg-[#ff4d00] rounded-sm" />
                <div className="text-left">
                  <span className="text-[9px] text-neutral-400 block font-bold uppercase tracking-wider">GARANTÍA LOCAL</span>
                  <span className="text-[11px] text-neutral-900 block font-display font-extrabold leading-none uppercase">1 año en Perú 🇵🇪</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* BARRA DE CREDIBILIDAD DE 5 HITOS (Coherencia Visual SwellPro) */}
      <section id="credibilidad-bar" className="bg-neutral-50 py-10 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 items-center text-left">
            
            {/* item 1 */}
            <div id="cred-rep" className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/40 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <Award className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Representante Oficial</h4>
                <p className="text-[11px] text-neutral-550 mt-0.5 font-sans-dm">
                  Único canal legítimo directo en el país.
                </p>
              </div>
            </div>

            {/* item 2 */}
            <div id="cred-soporte" className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/40 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <Wrench className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Soporte Técnico Local</h4>
                <p className="text-[11px] text-neutral-550 mt-0.5 font-sans-dm">
                  Laboratorio propio de calibración en Lima.
                </p>
              </div>
            </div>

            {/* item 3 */}
            <div id="cred-garantia" className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/40 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Garantía Real</h4>
                <p className="text-[11px] text-neutral-550 mt-0.5 font-sans-dm">
                  12 meses de amparo directo de fábrica.
                </p>
              </div>
            </div>

            {/* item 4 */}
            <div id="cred-capacitación" className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/40 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <GraduationCap className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Capacitación</h4>
                <p className="text-[11px] text-neutral-550 mt-0.5 font-sans-dm">
                  Clase de vuelo y soltado incluía en playa.
                </p>
              </div>
            </div>

            {/* item 5 */}
            <div id="cred-repuestos" className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200/40 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2 rounded-lg shrink-0">
                <Users className="w-4 h-4 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs uppercase tracking-tight">Repuestos Listos</h4>
                <p className="text-[11px] text-neutral-550 mt-0.5 font-sans-dm">
                  Hélices, baterías y carcasas en stock.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN "POR QUÉ FD3" - CONECTAR CON INGENIERÍA Y PRECISIÓN */}
      <section id="por-que-fd3" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] text-[#ff4d00] font-black uppercase tracking-widest bg-neutral-100 px-4 py-2 rounded-full font-display">
            SABER LEER EL AGUA ES UNA VENTAJA NATURAL
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-900 mt-6 mb-8 uppercase tracking-tight">
            Diseñado para el pescador de costa que no deja nada a la suerte.
          </h2>

          <div className="bg-neutral-950 text-neutral-105 p-8 sm:p-12 rounded-3xl text-left relative overflow-hidden shadow-xl" id="why-card-fd3">
            {/* Visual background hint */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d00]/5 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-neutral-300 font-sans-dm text-base sm:text-lg leading-relaxed mb-6">
              El mar peruano de costa es hermoso pero dinámico y engañoso. Lanzar tu aparejo con fuerza física a ciegas, esperando que caiga casualmente en una fosa activa, disminuye un gran porcentaje tus probabilidades de éxito. El verdadero deportista busca la precisión: necesita leer las canales profundas entre rompeolas, ubicar las corrientes divisorias, y depositar la carnada intacta donde se alimentan especies cotizadas como corvinas y lenguados.
            </p>

            <blockquote className="border-l-4 border-[#ff4d00] pl-4 sm:pl-6 my-6 italic text-white font-bold font-display text-sm sm:text-lg bg-neutral-900 py-4 pr-4 rounded-r-lg">
              "El Fisherman FD3 convierte tu instinto de pescador experimentado en una ventaja visual invaluable. Sus ojos digitales graban y transmiten el fondo en directo, garantizando que cada lanzamiento sea quirúrgico."
            </blockquote>

            <p className="text-neutral-400 font-sans-dm text-sm sm:text-base leading-relaxed">
              Con un radio de acción sólido de 1.2 km y un soporte de arrastre de hasta 2 kg, el FD3 te permite explorar cómodamente la orilla sin el castigo físico de lanzar la caña de forma exhaustiva una y otra vez. Te ubicas en el punto exacto, monitoreas el movimiento de la espuma y permites que el mecanismo electromecánico de soltado deposite tu pejerrey o carnada viva de forma perfecta.
            </p>

            <div className="mt-8 pt-8 border-t border-neutral-850 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-neutral-500 font-display text-xs font-bold uppercase tracking-wide">
                🔥 LA PRECISIÓN QUE DEFINE TU JORNADA
              </span>
              <a 
                href={getWhatsAppUrl(msgWhy)}
                id="cta-why-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-200 text-center cursor-pointer shadow-md shadow-[#ff4d00]/25"
              >
                Preguntar por WhatsApp de Asistencia →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE BENEFICIOS CLAVE (Ingeniería de Visión) */}
      <section id="beneficios" className="py-24 bg-neutral-50/50 border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-semibold text-xs uppercase tracking-widest block">
              INGENIERÍA EXCLUSIVA SWELLPRO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 leading-tight tracking-tight">
              Especificaciones de Visión y Control
            </h2>
            <p className="text-neutral-550 text-xs sm:text-sm font-sans-dm">
              Diseñado con el balance perfecto de resistencia náutica e inteligencia satelital de exploración:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit card 1 */}
            <div id="benefit-card-1" className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Video className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Video en Vivo y Gimbal 4K</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Exploración submarina constante en alta definición de imagen. El gimbal servoasistido permite apuntar y ajustar la cámara de forma remota para divisar bancos de comida, peces, o relieve rocoso sin perder estabilidad en el drone.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Estudio submarino táctico
              </div>
            </div>

            {/* Benefit card 2 */}
            <div id="benefit-card-2" className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Wind className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Arrastre Confiable de 2 kg</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Perfectamente balanceado para trasladar plomadas de tamaño deportivo reglamentarias y carnada entera o viva de buen tamaño sin perjudicar el desempeño del rotor ni la duración de la batería de alto voltaje.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Tracción estable de calada
              </div>
            </div>

            {/* Benefit card 3 */}
            <div id="benefit-card-3" className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Navigation className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Lanzamiento Estable de 1.2 km</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Cruza con absoluta comodidad el oleaje costero agresivo y las rompientes rocosas de costa. Permite depositar tu línea a una distancia donde los grandes nadan y patrullan sin temores a vibraciones ni presencia humana.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Rango satelital extendido
              </div>
            </div>

            {/* Benefit card 4 */}
            <div id="benefit-card-4" className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Compass className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Punto de Carnada Guiado</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Posee anclaje de posición con tecnología GPS 9.0 integrado. Mapea la fosa de tu playa habitual, guarda el punto óptimo y repite la soltada exacta en tus siguientes lanzamientos con la tranquilidad de un sistema de vuelo milimétrico.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Retorno redundante seguro GPS
              </div>
            </div>

            {/* Benefit card 5 */}
            <div id="benefit-card-5" className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <ShieldCheck className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Control Estanco Impermeable</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  El control remoto del FD3 tiene protección contra arena fina, salpicaduras de olas marinas y humedad. Su pantalla color retroiluminada se lee perfectamente a pleno sol de playa al mediodía sin reflejos molestos.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Resistencia IP54 de intemperie
              </div>
            </div>

            {/* Benefit card 6 */}
            <div id="benefit-card-6" className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-350 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Waves className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Armadura SeaShield™ Marina</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Carcasa sellada a nivel de laboratorio con aleaciones y empaques hidrófobos. Sus motores no sufren corrosión mecánica prematura por sedimentos, humedad extrema ni la evaporación salina inherente a la orilla del mar peruano.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Tecnología anticorrosión SeaShield™
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <a 
              href={getWhatsAppUrl(msgBenefits)}
              id="cta-benefits-quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4.5 px-8 rounded-2xl inline-flex items-center gap-2 shadow-lg shadow-[#ff4d00]/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Anchor className="w-4 h-4" /> Deseo consultar promociones y stock de accesorios locales
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE PRODUCTO: FICHA TÉCNICA E HIGHLIGHTS */}
      <section id="especificaciones" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              DETALLE OFICIAL EN PERÚ
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 tracking-tight">
              Especificaciones Técnicas Fisherman FD3
            </h2>
            <p className="text-neutral-550 text-xs sm:text-sm font-sans-dm">
              Diseño estructurado milimétricamente por ingenieros marinos para un pilotaje ágil y eficiente:
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Image Block with Floating badge) */}
            <div className="lg:col-span-12 lg:col-start-1 lg:col-end-6 relative flex flex-col items-center">
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-150 w-full flex justify-center items-center shadow-xs">
                <img 
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/swellpro-fisherman-fd3-drone-thumnail_mdxsb2.png" 
                  alt="Fisherman FD3 SwellPro Perú" 
                  className="w-full max-w-xs object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.07)] transform hover:scale-103 transition duration-500"
                />
              </div>
              <div className="mt-4 bg-[#ff4d00]/5 border border-[#ff4d00]/15 rounded-xl p-4 text-center max-w-xs">
                <span className="text-neutral-800 text-xs font-sans-dm font-bold leading-relaxed block">
                  "El modelo consagrado para quienes prefieren pescar con visión, inteligencia táctica y precisión visual."
                </span>
              </div>
            </div>

            {/* Right Column (Specifications Grid list) */}
            <div className="lg:col-span-12 lg:col-start-6 lg:col-end-13">
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-xs bg-white" id="specs-list-fd3">
                {[
                  { 
                    item: "Capacidad de Carga", 
                    value: "Capacidad máxima de carga: 2 kg", 
                    explain: "Nivel ideal para arrastre balanceado de aparejos pesados, cebo vivo y bait casting de precisión." 
                  },
                  { 
                    item: "Alcance Operativo", 
                    value: "Alcance máximo: 1.2 km", 
                    explain: "Rango operativo sólido de distancia real de RF optimizada para costa y playas bravas." 
                  },
                  { 
                    item: "Control Remoto", 
                    value: "Control impermeable: IP54", 
                    explain: "Mando a distancia impermeable protegido contra salpicaduras de agua de mar y arena fina costera." 
                  },
                  { 
                    item: "Cámara & Sensor", 
                    value: "Cámara: Gimbal 4K, 12 MP, 1/2.3\" CMOS, f/2.65, equivalente a 25mm", 
                    explain: "Visión nítida HD con servoestabilidad para leer el agua, detectar canales y anclar con precisión." 
                  },
                  { 
                    item: "Peso del Drone", 
                    value: "Peso: 2.54 kg", 
                    explain: "Estructura de compuestos de policarbonato y resina marina con rigidez ideal para resistir rachas de viento." 
                  },
                  { 
                    item: "Dimensiones", 
                    value: "Dimensiones: 372 × 372 × 202 mm", 
                    explain: "Formato aerodinámico compacto y ágil que facilita el pilotaje táctico y un viaje cómodo a todas tus playas." 
                  },
                  { 
                    item: "Tiempo de Vuelo", 
                    value: "Tiempo de vuelo: 27 min", 
                    explain: "Autonomía de vuelo óptima y real con descarga pasiva inteligente para resguardo de celdas." 
                  },
                  { 
                    item: "Resistencia Al Viento", 
                    value: "Resistencia al viento nivel 7", 
                    explain: "Estabilidad excepcional en vuelo que soporta ráfagas violentas del Pacífico peruano." 
                  },
                  { 
                    item: "Estado del Mar", 
                    value: "Estado del mar 5", 
                    explain: "Preparado para caídas accidentales y oleajes duros sin comprometer la aeronavegabilidad costera." 
                  },
                  { 
                    item: "Anticorrosión Marina", 
                    value: "SeaSheld™ anticorrosión", 
                    explain: "Tratamiento de sellado anticorrosivo avanzado en conectores, motores brushless y mecanismos." 
                  },
                  { 
                    item: "Autovuelco", 
                    value: "PowerFlip™", 
                    explain: "Sistema de auto-volteo que endereza el drone en el mar si es volteado por una ola en la orilla." 
                  },
                  { 
                    item: "Asistencia de Vuelo", 
                    value: "Sistema BAP", 
                    explain: "Sistema BAP (Barómetro Asistido de Calado / Presión) que optimiza la liberación y el posicionamiento del sedal." 
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
                      <span className="font-sans-dm font-bold text-[#ff4d00] text-sm sm:text-base block animate-fade-in">
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
                  id="specs-cta-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#ff4d00] hover:text-[#e04400] font-bold font-sans-dm uppercase tracking-widest"
                >
                  Solicitar cotización formal para Clubes de Pesca o deportistas por WhatsApp →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN “CÓMO SE SIENTE COMPRARLO” (Prestigio, Tranquilidad y Control) */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="como-se-siente-seccion">
        {/* Subtle red indicator and gray circles */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-85 h-85 bg-neutral-850/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-semibold text-xs uppercase tracking-widest block">
              ADQUIRIR VISIÓN INTELIGENTE DIRECTA
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase mt-3 mb-6 leading-tight tracking-tight">
              ¿Por qué adquirir tu FD3 con SwellPro Perú?
            </h2>
            <p className="text-neutral-450 text-sm font-sans-dm">
              Invertir en tecnología para agua salada requiere tener la absoluta seguridad de que el respaldo postventa, la inducción de vuelo y los repuestos locales estarán listos ante cualquier reto:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div id="buy-feelings-1" className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <GraduationCap className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Clase de Vuelo en Playa</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                No queremos que vueles con estrés ni miedos de principiante. Con tu compra, te obsequiamos una sesión de inducción práctica personalizada. Te enseñamos a calibrar la brújula en la arena, controlar la tensión de tu línea de pesca ante el despegue, operar la cámara Gimbal y realizar retornos automáticos automotrices.
              </p>
            </div>

            {/* Card 2 */}
            <div id="buy-feelings-2" className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <Wrench className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Taller y Piezas en Lima</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                Como distribuidores oficiales autorizados, disponemos del stock permanente de componentes oficiales para el Fisherman FD3: hélices reemplazo directo, motores brushless de alto torque, carcasas hidrófobas, baterías LIHV extras y cables sueltas mecánicas. Atendemos tu caso de manera expedita en Lima.
              </p>
            </div>

            {/* Card 3 */}
            <div id="buy-feelings-3" className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <Users className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Acompañamiento Técnico</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                Entendemos que el comportamiento del viento en el Pacífico peruano cambia según la hora de la marea. Te brindamos un canal técnico directo en WhatsApp para responder cualquier duda de uso, recomendarte aparejos recomendados para drones y darte pautas de lavado de salitre tras tu jornada de playa.
              </p>
            </div>

          </div>

          <div className="mt-16 text-center border-t border-neutral-800 pt-10">
            <p className="text-xs uppercase tracking-widest font-bold text-[#ff4d00]">
              ✓ EL VALOR DE LA VISIÓN, RESPALDADO AL 100%
            </p>
            <p className="text-neutral-400 italic font-sans-dm text-sm mt-3 max-w-xl mx-auto">
              "El Fisherman FD3 es tu fosa de arena vista con nitidez, tu lanzamiento perfecto de carnada intacta y tu tranquilidad de pesca deportiva de fin de semana."
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN COMPARATIVA DE MODELOS (Coherencia Visual Completa) */}
      <section id="comparativa" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              REVISA LA FLOTA OFICIAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 tracking-tight">
              Tabla Comparativa SwellPro Perú
            </h2>
            <p className="text-neutral-550 text-xs sm:text-sm font-sans-dm font-medium">
              Compara de forma directa el balance técnico de nuestros modelos principales en el Perú:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-neutral-150 min-w-[750px] rounded-2xl overflow-hidden shadow-xs" id="fleet-table-fd3">
              <thead>
                <tr className="bg-neutral-50 text-neutral-800 font-display font-bold uppercase text-[10px] sm:text-xs tracking-wider border-b border-neutral-200">
                  <th className="p-4 sm:p-5">Atributo</th>
                  <th className="p-4 sm:p-5">SwellPro FD1S</th>
                  <th className="p-4 sm:p-5">SwellPro FD2 Max</th>
                  <th className="p-4 sm:p-5 bg-orange-50 border-x border-orange-100 text-[#ff4d00] text-center font-black">
                    🔥 SwellPro FD3 (Este Drone)
                  </th>
                  <th className="p-4 sm:p-5">SplashDrone 4 Plus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-150 font-sans-dm text-xs sm:text-sm text-neutral-750">
                
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Enfoque Principal</td>
                  <td className="p-4 sm:p-5">Iniciación práctica y vuelos fáciles de orilla</td>
                  <td className="p-4 sm:p-5">Carga de plomo y carnadas gigantes pesadas</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-900 font-extrabold italic text-center text-[13px]">
                     El balance ideal de visión marina, cámara 4K en vivo y precisión
                  </td>
                  <td className="p-4 sm:p-5 font-medium">Plataforma industrial sumergible avanzada</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Capacidad de Arrastre</td>
                  <td className="p-4 sm:p-5">Hasta 2.2 Kilogramos</td>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900">Hasta 3.5 Kilogramos (Carga máxima)</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-[#ff4d00] text-center text-sm">
                    Hasta 2 kg (Capacidad máxima de carga)
                  </td>
                  <td className="p-4 sm:p-5">Hasta 2.0 Kilogramos</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Alcance Operativo</td>
                  <td className="p-4 sm:p-5">1.3 Kilómetros</td>
                  <td className="p-4 sm:p-5 font-bold">1.2 Kilómetros (Alcance máximo)</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-neutral-800 text-center">
                    1.2 km (Alcance máximo)
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-neutral-800">7.0 Kilómetros</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Cámara & Transmisión</td>
                  <td className="p-4 sm:p-5">Opcional externa de rápido montaje</td>
                  <td className="p-4 sm:p-5 font-medium">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-neutral-850 text-center">
                    🎦 Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65, equivalente a 25mm
                  </td>
                  <td className="p-4 sm:p-5">Gimbal 3-Ejes 4K y opción de Visión Nocturna</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Herrajes y Mar</td>
                  <td className="p-4 sm:p-5">Sumergible IP67 básico</td>
                  <td className="p-4 sm:p-5">Sistema WaterProf con resistencia viento 7 y mar 5 (PowerFlip™)</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-800 text-center">
                    Estanqueidad IP67 con resistencia viento 7, mar 5, PowerFlip™ y SeaSheld™ anticorrosión
                  </td>
                  <td className="p-4 sm:p-5">Sellado de policarbonato grado militar militar IP67</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-neutral-50 rounded-2xl p-6 border border-neutral-100 max-w-2xl mx-auto" id="compare-consult-card">
            <span className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wider block mb-2">
              ¿Quieres consultarle tus dudas técnicas sobre la tabla a un asesor?
            </span>
            <p className="text-neutral-500 font-sans-dm text-xs mb-4">
              Nuestro WhatsApp corporativo oficial en Lima atiende de inmediato tu chat de pesca para evaluar tu playa usual de salida.
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
              Conversar con un especialista de flota →
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN RESPALDO LOCAL RESUMIDO CON REASEGUROS */}
      <section className="py-20 bg-neutral-50/50" id="respaldo-adicional">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-1.5 bg-[#ff4d00] mx-auto rounded-full mb-6"></div>
          
          <h2 className="text-2xl sm:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mb-4">
            Respaldo de SwellPro Perú
          </h2>
          
          <p className="text-neutral-600 font-sans-dm text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Comprar un drone de alto valor con nosotros te garantiza acompañamiento pleno desde el día uno. Te asesoramos por WhatsApp, resolvemos incidentes mecánicos en tiempo récord dentro de nuestro local técnico en Lima y te ayudamos con la disponibilidad completa de consumibles listos para despacho.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">12 MESES</span>
              <span className="text-[10px] text-neutral-450 uppercase font-bold block mt-1 tracking-wider">GARANTÍA INTEGRAL</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">AL 100%</span>
              <span className="text-[10px] text-neutral-450 uppercase font-bold block mt-1 tracking-wider">MANTENIMIENTO LISTO</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">LIMA, PERÚ</span>
              <span className="text-[10px] text-neutral-450 uppercase font-bold block mt-1 tracking-wider">TALLER CERTIFICADO</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-black text-lg sm:text-xl block">GRATUITA</span>
              <span className="text-[10px] text-neutral-450 uppercase font-bold block mt-1 tracking-wider">CLASE PRÁCTICA PLAYERA</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FD3 SPECIAL PREMIUM FIELD EVIDENCE GALLERY */}
      <section id="fd3-evidencia" className="py-24 bg-neutral-50/30 border-t border-b border-neutral-200/50 relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-neutral-100 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-xs font-bold text-[#ff4d00] uppercase tracking-widest block mb-3 bg-[#ff4d00]/5 px-3.5 py-1.5 rounded-full w-fit mx-auto border border-[#ff4d00]/10 font-display">
              Pruebas de Campo Reales
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight uppercase leading-none">
              FD3 en la vida real
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-neutral-550 mt-4 text-sm sm:text-base font-sans-dm leading-relaxed max-w-2xl mx-auto">
              No te lo contamos. Te lo mostramos.
            </p>
          </div>

          {/* Media Grid Section (Mobile horizontal-scroll snap carousel, Desktop responsive editorial grid) */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none scroll-smooth">
            {(showAllGallery ? fd3GalleryItems : fd3GalleryItems.slice(0, 8)).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-[#ff4d00]/45 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300 cursor-pointer snap-center shrink-0 w-[280px] md:w-auto h-[360px] md:h-[400px] flex flex-col justify-between"
              >
                {/* Media Content Stage */}
                <div className="relative w-full h-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 group-hover:via-neutral-950/40 transition-all duration-300"></div>

                  {/* Category Tag indicator */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff4d00] text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1.5 rounded-full shadow-lg border border-white/10 font-display">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col gap-1.5 z-10">
                    <h4 className="font-display font-extrabold uppercase tracking-tight text-xs sm:text-sm leading-tight group-hover:text-[#ff4d00] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-neutral-300 text-[10px] font-sans-dm leading-relaxed line-clamp-2 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300 ease-out">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover visual cue */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900/10 backdrop-blur-xs">
                    <div className="bg-white/95 text-neutral-950 px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#ff4d00]" /> Ver pantalla completa
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Action Triggers */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12">
            {!showAllGallery && (
              <button
                onClick={() => setShowAllGallery(true)}
                className="w-full sm:w-auto text-center font-display font-bold text-xs uppercase tracking-wider py-4.5 px-10 rounded-2xl border border-neutral-300 text-neutral-800 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-150 inline-block cursor-pointer shadow-xs"
              >
                Ver más fotos de campo →
              </button>
            )}
            
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, he estado revisando su galería de evidencias reales en uso con el Fisherman FD3. Deseo recibir más información y coordinar detalles sobre este equipo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center font-bold font-display text-xs uppercase tracking-widest py-4.5 px-10 rounded-2xl bg-[#ff4d00] hover:bg-[#e04400] text-white shadow-xl shadow-[#ff4d00]/20 inline-flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Quiero verlo por WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (Interactive Accordion) */}
      <section id="faqs-seccion-fd3" className="py-20 bg-white border-t border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              ACLARAMOS TUS DUDAS DE INMEDIATO
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mt-2 mb-4">
              Preguntas Frecuentes - FD3
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Cómo me asiste la cámara del FD3 si las aguas de mi playa suelen estar movidas?",
                a: "Incluso en playas de oleaje mezclado o movido como las del sur y norte peruano, la cámara del FD3 es una aliada invaluable. Te permite distinguir claramente patrones de espuma, barreras de arena que dividen las corrientes (donde los peces esperan comida), rocas semisumergidas y fosas de coloración oscura (agua profunda). Analizas el mar desde una perspectiva de águila para una colocación científica del plomo."
              },
              {
                q: "¿Qué aparejos típicos y plomadas puede traccionar el Fisherman FD3?",
                a: "El Fisherman FD3 posee una tracción de arrastre óptima certificada de hasta 2 kg de peso. Es más que suficiente para volar plomos deportivos araña o de destorcedor de 120g a 170g acoplados a anzuelos tradicionales con carnadas orgánicas como pejerreyes, lisas, colas de langostinos, calamares o jigs medianos."
              },
              {
                q: "¿Cómo se activa la liberación de la línea en vuelo?",
                a: "Es sumamente directo e intuitivo. Despegas el drone con la línea anclada a su base. Vuelas la distancia de calada deseada monitoreando el fondo con la pantalla color de tu control estanco. Al estar ubicado sobre el pozo propicio de pesca, accionas un botón físico de liberación en los mandos del control, el gancho electromecánico se abre al instante liberando la plomada de forma milimétrica."
              },
              {
                q: "¿Tienen todas las hélices, baterías y repuestos en el local de Lima?",
                a: "Sí, absolutamente. Contamos con un taller físico calificado y disponibilidad de repuestos de entrega inmediata para evitar que pases tu fin de semana parado. Brindamos hélices de carbono reforzadas, baterías secundarias LIHV para aumentar tu autonomía de caladas por jornada y manuales de asistencia en español por WhatsApp."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-neutral-50 border border-neutral-200/60 rounded-2xl overflow-hidden transition duration-150">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-display font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-between hover:bg-neutral-100 hover:text-[#ff4d00] transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#ff4d00] shrink-0 transition-transform duration-200 ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-6 pt-0 border-t border-neutral-100 text-neutral-600 text-xs sm:text-sm font-sans-dm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA FINAL - EXTREME CONVERSION */}
      <footer className="py-20 text-center bg-neutral-950 text-white relative">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-neutral-500 font-display text-[10px] uppercase tracking-widest mb-6 block">
            SwellPro Perú — Único Representante Técnico Comercial Oficial en el Perú
          </p>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase mb-4 tracking-tight">
            Domina el mar con ojos de águila.
          </h2>
          
          <p className="text-neutral-400 font-sans-dm text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            No sigas lanzando tu aparejo a ciegas desde la orilla arenosa. El Fisherman FD3 te entrega la ventaja de la visión y de la distancia científica. Recibe hoy asesoría personal con nuestro taller oficial en Lima.
          </p>
          
          <a
            href={getWhatsAppUrl(msgFooter)}
            id="cta-footer-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-2xl transition duration-150 inline-block shadow-lg shadow-[#ff4d00]/20"
          >
            Preguntar Asesoría y Stock en WhatsApp
          </a>

          <div className="mt-16 text-neutral-600 font-sans-dm text-[11px] border-t border-neutral-900 pt-8">
            © 2026 SwellPro Perú. Todos los derechos reservados.
          </div>
        </div>
      </footer>


      {/* FULLSCREEN REAL EVIDENCE LIGHTBOX MODAL */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center p-4 backdrop-blur-md animate-fade-in select-none">
          {/* Close trigger */}
          <button 
            onClick={() => setSelectedGalleryItem(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-150 border border-white/10 z-[60] cursor-pointer"
            aria-label="Cerrar vista"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Active media canvas */}
          <div className="max-w-4xl w-full max-h-[70vh] flex justify-center items-center relative overflow-hidden rounded-2xl bg-black">
            <img 
              src={selectedGalleryItem.url} 
              alt={selectedGalleryItem.title} 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[70vh] object-contain rounded-2xl"
            />
          </div>

          {/* Descriptive footer context */}
          <div className="max-w-2xl text-center mt-6 text-white px-2">
            <span className="inline-block bg-[#ff4d00] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 shadow-md font-display">
              {selectedGalleryItem.tag}
            </span>
            <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight text-white mb-2">
              {selectedGalleryItem.title}
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm font-sans leading-relaxed max-w-lg mx-auto">
              {selectedGalleryItem.desc}
            </p>

            {/* In-Modal Direct Action */}
            <div className="mt-5">
              <a
                href={getWhatsAppUrl(`Hola SwellPro Perú, vi su evidencia real de FD3 "${selectedGalleryItem.title}" en la galería de su web. Me interesa saber precio, stock y soporte técnico de este equipo.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff4d00]/95 hover:bg-[#ff4d00] text-white font-bold text-[10px] uppercase tracking-widest py-3 px-6 rounded-xl transition duration-150 cursor-pointer font-display"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Cotizar equipo con esta evidencia por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}


      {/* BOTÓN FLOTANTE PERSISTENTE DE WHATSAPP */}
      <a 
        href={getWhatsAppUrl(msgFooter)} 
        id="whatsapp-floating-button"
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25d366] hover:bg-[#128c7e] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Chatear con SwellPro Perú en WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-7 h-7"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.057 5.284 5.349 0 11.864 0c3.159.001 6.128 1.233 8.361 3.467 2.232 2.233 3.461 5.2 3.46 8.362-.003 6.516-5.295 11.8-11.81 11.8-2.01 0-3.987-.515-5.742-1.5l-6.076 1.593zM6.5 19.34c1.61.956 3.19 1.45 4.8 1.45a9.8 9.8 0 0 0 9.71-9.72c.003-5.225-4.24-9.471-9.467-9.473-5.228 0-9.475 4.243-9.478 9.472a9.7 9.7 0 0 0 1.5 5.21l-1 3.65 3.75-.97zM16.92 14.15l-1.63-1.12c-.22-.15-.46-.17-.68.1l-1 1.25c-.2.24-.46.33-.8.1-.55-.23-1.92-.8-2.65-1.42s-.9-.9-.98-1.12c-.2-.4.1-.35.45-.75l.44-.54c.15-.22.1-.47-.02-.68L9.2 8.78c-.2-.42-.42-.42-.64-.42l-.5-.03c-.22 0-.58.1-.88.42s-1.13 1.1-1.13 2.7 1.16 3.14 1.32 3.36c.16.22 2.22 3.39 5.38 4.75.75.3 1.34.5 1.8.65.75.24 1.44.2 1.98.13.6-.1 1.83-.75 2.1-1.45.25-.7.25-1.3.18-1.42a1 1 0 0 0-.6-.56z" />
        </svg>
        <span className="absolute right-14 bg-neutral-900 border border-neutral-800 text-white font-display text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 font-bold whitespace-nowrap shadow-xl">
          Conversar Técnico 🇵🇪
        </span>
      </a>

    </div>
  );
}
