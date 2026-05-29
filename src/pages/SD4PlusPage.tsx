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
  CheckCircle2,
  Video,
  Wind,
  Plus,
  HelpCircle,
  Eye,
  Target,
  Sparkles,
  Search,
  Camera,
  Layers,
  Shield,
  Clock,
  ExternalLink,
  LifeBuoy
} from "lucide-react";

// Helper for prefilled WhatsApp link with SwellPro Perú number
const getWhatsAppUrl = (text: string) => {
  return `https://api.whatsapp.com/send?phone=51949643347&text=${encodeURIComponent(text)}`;
};

export default function SD4PlusPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Pre-filled WhatsApp message templates
  const msgHero = "Hola SwellPro Perú, estoy muy interesado en el SplashDrone 4+ (el drone marino sin límites con alcance de 7km y cámara Sony 4K). Deseo recibir asesoría técnica premium y cotización de este modelo tope de gama.";
  const msgWhy = "Hola SwellPro Perú, quiero entender más sobre la versatilidad del SplashDrone 4+ y cómo usarlo tanto para pescar como para filmación acuática profesional en la costa peruana.";
  const msgBenefits = "Hola SwellPro Perú, deseo información sobre el sistema de transmisión digital multienlace de 7 kilómetros, el gimbal de 3 ejes y la cámara Sony 4K/48MP del SD4+.";
  const msgProduct = "Hola SwellPro Perú, he visto la ficha técnica del SplashDrone 4+ con imagen del domo hermético. Me gustaría saber precios estimados, stock de importación oficial y accesorios de soporte.";
  const msgUsos = "Hola SwellPro Perú, me interesa el SplashDrone 4+ para actividades profesionales de inspección marítima y rescate acuático. Deseo agendar una llamada con un asesor especializado.";
  const msgCompare = "Hola SwellPro Perú, comparé el SplashDrone 4+ con los demás modelos en su tabla comparativa y confirmo que es la plataforma sin límites que deseo cotizar formalmente.";
  const msgFooter = "Hola SwellPro Perú, estoy listo para adquirir el SplashDrone 4+, el drone premium definitivo. Solicito comunicarme con el jefe técnico para programar una asesoría personalizada.";

  return (
    <div className="min-h-screen bg-white text-neutral-850 font-sans selection:bg-[#ff4d00] selection:text-white antialiased">
      
      {/* Dynamic Style Link to import Space Grotesk & DM Sans */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap');
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-sans-dm {
          font-family: 'DM Sans', sans-serif;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Sutil bandera peruana decorativa y sumamente discreta en el extremo superior */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#ff4d00]" />
        <div className="h-full w-1/3 bg-neutral-100" />
        <div className="h-full w-1/3 bg-[#ff4d00]" />
      </div>

      {/* STICKY HEADER INTERNAL NAV */}
      <nav id="sd4plus-nav" className="border-b border-neutral-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="../index.html" 
            id="back-btn-home"
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
            id="quick-whatsapp-quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl transition shadow-md shadow-[#ff4d00]/15"
          >
            Preguntar Stock
          </a>
        </div>
      </nav>

      {/* HERO SECTION - POWERFUL, SPECTACULAR, CINEMATIC */}
      <header id="sd4plus-hero" className="relative py-16 lg:py-24 overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50 via-white to-white">
        {/* Ambient grids and circular details of high prestige */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff4d00]/3 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-neutral-100 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-neutral-900 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block font-display">
                  👑 LA CUMBRE NÁUTICA ABSOLUTA
                </span>
                <span className="bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full inline-block font-display">
                  PLATAFORMA MULTIPROPÓSITO SD4+
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-[0.95] uppercase tracking-tight text-neutral-900">
                El drone marino.<br />
                <span className="text-[#ff4d00]">Sin límites.</span>
              </h1>
              
              <p className="text-neutral-600 font-sans-dm text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                7 km de alcance, cámara Sony 4K, 48MP y la plataforma waterproof más completa de SwellPro para pesca, filmación y operaciones extremas. Diseñado meticulosamente para responder en condiciones hostiles del Océano Pacífico.
              </p>

              {/* Quick High-End Strengths Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-700 font-sans-dm font-semibold pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4d00] shrink-0" />
                  <span>Sony 4K UHD 60fps / 48 megapíxeles</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4d00] shrink-0" />
                  <span>Impermeabilidad militar total IP67</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4d00] shrink-0" />
                  <span>Alcance récord de enlace digital de 7 km</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4d00] shrink-0" />
                  <span>29 minutos de autonomía de vuelo real</span>
                </div>
              </div>

              {/* CTAs Stack */}
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
                  href="#que-hace-sd4plus"
                  id="cta-hero-details"
                  className="border border-neutral-300 hover:border-neutral-400 bg-white/80 text-neutral-750 font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl text-center transition-all duration-200 shadow-sm"
                >
                  Ver todo lo que hace el SD4+
                </a>
              </div>

              {/* Macro Industrial Indicators */}
              <div className="grid grid-cols-4 gap-4 pt-8 border-t border-neutral-100 max-w-xl">
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-3.5xl block">7.0 km</span>
                  <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-extrabold block mt-0.5">Control Digital</span>
                </div>
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-3.5xl block">Sony 4K</span>
                  <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-extrabold block mt-0.5">Visión Premium</span>
                </div>
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-3.5xl block">IP67</span>
                  <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-extrabold block mt-0.5">Totalmente Sellado</span>
                </div>
                <div>
                  <span className="font-display font-black text-neutral-900 text-2xl sm:text-3.5xl block">29 min</span>
                  <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-extrabold block mt-0.5">Batería Náutica</span>
                </div>
              </div>
            </div>

            {/* Right Transparent Product Cinematic Image */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute w-80 h-80 bg-[#ff4d00]/8 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute w-[310px] h-[310px] bg-neutral-100/95 rounded-full -z-20 border border-neutral-200/55"></div>
              
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/new-waterproof-drone-splashrone-4-plus_1570x_fgdu3n.webp" 
                alt="SwellPro SplashDrone 4 Plus Premium" 
                className="w-full max-w-sm relative z-10 transition duration-550 hover:scale-105 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] animate-float"
              />

              {/* Floating Certification Card */}
              <div className="absolute bottom-4 right-4 bg-white border border-neutral-200 p-4 rounded-xl shadow-lg flex items-center gap-2.5 z-20">
                <div className="w-1.5 h-7 bg-[#ff4d00] rounded-sm shrink-0" />
                <div className="text-left">
                  <span className="text-[8px] text-neutral-400 block font-bold uppercase tracking-wider">RESPALDO TOTAL</span>
                  <span className="text-[10px] text-neutral-900 block font-display font-extrabold leading-none uppercase">CERTIFICACIÓN PERÚ 🇵🇪</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* BARRA DE CREDIBILIDAD DE 5 HITOS (Coherencia Visual Completa) */}
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
            <div id="cred-garantia" className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-[#ff4d00]/10 shadow-xs">
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

      {/* SECCIÓN "POR QUÉ SD4+" - PLATAFORMA PROFESIONAL COMPLETA */}
      <section id="que-hace-sd4plus" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] text-[#ff4d00] font-black uppercase tracking-widest bg-neutral-100 px-4 py-2 rounded-full font-display">
            MÁS QUE UN DRONE DE PESCA: UNA PLATAFORMA MULTI-ROLE SÓLIDA
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-900 mt-6 mb-8 uppercase tracking-tight">
            Para quien no acepta términos medios ni límites tecnológicos.
          </h2>

          <div className="bg-neutral-950 text-neutral-100 p-8 sm:p-12 rounded-3xl text-left relative overflow-hidden shadow-xl" id="why-card-sd4plus">
            {/* Ambient indicator vector background glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#ff4d00]/5 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-neutral-300 font-sans-dm text-base sm:text-lg leading-relaxed mb-6">
              El SplashDrone 4+ de SwellPro es la cúspide de la ingeniería náutica de aviación no tripulada. No ha sido conceptualizado únicamente como un drone de calado de carnadas deportivas. El SD4+ es una plataforma marina versátil de grado industrial, preparada tanto para la pesca costera extrema, como para la cinematografía aérea marina, operaciones tácticas de salvamento y monitoreo científico.
            </p>

            <blockquote className="border-l-4 border-[#ff4d00] pl-4 sm:pl-6 my-6 italic text-white font-bold font-display text-sm sm:text-lg bg-neutral-900 py-4 pr-4 rounded-r-lg">
              "El SD4+ representa la opción preferida de capitanes de yates, campeones de pesca costera, realizadores audiovisuales en altamar y rescatistas nacionales. Es la tranquilidad de tener el control absoluto del cielo y del agua."
            </blockquote>

            <p className="text-neutral-400 font-sans-dm text-sm sm:text-base leading-relaxed">
              Equipado con un servo-sistema de 3 ejes con amortiguación giroscópica de precisión para sensores Sony 4K, y apoyado por un radio-enlace de telecontrol estable de 7,000 metros de distancia, este equipo redefine el alcance de lo posible. Capaz de aterrizar en pleno oleaje turbulento del Pacífico, flotar libremente navegando corrientes y despegar directamente desde el agua con su sistema de auto-resbale e inversión de hélices PowerFlip™.
            </p>

            <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-neutral-500 font-display text-xs font-bold uppercase tracking-wide">
                🌊 DOMINA EL OCÉANO DESDE EL AIRE
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

      {/* SECCIÓN DE BENEFICIOS CLAVE - INGENIERÍA SIN LÍMITES */}
      <section id="beneficios-sd4plus" className="py-24 bg-neutral-50/50 border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-semibold text-xs uppercase tracking-widest block">
              ESPECIFICACIONES MAESTRAS DE AVIACIÓN MARINA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 leading-tight tracking-tight">
              Ingeniería de Clase Mundial
            </h2>
            <p className="text-neutral-550 text-xs sm:text-sm font-sans-dm">
              Cada componente ha sido diseñado con la aleación y resistencia exacta para resistir la intemperie marina severa:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Benefit Card 1 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Navigation className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2">7 km de Transmisión</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Enlace digital de largo alcance de banda múltiple. Retransmisión de video nítido HD en tiempo real superando ruidos radioeléctricos e interferencias electromagnéticas costeras.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Operaciones sin barreras
              </div>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Camera className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2">Sony 4K UHD 60fps</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Sensor óptico de primera categoría Sony CMOS de 1/2.3\". Captura tomas cinematográficas con una fluidez soberbia, permitiendo registrar la marea o registrar proyectos costeros sin distorsión.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Nitidez óptica Premium
              </div>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Layers className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2">48MP / UHD Zoom 8x</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Imágenes fijas asombrosas de alta resolución y zoom óptico-digital directo de 8 aumentos. Facilita inspecciones visuales en estructuras salinas, muelles o búsqueda de pozones alejados.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Detalle visual analítico
              </div>
            </div>

            {/* Benefit Card 4 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Clock className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2 font-display">29 min de Vuelo Real</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Batería inteligente de alta densidad con celdas de litio de alto voltaje. Diseñada con un algoritmo de gestión de calor redundante para conservar energía en vientos y frío de ráfaga marina.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Autonomía de calado extendida
              </div>
            </div>

            {/* Benefit Card 5 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Waves className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2">IP67 Totalmente Sellado</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Carcasa de resina marina termomoldeada de alta resistencia. El SD4+ flota de forma permanente y resiste inmersiones prolongadas o caídas violentas a las corrientes del rompiente costero.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Resistencia estanca al agua
              </div>
            </div>

            {/* Benefit Card 6 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Zap className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2">Sistema PowerFlip™</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  No temas a que el drone se voltee bocabajo por una ola agresiva al acuatizar. Con un comando directo desde el transmisor, los motores invierten el giro y vuelven a colocar el drone al derecho en un parpadear.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Autocorrección de flotación
              </div>
            </div>

            {/* Benefit Card 7 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Wind className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2">Despegue en 45 Segundos</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Calibración giroscópica de brújula optimizada por GPS 9.0. Estará en suspensión de vuelo en menos de un minuto, evitando procedimientos tediosos que te hagan perder momentos de pique de marea.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Operatividad veloz de playa
              </div>
            </div>

            {/* Benefit Card 8 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6.5 hover:border-[#ff4d00]/30 transition duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                  <Shield className="w-5.5 h-5.5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-2">Retorno Seguro Redundante</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Failsafe automático en tres modos: por nivel crítico de batería baja, pérdida de RF temporal de señal o activación manual del botón Home lock, salvaguardando tu valioso drone en plena playa.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-5 pt-3.5 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Garantía y cuidado activo
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

      {/* SECCIÓN DE PRODUCTO - GRANDE, IMPACTANTE, PREMIUM CON IMAGEN OFICIAL */}
      <section id="especificaciones-sd4plus" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              DISEÑO INTEGRADO PREMIUM
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 tracking-tight">
              Estructura SplashDrone 4+ de SwellPro
            </h2>
            <p className="text-neutral-550 text-xs sm:text-sm font-sans-dm">
              Una vista a la robustez técnica desarrollada para misiones de vuelo marítimo exigentes:
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Image Block with cinematic gradient) */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-150 w-full flex justify-center items-center shadow-xs relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-[#ff4d00]" />
                <img 
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/new-waterproof-drone-splashrone-4-plus_1570x_fgdu3n.webp" 
                  alt="SwellPro SplashDrone 4 Plus Premium Peru" 
                  className="w-full max-w-sm object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] transform hover:scale-103 transition duration-500"
                />
              </div>
              <div className="mt-4 bg-[#ff4d00]/5 border border-[#ff4d00]/15 rounded-xl p-4 text-center max-w-sm">
                <span className="text-neutral-800 text-xs font-sans-dm font-bold leading-relaxed block">
                  "El SplashDrone 4+ combina un domo hermético premium, un gimbal de 3 ejes servoasistido de alta respuesta y el fuselaje más pulido jamás visto bajo el sol marino."
                </span>
              </div>
            </div>

            {/* Right Column (Specifications Detail list) */}
            <div className="lg:col-span-6">
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-xs bg-white" id="specs-list-sd4p">
                {[
                  { 
                    item: "Capacidad de Carga", 
                    value: "Hasta 2.0 kg de arrastre y soltado", 
                    explain: "Nivel óptimo de ingeniería para transportar de manera segura señuelos de buen peso, calada de anzuelo grande o flotadores salvavidas deportivos." 
                  },
                  { 
                    item: "Radio de Acción Único", 
                    value: "7.0 Kilómetros de alcance digital real", 
                    explain: "Transmisión nítida multicanal que te da amplio rango de pilotaje o exploración, cruzando canales de corriente lejanos donde habitan los grandes ejemplares." 
                  },
                  { 
                    item: "Sumergimiento Completo", 
                    value: "Grado Hermético IP67 Militar", 
                    explain: "Carcasa sellada a presión que flota permanentemente en agua dulce o salada y resiste la penetración de salitre o arena fina de costa." 
                  },
                  { 
                    item: "Gimbal Inteligente 3-Axis", 
                    value: "Estabilizado Activo Tridimensional", 
                    explain: "Permite amortiguar los movimientos inducidos por el aire, brindando una imagen estática estable que ayuda a rastrear bancos o relieves marinos." 
                  },
                  { 
                    item: "Motores & Hélices", 
                    value: "Motores de alto torque con revestimiento anticorrosión", 
                    explain: "Tratamiento especial que evita el óxido prematuro por evaporación marina de playa o salpicadura de oleaje destructivo de orilla." 
                  },
                  { 
                    item: "Control de Comando Remoto", 
                    value: "Transmisor impermeable con pantalla retroiluminada", 
                    explain: "Pantalla táctil que se lee perfectamente a pleno mediodía peruano, con protección para caídas fortuitas de agua o manos mojadas." 
                  },
                ].map((spec, idx) => (
                  <div 
                    key={idx} 
                    className="p-4.5 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/50 transition duration-150 grid sm:grid-cols-12 gap-2 sm:gap-4 items-center"
                  >
                    <div className="sm:col-span-4">
                      <span className="font-display font-black text-neutral-850 text-xs sm:text-xs uppercase tracking-tight block">
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

      {/* SECCIÓN "CAPTURA MÁS, ARRIESGA MENOS" - CONFIANZA Y SEGURIDAD AL 100% */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="seguridad-sd4plus">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 font-sans-dm">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-semibold text-xs uppercase tracking-widest block">
              SEGURIDAD ACTIVA SOBRE EL AGUA SALADA
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase mt-3 mb-6 leading-tight tracking-tight">
              Captura más, arriesga absolutamente menos
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              La aviación sobre agua salada y rompiente de olas peruanas no admite experimentos ni juguetes frágiles de plástico. El SplashDrone 4+ ha sido diseñado para convivir de forma segura y natural en el mar, ofreciendo reaseguros mecánicos que te permiten volar con absoluta tranquilidad:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Waves className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Flotabilidad Náutica Real</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  A diferencia de drones terrestres comunes que se hunden y destruyen de forma inmediata con una salpicadura, el SD4+ flota de manera totalmente estable en la superficie y permite despegues limpios desde el agua sin hundimiento alguno.
                </p>
              </div>
              <div className="border-t border-neutral-800 mt-6 pt-4 text-[10px] text-[#ff4d00]/80 font-bold uppercase tracking-widest">
                Flotación pasiva certificada
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <ShieldCheck className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">SeaShield™ Anti-Corrosión</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Sus herrajes mecánicos, aleaciones de carbono-fibra y motores están recubiertos con resinas de nivel naval e hidrófobos, garantizando que el salitre marino de playa no inutilice los sistemas electrónicos fundamentales.
                </p>
              </div>
              <div className="border-t border-neutral-800 mt-6 pt-4 text-[10px] text-[#ff4d00]/80 font-bold uppercase tracking-widest">
                Blindaje náutico integral
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Wind className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Estabilidad en Rompiente</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans-dm">
                  Equipado con un procesador avanzado de gestión de ráfagas que recalcula la inclinación del motor en microsegundos, asegurando que permanezca completamente estático en el aire ante vientos costeros de hasta nivel 7.
                </p>
              </div>
              <div className="border-t border-neutral-800 mt-6 pt-4 text-[10px] text-[#ff4d00]/80 font-bold uppercase tracking-widest">
                Resistencia dinámica de viento
              </div>
            </div>

          </div>

          <div className="mt-16 text-center border-t border-neutral-800 pt-10">
            <p className="text-xs uppercase tracking-widest font-bold text-[#ff4d00]">
              ✓ TRANQUILIDAD DE INVERSIÓN COSTAL
            </p>
            <p className="text-neutral-400 italic font-sans-dm text-sm mt-3 max-w-xl mx-auto">
              "Olvídate de volar con miedo. El SplashDrone 4+ de SwellPro Perú está diseñado específicamente para enfrentar al Pacífico con orgullo, dándote ojos en el cielo y tranquilidad en la arena de playa."
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE USOS - DEMOSTRANDO QUE ES MUCHO MÁS QUE PESCA */}
      <section id="usos-multiples" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              ECOSISTEMA MULTI-EMPRESA E INDUSTRIAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 uppercase mt-3 mb-4 tracking-tight leading-tight">
              Una Plataforma Waterproof Sin Límites de Campos
            </h2>
            <p className="text-neutral-550 text-xs sm:text-sm font-sans-dm">
              Diseñado con un enfoque multiusos real que atiende diversos roles y necesidades con eficiencia profesional:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            
            {/* Uso 1: Fishing */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between hover:bg-neutral-900 hover:text-white transition duration-300">
              <div>
                <div className="w-10 h-10 bg-[#ff4d00]/10 rounded-lg flex items-center justify-center mb-6">
                  <Anchor className="w-5 h-5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-base uppercase tracking-tight mb-2">Fishing Calas</h3>
                <p className="text-xs leading-relaxed opacity-85">
                  Llevado y soltado de carnada deportiva a grandes distancias. Colocación quirúrgica del sedal en fosas profundas.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-6">Pesca de Costa y Playa</span>
            </div>

            {/* Uso 2: Aquatic Filming */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between hover:bg-neutral-900 hover:text-white transition duration-300 font-sans-dm">
              <div>
                <div className="w-10 h-10 bg-[#ff4d00]/10 rounded-lg flex items-center justify-center mb-6">
                  <Video className="w-5 h-5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-base uppercase tracking-tight mb-2">Aquatic Filming</h3>
                <p className="text-xs leading-relaxed opacity-85">
                  Realización de tomas de alta calidad Sony 4K UHD desde el agua o cielo con total estabilidad de cardán de 3 ejes.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-6">Cinematografía marina</span>
            </div>

            {/* Uso 3: Search & Rescue */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between hover:bg-neutral-900 hover:text-white transition duration-300 font-sans-dm">
              <div>
                <div className="w-10 h-10 bg-[#ff4d00]/10 rounded-lg flex items-center justify-center mb-6">
                  <LifeBuoy className="w-5 h-5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-base uppercase tracking-tight mb-2">Search & Rescue</h3>
                <p className="text-xs leading-relaxed opacity-85">
                  Localización aérea rápida de personas arrastradas y soltado inmediato de chalecos salvavidas o flotadores a metros del bañista.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-6">Búsqueda y Salvamento</span>
            </div>

            {/* Uso 4: Maritime Inspection */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between hover:bg-neutral-900 hover:text-white transition duration-300 font-sans-dm">
              <div>
                <div className="w-10 h-10 bg-[#ff4d00]/10 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-5 h-5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-base uppercase tracking-tight mb-2">Maritime Audit</h3>
                <p className="text-xs leading-relaxed opacity-85">
                  Inspección de cascos de barcos, hélices sumergidas, pilotes de muelles salinos u obras portuarias sin necesidad de buzos.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-6">Inspección de Yates y Muelles</span>
            </div>

            {/* Uso 5: Environmental Monitoring */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between hover:bg-neutral-900 hover:text-white transition duration-300 font-sans-dm">
              <div>
                <div className="w-10 h-10 bg-[#ff4d00]/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-5 h-5 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-base uppercase tracking-tight mb-2">Eco Monitoring</h3>
                <p className="text-xs leading-relaxed opacity-85">
                  Rastreo de manchas contaminantes de crudo, conteo de fauna marina silvestre o comportamiento de corrientes de marea.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-6">Monitoreo Científico costero</span>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a 
              href={getWhatsAppUrl(msgUsos)}
              id="cta-usos-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-[#ff4d00]"
              style={{
                color: "white",
                display: "inline-block",
                padding: "12px 28px",
                borderRadius: "12px",
                fontSize: "12px",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "all 0.15s ease",
              }}
            >
              Conversar con un especialista de operaciones corporativas →
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN "DETECCIÓN Y PRECISIÓN" - COMO VE Y APUNTA EL SD4+ */}
      <section id="detección-precision-sd4p" className="py-24 bg-neutral-50/20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="space-y-6">
              <span className="text-[10px] text-[#ff4d00] font-black uppercase tracking-widest bg-neutral-100 px-4.5 py-2 rounded-full font-display">
                SABER VER ES CONQUISTAR EL PIQUE
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-900 uppercase tracking-tight leading-none">
                Ojos de Precisión Sobre el Pacífico
              </h2>
              <p className="text-neutral-600 font-sans-dm text-sm sm:text-base leading-relaxed">
                El mar peruano destaca por sus abundantes pozones, canales formados por corrientes de fondo entre las restingas de arena y playas rocosas. Encontrar el punto idóneo de calado a ciegas disminuye drásticamente tus capturas. Con el SplashDrone 4+ tienes la visión absoluta en tiempo real:
              </p>

              {/* 4 Pillars with unique icons */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                
                <div className="flex gap-3 text-left">
                  <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0 w-11 h-11 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#ff4d00]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-tight">Lectura de Superficie</h4>
                    <p className="text-xs text-neutral-500 mt-1 font-sans-dm leading-relaxed">
                      Observa patrones de espuma, barreras y la dirección de las olas para identificar dónde rompen las corrientes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0 w-11 h-11 flex items-center justify-center">
                    <Waves className="w-5 h-5 text-[#ff4d00]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-tight">Lectura de Fondo</h4>
                    <p className="text-xs text-neutral-500 mt-1 font-sans-dm leading-relaxed">
                      Ubica mediante contrastes visuales las pozas profundas y canales más oscuros donde se ocultan lenguados y corvinas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0 w-11 h-11 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#ff4d00]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-tight">100% Bait Accuracy</h4>
                    <p className="text-xs text-neutral-500 mt-1 font-sans-dm leading-relaxed">
                      Mecanismo de soltado robusto de suelta veloz. Deposita tu plomada y pejerrey intactos exactamente en el punto deseado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0 w-11 h-11 flex items-center justify-center">
                    <Video className="w-5 h-5 text-[#ff4d00]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-tight">Video HD en Vivo</h4>
                    <p className="text-xs text-neutral-500 mt-1 font-sans-dm leading-relaxed">
                      Transmisión digital multienlace de alta fidelidad que te alerta visualmente del movimiento de cardúmenes en tiempo real.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Render Stage Column */}
            <div className="relative flex justify-center items-center">
              <div className="bg-neutral-900 rounded-3xl p-6.5 text-white w-full max-w-lg relative overflow-hidden shadow-xl" id="radar-vis-sd4p">
                {/* Radar Grid Concept */}
                <div className="absolute inset-0 bg-[radial-gradient(#ff4d00_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
                
                <span className="text-xs font-bold text-[#ff4d00] uppercase tracking-widest block mb-4 font-display">
                  👁️ MONITOREO TÁCTICO MARINO (Sony UHD CMOS)
                </span>

                <div className="aspect-video bg-neutral-950 rounded-xl relative overflow-hidden border border-neutral-800 flex items-center justify-center">
                  <div className="absolute inset-x-0 top-0 h-6 bg-red-600/10 flex items-center justify-between px-3 text-[10px] font-mono tracking-widest text-[#ff4d00] border-b border-red-600/15">
                    <span>🔴 EN VIVO - SD4+ REC</span>
                    <span>7.0 KM LINK OK</span>
                  </div>

                  {/* Circle overlay mimicking camera scope */}
                  <div className="absolute w-44 h-44 border-2 border-dashed border-[#ff4d00]/30 rounded-full animate-spin [animation-duration:15s]" />
                  <div className="absolute w-1.5 h-1.5 bg-[#ff4d00] rounded-full animate-ping" />

                  <img 
                    src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816469/Fisherman-MAX-fd2-banner-1920x900_ebgmq0.webp" 
                    alt="Video en vivo desde el aire del mar peruano" 
                    className="w-full h-full object-cover opacity-65 absolute inset-0"
                  />

                  {/* Bottom digital metadata indicator */}
                  <div className="absolute bottom-2 inset-x-3 flex justify-between font-mono text-[9px] text-neutral-300">
                    <span>ALT: 45m</span>
                    <span>BAT: 92%</span>
                    <span>WND: 18 kts</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-xs leading-relaxed text-neutral-300 font-sans-dm">
                  <p>
                    <strong>Análisis digital en directo:</strong> Captura la topografía de la playa costera a pleno vuelo. Con un control total de rotación, la cámara se reorienta digitalmente para que no pierdas ningún canal profundo de vista.
                  </p>
                  <p className="text-[11px] text-neutral-450 italic">
                    * El SD4+ permite mapear puntos costeros óptimos de pesca fija, registrando posiciones GPS para repetibilidad absoluta de lanzamiento de carnada en tus siguientes salidas.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION - GALERÍA DE VIDEO EN ACCIÓN */}
      <section id="galeria-video" className="py-24 bg-neutral-900 text-white border-t border-b border-neutral-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display text-xs font-bold uppercase tracking-widest block mb-2">
              DESEMPEÑO SIN LÍMITES
            </span>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Video className="w-6 h-6 text-[#ff4d00]" />
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight uppercase animate-fade-in">
                SplashDrone 4+ en Acción
              </h2>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-sans-dm">
              Mira de cerca la potencia marina, el despegue acuático y la estabilidad en vientos extremos de la plataforma definitiva SwellPro.
            </p>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-950 rounded-3xl p-4 sm:p-6 border border-neutral-800 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#ff4d00_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
              
              <div className="aspect-video w-full rounded-2xl overflow-hidden relative bg-neutral-900 border border-neutral-800 group">
                <video 
                  src="https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1780032447/sd4_video_cwmysy.mp4" 
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 border-t border-neutral-905 pt-5 font-sans-dm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse"></span>
                  <span className="font-mono text-neutral-300">Sello Militar IP67 + PowerFlip™ Tecnología</span>
                </div>
                <a 
                  href={getWhatsAppUrl("Hola SwellPro Perú, acabo de ver el video de acción del SplashDrone 4+ de alta gama en su landing page. Quisiera agendar una demostración o recibir más información sobre este modelo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff4d00] hover:text-[#e04400] transition"
                >
                  Consultar sobre este modelo
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECCIÓN COMPARATIVA DE MODELOS - EL SD4+ QUEDA COMO EL TOPE DE GAMA ABSOLUTO */}
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
            <table className="w-full text-left border-collapse border border-neutral-150 min-w-[750px] rounded-2xl overflow-hidden shadow-xs" id="fleet-table-sd4p">
              <thead>
                <tr className="bg-neutral-55 text-neutral-850 font-display font-bold uppercase text-[10px] sm:text-xs tracking-wider border-b border-neutral-200">
                  <th className="p-4 sm:p-5">Atributo</th>
                  <th className="p-4 sm:p-5">SwellPro FD1S</th>
                  <th className="p-4 sm:p-5">SwellPro FD2 Max</th>
                  <th className="p-4 sm:p-5">SwellPro FD3</th>
                  <th className="p-4 sm:p-5 bg-orange-50 border-x border-orange-100 text-[#ff4d00] text-center font-black">
                    🔥 SplashDrone 4+ (Este Drone)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-150 font-sans-dm text-xs sm:text-sm text-neutral-750">
                
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Enfoque Principal</td>
                  <td className="p-4 sm:p-5">Iniciación práctica y vuelos fáciles de orilla</td>
                  <td className="p-4 sm:p-5">Carga de plomo y carnadas de gran porte</td>
                  <td className="p-4 sm:p-5">El equilibrio ideal de visión marina, cámara 4K en directo y precisión</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-900 font-black italic text-center text-[13px]">
                     La plataforma profesional multiusos absoluta sin límites
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Capacidad de Carga</td>
                  <td className="p-4 sm:p-5">Hasta 2.2 Kilogramos</td>
                  <td className="p-4 sm:p-5 font-bold">Hasta 3.5 Kilogramos (Carga máxima)</td>
                  <td className="p-4 sm:p-5">Hasta 2 kg (Carga máxima)</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-[#ff4d00] text-center text-sm">
                    Hasta 2.0 Kilogramos con gancho múltiple
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Alcance Operativo</td>
                  <td className="p-4 sm:p-5">1.3 Kilómetros de radio</td>
                  <td className="p-4 sm:p-5 font-bold">1.2 Kilómetros (Alcance máximo)</td>
                  <td className="p-4 sm:p-5">1.2 km (Alcance máximo)</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-black text-neutral-900 text-center text-sm">
                    ⚡ 7.0 Kilómetros de largo alcance digital
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Cámara & Transmisión</td>
                  <td className="p-4 sm:p-5">Opcional externa de rápido montaje</td>
                  <td className="p-4 sm:p-5 font-medium">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65</td>
                  <td className="p-4 sm:p-5">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65, equivalente a 25mm</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-[#ff4d00] text-center">
                    🎦 Sony 4K UHD 60fps, 48 MP, Zoom 8x, cardán giroscópico estable de 3 ejes
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Herrajes y Mar</td>
                  <td className="p-4 sm:p-5">Sumergible IP67 básico</td>
                  <td className="p-4 sm:p-5">Sistema WaterProf con resistencia viento 7 y mar 5 (PowerFlip™)</td>
                  <td className="p-4 sm:p-5">Estanqueidad IP67 con resistencia viento 7, mar 5, PowerFlip™ y SeaSheld™</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-850 text-center font-semibold">
                    Compuestos de policarbonato reforzados con fibra de vidrio IP67 e inversión PowerFlip
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-neutral-50 rounded-2xl p-6 border border-neutral-100 max-w-2xl mx-auto" id="compare-consult-card">
            <span className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wider block mb-2">
              ¿Quieres consultarle tus dudas técnicas sobre la tabla a un asesor?
            </span>
            <p className="text-neutral-550 font-sans-dm text-xs mb-4">
              Nuestro WhatsApp corporativo oficial en Lima atiende de inmediato tu chat de pesca para evaluar tu playa usual de salida.
            </p>
            <a 
              href={getWhatsAppUrl(msgCompare)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-950 hover:bg-[#ff4d00]"
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

      {/* SECCIÓN RESPALDO LOCAL DETALLADA */}
      <section className="py-20 bg-neutral-50/50" id="respaldo-adicional">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-1.5 bg-[#ff4d00] mx-auto rounded-full mb-6"></div>
          
          <h2 className="text-2xl sm:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mb-4">
            Respaldo Local SwellPro Perú
          </h2>
          
          <img 
            src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/local-drone-repair_2_kefrex.webp" 
            alt="Laboratorio de Servicio Técnico Oficial SwellPro Perú en Lima" 
            className="w-full max-w-xl mx-auto rounded-2xl shadow-md my-8 border border-neutral-200"
          />

          <p className="text-neutral-600 font-sans-dm text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Adquirir un drone marino de primera línea como el SplashDrone 4+ representa una inversión tecnológica seria. En SwellPro Perú somos plenamente conscientes de ello; garantizamos el amparo local en Lima, evitando que los clientes tengan que tramitar exportaciones por problemas mecánicos o de calibración rutinaria de sensores.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center font-sans-dm">
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

      {/* PREGUNTAS FRECUENTES (Interactive Accordion) */}
      <section id="faqs-seccion-sd4plus" className="py-20 bg-white border-t border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              ACLARAMOS TUS DUDAS DE INMEDIATO
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-neutral-900 uppercase tracking-tight mt-2 mb-4">
              Preguntas Frecuentes - SD4+
            </h2>
          </div>

          <div className="space-y-4 font-sans-dm">
            {[
              {
                q: "¿Qué diferencia al SplashDrone 4+ (SD4+) del resto de drones de la flota Fisherman?",
                a: "A diferencia de la línea Fisherman (que está optimizada exclusivamente para calar carnada con rapidez de forma compacta), el SplashDrone 4+ es un drone multiusos que soporta cámaras de alta gama en gimbals servoasistidos de 3 ejes, zoom óptico, cámaras duales térmicas, software de navegación industrial y un radio-enlace extendido de 7 kilómetros, lo que lo transforma en un ecosistema profesional completo."
              },
              {
                q: "¿Cómo resiste el fuselaje y motores del SD4+ el salitre y arena peruana?",
                a: "El fuselaje está fabricado con una aleación marina termoestratificada sellada herméticamente bajo certificación militar IP67. Los motores de rotor tipo brushless de alto torque de aviación están recubiertos con el sistema SeaShield™ que los aísla de la humedad directa, sedimentos microscópicos de arena fina y la evaporación del agua de mar."
              },
              {
                q: "¿Qué ocurre si el SplashDrone 4+ cae bocabajo en el agua por oleaje?",
                a: "El equipo posee flotación positiva. Si aterriza accidentalmente boca abajo debido al romper de una ola costera, posee activado el sistema electromecánico PowerFlip™. Con solo accionar un botón en el control remoto, el sentido de los motores se invierte autoliberando el drone para volver a posicionarlo al derecho y despegar al instante de forma segura."
              },
              {
                q: "¿Ofrecen capacitación práctica real con la compra de este drone en Lima?",
                a: "Por supuesto. El SplashDrone 4+ es nuestra plataforma de mayor valor y versatilidad. Su adquisición incluye una inducción técnica presencial en playa. Te enseñamos a calibrar con precisión los compases satelitales, operar los modos de cámara Sony HD, planificar levantamientos o soltados de plomada seguros y activar los redundantes automáticos de retorno."
              },
              {
                q: "¿Cómo se procesa el servicio de garantía local ante fallas?",
                a: "Atendemos de manera humana y directa. Al ser los representantes legítimos de SwellPro en el Perú, contamos con un laboratorio especializado y taller en Lima. Si el drone experimenta algún percance técnico contemplado en garantía, procedemos con el diagnóstico inmediato y la colocación acelerada de piezas sin esperas burocráticas."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-350 transition duration-150 bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 text-left font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wide gap-3"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#ff4d00] shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-dm animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL: ACCIÓN PREMIUM INMEDIATA (Alta conversión) */}
      <section id="cta-final-sd4plus" className="bg-neutral-50 py-24 border-b border-neutral-100 relative overflow-hidden">
        {/* Abstract vector accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#ff4d00]/5 rounded-br-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-neutral-900/[0.02] rounded-tl-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 font-sans-dm">
          <span className="text-[#ff4d00] font-display font-black text-xs uppercase tracking-widest block mb-4">
            REGISTRA TU INTERÉS EXCLUSIVO HOY
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-900 uppercase tracking-tight mb-6">
            Lleva tu pasión marina sin límites.
          </h2>
          
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
            Únase al selecto grupo de pescadores experimentados, directores de fotografía y capitanes que ya operan con el respaldo total de SwellPro Perú. Contáctanos por WhatsApp para resolver cualquier consulta técnica, cotizar accesorios adicionales o registrar tu aviso de stock.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={getWhatsAppUrl(msgFooter)}
              id="cta-footer-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4.5 px-10 rounded-2xl shadow-xl shadow-[#ff4d00]/25 hover:-translate-y-0.5 transition duration-200 cursor-pointer block min-w-[240px]"
            >
              Iniciar Chat de Pesca Premium
            </a>
            
            <a 
              href="../index.html" 
              className="border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-750 font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-10 rounded-2xl transition duration-150 inline-block text-center shadow-xs"
            >
              Explorar otros modelos
            </a>
          </div>

          <div className="mt-8">
            <span className="bg-neutral-900 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full inline-block font-display">
              🇵🇪 IMPORTACIÓN OFICIAL REGISTRADA SWELLPRO PERÚ
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER GENERAL DE COHERENCIA VISUAL */}
      <footer className="bg-neutral-950 text-white py-16 font-sans-dm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            
            {/* Branding detail */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
                  alt="SwellPro Perú" 
                  className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5"
                />
                <span className="font-display font-extrabold text-white text-lg tracking-tight">
                  SWELLPRO <span className="text-[#ff4d00]">PERÚ</span>
                </span>
              </div>
              
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                Único canal oficial autorizado de distribución directa en el territorio nacional. Operamos con laboratorio propio de calibración, garantías directas de fábrica y un stock constante de piezas de sustitución.
              </p>
            </div>

            {/* Quick columns navigation */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-widest">
                Nuestros Modelos
              </h3>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li><a href="../fd1s/index.html" className="hover:text-white transition">Fisherman FD1S</a></li>
                <li><a href="../fd2/index.html" className="hover:text-white transition">Fisherman FD2 Max</a></li>
                <li><a href="../fd3/index.html" className="hover:text-white transition">Fisherman FD3</a></li>
                <li><a href="../sd4-plus/index.html" className="hover:text-white transition font-bold text-[#ff4d00]">SplashDrone 4 Plus</a></li>
              </ul>
            </div>

            {/* Support and Technical info */}
            <div className="md:col-span-4 space-y-3">
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-widest">
                Soporte y Garantías
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
                Brindamos asistencia en campo e inducción playera gratuita en Lima y provincias. Visitas programadas y mantenimiento express.
              </p>
              <div className="text-xs text-neutral-400 pt-2 font-mono">
                WhatsApp Técnico: <a href="https://api.whatsapp.com/send?phone=51949643347" className="hover:underline text-[#ff4d00]" target="_blank" rel="noopener noreferrer">+51 949 643 347</a>
              </div>
            </div>

          </div>

          <div className="border-t border-neutral-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-left text-neutral-500 text-xs">
            <div>
              © 2026 SwellPro Perú. Todos los derechos reservados. Distribuidor Autorizado de Drones Marinos de Pesca en Sudamérica.
            </div>
            <div className="flex gap-4">
              <a href="../index.html" className="hover:text-white transition">Inicio</a>
              <span className="text-neutral-800">|</span>
              <a href={getWhatsAppUrl(msgFooter)} className="hover:text-white transition text-[#ff4d00] font-bold">Reserva Técnica</a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE COMPLEMENTARIO DE WHATSAPP (Asegura Conversión Permanente) */}
      <a 
        href={getWhatsAppUrl(msgFooter)}
        id="floating-whatsapp-widget-sd4p"
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer group hover:rotate-3 shadow-[#25D366]/30"
        title="Conversar con un especialista de pesca"
        style={{ width: "62px", height: "62px" }}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.261 2.266 3.505 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.1 1.455 4.854 1.455 5.4 0 9.79-4.39 9.794-9.791.002-2.59-1.01-5.025-2.85-6.868C16.545 2.107 14.11 1.095 11.517 1.095c-5.4 0-9.794 4.392-9.797 9.793-.001 1.83.493 3.393 1.444 4.887L2.17 19.83l4.477-1.176z" />
          <path d="M16.942 13.82c-.312-.157-1.849-.912-2.134-1.017-.285-.104-.492-.157-.7.157-.207.313-.801 1.017-.98 1.226-.18.208-.36.23-.672.073-.312-.157-1.318-.485-2.51-1.549-.928-.827-1.554-1.85-1.737-2.162-.18-.312-.018-.482.137-.638.14-.14.312-.365.468-.548.156-.18.207-.312.312-.52.104-.208.052-.39-.026-.547-.078-.157-.7-1.69-.958-2.315-.252-.607-.51-.52-.7-.53-.18-.008-.39-.01-.6-.01-.208 0-.547.078-.833.39-.286.313-1.093 1.069-1.093 2.606 0 1.538 1.119 3.024 1.275 3.232.156.208 2.22 3.382 5.353 4.743.745.324 1.326.518 1.777.662.748.237 1.429.204 1.968.124.6-.09 1.848-.756 2.108-1.448.26-.693.26-1.287.181-1.411-.078-.125-.285-.203-.597-.36z" />
        </svg>
      </a>

    </div>
  );
}
