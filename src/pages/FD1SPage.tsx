import React, { useState } from "react";
import { 
  ArrowLeft, 
  Battery, 
  ShieldCheck, 
  Zap, 
  Waves, 
  HelpCircle,
  ChevronDown,
  Navigation,
  Anchor,
  Compass,
  Award,
  Wrench,
  GraduationCap,
  Users,
  CheckCircle,
  Flame,
  Scale,
  X,
  Eye,
  Sparkles,
  PhoneCall
} from "lucide-react";

// Helper for prefilled WhatsApp link
const getWhatsAppUrl = (text: string) => {
  return `https://api.whatsapp.com/send?phone=51991664146&text=${encodeURIComponent(text)}`;
};

// GALERÍA ESPECÍFICA PREMIUM SWELLPRO FD1S
const fd1sGalleryItems = [
  {
    id: "fd1s-galeria-capturas-01",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930424/imagen-FD1S-01_pu8tgl.jpg",
    tag: "Hardware Real",
    title: "Vista cercana del drone",
    desc: "Detalle del fuselaje estanco y materiales resistentes a la corrosión."
  },
  {
    id: "fd1s-galeria-capturas-02",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930424/imagen-FD1S-02_v195q2.jpg",
    tag: "Estructura",
    title: "Vista de motores y hélices",
    desc: "Detalle de la hélice izquierda instalada lista para operar."
  },
  {
    id: "fd1s-galeria-capturas-03",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930423/imagen-FD1S-03_gszeqk.jpg",
    tag: "Mecanismo",
    title: "Vista del sistema de calado",
    desc: "Detalle del dispositivo electromecánico de soltado rápido."
  },
  {
    id: "fd1s-galeria-capturas-04",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930423/imagen-FD1S-04_uduouh.jpg",
    tag: "Fuselaje",
    title: "Detalle delantero del chasis",
    desc: "Vista del frontal estanco color naranja de alta visibilidad."
  },
  {
    id: "fd1s-galeria-capturas-05",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930424/imagen-FD1S-05_bus2mx.jpg",
    tag: "Estanqueidad",
    title: "Detalle del sellado estanco",
    desc: "Vista del borde del fuselaje que evita que ingrese agua."
  },
  {
    id: "fd1s-galeria-capturas-06",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930422/imagen-FD1S-06_diuwwt.jpg",
    tag: "Sellado",
    title: "Vista de los tornillos marinos",
    desc: "Detalles del sellado de goma y tornillerías resistentes."
  },
  {
    id: "fd1s-galeria-capturas-07",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930424/imagen-FD1S-07_cjxdfj.jpg",
    tag: "Soporte",
    title: "Vista de las patas de apoyo",
    desc: "Detalle de los soportes inferiores reforzados."
  },
  {
    id: "fd1s-galeria-capturas-08",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930423/imagen-FD1S-08_vkoacd.jpg",
    tag: "Hélices",
    title: "Hélices de repuesto originales",
    desc: "Vista cercana de las palas diseñadas para alto viento."
  },
  {
    id: "fd1s-galeria-capturas-09",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930423/imagen-FD1S-09_n9olt9.jpg",
    tag: "Sensores",
    title: "Módulo de control de vuelo",
    desc: "Vista interna sellada de los componentes de navegación."
  },
  {
    id: "fd1s-galeria-capturas-10",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930423/imagen-FD1S-10_h6optn.jpg",
    tag: "Flotación",
    title: "Fuselaje de flotación pasiva",
    desc: "Vista del compartimiento inferior hermético."
  },
  {
    id: "fd1s-galeria-capturas-11",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930424/imagen-FD1S-11_ojtmxq.jpg",
    tag: "Energía",
    title: "Batería inteligente de alta corriente",
    desc: "Detalle de la batería para el despegue estable."
  },
  {
    id: "fd1s-galeria-capturas-12",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930426/imagen-FD1S-12_rlpdww.jpg",
    tag: "Antenas",
    title: "Detalle de antenas del receptor",
    desc: "Vista posterior del drone mostrando las antenas de comunicación."
  },
  {
    id: "fd1s-galeria-capturas-13",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779930425/imagen-FD1S-13_ak9bsx.jpg",
    tag: "Embalaje",
    title: "Estuche rígido de almacenamiento",
    desc: "Vista del drone guardado en su maletín de transporte oficial."
  }
];

