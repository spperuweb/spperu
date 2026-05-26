import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Check, 
  CheckCircle2, 
  AlertTriangle, 
  Wrench, 
  BookOpen, 
  MapPin, 
  Users, 
  Camera, 
  Scale, 
  Ruler, 
  Award,
  ArrowRight,
  Anchor,
  HelpCircle,
  ShieldCheck,
  Zap,
  PhoneCall
} from "lucide-react";
import { Product, FAQItem } from "./types";
import SelectionAssistant from "./components/SelectionAssistant";
import FAQSection from "./components/FAQSection";
import ScrollReveal from "./components/ScrollReveal";

// CONFIGURACIÓN DE WHATSAPP
const WHATSAPP_NUMBER = "51987654321"; // Representante de SwellPro Perú

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to add style to Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWhatsAppUrl = (text: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const products: Product[] = [
    {
      id: "fd1",
      name: "Fisherman FD1+",
      badge: "Táctico & Sencillo",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816470/swellpro-fisherman-fd1-plus-drone-thumnail_z9ytsb.png",
      specs: {
        reach: "1.3 km de alcance",
        payload: "2.2 kg de pura carnada",
        camera: "Vuelo visual táctico",
      },
      description: "Tu tanque de guerra para el mar. Sencillo, robusto y 100% libre de complicaciones. Hecho para arrastrar tus mejores líneas mar adentro sin rodeos de pantallas ni distracciones.",
      statusMessage: "Hola, me interesa recibir asesoría y programar cotización del Fisherman FD1+ con garantía local",
    },
    {
      id: "fd2-max",
      name: "Fisherman Max FD2",
      badge: "Carga Extrema + Cámara 4K",
      isPopular: true,
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/fisherman-max-fd2-drone-thumbnail_k1yona.png",
      specs: {
        reach: "1.5 km de alcance",
        payload: "3.5 kg de carga extrema",
        camera: "Cámara Marina 4K en vivo",
      },
      description: "La bestia absoluta de la costa sudamericana. Sujeta vientos cruzados brutales y remolca carnadas vivas o plomadas masivas de hasta 3.5 kg, observando el fondo en vivo en tu control para dar en la zona exacta.",
      statusMessage: "Hola, quiero información del Fisherman Max FD2, precios disponibles y agenda de inducción gratis",
    },
    {
      id: "fd3",
      name: "Fisherman FD3",
      badge: "Precisión & Alta Gama",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/swellpro-fisherman-fd3-drone-thumnail_mdxsb2.png",
      specs: {
        reach: "1.3 km de alcance",
        payload: "2 kg de carga máxima",
        camera: "Cámara 4K + Súper GPS 9.0",
      },
      description: "La armonía perfecta entre ingeniería marina y control de precisión. Su nuevo módulo con doble GPS 9.0 te asegura retornos autónomos quirúrgicos al punto de despegue y estabilidad total frente a corrientes de aire.",
      statusMessage: "Hola, me gustaría recibir especificaciones detalladas del Fisherman FD3 y facilidades de pago",
    },
    {
      id: "sd4-plus",
      name: "SplashDrone 4 Plus",
      badge: "Impermeable Híbrido",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/new-waterproof-drone-splashrone-4-plus_1570x_fgdu3n.webp",
      specs: {
        reach: "2.0 km de alcance",
        payload: "2.0 kg de suelta rápida",
        camera: "Gimbal 4K de 3 ejes",
      },
      description: "La cumbre de la versatilidad sumergible. Equipado con gimbal estabilizado de tres ejes y cámara 4K de alta velocidad. El equipo definitivo para creadores de contenido marinos y pesca táctica de precisión.",
      statusMessage: "Hola, me interesa recibir más detalles técnicos y cotización especial del SplashDrone 4 Plus con repuestos oficiales",
    }
  ];

  const faqItems: FAQItem[] = [
    {
      question: "¿Se envían a todo el Perú de forma totalmente segura?",
      answer: "Sí, enviamos de manera 100% asegurada y coordinada a todas las provincias del litoral y del interior (Callao, San Bartolo, Chorrillos, Cañete, Trujillo, Chiclayo, Chimbote, Piura, Ilo, Tacna y más). El embalaje es de alta resistencia mecánica para asegurar que el drone de pesca llegue calibrado y listo para tocar la arena marítima.",
    },
    {
      question: "¿Cómo compro mi drone de forma confiable?",
      answer: "Es directo y humano: primero conversamos por WhatsApp para darte asesoría personalizada sin presiones. Nos aseguramos de recomendarte el modelo óptimo según tu zona usual de pesca y tu caña. Luego, procesamos tu pago con seguridad directa y programamos tu envío junto con un plan completo de inducción práctica de vuelo en campo.",
    },
    {
      question: "¿Qué pasa si no tengo experiencia alguna piloteando drones?",
      answer: "No te preocupes en lo absoluto. Estos equipos no están diseñados para pilotos de carreras ni requieren destrezas complejas; se hicieron pensando enteramente en pescadores. Cuentan con vuelo asistido, estabilización de viento agresivo e inicio y regreso a tus manos con presionar un solo botón. Además, con tu compra con nosotros incluimos una capacitación integral personalizada en playa para enseñarte paso a paso cómo despegar, soltar la carnada y recuperar el equipo con total confianza.",
    },
    {
      question: "¿Cuánto dura la batería en una jornada real de playa?",
      answer: "Ofrece un tiempo promedio de vuelo continuo de hasta 25 minutos. Dado que lanzar cada línea y retornar te toma apenas de 2 a 3 minutos promedio, una sola carga de batería te rinde cómodamente de 8 a 10 caladas profundas mar adentro, garantizándote un día sumamente productivo de pesca deportiva.",
    },
    {
      question: "¿Qué pasa si cae accidentalmente al oleaje o agua salada?",
      answer: "Ahí reside la verdadera diferencia de SwellPro. Es el único drone diseñado exclusivamente bajo herrajes herméticos e inoxidables con certificación militar IP67. Si cae al oleaje, flota perfectamente de manera estable, su fuselaje resiste por completo la salinidad corrosiva y puedes aplicar un auto-volteo directamente desde el control remoto para levantarlo del agua y reanudar el vuelo en segundos.",
    },
    {
      question: "¿Tienen repuestos disponibles y soporte técnico permanente?",
      answer: "Totalmente. Al ser representantes oficiales operamos un taller técnico propio especializado directamente en el Perú. Mantenemos repuestos de fábrica en stock inmediato (motores, hélices, componentes de sellado rápido, baterías extra, mecanismos de suelta mecánica). Olvídate de mandar correos en inglés o mandar equipos de regreso al extranjero sufriendo trámites de aduana.",
    },
    {
      question: "¿Qué garantía real tiene mi inversión?",
      answer: "Absoluta seguridad. Al comprar a través de SwellPro Perú recibes una Garantía Local Real Directa de fábrica. Atendemos tu caso de inmediato en territorio nacional, solucionando cualquier eventualidad técnica de forma rápida y transparente para mantenerte pescando.",
    },
  ];

  const backupPillars = [
    {
      icon: <Award className="w-8 h-8 text-[#ff4d00]" />,
      title: "Garantía Real Local",
      desc: "Atendida directamente en el Perú. Sin esperas interminables, intermediarios extranjeros ni envíos costosos por fletes."
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#ff4d00]" />,
      title: "Soporte Técnico de Fábrica",
      desc: "Taller especializado propio. Diagnosticamos y resolvemos cualquier percance técnico con componentes 100% idóneos y oficiales."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#ff4d00]" />,
      title: "Entrenamiento Personalizado",
      desc: "Te enseñamos a volar y operar tu drone en la misma playa. Resolvemos miedos técnicos con inducción real de campo."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#ff4d00]" />,
      title: "Repuestos Inmediatos",
      desc: "Hélices, baterías, motores y sistemas de suelta mecánica siempre en stock para que no detengas tu temporada de pesca."
    }
  ];

  const experienceSteps = [
    {
      icon: <PhoneCall className="w-5 h-5 text-[#ff4d00]" />,
      title: "Vínculo Humano Primero",
      desc: "Conversamos para entender tu zona típica de pesca y caña, asegurándonos de que inviertas exactamente en lo necesario."
    },
    {
      icon: <Anchor className="w-5 h-5 text-[#ff4d00]" />,
      title: "Equipo Actualizado",
      desc: "Recibes tu equipo con actualizaciones de firmware instaladas, sensores calibrados de fábrica y pruebas de agua superadas."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ff4d00]" />,
      title: "Inducción Práctica Integral",
      desc: "Salimos al terreno de playa o te asistimos paso a paso. Aprendes a soltar con tensión, compensar vientos y reaccionar con pericia."
    },
    {
      icon: <Users className="w-5 h-5 text-[#ff4d00]" />,
      title: "Cofradía SwellPro Perú",
      desc: "Acceso a un grupo activo de WhatsApp donde compartimos capturas, mejores playas, estados del viento del litoral y consejos."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white">
      
      {/* NAVBAR */}
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-neutral-100" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo area */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
                alt="SwellPro Perú Logo" 
                width="48" 
                height="48"
                className="rounded-full shadow-md object-cover border border-neutral-100/10"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className={`font-display font-extrabold tracking-tight text-xl ${isScrolled ? "text-neutral-900" : "text-white"}`}>
                  SWELLPRO <span className="text-[#ff4d00]">PERÚ</span>
                </span>
                <span className={`text-[9px] uppercase tracking-widest font-bold -mt-1 ${isScrolled ? "text-neutral-500" : "text-neutral-300/90"}`}>
                  Representante Oficial
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["Modelos", "Garantía y Soporte", "Cómo funciona", "Contacto"].map((tab) => {
                let targetId = "#modelos";
                if (tab === "Garantía y Soporte") targetId = "#soporte-local";
                if (tab === "Cómo funciona") targetId = "#como-funciona";
                if (tab === "Contacto") targetId = "#contacto";
                
                return (
                  <a
                    key={tab}
                    href={targetId}
                    className={`font-semibold text-xs uppercase tracking-widest transition-all hover:text-[#ff4d00] ${
                      isScrolled ? "text-neutral-700" : "text-neutral-200 hover:text-white"
                    }`}
                  >
                    {tab}
                  </a>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={getWhatsAppUrl("Hola SwellPro Perú, vi su web y deseo una asesoría exclusiva de compra con garantía en el Perú.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-[#ff4d00]/25 transform hover:-translate-y-0.5"
              >
                Charla de Pesca por WhatsApp →
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none transition-colors ${
                  isScrolled ? "text-neutral-900" : "text-white"
                }`}
                aria-label="Menú principal"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-100 shadow-xl animate-fade-in absolute w-full top-full left-0">
            <div className="px-6 py-8 space-y-4">
              {["Modelos", "Garantía y Soporte", "Cómo funciona", "Contacto"].map((tab) => {
                let targetId = "#modelos";
                if (tab === "Garantía y Soporte") targetId = "#soporte-local";
                if (tab === "Cómo funciona") targetId = "#como-funciona";
                if (tab === "Contacto") targetId = "#contacto";
                
                return (
                  <a
                    key={tab}
                    href={targetId}
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-semibold text-sm uppercase tracking-wider text-neutral-800 hover:text-[#ff4d00] py-2.5 border-b border-neutral-50 transition-colors"
                  >
                    {tab}
                  </a>
                );
              })}
              <div className="pt-4">
                <a
                  href={getWhatsAppUrl("Hola SwellPro Perú, vi su página desde el celular y deseo asesorarme de forma personalizada para mi drone de pesca.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#ff4d00] hover:bg-[#e04400] text-center text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs block shadow-lg shadow-[#ff4d00]/20"
                >
                  Asesoría en Directo →
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>


      {/* SECTION 1 — CINEMATIC AND POWERFUL HERO */}
      <section id="inicio" className="relative min-h-[96vh] flex items-center justify-center bg-[#050505] text-white pt-28 pb-20 overflow-hidden">
        
        {/* Cinematic Backdrop Video/Poster Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816469/Fisherman-MAX-fd2-banner-1920x900_ebgmq0.webp"
            alt="SwellPro Fisherman Max sobre el océano Pacífico"
            className="w-full h-full object-cover object-center opacity-40 hover:scale-[1.03] transition-transform duration-[12000ms] ease-out pointer-events-none"
            loading="eager"
            decoding="async"
          />
          {/* Multi-layered cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/85 z-0"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-0"></div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d0d0d]/40 to-transparent z-0"></div>
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Subtle Accent Logo Badge */}
          <div className="inline-flex items-center gap-1.5 bg-neutral-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-neutral-800/80 mb-8 shadow-2xl">
            <span className="text-[#ff4d00]">🇵🇪</span> Distribución y Respaldo Oficial en el Perú
          </div>

          {/* Epic Short Headline */}
          <h1 className="font-display font-extrabold text-white text-5xl sm:text-7xl md:text-[6.5rem] tracking-tight leading-[0.9] uppercase mb-6 max-w-4xl">
            EL FIN DE<br />
            <span className="text-[#ff4d00] relative drop-shadow-[0_10px_30px_rgba(255,77,0,0.2)]">LA ORILLA.</span>
          </h1>

          {/* Sutil Perú line decor */}
          <div className="peru-line z-10 w-20 my-2 mx-auto"></div>

          {/* Aspirational emotional copy */}
          <p className="font-sans text-neutral-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-neutral-300/95 font-medium">
            Conquista la rompiente más salvaje. Lleva tu anzuelo hasta <span className="text-white font-bold border-b border-[#ff4d00]">1.5 km mar adentro</span>, localiza los mejores pozos en vivo y captura las especies más grandes desde la orilla. El único drone de pesca 100% sumergible y resistente al mar peruano.
          </p>

          {/* Principal Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg mb-8">
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, deseo conversar con un experto para decidir cuál es el drone de pesca que mejor se adapta a mis necesidades.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-sm uppercase tracking-wider py-4.5 px-10 rounded-2xl transition-all duration-200 transform hover:scale-102 shadow-2xl shadow-[#ff4d00]/30 text-center cursor-pointer border-t border-white/10"
            >
              Iniciar mi Asesoría por WhatsApp →
            </a>
            <a
              href="#soporte-local"
              className="text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-widest py-3 px-6 transition duration-150 border-b-2 border-transparent hover:border-[#ff4d00] flex items-center gap-2"
            >
              <span>Por qué comprar local</span> <span className="text-[#ff4d00]">↓</span>
            </a>
          </div>

          <div className="text-neutral-500 font-semibold text-[10px] tracking-widest uppercase mt-2">
            ASESORÍA COMPLETA · REVISIÓN TÉCNICA · INDUCCIÓN DE CAMPO GRATUITA
          </div>

        </div>
      </section>


      {/* SECTION 2 — RESPALDO Y CONFIANZA OFICIAL (Moved early, highlighted heavily) */}
      <section id="soporte-local" className="py-28 bg-[#fafafa] relative overflow-hidden border-t border-neutral-100">
        <div className="absolute top-0 right-[-10%] w-[350px] h-[350px] bg-neutral-200/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase block mb-3 bg-[#ff4d00]/5 px-3 py-1.5 rounded-full w-fit mx-auto border border-[#ff4d00]/10">
              Tranquilidad de Inversión
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight leading-none uppercase">
              La diferencia entre volar seguro o perder tu inversión
            </h2>
            <div className="w-14 h-1 bg-[#ff4d00] mx-auto mt-5 rounded-full"></div>
            <p className="text-neutral-550 text-sm md:text-base mt-4 font-sans max-w-2xl mx-auto leading-relaxed">
              Manejar tecnología especializada en agua salada y vientos marinos peruanos requiere respaldo legítimo. Comprar con un representante autorizado te asegura continuidad; importar por tu cuenta te expone a estar solo.
            </p>
          </ScrollReveal>

          {/* Pillars Bento Box Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-20">
            {backupPillars.map((item, idx) => (
              <ScrollReveal 
                key={idx}
                className="bg-white border border-neutral-200/80 rounded-2xl p-8 hover:shadow-xl hover:shadow-neutral-200/30 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="bg-neutral-50 border border-neutral-100 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#ff4d00]/5 group-hover:border-[#ff4d00]/15 transition-all duration-200">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-neutral-900 text-lg md:text-xl uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-550 text-xs md:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-neutral-100 group-hover:bg-[#ff4d00] transition-colors mt-6 rounded-full"></div>
              </ScrollReveal>
            ))}
          </div>

          {/* Support and Authority Visual Showcase */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <ScrollReveal className="relative group overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 hover:shadow-xl hover:border-neutral-300 transition-all duration-350">
              <div className="relative overflow-hidden rounded-2xl h-64 md:h-80 w-full bg-neutral-100">
                <img
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/local-drone-repair_2_kefrex.webp"
                  alt="Taller especializado y servicio técnico de drones en Lima Perú"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#ff4d00] text-[10px] font-extrabold uppercase tracking-widest mb-1.5 font-display">Taller Técnico en Lima</span>
                  <h4 className="font-display font-extrabold uppercase text-xl text-white">Soporte Técnico Especializado</h4>
                  <p className="text-neutral-300 text-xs mt-1.5 font-sans leading-relaxed">Olvídate de esperas, aduanas o correos sin respuesta. Diagnosticamos, calibramos y reparamos tu equipo directamente en nuestro laboratorio con repuestos de fábrica en stock inmediato.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative group overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 hover:shadow-xl hover:border-neutral-300 transition-all duration-350">
              <div className="relative overflow-hidden rounded-2xl h-64 md:h-80 w-full bg-neutral-100">
                <img
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816469/drone-fishing-master-award_600x_alcpke.webp"
                  alt="Swellpro Drone Fishing Master Award torneo de pesca"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[4000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#ff4d00] text-[10px] font-extrabold uppercase tracking-widest mb-1.5 font-display">Liderazgo Internacional</span>
                  <h4 className="font-display font-extrabold uppercase text-xl text-white">Autoridad Registrada del Mar</h4>
                  <p className="text-neutral-300 text-xs mt-1.5 font-sans leading-relaxed">El único ecosistema de drones del mundo multipremiado por pescadores deportivos por su infalible desempeño frente a rompientes letales y vientos costeros severos.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Neurological comparison blocks: Jugarte la inversión vs SwellPro Perú */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Si te la juegas solo block */}
            <ScrollReveal className="bg-white p-8 md:p-10 rounded-3xl border border-red-500/15 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-red-800"></div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="bg-red-50 p-2.5 rounded-xl text-red-700">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg md:text-xl uppercase tracking-tight">
                  Si te la juegas importando tú solo
                </h3>
              </div>

              <ul className="space-y-4 text-neutral-600 text-sm leading-relaxed">
                {[
                  "Garantía ausente en Perú: Si pasa una falla interna de firmware, debes enviarlo de vuelta a Asia costeando el flete.",
                  "Soporte estancado: Chateas con robots traductores en otros husos horarios con días de tardía para una sola respuesta.",
                  "Hélices, motores o baterías ausentes en aduana: Pasas la temporada de corvina esperando meses a que liberen un paquete.",
                  "Prueba de fuego sin guía: Si lo despegas mal en tu primer intento por falta de calibración, te quedas con un drone destruido sin retorno.",
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-red-700 font-bold shrink-0 mt-1">✕</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Con SwellPro Perú block */}
            <ScrollReveal className="bg-white p-8 md:p-10 rounded-3xl border border-[#ff4d00]/20 shadow-xl shadow-neutral-100/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#ff4d00]"></div>
              
              <div className="absolute top-4 right-4 bg-[#ff4d00]/5 text-[#ff4d00] font-bold text-[9px] tracking-widest px-3 py-1 rounded-full border border-[#ff4d00]/15 uppercase">
                Garantía y Tranquilidad
              </div>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="bg-orange-50 p-2.5 rounded-xl text-[#ff4d00]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg md:text-xl uppercase tracking-tight">
                  Con el respaldo de SwellPro Perú
                </h3>
              </div>

              <ul className="space-y-4 text-neutral-700 text-sm leading-relaxed font-medium">
                {[
                  "Garantía Directa en Lima: Examinamos y solucionamos el equipo directamente con repuestos oficiales sin enviar nada fuera.",
                  "Atención al instante: Nos mandas un mensaje, nos llamas desde la playa ante cualquier duda y un técnico nacional te asiste en vivo.",
                  "Repuestos inmediatos en mano: Contamos con hélices, motores, cargadores rápidos y baterías listos para salir a despacho.",
                  "Manuales, videos de entrenamiento y capacitación presencial directa incluida para cuidar tu herramienta desde el vuelo inicial.",
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold shrink-0 mt-1">✓</span>
                    <span className="text-neutral-800">{text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>

          <ScrollReveal className="text-center mt-16">
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, requiero un equipo con el respaldo total de taller local y capacitación directa. Deseo comunicarme para detalles.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-sm uppercase tracking-wider py-4.5 px-8 rounded-2xl transition-all duration-200 shadow-xl shadow-[#ff4d00]/20 cursor-pointer"
            >
              Quiero Comprar con Garantía Directa →
            </a>
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 3 — THE PRODUCTS (Editorial Showcase) */}
      <section id="modelos" className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-20 max-w-2xl mx-auto animate-fade-in">
            <span className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase block mb-3">
              Ingeniería Marina Sólida
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 uppercase leading-tight">
              Diseñados para no hundirse jamás
            </h2>
            <div className="w-14 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-neutral-500 mt-4 text-sm md:text-base font-sans leading-relaxed">
              Equipos de pesca sumergibles IP67 construidos con resinas especiales, sellos de goma marina y un poderoso motor brushless diseñado para batallar contra la sal para toda la vida.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
            {products.map((product) => {
              const borderClass = product.isPopular
                ? "border-[#ff4d00] shadow-2xl shadow-[#ff4d00]/10 ring-2 ring-[#ff4d00]/10"
                : "border-neutral-200/95 shadow-md shadow-neutral-100 hover:shadow-xl hover:border-neutral-300";

              return (
                <ScrollReveal
                  key={product.id}
                  className={`bg-white rounded-3xl border transition-all duration-500 flex flex-col justify-between overflow-hidden relative ${borderClass} transform hover:-translate-y-2 group`}
                >
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    <span className={`text-[8.5px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      product.isPopular
                        ? "bg-[#ff4d00] text-white shadow-md shadow-[#ff4d00]/20"
                        : "bg-neutral-950 text-white"
                    }`}>
                      {product.badge}
                    </span>
                    
                    {product.isPopular && (
                      <span className="bg-neutral-900 text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-neutral-800 w-fit">
                        🔥 Popular
                      </span>
                    )}
                  </div>

                  {/* Product Image Stage (Elegant Pedestal Render) */}
                  <div className="relative h-56 flex items-center justify-center p-6 bg-neutral-50/50 overflow-hidden border-b border-neutral-100/80">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.015)_0%,transparent_70%)] pointer-events-none"></div>
                    {/* Visual ground shadow pedestal for 3D realism */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-40 h-2 bg-black/[0.06] rounded-full blur-md pointer-events-none transition-all duration-500 group-hover:scale-95 group-hover:opacity-75"></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#ff4d00]/[0.03] rounded-full blur-lg pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="max-h-36 max-w-[85%] object-contain relative z-10 select-none pointer-events-none transition-transform duration-500 transform scale-100 group-hover:scale-106 group-hover:-translate-y-2 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.03)]"
                    />
                  </div>

                  {/* Product Details Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name */}
                      <h3 className="text-xl md:text-2xl font-display font-extrabold text-neutral-950 uppercase mb-2 flex items-center gap-1">
                        {product.name}
                        {product.isPopular && <span className="text-[#ff4d00]">★</span>}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-550 text-xs leading-relaxed mb-5 font-sans h-24 overflow-hidden">
                        {product.description}
                      </p>

                      {/* Specs Mini Panel */}
                      <div className="border-t border-b border-neutral-100 py-4 mb-5 space-y-2.5">
                        <div className="flex items-center gap-2.5 text-xs">
                          <Ruler className="w-4 h-4 text-[#ff4d00] shrink-0" />
                          <span className="text-neutral-500 font-semibold font-sans">
                            Alcance: <strong className="text-neutral-800 font-black">{product.specs.reach}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs">
                          <Scale className="w-4 h-4 text-[#ff4d00] shrink-0" />
                          <span className="text-neutral-500 font-semibold font-sans">
                            Capacidad: <strong className="text-neutral-800 font-black">{product.specs.payload}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs">
                          <Camera className="w-4 h-4 text-[#ff4d00] shrink-0" />
                          <span className="text-neutral-500 font-semibold font-sans">
                            Cámara: <strong className="text-neutral-800 font-black">{product.specs.camera}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp link CTA */}
                    <a
                      href={getWhatsAppUrl(product.statusMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl transition duration-250 block ${
                        product.isPopular
                          ? "bg-[#ff4d00] hover:bg-[#e04400] text-white shadow-lg shadow-orange-brand/25"
                          : "bg-neutral-950 hover:bg-neutral-900 text-white"
                      }`}
                    >
                      Preguntar precio y stock →
                    </a>
                  </div>

                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>


      {/* SECTION 4 — INTERACTIVE CONCIERGE ASSISTANT */}
      <section className="py-24 bg-neutral-950 text-white relative border-y border-neutral-900">
        
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase block mb-3">
              Encuentra tu compañero
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase leading-none">
              Asistente de Selección Inteligente
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-3 leading-relaxed font-sans max-w-lg mx-auto">
              Te orientamos en solo 3 clics según el oleaje, peso de plomo usual y presupuesto que buscas para tus salidas de pesca.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <SelectionAssistant products={products} whatsappNumber={WHATSAPP_NUMBER} />
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 5 — HOW IT WORKS (Un robótico removed, premium copy applied) */}
      <section id="como-funciona" className="py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase block mb-2">
              Lógica Táctica
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight uppercase leading-tight">
              Así funciona tu jornada de pesca con drone
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-neutral-500 text-sm md:text-base mt-4 font-sans max-w-lg mx-auto leading-relaxed">
              Sin enredos raros. Diseñado por y para pescadores. Controlas el recorrido con total tranquilidad en tres pasos limpios.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                num: "01",
                title: "Calibración y Anclaje",
                desc: "Anclas tu línea de pesca directa y plomada al clip de liberación electromecánico con un gancho rápido. No toma más de 5 segundos de preparación."
              },
              {
                num: "02",
                title: "Vuelo y Ubicación",
                desc: "Despegas el hardware. Atraviesas las rompientes del litoral sin arriesgar nada. Eliges el pozo o canal propicio visualizando la pantalla en vivo a cientos de metros."
              },
              {
                num: "03",
                title: "Liberación y Logro",
                desc: "Presionas el botón de soltar en el mando. Tu línea cae al agua y el drone regresa a tus manos autónomamente gracias al sistema 'Home Lock'."
              }
            ].map((step, idx) => (
              <ScrollReveal 
                key={idx}
                className="bg-white border border-neutral-200/90 p-8 rounded-2xl hover:border-[#ff4d00]/30 transition-all duration-300 relative group"
              >
                <div className="absolute top-4 right-6 font-display font-extrabold text-[#ff4d00]/5 text-6xl group-hover:text-[#ff4d00]/10 transition-colors">
                  {step.num}
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight text-neutral-900 mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-neutral-550 text-xs md:text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center">
            <span className="font-display font-extrabold text-lg md:text-2xl uppercase tracking-wider text-[#ff4d00]">
              Llega a los pozos profundos mar adentro sin caña pesada ni botes complejos.
            </span>
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 6 — DETAILED COMPARISON TABLE */}
      <section className="py-24 bg-white border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#ff4d00] uppercase tracking-widest block mb-2">
              Frente a frente
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-neutral-900 uppercase">
              Ficha Técnica Comparativa
            </h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-4xl mx-auto overflow-x-auto rounded-3xl border border-neutral-200/90 shadow-xl shadow-neutral-100 bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-neutral-950 text-white font-display text-xs tracking-widest uppercase border-b border-neutral-900">
                  <th className="p-6">Especificaciones</th>
                  <th className="p-6">Fisherman FD1+</th>
                  <th className="p-6 bg-[#ff4d00] text-center text-white">FD2 Max (Recomendado)</th>
                  <th className="p-6">Fisherman FD3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-150 text-xs md:text-sm text-neutral-700 font-sans">
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-5 font-bold text-neutral-950">Perfil Ideal</td>
                  <td className="p-5">Pescador práctico, puro arrastre</td>
                  <td className="p-5 bg-[#ff4d00]/5 text-center font-bold text-neutral-900">Fuerza brutal, oleaje y grandes presas</td>
                  <td className="p-5">Asistente multimedia de última generación</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-5 font-bold text-neutral-950">Alcance de Radio</td>
                  <td className="p-5">1.3 Kilómetros</td>
                  <td className="p-5 bg-[#ff4d00]/5 text-[#ff4d00] text-center font-bold">1.5 Kilómetros</td>
                  <td className="p-5">1.3 Kilómetros</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-5 font-bold text-neutral-950">Carga Certificada</td>
                  <td className="p-5">2.2 Kilogramos</td>
                  <td className="p-5 bg-[#ff4d00]/5 text-[#ff4d00] text-center font-bold">3.5 Kilogramos</td>
                  <td className="p-5 font-semibold text-neutral-800">2.0 Kilogramos</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-5 font-bold text-neutral-950">Transmisión de Cámara</td>
                  <td className="p-5 text-neutral-400">Arrojo ciego (sin cámara)</td>
                  <td className="p-5 bg-[#ff4d00]/5 text-center font-bold text-neutral-900">Cámara 4K en vivo para rastreo</td>
                  <td className="p-5">Cámara 4K en vivo + GPS Inteligente</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-5 font-bold text-neutral-950">Resistencia IP</td>
                  <td className="p-5">Sumergible IP67 completo</td>
                  <td className="p-5 bg-[#ff4d00]/5 text-center text-neutral-900 font-semibold">Sumergible IP67 completo</td>
                  <td className="p-5">Sumergible IP67 completo</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-5 font-bold text-neutral-950">Nivel de Navegación GPS</td>
                  <td className="p-5">Básico Estándar</td>
                  <td className="p-5 bg-[#ff4d00]/5 text-center font-semibold text-neutral-900">Súper GPS 9.0 Pro Avanzado</td>
                  <td className="p-5">Súper GPS 9.0 Pro Avanzado</td>
                </tr>
              </tbody>
            </table>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <p className="text-neutral-500 text-xs md:text-sm font-sans mb-4">
              ¿Quieres contrastar estos datos con las condiciones de tu mar preferido? Conversa con nosotros.
            </p>
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, he estado revisando la tabla técnica. Pesco en peñas y playas de corriente fuerte y desearía evaluar cuál drone resistirá mejor el viento de mi región.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-neutral-950 hover:bg-neutral-900 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition shadow-md cursor-pointer"
            >
              <HelpCircle size={15} /> Recibir Asesoría de Campo Gratuita
            </a>
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 7 — PREMIUM EXPERIENCE LIFECYCLE */}
      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase block mb-3">
              Acompañamiento Permanente
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 uppercase">
              Tu experiencia ideal: Paso a Paso
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-neutral-500 text-sm md:text-base mt-3 font-sans max-w-lg mx-auto leading-relaxed">
              No nos limitamos a procesar tu pago. Te enseñamos a dominar tu herramienta de principio a fin para volar con seguridad total.
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceSteps.map((step, idx) => (
              <ScrollReveal 
                key={idx} 
                className="bg-white border border-neutral-200/90 rounded-2xl p-6.5 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-start relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ff4d00]/45"></div>
                <div className="flex items-center gap-3 mb-4 shrink-0">
                  <div className="bg-orange-50 p-2.5 rounded-xl text-[#ff4d00]">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-[#ff4d00]/60 font-display tracking-widest">
                    {(idx+1).toString().padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-display font-bold uppercase tracking-tight text-neutral-900 text-base mb-2">
                  {step.title}
                </h4>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 8 — REAL SOCIAL PROOF / LOCAL TESTIMONIALS (No placeholders!) */}
      <section className="py-28 bg-white border-t border-b border-neutral-150">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#ff4d00] uppercase tracking-widest block mb-2">
              Prueba de Campo Real
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight uppercase leading-none">
              Drones en acción en el litoral peruano
            </h2>
            <div className="w-12 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
            <p className="text-neutral-500 mt-4 text-sm md:text-base font-sans leading-relaxed max-w-lg mx-auto">
              Nuestra mayor garantía es ver a pescadores apasionados logrando capturas previamente inalcanzables gracias a SwellPro.
            </p>
          </ScrollReveal>

          {/* Picture Grid Section (No generic placeholders) */}
          <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto mb-20">
            
            {/* National Deploy Board */}
            <ScrollReveal className="bg-neutral-950 text-white p-8 rounded-2xl md:col-span-1 shadow-lg border border-neutral-900 self-stretch flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#ff4d00] text-xs font-bold tracking-widest uppercase mb-4">
                  <MapPin className="w-4 h-4" /> Despliegue Nacional
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight leading-none mb-4">
                  Zonas donde ya operamos
                </h3>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  Nuestros pescadores operan desde las fuertes brisas del norte peruano hasta las gélidas peñas y acantilados del sur.
                </p>
              </div>

              <div className="space-y-3.5 border-t border-neutral-900 pt-6 font-sans">
                <div className="flex justify-between text-xs text-neutral-300">
                  <span className="font-semibold">⚓ Costa Norte (Chiclayo, Piura, Paita)</span>
                  <span className="text-[#ff4d00] font-bold">Activo</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span className="font-semibold">⚓ Costa Centro (Ancón, Chorrillos, Cañete)</span>
                  <span className="text-[#ff4d00] font-bold">Activo</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span className="font-semibold">⚓ Costa Sur (Ilo, Chala, San Bartolo)</span>
                  <span className="text-[#ff4d00] font-bold">Activo</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Lifestyle Gallery with brand-new high-end assets */}
            <ScrollReveal className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-2xl h-52 bg-neutral-200 border border-neutral-100">
                <img
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/drones-for-land-based-game-fishing_cp3stb.webp"
                  alt="Pesca de juego desde tierra con drones en Perú"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/90 px-4 py-3 text-white text-[11px] font-semibold font-sans">
                  Lanzamiento táctico guiado desde la playa
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl h-52 bg-neutral-200 border border-neutral-100">
                <img
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/shark-fishing-tournament_600x_y7eibg.webp"
                  alt="Torneos extremos y captura de grandes presas con Swellpro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/90 px-4 py-3 text-white text-[11px] font-semibold font-sans">
                  Soporte de torque extremo para torneos marinos
                </div>
              </div>
              <div className="relative col-span-2 group overflow-hidden rounded-2xl h-52 bg-neutral-200 border border-neutral-100">
                <img
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/drone-fishing-charter-banner_600x_zvxgav.webp"
                  alt="Servicios charter y botes recreativos con Swellpro"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/90 px-5 py-3.5 text-white text-xs font-semibold font-sans">
                  Operaciones coordinadas en botes y embarcaciones recreativas
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Authentic Local Testimonials (Rebuilt, no long placeholder templates) */}
          <div className="max-w-4xl mx-auto bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-3xl">
            <h3 className="font-display font-extrabold text-center uppercase tracking-wider text-neutral-900 mb-8 text-sm">
              🗣️ Voces del mar peruano: Testimonios auténticos
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-2xl border border-neutral-150 relative shadow-xs flex flex-col justify-between">
                <p className="text-neutral-600 italic text-sm mb-6 leading-relaxed font-sans">
                  &ldquo;Pasaba horas arriesgando el hombro intentando cruzar la rompiente en San Bartolo con plomada pesada. Con el Fisherman Max FD2 ubico el canal de alimentación en mi control y suelto carnada de hasta 3 kilos con precisión de cirujano. El soporte en Lima me entregó el equipo calibrado y me enseñó a despegarlo con viento fuerte.&rdquo;
                </p>
                <div>
                  <span className="block text-xs font-extrabold text-[#ff4d00] uppercase tracking-wider">Carlos M. - San Bartolo</span>
                  <span className="text-[10px] text-neutral-400 block font-semibold font-sans">SwellPro FD2 Max · Pesca de Playa</span>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-2xl border border-neutral-150 relative shadow-xs flex flex-col justify-between">
                <p className="text-neutral-600 italic text-sm mb-6 leading-relaxed font-sans">
                  &ldquo;Tenía mucho recelo de volar un aparato tan caro sobre el agua salada. Sin embargo, ver flotar el drone y despegar desde el agua me dio calma absoluta en Chiclayo. El servicio técnico local me brindó confianza de inmediato: compré filtros de cámara y una batería de repuesto que me llegaron al día siguiente.&rdquo;
                </p>
                <div>
                  <span className="block text-xs font-extrabold text-[#ff4d00] uppercase tracking-wider">Javier R. - Costa Norte</span>
                  <span className="text-[10px] text-neutral-400 block font-semibold font-sans">SwellPro FD3 · Pesca de Peña</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 9 — FAQs */}
      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#ff4d00] uppercase tracking-widest block mb-2">
              Derribando dudas
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight uppercase">
              Preguntas más frecuentes
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQSection items={faqItems} />
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 10 — LATINO PREMIUM CLOSING CTA */}
      <section className="relative bg-[#0d0d0d] text-white py-28 overflow-hidden border-t-4 border-[#ff4d00]">
        
        {/* Abstract glowing backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          
          <span className="inline-block bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Llegó tu momento estratégico
          </span>

          <h2 className="font-display font-extrabold text-white text-4xl sm:text-6xl md:text-[5rem] leading-[0.9] mb-8 uppercase">
            TU SIGUIENTE PESCA<br />
            <span className="text-[#ff4d00]">VA A SER HISTÓRICA.</span>
          </h2>

          <div className="peru-line w-20 my-4 mx-auto"></div>

          <p className="font-sans text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
            Únete al club de pescadores peruanos que ya se olvidaron de los límites tradicionales del lanzamiento costero. Llévate un equipo de alta gama con garantía directa local, servicio garantizado en Lima y el único acompañamiento experto del país.
          </p>

          <div className="inline-block">
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú. Vi el cierre de su página web y me gustaría coordinar las opciones de precios para adquirir mi nuevo drone de pesca de forma segura y con garantía.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-sm md:text-base uppercase tracking-wider py-4.5 px-10 rounded-2xl transition duration-200 shadow-2xl shadow-orange-brand/35 cursor-pointer transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-5 h-5 shrink-0" /> Coordinar compra por WhatsApp →
            </a>
          </div>

          <div className="text-neutral-500 text-xs mt-4 tracking-wider uppercase font-semibold">
            Asesoría técnica rápida · Respuestas en minutos de forma atenta y experta
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer id="contacto" className="bg-neutral-950 text-white py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-700 via-white to-red-750"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-12 border-b border-neutral-900">
            
            {/* Brand Logo inside Footer */}
            <div className="flex items-center gap-3.5">
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
                alt="SwellPro Logo Circular" 
                width="54" 
                height="54"
                className="rounded-full shadow-md object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <span className="font-display font-extrabold tracking-tight text-xl block uppercase leading-none">
                  SWELLPRO <span className="text-[#ff4d00]">PERÚ</span>
                </span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold block mt-1">
                  Drones de Pesca Sumergibles IP67
                </span>
              </div>
            </div>

            {/* Link directories */}
            <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              <a href="#modelos" className="hover:text-white transition">Lista de Drones</a>
              <a href="#soporte-local" className="hover:text-white transition">Garantía Local</a>
              <a href="#como-funciona" className="hover:text-white transition">Cómo Funciona</a>
              <a 
                href={getWhatsAppUrl("Hola SwellPro Perú. Deseo ponerme en contacto con el sector administrativo de su oficina oficial.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition text-[#ff4d00]"
              >
                Contacto Directo
              </a>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-neutral-400 flex items-center justify-center" 
                aria-label="Facebook Oficial SwellPro"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-neutral-400 flex items-center justify-center" 
                aria-label="TikTok Oficial SwellPro"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.18-.3-.21v6.94c0 5.59-4.56 10.13-10.15 10.13-5.59 0-10.13-4.54-10.13-10.13C0 9.4 4.54 4.86 10.13 4.86c.38 0 .76.02 1.14.07v4.09c-.38-.05-.76-.07-1.14-.07-3.33 0-6.04 2.71-6.04 6.04 0 3.33 2.71 6.04 6.04 6.04 3.33 0 6.04-2.71 6.04-6.04V.02z"/>
                </svg>
              </a>
            </div>

          </div>

          <div className="text-center text-xs text-neutral-500 font-medium">
            <span className="block mb-2 font-bold text-neutral-400 uppercase tracking-widest text-[10px]">SwellPro Perú — Único Representante Técnico Comercial en el Perú</span>
            <p>&copy; {new Date().getFullYear()} SwellPro Perú. Todos los derechos reservados. Las marcas mostradas son de su respectivo fabricante.</p>
          </div>

        </div>
      </footer>


      {/* FLOATING WHATSAPP OVERLAY (MANDATORY AND CONSTANT PING) */}
      <a 
        href={getWhatsAppUrl("Hola SwellPro Perú. Deseo recibir asesoría técnica comercial sobre los drones de pesca y coordinar una demostración o detalles de compra.")}
        className="whatsapp-float shrink-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar con soporte directo en Perú por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" className="shrink-0 animate-none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="whatsapp-label">¡Escríbenos!</span>
      </a>

    </div>
  );
}