export default function FD1SPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<typeof fd1sGalleryItems[0] | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Pre-filled WhatsApp message templates
  const msgHero = "Hola SwellPro Perú, vi el Fisherman FD1S en su nueva web y me gustaría recibir la asesoría personalizada gratuita de inicio y cotización con el regalo de capacitación en playa.";
  const msgCredibility = "Hola SwellPro Perú, me gustaría saber más sobre la garantía local de un año y la clase de capacitación práctica en playa incluida con la compra del FD1S.";
  const msgWhy = "Hola, me interesa el Fisherman FD1S porque busco un drone fácil de usar para empezar en la pesca costera. ¿Tienen stock disponible en Lima?";
  const msgBenefits = "Hola SwellPro Perú, me llamó la atención el sensor ToF y el sistema de flotación del FD1S. ¿Me brindan detalles técnicos y facilidades de pago?";
  const msgProduct = "Hola SwellPro Perú, he visto la ficha técnica del Fisherman FD1S (2.2 kg de carga útil). Deseo coordinar una llamada para comprar este equipo con tarjeta de crédito.";
  const msgCompare = "Hola, vi la tabla comparativa de drones de pesca y me convenció el FD1S como modelo ideal para empezar de forma práctica. ¿Cuál es su precio actual?";
  const msgFooter = "Hola SwellPro Perú, estoy listo para multiplicar mi lanzamiento con el Fisherman FD1S. Por favor me contactan con un asesor especializado.";

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#ff4d00] selection:text-white antialiased">
      {/* Sutil bandera peruana muy decorativa y discreta en el borde superior */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#ff4d00]" />
        <div className="h-full w-1/3 bg-neutral-100" />
        <div className="h-full w-1/3 bg-[#ff4d00]" />
      </div>

      {/* HEADER NAV STICKY */}
      <nav className="border-b border-neutral-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="../index.html" 
            className="flex items-center gap-2 text-neutral-500 hover:text-[#ff4d00] transition font-sans text-xs sm:text-sm font-bold uppercase tracking-wider"
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
            <span className="font-display font-black tracking-tight text-neutral-900 text-base sm:text-lg">
              SWELLPRO <span className="text-[#ff4d00]">PERÚ</span>
            </span>
          </div>

          <a 
            href={getWhatsAppUrl(msgHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-extrabold text-[11px] sm:text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl transition shadow-md shadow-[#ff4d00]/15"
          >
            Preguntar Stock
          </a>
        </div>
      </nav>

      {/* HERO SECTION - PREMIUM CLEAN LOOK */}
      <header className="relative py-16 lg:py-24 overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50 via-white to-white">
        {/* Subtle orange ambient radial glows */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-neutral-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Stack */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block font-display">
                  🏆 NUEVO MODELO FD1S — EL REY DE LA INICIACIÓN
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-none uppercase tracking-tight text-neutral-900">
                Tu mejor lanzamiento, <br className="hidden sm:inline" />
                <span className="text-[#ff4d00]">multiplicado.</span>
              </h1>
              
              <p className="text-neutral-600 font-sans text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                El drone de pesca ideal para empezar con respaldo real en Perú. Fácil de usar, seguro, auto-flotante y listo para llevar tu carnada más lejos de la rompiente de la orilla, sin complicaciones técnicas ni rituales de calibración.
              </p>

              {/* Unique selling bullets */}
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-700 font-sans font-medium pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Sin complejas calibraciones</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Control amigable e intuitivo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Auto-despegue y retorno satelital</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#ff4d00]" />
                  <span>Flotación pasiva marina militar</span>
                </div>
              </div>

              {/* Action buttons with high design emphasis */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={getWhatsAppUrl(msgHero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl text-center shadow-xl shadow-[#ff4d00]/20 transition-all duration-250 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Anchor className="w-4 h-4" />
                  Quiero asesoría por WhatsApp
                </a>
                
                <a 
                  href="#por-que-fd1s"
                  className="border border-neutral-300 hover:border-neutral-400 bg-white/80 text-neutral-700 font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-2xl text-center transition-all duration-200 shadow-sm"
                >
                  Ver por qué el FD1S es para mí
                </a>
              </div>

              {/* Horizontal micro statistics */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-100 max-w-xl">
                <div>
                  <span className="font-display font-extrabold text-neutral-900 text-2xl sm:text-3xl block">1.3 km</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Lanzamiento Máx</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-neutral-900 text-2xl sm:text-3xl block">2.2 kg</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Carga Útil Máx</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-neutral-900 text-2xl sm:text-3xl block">27 min</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mt-0.5">Batería inteligente</span>
                </div>
              </div>
            </div>

            {/* Right Transparent Premium Product Showcase */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Ripple water glow effect behind the white background PNG */}
              <div className="absolute w-80 h-80 bg-[#ff4d00]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute w-[280px] h-[280px] bg-neutral-50 rounded-full -z-20 border border-neutral-100/50"></div>
              
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816470/swellpro-fisherman-fd1-plus-drone-thumnail_z9ytsb.png" 
                alt="SwellPro Fisherman FD1S de SwellPro Perú" 
                className="w-full max-w-sm relative z-10 transition duration-500 hover:scale-105 filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.08)]"
              />

              {/* Sutil bandera peruana y certificado oficial flotante */}
              <div className="absolute bottom-4 right-4 sm:right-10 bg-white border border-neutral-200 p-3 rounded-xl shadow-lg flex items-center gap-2.5 z-20">
                <div className="w-1.5 h-6 bg-[#ff4d00] rounded-sm" />
                <div className="text-left">
                  <span className="text-[9px] text-neutral-400 block font-bold uppercase tracking-wider">REPRESENTANTE OFICIAL</span>
                  <span className="text-[11px] text-neutral-900 block font-display font-black leading-none uppercase">SwellPro Perú 🇵🇪</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* BARRA DE CREDIBILIDAD / SOPORTE LOCAL EN PERÚ */}
      <section className="bg-neutral-50 py-10 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8 items-center text-left">
            
            {/* Credibility item 1 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-neutral-200/50 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0">
                <Award className="w-5 h-5 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-tight">Representante Oficial</h4>
                <p className="text-xs text-neutral-500 mt-1 font-sans">
                  Socio técnico oficial y distribuidor legítimo de SwellPro en todo el Perú.
                </p>
              </div>
            </div>

            {/* Credibility item 2 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-neutral-200/50 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0">
                <Wrench className="w-5 h-5 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-tight">Taller y Soporte Local</h4>
                <p className="text-xs text-neutral-500 mt-1 font-sans">
                  Repuestos permanentes en stock en Lima con diagnóstico oficial técnico certificado.
                </p>
              </div>
            </div>

            {/* Credibility item 3 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-neutral-200/50 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-tight">Garantía Real de 1 Año</h4>
                <p className="text-xs text-neutral-500 mt-1 font-sans">
                  Tranquilidad total. No requerimos coordinaciones largas de aduanas con el extranjero.
                </p>
              </div>
            </div>

            {/* Credibility item 4 */}
            <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-neutral-200/50 shadow-xs">
              <div className="bg-[#ff4d00]/10 p-2.5 rounded-lg shrink-0">
                <GraduationCap className="w-5 h-5 text-[#ff4d00]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-tight">Capacitación en Playa</h4>
                <p className="text-xs text-neutral-500 mt-1 font-sans">
                  Incluida en tu compra de cortesía. Aprenderás a volar y lanzar líneas pesadas con calma.
                </p>
              </div>
            </div>

          </div>
          
          <div className="mt-6 text-center">
            <a 
              href={getWhatsAppUrl(msgCredibility)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#ff4d00] hover:text-[#e04400] font-bold font-sans uppercase tracking-wider"
            >
              Consultar detalles de soporte local y capacitaciones en Lima y provincias 🇵🇪 →
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN "POR QUÉ FD1S" - POR QUÉ ES EL REY DE LA INICIACIÓN */}
      <section id="por-que-fd1s" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] text-[#ff4d00] font-black uppercase tracking-widest bg-neutral-100 px-4 py-2 rounded-full font-display">
            PESCA CON TECNOLOGÍA SIN COMPLICACIONES
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 mt-6 mb-8 uppercase tracking-tight">
            Nacido para pescadores prácticos de la costa peruana.
          </h2>

          <div className="bg-neutral-50 p-8 sm:p-12 rounded-3xl border border-neutral-105/90 text-left relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff4d00]/5 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-neutral-700 font-sans text-base sm:text-lg leading-relaxed mb-6">
              Volar un drone e iniciarse en la tecnología no debería restarle disfrute a tu jornada de pesca. El <strong className="text-neutral-900 font-bold">Fisherman FD1S</strong> está pensado para que te enfoques únicamente en lo que realmente te apasiona: el mar, el lanzado y la captura.
            </p>

            <blockquote className="border-l-4 border-[#ff4d00] pl-4 sm:pl-6 my-6 italic text-neutral-800 font-bold font-sans text-sm sm:text-base bg-white py-3.5 pr-4 rounded-r-lg">
              "No tienes que aprender complejas secuencias de pilotaje. Su filosofía es pragmática: tú pescas, el drone vuela. Conectas la batería, te elevas, liberas tu plomada hasta a 1.3 kilómetros de distancia y dejas que la fuerza de su motor haga el resto."
            </blockquote>

            <p className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed">
              Es un equipo noble, resistente y honesto. Olvídate de calibrar engorrosos sistemas cada vez que cambias de locación de playa, o del miedo constante a que el agua de una ola lo inutilice por completo. Cuenta con la estabilidad física, el peso óptimo para aguantar la rompiente de vientos costeros y el anclaje de un solo toque.
            </p>

            <div className="mt-8 pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-neutral-500 font-sans text-xs font-bold uppercase">
                🚀 ÚNETE A CENTENARES DE PESCADORES QUE YA MULTIPLICARON SUS CAPTURAS
              </span>
              <a 
                href={getWhatsAppUrl(msgWhy)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 hover:bg-[#ff4d00] text-white font-display font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-200 text-center cursor-pointer shadow-sm shadow-neutral-900/10"
              >
                Preguntar por disponibilidad inmediata →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE BENEFICIOS CLAVE */}
      <section className="py-24 bg-neutral-50/50 border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-black text-xs uppercase tracking-widest block">
              INGENIERÍA MODERNA DE CONFIANZA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-900 uppercase mt-3 mb-4 leading-tight tracking-tight">
              Los beneficios de pescar con tranquilidad de sobra
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans">
              Cada componente mecánico y de software del FD1S fue pensado meticulosamente para evitar preocupaciones sobre la orilla de playa o salitre costero del litoral de Perú.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit card 1 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Navigation className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Fácil Despegue / Auto-Retorno</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  El sistema satelital del control remoto permite despegar al drone de inmediato a una altura segura. Cuando liberas la línea, presionas un solo botón y el drone volverá de forma autónoma a posarse cerca de ti en la arena.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                100% automático y seguro
              </div>
            </div>

            {/* Benefit card 2 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Waves className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Auto-Flotante Completo</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  Soportado en materiales de alta resistencia, flotabilidad pasiva balanceada y sellos de estanqueidad grado militar. Si hay ráfagas extremas y acuatiza, flota perfectamente sobre el agua indefinidamente gracias a su estuche hermético.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                PowerFlip en agua incorporado
              </div>
            </div>

            {/* Benefit card 3 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Battery className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Auto-Mantenimiento Inteligente</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  Equipado con un chip electrónico inteligente incorporado en la batería LIHV de última tecnología. Descarga de forma automática y progresiva para conservar el voltaje seguro de almacenaje preventivo, maximizando los años de vida de la celda.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Celda de larga duración
              </div>
            </div>

            {/* Benefit card 4 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Aterrizaje ToF de Precisión láser</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  El nuevo sensor óptico ToF (Time-of-Flight) mide constantemente con láser la profundidad exacta respecto a la playa de arena, lodo o agua, mitigando cualquier impacto para lograr un reposo sobre el suelo con máxima sutileza de fábrica.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Láser de suelo integrado
              </div>
            </div>

            {/* Benefit card 5 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Hecho para Pescadores que Empiezan</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  Frente a otros modelos pesados o complejos, el Fisherman FD1S no cansa, es ligero para un traslado rápido en mochila y tiene un sistema operativo simplificado de pantalla limpia. Ideal si es tu primer drone.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Controles ultra-simplificados
              </div>
            </div>

            {/* Benefit card 6 */}
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition-all duration-300 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-[#ff4d00]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 uppercase mb-3 leading-snug">Protección Extrema Contra Salitre</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  Protegido estructuralmente con la refinada aleación impermeable anticorrosiva SeaShield™ en conectores y cuerpo. Resiste de forma certificada la condensación húmeda y la erosión acelerada por agua de mar.
                </p>
              </div>
              <div className="border-t border-neutral-100 mt-6 pt-4 text-xs text-neutral-400 font-bold uppercase tracking-wide">
                Protección marina SeaShield™
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <a 
              href={getWhatsAppUrl(msgBenefits)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4.5 px-8 rounded-2xl inline-flex items-center gap-2 shadow-lg shadow-[#ff4d00]/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Anchor className="w-4 h-4" /> Deseo consultar precios con un experto
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE PRODUCTO: FICHA TÉCNICA DETALLADA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              MÁXIMA CAPACIDAD EN LIMA Y PROVINCIAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 uppercase mt-3 mb-4 tracking-tight">
              Especificaciones Técnicas Fisherman FD1S
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans">
              La ficha definitiva del Fisherman FD1S de SwellPro Perú, con la traducción clara de lo que cada detalle significa para tu jornada de pesca:
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Product Image frame */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-150/80 w-full flex justify-center items-center shadow-xs">
                <img 
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816470/swellpro-fisherman-fd1-plus-drone-thumnail_z9ytsb.png" 
                  alt="Fisherman FD1S SwellPro Perú" 
                  className="w-full max-w-xs object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.05)] transform hover:rotate-3 transition duration-500"
                />
              </div>
              <div className="mt-4 bg-orange-100/50 border border-orange-200/50 rounded-xl p-4 text-center max-w-xs">
                <span className="text-neutral-800 text-xs font-sans font-medium">
                  "Un caballito de batalla robusto, optimizado para ser transportado de manera ágil."
                </span>
              </div>
            </div>

            {/* Right Specifications Table */}
            <div className="lg:col-span-7">
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-xs bg-white">
                {[
                  { 
                    item: "Capacidad de Carga Útil", 
                    value: "Hasta 2.2 kg de arrastre sólido", 
                    explain: "Suficiente para arrastrar plomadas pesadas y liberar hasta 10 anzuelos con carnada viva simultáneamente." 
                  },
                  { 
                    item: "Alcance Máximo de Lanzamiento", 
                    value: "1.3 Kilómetros", 
                    explain: "Llega más allá de la rompiente crítica, depositando tu aparejo donde los grandes depredadores merodean tranquilos." 
                  },
                  { 
                    item: "Autonomía de Vuelo", 
                    value: "Hasta 27 minutos", 
                    explain: "Capacidad de sobra de batería para realizar múltiples soltadas consecutivas de carnada en una sola tarde de playa." 
                  },
                  { 
                    item: "Diseño Físico y Flotación", 
                    value: "Sumergible IP67 completo + Flotación pasiva", 
                    explain: "Incluso si cae sobre el oleaje, flota perfectamente de pie y permite el despegue inmediato desde el agua." 
                  },
                  { 
                    item: "Control de Aterrizaje", 
                    value: "Láser ToF integrado", 
                    explain: "El drone detecta la cercanía milimétrica de la arena para descender de forma controlada y prevenir accidentes." 
                  },
                  { 
                    item: "Sistemas de Seguridad Activa", 
                    value: "Retorno inteligente redundante", 
                    explain: "Vuelve automáticamente y sin intervención al punto de partida exacto si hay batería baja ó ante cualquier pérdida de señal." 
                  },
                ].map((spec, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/50 transition duration-150 grid sm:grid-cols-12 gap-2 sm:gap-4 items-center"
                  >
                    <div className="sm:col-span-4">
                      <span className="font-display font-extrabold text-neutral-800 text-xs sm:text-sm uppercase tracking-tight block">
                        {spec.item}
                      </span>
                    </div>
                    <div className="sm:col-span-8 space-y-1 text-left sm:border-l sm:border-neutral-100 sm:pl-4">
                      <span className="font-sans font-bold text-[#ff4d00] text-sm sm:text-base block">
                        {spec.value}
                      </span>
                      <span className="font-sans text-xs text-neutral-500 block leading-relaxed leading-normal">
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
                  className="inline-flex items-center gap-1 text-xs text-[#ff4d00] hover:text-[#e04400] font-black font-sans uppercase tracking-widest"
                >
                  Descargar o solicitar catálogo oficial en alta definición por WhatsApp →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN "CÓMO SE SIENTE COMPRARLO" (Tranquilidad y Respaldo) */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        {/* Peruvian red glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-neutral-850/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-black text-xs uppercase tracking-widest block">
              LA EXPERIENCA COMPLETA CON SWELLPRO PERÚ
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase mt-3 mb-6 leading-tight tracking-tight">
              ¿Cómo se siente comprar con nosotros en Perú?
            </h2>
            <p className="text-neutral-400 text-sm font-sans">
              Comprar un drone de pesca no es simplemente recibir una caja en tu domicilio. Con SwellPro Perú adquieres un ecosistema entero centrado en darte la máxima seguridad y tranquilidad en playa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Capacitación */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Capacitación de Soltado en Campo</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                No arriesgues tu inversión en el primer vuelo. De cortesía por tu compra, agendamos una jornada práctica guiada en playa junto a un piloto técnico experto. Aprenderás a volar con viento de ráfagas pesadas, anclar tu aparejo y liberar de forma segura tu línea sin tensiones de más. Gana un 100% de confianza antes de volar solo.
              </p>
            </div>

            {/* Card 2: Repuestos y Taller */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Taller Técnico Físico con Stock en Lima</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                ¿Un percance contra una peña? ¿Perdiste una hélice en tu cochera? Como representante oficial, contamos con repuestos legítimos al instante: hélices, baterías extra, trenes de aterrizaje, motores y placas controladoras en Lima. Olvídate por completo de tener un equipo guardado de adorno durante meses esperando repuestos importados de Asia.
              </p>
            </div>

            {/* Card 3: Comunidad */}
            <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-8 hover:border-[#ff4d00]/30 transition duration-350">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase mb-3">Asistencia Permanente de por vida por WhatsApp</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                Nuestra comunidad oficial te mantiene informado de las mareas, consejos de vuelos locales, tips técnicos de mantenimiento en playas húmedas y soporte prioritario. Cualquier duda mecánica que surja el fin de semana antes de tu lanzamiento, un miembro experto la responderá al instante. Siempre acompañado.
              </p>
            </div>

          </div>

          <div className="mt-16 text-center border-t border-neutral-800 pt-10">
            <p className="text-xs uppercase tracking-widest font-bold text-[#ff4d00]">
              ✓ TRANQUILIDAD DE HOY, RECAPTURE DE MAÑANA
            </p>
            <p className="text-neutral-400 italic font-sans text-sm mt-2 max-w-xl mx-auto">
              "Para nosotros no eres simplemente una transacción. Queremos que multipliques tus capturas, cuides tu equipo de forma prolongada, y te sientas respaldado en el litoral peruano."
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN COMPARATIVA DE MODELOS */}
      <section className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] font-display font-bold text-xs uppercase tracking-widest block">
              SABER DECIDIDAMENTE QUÉ COMPRAR
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 uppercase mt-3 mb-4 tracking-tight">
              Diseño comparativo de la flota SwellPro Perú
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans">
              Para validar que el <strong className="text-neutral-900 font-bold">Fisherman FD1S</strong> es exactamente lo que necesitas para iniciarse de forma simple sobre la arena:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-neutral-150 min-w-[700px] rounded-2xl overflow-hidden shadow-xs">
              <thead>
                <tr className="bg-neutral-50 text-neutral-800 font-display font-bold uppercase text-[10px] sm:text-xs tracking-wider border-b border-neutral-200">
                  <th className="p-4 sm:p-5">Característica Clave</th>
                  <th className="p-4 sm:p-5 bg-orange-50 border-x border-orange-100/50 text-[#ff4d00]">
                    🔥 SwellPro FD1S (Este Drone)
                  </th>
                  <th className="p-4 sm:p-5">SwellPro FD2 Max</th>
                  <th className="p-4 sm:p-5">SwellPro FD3</th>
                  <th className="p-4 sm:p-5">SplashDrone 4 Plus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-150 font-sans text-xs sm:text-sm text-neutral-750">
                
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Enfoque Principal</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-[#ff4d00] italic">
                    Iniciación Práctica, Fácil de usar para pescador primerizo
                  </td>
                  <td className="p-4 sm:p-5">Pescador intermedio avanzado y arrastres de orilla pesado</td>
                  <td className="p-4 sm:p-5">Visión marina en tiempo real con cámara Gimbal 4K y suelta asistida</td>
                  <td className="p-4 sm:p-5">Plataforma sumergible multipropósito de gama alta</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Capacidad de Carga Útil</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-bold text-neutral-900">
                    2.2 Kilogramos
                  </td>
                  <td className="p-4 sm:p-5 font-bold">3.5 Kilogramos (Carga máxima)</td>
                  <td className="p-4 sm:p-5">2 kg (Capacidad máxima de carga)</td>
                  <td className="p-4 sm:p-5">2.0 Kilogramos</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Alcance Útil</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-medium text-neutral-800">
                    Apropiado 1.3 Kilómetros
                  </td>
                  <td className="p-4 sm:p-5">1.2 Kilómetros (Alcance máximo)</td>
                  <td className="p-4 sm:p-5">1.2 km</td>
                  <td className="p-4 sm:p-5 font-bold">Hasta 7.0 Kilómetros</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Cámara & Sensor</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-800">
                    Opcional (Monturas fijas de fábrica de fácil adición)
                  </td>
                  <td className="p-4 sm:p-5">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65</td>
                  <td className="p-4 sm:p-5">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65, equivalente a 25mm</td>
                  <td className="p-4 sm:p-5">Gimbal Estabilizado 3-Ejes 4K y Visión Nocturna</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Estabilidad ante ola</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 text-neutral-800">
                    IP67 sellado militar con auto-volteo PowerFlip
                  </td>
                  <td className="p-4 sm:p-5">Sistema WaterProf con resistencia viento 7 y mar 5 (PowerFlip™)</td>
                  <td className="p-4 sm:p-5">Estanqueidad profesional IP67 con resistencia viento 7, mar 5, PowerFlip™ y SeaSheld™</td>
                  <td className="p-4 sm:p-5">Estanqueidad de grado militar y gimbal estable 3-axis</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-neutral-900 font-display text-xs uppercase tracking-tight">Presupuesto Inicial</td>
                  <td className="p-4 sm:p-5 bg-orange-50/40 border-x border-orange-100/40 font-extrabold text-[#ff4d00]" id="por-que-comprar">
                    ★ De Entrada (El más económico de la gama)
                  </td>
                  <td className="p-4 sm:p-5">Fuerte arrastre comercial</td>
                  <td className="p-4 sm:p-5">Inversión Profesional</td>
                  <td className="p-4 sm:p-5">Premium Completo</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-neutral-50 rounded-2xl p-6 border border-neutral-100 max-w-2xl mx-auto">
            <span className="font-display font-bold text-neutral-900 text-xs sm:text-sm uppercase tracking-wider block mb-2">
              ¿Deseas comparar el FD1S directamente con un video en vivo?
            </span>
            <p className="text-neutral-500 font-sans text-xs mb-4">
              Escríbenos para enviarte videos reales de lanzamientos usando el FD1S en diferentes playas de la costa central, norte y sur de Perú.
            </p>
            <a 
              href={getWhatsAppUrl(msgCompare)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-[#ff4d00] text-white font-display font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition duration-200 inline-block shadow-xs"
            >
              Hablar con un asesor comparativo
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN RESPALDO LOCAL DETALLADO (MANTENIENDO COHERENCIA) */}
      <section className="py-20 bg-neutral-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-1.5 bg-[#ff4d00] mx-auto rounded-full mb-6"></div>
          
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-neutral-900 uppercase tracking-tight mb-4">
            Representación de Confianza SwellPro Perú
          </h2>
          
          <p className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Nuestra mayor virtud no es vender drones herméticos: es asegurarnos de que vueles siempre seguro, regreses feliz con abundante pesca a casa y sepas que si ocurre cualquier imprevisto técnico, hay un equipo especializado de ingenieros en el país que responderá por tu equipo con piezas originales en stock permanente.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            
            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-extrabold text-lg sm:text-xl block">1 AÑO</span>
              <span className="text-[10px] text-neutral-400 uppercase font-black block mt-1 tracking-wider">GARANTÍA TOTAL</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-extrabold text-lg sm:text-xl block">100%</span>
              <span className="text-[10px] text-neutral-400 uppercase font-black block mt-1 tracking-wider">REPUESTOS LISTOS</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-extrabold text-lg sm:text-xl block">LIMA</span>
              <span className="text-[10px] text-neutral-400 uppercase font-black block mt-1 tracking-wider">TALLER DIRECTO</span>
            </div>

            <div className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
              <span className="text-[#ff4d00] font-display font-extrabold text-lg sm:text-xl block">GRATIS</span>
              <span className="text-[10px] text-neutral-400 uppercase font-black block mt-1 tracking-wider">PRÁCTICA EN PLAYA</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FD1S SPECIAL PREMIUM FIELD EVIDENCE GALLERY */}
      <section id="fd1s-evidencia" className="py-24 bg-neutral-50/30 border-t border-b border-neutral-200/50 relative overflow-hidden">
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
              FD1S en la vida real
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-neutral-500 mt-4 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
              No te lo contamos. Te lo mostramos.
            </p>
          </div>

          {/* Media Grid Section (Mobile horizontal-scroll snap carousel, Desktop responsive editorial grid) */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none scroll-smooth">
            {(showAllGallery ? fd1sGalleryItems : fd1sGalleryItems.slice(0, 8)).map((item) => (
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
                    <p className="text-neutral-300 text-[10px] font-sans leading-relaxed line-clamp-2 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300 ease-out">
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
              href={getWhatsAppUrl("Hola SwellPro Perú, he estado revisando su galería de evidencias reales en uso con el Fisherman FD1S. Deseo recibir más información y coordinar detalles sobre este equipo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center font-bold font-display text-xs uppercase tracking-widest py-4.5 px-10 rounded-2xl bg-[#ff4d00] hover:bg-[#e04400] text-white shadow-xl shadow-[#ff4d00]/20 inline-flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Quiero verlo por WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* PREGUNTAS FRECUENTES COHERENTES */}
      <section className="py-20 bg-white border-t border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-[#ff4d00] font-display font-black text-xs uppercase tracking-widest block">
              RESOLVEMOS TUS DUDAS DE INMEDIATO
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-neutral-900 uppercase tracking-tight mt-2 mb-4">
              Preguntas Frecuentes del FD1S
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué diferencia al nuevo modelo FD1S de versiones anteriores?",
                a: "El Fisherman FD1S cuenta principalmente con el nuevo sensor láser de proximidad ToF (Time-of-Flight) en su base, logrando que los aterrizajes automáticos sean extremadamente controlados sin impactos sobre la arena de playa o lodo húmedo. Además incorporó una arquitectura de batería inteligente de Litio con chip de descarga progresiva pasiva para proteger las celdas durante ausencias de actividad y SeaShield™ anticorrosión de fábrica para resistir de forma real el litoral."
              },
              {
                q: "¿Qué pasa si hay ráfagas fuertes de viento costero?",
                a: "El FD1S tiene motores sin escobillas de alto par y una envergadura optimizada con fuselaje robusto de policarbonato marino reforzado de fibra de vidrio. Aguanta vientos de ráfagas continuas de hasta fuerza 7 en alta mar sin desviarse, asegurando la entrega perfecta de tu plomada detrás de la rompiente."
              },
              {
                q: "¿Cómo es la capacitación gratis incluida?",
                a: "Tras tu compra en Lima u otra provincia, coordinamos una fecha para encontrarnos en la playa. Un instructor experimentado te enseñará la configuración básica del control remoto sin abrumarte, el uso de las palancas, cómo despegar de forma segura, técnicas prácticas de soltado y cómo guiar la liberación del sedal. Ganas total autoseguridad para salir a pescar."
              },
              {
                q: "¿El drone realmente flota en el agua?",
                a: "Sí, el drone cuenta con flotabilidad pasiva balanceada de fábrica y hermeticidad IP67. Puede caer, mojarse o ser golpeado progresivamente por el oleaje. Si queda boca abajo, utilizas la palance de auto-volteo PowerFlip y el drone se dará vuelta solo sobre el agua de inmediato para que despegues nuevamente sin inconvenientes. Tampoco le dejas oxidar pues cuenta con aleaciones marinas SeaShield™."
              },
              {
                q: "¿Tienen repuestos disponibles de entrega inmediata?",
                a: "Exacto. Contamos con stock directo de fusibles, hélices, motores, carcasas herméticas, baterías extra inteligentes LIHV de 27 minutos y trenes de aterrizaje en Lima. Te diagnosticamos y resolvemos cualquier percance mecánico de forma inmediata en nuestro taller oficial."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-50 border border-neutral-150 rounded-2xl overflow-hidden transition duration-155"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 font-display font-bold text-xs sm:text-base uppercase tracking-wider flex items-center justify-between hover:bg-neutral-100 hover:text-[#ff4d00] transition text-neutral-850"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4.5 h-4.5 text-[#ff4d00] transition-transform duration-255 ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-neutral-200/50 text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN DE CIERRE EMOCIONAL & CTA FINAL */}
      <section className="py-24 text-center bg-white border-t border-neutral-100 relative overflow-hidden">
        {/* Peruvian red-white-red background accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4d00] via-neutral-200 to-[#ff4d00]"></div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-6 font-display">
            ✨ EL PRIMER GRAN PASO HACIA TU NUEVO RÉCORD
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-900 uppercase mb-6 tracking-tight">
            ¿Listo para llevar tu carnada <br />
            donde están los grandes?
          </h2>

          <p className="text-neutral-500 font-sans text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            No te dejes llevar por la incertidumbre de comprar en el extranjero sin soporte. Llévate el <strong className="text-neutral-900 font-bold">SwellPro Fisherman FD1S</strong> con garantía local de un año, capacitación introductoria gratis en playa y la seguridad perpetua que te entrega el taller oficial autorizado de SwellPro Perú.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getWhatsAppUrl(msgFooter)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest py-4.5 px-10 rounded-2xl transition duration-150 shadow-lg shadow-[#ff4d00]/25 hover:-translate-y-0.5 transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
                alt="SwellPro Perú" 
                className="w-5 h-5 rounded-full filter brightness-0 invert"
              />
              Quiero mi Fisherman FD1S
            </a>
            
            <a
              href="../index.html"
              className="w-full sm:w-auto border border-neutral-350 hover:border-neutral-400 bg-white text-neutral-700 font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-4.5 px-8 rounded-2xl transition duration-150 inline-block shadow-xs"
            >
              Ver otros modelos de drones
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-neutral-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-[#ff4d00]" />
            <span className="font-sans font-medium">Asesoría gratuita sin compromisos de compra</span>
          </div>

        </div>
      </section>

      {/* FOOTER GENERAL */}
      <footer className="py-16 text-center bg-neutral-950 text-white border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <img 
              src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
              alt="SwellPro Perú" 
              className="w-8 h-8 rounded-full"
            />
            <span className="font-display font-extrabold tracking-tight text-white uppercase sm:text-base text-sm">
              SWELLPRO <span className="text-[#ff4d00]">PERÚ</span>
            </span>
          </div>

          <p className="text-neutral-500 font-display text-[10px] uppercase tracking-widest mb-4 block">
            Único Representante Comercial Técnico Oficial en el Perú
          </p>

          <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Ofrecemos garantía de fábrica directa, repuestos originales perennes en stock de taller para entrega rápida y asistencia técnica los 7 días de la semana de cortesía a todos nuestros clientes.
          </p>

          <div className="flex justify-center gap-6 text-xs text-neutral-500 font-sans font-bold uppercase mb-8 pb-8 border-b border-neutral-900">
            <a href="../index.html" className="hover:text-white transition">Catálogo Completo</a>
            <span>•</span>
            <a href={getWhatsAppUrl("Hola, deseo agendar servicio técnico o reparación en su taller de Lima.")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Servicio Técnico</a>
            <span>•</span>
            <a href={getWhatsAppUrl("Hola, soy distribuidor y me gustaría vender SwellPro en provincias.")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Distribuidores</a>
          </div>

          <p className="text-neutral-650 font-sans text-[11px] leading-tight">
            © 2026 SwellPro Perú. Todos los derechos reservados. <br />
            Distribuidor legítimo de tecnología marina sumergible en el Perú.
          </p>

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
                href={getWhatsAppUrl(`Hola SwellPro Perú, vi su evidencia real de FD1S "${selectedGalleryItem.title}" en la galería de su web. Me interesa saber precio, stock y soporte técnico de este equipo.`)}
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


      {/* FLOATING WHATSAPP BUTTON (Persistent conversion tool) */}
      <a 
        href={getWhatsAppUrl("Hola SwellPro Perú, requiero asesoría personalizada sobre el Fisherman FD1S por favor.")}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float hover:scale-105 transition duration-155"
        id="floating-whatsapp-fd1s"
      >
        <svg 
          className="w-5 h-5 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.4 4.8 1.4 5.3 0 9.7-4.3 9.7-9.7 0-2.6-1-5-2.8-6.8-1.8-1.8-4.2-2.8-6.8-2.8-5.3 0-9.7 4.3-9.7 9.7 0 1.8.5 3.5 1.4 5.1L2.1 21.9l4.55-1.746zM17.3 14.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.2-.7-1.7-.9-2.3-.3-.7-.6-.6-.9-.6H9c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 3 1.3 3.5 1.5 3.8c.2.3 2.5 3.8 6 5.3.8.3 1.5.6 2 .7.9.3 1.6.2 2.2.1.7-.1 1.7-.7 1.9-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
        </svg>
        <span className="whatsapp-label font-bold text-xs uppercase tracking-wider">Asesoría de Pesca</span>
      </a>

    </div>
  );
}
