import React, { useState, useEffect } from "react";
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
  PhoneCall,
  Play,
  Pause,
  Eye,
  Video,
  Sparkles,
  Share2,
  ExternalLink
} from "lucide-react";
import { Product, FAQItem } from "./types";
import SelectionAssistant from "./components/SelectionAssistant";
import FAQSection from "./components/FAQSection";
import ScrollReveal from "./components/ScrollReveal";

// CONFIGURACIÓN DE WHATSAPP
const WHATSAPP_NUMBER = "51991664146"; // Representante de SwellPro Perú

// GALERÍA REAL PREMIUM SWELLPRO PERÚ (Datos Reales de Campo)
const galleryItems = [
  // 1. CAPTURAS REALES (Bloque: capturas)
  {
    id: "captura-1",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929017/swellpro-peru-capturas-07_qqsxbk.jpg",
    type: "image",
    category: "capturas",
    tag: "Cliente real",
    title: "Gran captura obtenida desde la orilla",
    desc: "Nuestros clientes demuestran que llegar a pozos inaccesibles se traduce en capturas históricas sin pescar desde bote."
  },
  {
    id: "captura-2",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929016/swellpro-peru-capturas-05_nudwmc.jpg",
    type: "image",
    category: "capturas",
    tag: "Captura real",
    title: "Doble captura logrativa mar adentro",
    desc: "Calado profundo con plomada pesada y múltiples anzuelos utilizando el Fisherman FD2 Max."
  },
  {
    id: "captura-3",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929016/swellpro-peru-capturas-08_iiawap.jpg",
    type: "image",
    category: "capturas",
    tag: "Captura real",
    title: "Imponente pieza lograda en la costa centro",
    desc: "SwellPro te permite colocar el cebo justo detrás de la rompiente donde se alimentan los grandes ejemplares."
  },
  {
    id: "captura-4",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929015/swellpro-peru-capturas-03_dqlamh.jpg",
    type: "image",
    category: "capturas",
    tag: "Captura real",
    title: "Pescador deportivo con su captura del día",
    desc: "Resultados reales que cambian para siempre la forma de vivir la pesca recreativa en el litoral."
  },
  {
    id: "captura-5",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929016/swellpro-peru-capturas-06_dz6kns.jpg",
    type: "image",
    category: "capturas",
    tag: "Cliente real",
    title: "Pescador satisfecho con su SwellPro de alta gama",
    desc: "Clientes reales que avalan la potencia y confiabilidad de nuestra tecnología en cada salida."
  },

  // 2. EN ACCIÓN (Bloque: accion)
  {
    id: "action-1",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941037/swellpro-peru-captura-11_qivbja.mp4",
    type: "video",
    category: "accion",
    tag: "En acción",
    title: "Lanzamiento y arrastre de línea marina",
    desc: "Mira cómo trabaja el sistema de liberación rápida electromecánica sobre las olas o peñas costeras."
  },
  {
    id: "action-2",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941033/swellpro-peru-en-accion-06_g8mphr.mp4",
    type: "video",
    category: "accion",
    tag: "Prueba en playa",
    title: "Despegue vertical contra ráfagas costeras",
    desc: "Vuelos estables con resistencia al viento de nivel 7 (hasta 61 km/h) en el litoral peruano."
  },
  {
    id: "action-3",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941031/swellpro-peru-en-capturas-10_ef6sck.mp4",
    type: "video",
    category: "accion",
    tag: "Cliente real",
    title: "Reacción instantánea del soltador",
    desc: "Liberación controlada a voluntad desde el mando a distancia para posicionar la carnada a más de 1 km."
  },
  {
    id: "action-4",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941031/swellpro-peru-en-accion-05_xchqmp.mp4",
    type: "video",
    category: "accion",
    tag: "Prueba en playa",
    title: "Vuelo táctico estable para calar carnada",
    desc: "La cámara transmite en tiempo real en la pantalla del control permitiendo leer las corrientes marinas."
  },
  {
    id: "action-5",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941029/swellpro-peru-en-accion-04_tksmyf.mp4",
    type: "video",
    category: "accion",
    tag: "En acción",
    title: "Pruebas de flote seguro en el fuerte oleaje",
    desc: "Estructura hermética militar IP67. Si cae al mar, flota infinitamente y puede auto-voltearse de inmediato."
  },
  {
    id: "action-6",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941029/swellpro-peru-en-accion-02_kk5r6d.mp4",
    type: "video",
    category: "accion",
    tag: "Prueba en playa",
    title: "Retorno autónomo confiable a tus manos",
    desc: "La función Home Lock retorna el drone de forma automática guiado por GPS en caso de baja batería o pérdida de señal."
  },
  {
    id: "action-7",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941028/swellpro-peru-en-accion-03_qvky68.mp4",
    type: "video",
    category: "accion",
    tag: "En acción",
    title: "Estabilidad del drone en condiciones extremas",
    desc: "Vuela con tranquilidad de espíritu sabiendo que los controladores de vuelo corrigen las ráfagas en milisegundos."
  },
  {
    id: "action-8",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941028/swellpro-peru-en-accion-01_yxeb6w.mp4",
    type: "video",
    category: "accion",
    tag: "Prueba en playa",
    title: "Maniobrabilidad y precisión milimétrica",
    desc: "Giroscopios avanzados garantizan mantener estabilidad sin derivas molestas durante el calado."
  },
  {
    id: "action-9",
    url: "https://res.cloudinary.com/drvejtepq/video/upload/q_auto/f_auto/v1779941027/swellpro-peru-capturas-09_l6gyti.mp4",
    type: "video",
    category: "accion",
    tag: "Captura real",
    title: "Gran captura en directo desde la costa",
    desc: "La tensión y adrenalina de la captura en vivo retratada por nuestros usuarios en playa."
  },

  // 3. DRONE Y EQUIPO (Bloque: equipo)
  {
    id: "dron-1",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929016/swellpro-peru-dron-01_uvvj5z.jpg",
    type: "image",
    category: "equipo",
    tag: "Drone real",
    title: "Un chasis blindado contra la corrosión marina",
    desc: "Sellados herméticos de teflón, tornillería marina de acero inoxidable y materiales ultra-resistentes."
  },
  {
    id: "dron-2",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929015/swellpro-peru-dron_jhkqhb.jpg",
    type: "image",
    category: "equipo",
    tag: "Drone real",
    title: "Mecanismo de liberación electromecánico",
    desc: "Clip reforzado para liberar hasta 3.5 kg de carga pesada con absoluta seguridad mediante comando radial."
  },
  {
    id: "dron-3",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929015/swellpro-peru-capturas-04_horizontal_c9ylzz.jpg",
    type: "image",
    category: "equipo",
    tag: "Prueba en playa",
    title: "Pescadores operando el drone en peñas costeras",
    desc: "Capacitación práctica presencial incluida. Te enseñamos a despegar y lanzar con paciencia y método táctico."
  },
  {
    id: "dron-4",
    url: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779929016/swellpro-peru-capturas-02_usflmo.jpg",
    type: "image",
    category: "equipo",
    tag: "Cliente real",
    title: "Preparación del equipo previo a calar",
    desc: "La tecnología oficial se une con el conocimiento playero para otorgarte la experiencia definitiva de pesca."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<'todo' | 'capturas' | 'accion' | 'equipo'>('todo');
  const [selectedMedia, setSelectedMedia] = useState<typeof galleryItems[0] | null>(null);
  const [showAllMedia, setShowAllMedia] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  // Parse deep link media on mount or parameter change
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mediaId = params.get("media");
    if (mediaId) {
      const matchedItem = galleryItems.find(item => item.id === mediaId);
      if (matchedItem) {
        setSelectedMedia(matchedItem);
        // Scroll to gallery
        setTimeout(() => {
          const galleryEl = document.getElementById("galeria");
          if (galleryEl) {
            galleryEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, []);

  const copyShareLink = async (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const origin = window.location.origin || "https://swellpro.pe";
    const shareUrl = `${origin}/?media=${id}`;
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("No se pudo copiar el enlace", err);
    }
  };

  const getWhatsAppUrl = (text: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const products: Product[] = [
    {
      id: "fd1",
      name: "Fisherman FD1S",
      badge: "El más fácil de usar",
      tagline: "Siente el viento, lanza tu línea y déjaselo a él.",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816470/swellpro-fisherman-fd1-plus-drone-thumnail_z9ytsb.png",
      specs: {
        reach: "1.3 Kilómetros",
        payload: "2.2 Kilogramos",
        camera: "Sensor ToF + Batería Inteligente",
      },
      description: "Diseñado para el pescador que busca simplicidad absoluta sin rodeos técnicos. Enciende, asegura tu plomada al clip automático y vuela directo al pozo de alimentación del lenguado. Sin calibraciones complejas, con la tranquilidad de un aterrizaje asistido de total suavidad.",
      statusMessage: "Hola, quiero info del Fisherman FD1S",
    },
    {
      id: "fd2-max",
      name: "Fisherman FD2 Max",
      badge: "Máxima carga",
      isPopular: true,
      tagline: "El titán del calado. Soporta vientos brutales sin pestañear.",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/fisherman-max-fd2-drone-thumbnail_k1yona.png",
      specs: {
        reach: "1.2 Kilómetros",
        payload: "3.5 Kilogramos (Máxima potencia)",
        camera: "Gimbal 4K, 12 MP, 1/2.3\" CMOS",
      },
      description: "La bestia definitiva para batallar con el oleaje y el viento del litoral peruano. Levanta hasta 3.5 kg de carga pesada, lleva carnada entera a pozos profundos y soporta ráfagas letales de hasta 61 km/h sin perder un milímetro de precisión.",
      statusMessage: "Hola, quiero info del Fisherman FD2 Max",
    },
    {
      id: "fd3",
      name: "Fisherman FD3",
      badge: "Cámara + Precisión",
      tagline: "Tus ojos en vivo bajo la espuma para clavar con precisión quirúrgica.",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816471/swellpro-fisherman-fd3-drone-thumnail_mdxsb2.png",
      specs: {
        reach: "1.2 km",
        payload: "2 kg",
        camera: "Gimbal 4K, 12 MP, 1/2.3\" CMOS, f/2.65, equivalente a 25mm",
      },
      description: "Explora la estructura marina desde tu control con pantalla brillante. Mira en tiempo real dónde se rompe la ola, localiza el banco de arena y suelta tu cebo de hasta 2 kg exactamente donde se alimenta la corvina grande.",
      statusMessage: "Hola, quiero info del Fisherman FD3",
    },
    {
      id: "sd4",
      name: "SplashDrone 4",
      badge: "Lo más avanzado",
      tagline: "Ingeniería marina sin límites. El rey absoluto del mar.",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/new-waterproof-drone-splashrone-4-plus_1570x_fgdu3n.webp",
      specs: {
        reach: "7.0 Kilómetros",
        payload: "2.0 Kilogramos",
        camera: "Sony 4K 60fps, 48 MP, Zoom 8x",
      },
      description: "El gigante del hardware sumergible. 7 kilómetros de transmisión blindada y la capacidad de flotar indefinidamente sobre las rompientes del Pacífico. Pensado para el pescador deportivo que exige perfección implacable.",
      statusMessage: "Hola, quiero info del SplashDrone 4",
    },
    {
      id: "sd4-plus",
      name: "SplashDrone 4 Plus",
      badge: "SOLD OUT — Próximo ingreso",
      isSoldOut: true,
      tagline: "El gigante de la versatilidad sumergible.",
      image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/new-waterproof-drone-splashrone-4-plus_1570x_fgdu3n.webp",
      specs: {
        reach: "7.0 Kilómetros",
        payload: "2.0 Kilogramos",
        camera: "Sony 4K 60fps, 5.7K UHD",
      },
      description: "La cumbre de la versatilidad sumergible con gimbal estabilizado de 3 ejes. Próximo ingreso en aduana peruana. Puedes separar el tuyo hoy mismo.",
      statusMessage: "Hola, avísame cuando llegue el SplashDrone 4 Plus",
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

  const getFilterHeader = () => {
    switch (galleryFilter) {
      case 'capturas':
        return {
          tag: "Capturas Reales",
          title: "Capturas reales. Resultados reales.",
          desc: "Nuestros pescadores demuestran que llegar a pozos inaccesibles se traduce en capturas históricas sin pescar desde bote."
        };
      case 'accion':
        return {
          tag: "Drones Especiales en Acción",
          title: "Así se ve SwellPro Perú en acción.",
          desc: "Mira cómo trabaja el hardware sobre las peñas costeras, playas abiertas y oleajes bravíos del Pacífico."
        };
      case 'equipo':
        return {
          tag: "Ingeniería de Mar",
          title: "El equipo que está detrás de la captura.",
          desc: "Chasis estancos herméticos militares IP67 armados con resinas anticorrosión para toda la vida."
        };
      default:
        return {
          tag: "Prueba de Campo Real",
          title: "Pruebas reales, no promesas.",
          desc: "Cuando ves capturas, videos y equipos reales, entiendes por qué SwellPro Perú no vende solo drones: vende resultados con respaldo."
        };
    }
  };

  const currentHeader = getFilterHeader();

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
              {["Modelos", "Garantía y Soporte", "Cómo funciona", "Galería", "Contacto"].map((tab) => {
                let targetId = "#modelos";
                if (tab === "Garantía y Soporte") targetId = "#soporte-local";
                if (tab === "Cómo funciona") targetId = "#como-funciona";
                if (tab === "Galería") targetId = "#galeria";
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
              {["Modelos", "Garantía y Soporte", "Cómo funciona", "Galería", "Contacto"].map((tab) => {
                let targetId = "#modelos";
                if (tab === "Garantía y Soporte") targetId = "#soporte-local";
                if (tab === "Cómo funciona") targetId = "#como-funciona";
                if (tab === "Galería") targetId = "#galeria";
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
            className="w-full h-full object-cover object-center opacity-35 hover:scale-[1.03] transition-transform duration-[12000ms] ease-out pointer-events-none"
            loading="eager"
            decoding="async"
          />
          {/* Multi-layered cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/90 z-0"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-0"></div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a]/50 to-transparent z-0"></div>
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Subtle Accent Logo Badge */}
          <div className="inline-flex items-center gap-1.5 bg-neutral-900/95 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-neutral-800 mb-8 shadow-2xl animate-pulse">
            <span className="text-[#ff4d00]">🇵🇪</span> Respaldo Oficial · Soporte Directo Nacional · Capacitación en Playa
          </div>

          {/* Epic Short Headline */}
          <h1 className="font-display font-extrabold text-white text-5xl sm:text-7xl md:text-[6.8rem] tracking-tight leading-[0.85] uppercase mb-6 max-w-4xl">
            EL FIN DE<br />
            <span className="text-[#ff4d00] relative drop-shadow-[0_10px_30px_rgba(255,77,0,0.35)]">LA ORILLA.</span>
          </h1>

          {/* Sutil Perú line decor */}
          <div className="peru-line z-10 w-24 my-3 mx-auto"></div>

          {/* Aspirational emotional copy */}
          <p className="font-sans text-neutral-200 text-sm sm:text-base md:text-xl max-w-3xl leading-relaxed mb-10 font-sans-dm font-normal">
            Abres tu estuche en la arena, enciendes el control y elevas tu equipo venciendo en segundos el viento del litoral. Vuela sobre la espuma, lee la corriente en vivo y deposita tu carnada exactamente a <span className="text-white font-black border-b border-[#ff4d00] pb-0.5">1.5 kilómetros</span>, donde habitan las verdaderas piezas de récord. Sin botes complejos y sin arriesgar tu vida en las peñas.
          </p>

          {/* Principal Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg mb-8">
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, vi su web y quiero recibir asesoría directa. Deseo saber qué drone se adapta mejor a mis zonas usuales de pesca.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-xs uppercase tracking-widest py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-103 shadow-2xl shadow-[#ff4d00]/30 text-center cursor-pointer border-t border-white/10"
            >
              Lanzar mi anzuelo más lejos por WhatsApp →
            </a>
            <a
              href="#modelos"
              className="text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-widest py-3 px-6 transition duration-200 border-b-2 border-transparent hover:border-[#ff4d00] flex items-center gap-2"
            >
              <span>Ver Drones de Pesca</span> <span className="text-[#ff4d00]">↓</span>
            </a>
          </div>

          <div className="text-neutral-500 font-bold text-[9px] tracking-widest uppercase mt-2">
            ASESORÍA COMPLETA DE PESCADOR A PESCADOR · TALLER EXCLUSIVO EN LIMA · REPUESTOS EN STOCK
          </div>

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-14">
            {products.map((product) => {
              const isSoldOut = product.isSoldOut;
              const isFD2Max = product.id === "fd2-max";

              // Get custom page and evidence gallery anchors
              const modelPage = product.id === "fd1" 
                ? "./fd1s/index.html" 
                : product.id === "fd2-max" 
                ? "./fd2/index.html" 
                : product.id === "fd3" 
                ? "./fd3/index.html" 
                : product.id === "sd4" 
                ? "./sd4/index.html" 
                : "./sd4-plus/index.html";

              const galleryLink = product.id === "fd1" 
                ? "./fd1s/index.html#fd1s-evidencia" 
                : product.id === "fd2-max" 
                ? "./fd2/index.html#fd2-evidencia" 
                : product.id === "fd3" 
                ? "./fd3/index.html#fd3-evidencia" 
                : product.id === "sd4" 
                ? "./sd4/index.html" 
                : "./sd4-plus/index.html";

              // Visual styling classes based on product state
              const cardClass = isSoldOut
                ? "bg-neutral-50/80 border-neutral-200 opacity-80 lg:col-span-2 hover:border-neutral-300"
                : isFD2Max
                ? "bg-white border-[#ff4d00]/80 shadow-lg shadow-[#ff4d00]/5 ring-1 ring-[#ff4d00]/10 hover:border-[#ff4d00] hover:shadow-2xl hover:shadow-[#ff4d00]/10"
                : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-200/50";

              const badgeBg = isSoldOut
                ? "bg-neutral-200 text-neutral-500 border border-neutral-300"
                : isFD2Max
                ? "bg-[#ff4d00] text-white shadow-sm shadow-[#ff4d00]/25 font-black"
                : "bg-neutral-900 text-white";

              return (
                <ScrollReveal
                  key={product.id}
                  className={`rounded-3xl border transition-all duration-300 flex flex-col md:flex-row overflow-hidden relative group ${cardClass}`}
                >
                  {/* Badge Area (Absolute placement on top left) */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 items-start">
                    <span className={`text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full font-display border border-transparent ${badgeBg}`}>
                      {product.badge}
                    </span>
                    {isFD2Max && (
                      <span className="bg-neutral-900 text-white text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-neutral-800 flex items-center gap-1 shadow-sm font-display">
                        🔥 MÁS VENDIDO
                      </span>
                    )}
                  </div>

                  {/* Left Column: Product Image Box (Interactive Pedestal render + Gallery Click indicator) */}
                  <div className={`relative min-h-[220px] md:w-[42%] flex items-center justify-center p-6 overflow-hidden border-b md:border-b-0 md:border-r border-neutral-100/80 shrink-0 ${isSoldOut ? "bg-neutral-100/40" : "bg-neutral-50/40"}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01)_0%,transparent_70%)] pointer-events-none"></div>
                    {/* Shadow Pedestal */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-2 bg-black/[0.04] rounded-full blur-md pointer-events-none transition-all duration-300 group-hover:scale-90 group-hover:opacity-60"></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#ff4d00]/[0.02] rounded-full blur-lg pointer-events-none transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className={`max-h-36 max-w-[85%] object-contain relative z-10 select-none pointer-events-none transition-transform duration-500 transform scale-100 group-hover:scale-105 group-hover:-translate-y-1 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.03)] ${isSoldOut ? "grayscale opacity-50 contrast-75" : ""}`}
                    />

                    {/* Highly Interactive "VER GALERÍA" Overlay Link for clicking the image */}
                    <a 
                      href={galleryLink}
                      className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden group/img-overlay"
                      title={`Ver galería de fotos reales de ${product.name}`}
                    >
                      {/* Smooth dark glow cover on hover */}
                      <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover/img-overlay:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                        <Camera className="w-8 h-8 text-[#ff4d00] mb-2 transform scale-75 group-hover/img-overlay:scale-100 transition-transform duration-300" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest leading-none block mb-1">
                          Ver Galería Real ↗
                        </span>
                        <span className="text-neutral-400 text-[8px] tracking-wide block max-w-[85%]">
                          Fotos tomadas en playas peruanas
                        </span>
                      </div>

                      {/* Persistent Pill Badge at the bottom-right corner to make it clear photos exist */}
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md shadow-sm border border-neutral-200/60 px-2.5 py-1.5 rounded-xl text-[8.5px] font-bold tracking-wider text-neutral-700 uppercase flex items-center gap-1.5 transition-all duration-200 hover:bg-neutral-900 hover:text-white hover:border-transparent">
                        <Camera className="w-3.5 h-3.5 text-[#ff4d00]" />
                        <span>GALERÍA ↗</span>
                      </div>
                    </a>
                  </div>

                  {/* Right Column: Informative Copy and Dynamic CTAs (More space, Clean alignment) */}
                  <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name */}
                      <h3 className="text-xl font-display font-extrabold text-neutral-900 uppercase tracking-tight mb-1">
                        {product.name}
                      </h3>

                      {/* Emotional tagline (Short and conversational) */}
                      {product.tagline && (
                        <p className={`font-sans text-[11px] font-medium leading-relaxed mb-4 italic ${isSoldOut ? "text-neutral-400" : "text-[#ff4d00]"}`}>
                          "{product.tagline}"
                        </p>
                      )}

                      {/* Compact Technical Specs with clean outline */}
                      <div className="border-t border-b border-neutral-100/60 py-3.5 mb-5 space-y-2 text-[11.5px] font-sans">
                        <div className="flex items-center gap-2 text-neutral-600">
                          <Ruler className="w-4 h-4 text-neutral-450 shrink-0" />
                          <span>
                            Alcance: <strong className="text-neutral-800 font-bold">{product.specs.reach}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-700">
                          <Scale className="w-4 h-4 text-neutral-450 shrink-0" />
                          <span>
                            Lanzamiento: <strong className="text-neutral-800 font-bold">{product.specs.payload}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600">
                          <Camera className="w-4 h-4 text-neutral-450 shrink-0" />
                          <span className="truncate">
                            Óptica: <strong className="text-neutral-800 font-bold">{product.specs.camera.split(',')[0]}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTAs Control Area */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      {isSoldOut ? (
                        <>
                          <button
                            disabled
                            className="flex-1 text-center font-display font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded-xl border border-neutral-200 text-neutral-400 bg-neutral-100 cursor-not-allowed h-11"
                          >
                            Temporalmente Agotado
                          </button>
                          
                          <a
                            href={getWhatsAppUrl("Hola SwellPro Perú, veo que el SplashDrone 4 Plus está agotado pero deseo sumarme a la lista de espera oficial para el próximo ingreso peruano.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center font-display font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded-xl bg-neutral-200 text-neutral-600 hover:bg-neutral-300 border border-neutral-300 transition duration-150 inline-flex items-center justify-center gap-1.5 h-11"
                          >
                            <PhoneCall className="w-3.5 h-3.5 text-[#ff4d00] animate-pulse" /> Listar Espera →
                          </a>
                        </>
                      ) : (
                        <>
                          {/* Main Button (Go to landing page / complete specs): Visually strong */}
                          <a
                            href={modelPage}
                            className={`flex-1 text-center font-display font-bold text-[10px] uppercase tracking-widest py-3.5 px-4 rounded-xl transition-all duration-200 ease-out border shadow-sm flex items-center justify-center h-11 ${
                              isFD2Max
                                ? "bg-[#ff4d00] text-white border-transparent hover:bg-[#e04400] hover:shadow-md hover:shadow-[#ff4d00]/20"
                                : "bg-neutral-900 border-neutral-950 text-white hover:bg-neutral-800"
                            }`}
                          >
                            Ver Ficha Completa →
                          </a>
                          
                          {/* Secondary CTA (Ask on WhatsApp): Muted yet highly visible */}
                          <a
                            href={getWhatsAppUrl(product.statusMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center font-display font-semibold text-[9.5px] uppercase tracking-widest py-3.5 px-4 rounded-xl border border-neutral-250 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-450 hover:text-neutral-900 transition duration-150 inline-flex items-center justify-center gap-1.5 h-11"
                          >
                            <PhoneCall className="w-3.5 h-3.5 text-stone-400 transition-colors group-hover:text-[#ff4d00]" /> Cotizar WhatsApp →
                          </a>
                        </>
                      )}
                    </div>
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
                  <th className="p-5">Característica</th>
                  <th className="p-5">FD1S</th>
                  <th className="p-5 bg-[#ff4d00]/10 text-center text-[#ff4d00] font-bold">FD2 Max (Recomendado)</th>
                  <th className="p-5">FD3</th>
                  <th className="p-5">SD4</th>
                  <th className="p-5 text-neutral-400">SD4 Plus (Sold Out)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-150 text-xs md:text-sm text-neutral-700 font-sans">
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Para quién</td>
                  <td className="p-4">Empezar bien</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center font-bold text-neutral-900">Máxima carga</td>
                  <td className="p-4">Precisión + cámara</td>
                  <td className="p-4">Lo mejor sin límites</td>
                  <td className="p-4 text-neutral-450">Lo más premium, próximo ingreso</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Alcance</td>
                  <td className="p-4">1.3 km</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-[#ff4d00] text-center font-bold">1.2 km</td>
                  <td className="p-4">1.2 km</td>
                  <td className="p-4">7 km</td>
                  <td className="p-4 text-neutral-450">7 km</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Carga máx</td>
                  <td className="p-4">2.2 kg</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-[#ff4d00] text-center font-bold">3.5 kg</td>
                  <td className="p-4">2 kg</td>
                  <td className="p-4">2 kg</td>
                  <td className="p-4 text-neutral-450">2 kg</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Cámara</td>
                  <td className="p-4">No</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center text-neutral-900 font-medium">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65</td>
                  <td className="p-4">Gimbal 4K, 12 MP, 1/2.3" CMOS, f/2.65, equivalente a 25mm</td>
                  <td className="p-4">Sony 4K 60fps</td>
                  <td className="p-4 text-neutral-450">Sony 4K 60fps, 5.7K UHD</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Video en vivo</td>
                  <td className="p-4">No</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center text-neutral-900 font-bold">Sí</td>
                  <td className="p-4">Sí</td>
                  <td className="p-4">Sí</td>
                  <td className="p-4 text-neutral-450">Sí</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Batería</td>
                  <td className="p-4">27 min</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center text-neutral-900">27 min (vuelo)</td>
                  <td className="p-4">27 min (vuelo)</td>
                  <td className="p-4 font-semibold">29 min</td>
                  <td className="p-4 text-neutral-450">29 min</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">IP Waterproof</td>
                  <td className="p-4">IP67 Estanqueidad</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center text-neutral-900 font-bold">IP67 / WaterProf (Viento 7, Mar 5)</td>
                  <td className="p-4">IP67 (Viento 7, Mar 5)</td>
                  <td className="p-4">IP67</td>
                  <td className="p-4 text-neutral-450">IP67</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Control Remoto</td>
                  <td className="p-4">Estándar IP54</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center text-neutral-900 font-bold">IP54 Impermeable</td>
                  <td className="p-4">IP54 Impermeable</td>
                  <td className="p-4">IP66 Waterproof</td>
                  <td className="p-4 text-neutral-450">IP66 Waterproof</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Peso y Dimensiones</td>
                  <td className="p-4">Not especificado</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center text-neutral-900">3.78 kg | 522 × 522 × 192 mm</td>
                  <td className="p-4">2.54 kg | 372 × 372 × 202 mm</td>
                  <td className="p-4">Not especificado</td>
                  <td className="p-4 text-neutral-450">Not especificado</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Sistemas Especiales</td>
                  <td className="p-4">PowerFlip™</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center text-neutral-900 font-bold">PowerFlip™ + SeaSheld™ Anticorrosión</td>
                  <td className="p-4">PowerFlip™ + SeaSheld™ + Sistema BAP</td>
                  <td className="p-4">PowerFlip™</td>
                  <td className="p-4 text-neutral-450">PowerFlip™ + SeaSheld™</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-950">Disponibilidad</td>
                  <td className="p-4">✅ Disponible</td>
                  <td className="p-4 bg-[#ff4d00]/5 text-center font-bold text-green-700">✅ Disponible</td>
                  <td className="p-4">✅ Disponible</td>
                  <td className="p-4">✅ Disponible</td>
                  <td className="p-4 text-red-600 font-semibold">🔴 Sold Out — Próximo ingreso</td>
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


      {/* SECTION 2 — RESPALDO Y CONFIANZA OFICIAL (Repositioned below technical clarity) */}
      <section id="soporte-local" className="py-32 bg-[#fafafa] relative overflow-hidden border-y border-neutral-100">
        <div className="absolute top-0 right-[-10%] w-[450px] h-[450px] bg-neutral-250/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase block mb-3 bg-[#ff4d00]/5 px-4 py-2 rounded-full w-fit mx-auto border border-[#ff4d00]/10 font-mono">
              SOPORTE LOCAL · TRANQUILIDAD DE INVERSIÓN
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight leading-none uppercase">
              La diferencia entre pescar tranquilo o perder tu inversión
            </h2>
            <div className="w-16 h-1 bg-[#ff4d00] mx-auto mt-6 rounded-full"></div>
            <p className="text-neutral-550 text-sm md:text-base mt-4 font-sans max-w-2xl mx-auto leading-relaxed">
              Manejar tecnología electrónica especializada en agua salada y vientos costeros severos requiere el respaldo de expertos reales en Lima. Comprar con el representante oficial te asegura continuidad en tus salidas de pesca; arriesgarte a importar por tu cuenta te expone a quedarte solo en la arena del desierto.
            </p>
          </ScrollReveal>

          {/* Pillars Bento Box Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-24">
            {backupPillars.map((item, idx) => (
              <ScrollReveal 
                key={idx}
                className="bg-white border border-neutral-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-neutral-200/40 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="bg-neutral-50 border border-neutral-100 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#ff4d00]/5 group-hover:border-[#ff4d00]/15 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-neutral-900 text-lg md:text-xl uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-550 text-xs md:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="w-10 h-1 bg-neutral-100 group-hover:bg-[#ff4d00] transition-colors mt-6 rounded-full"></div>
              </ScrollReveal>
            ))}
          </div>

          {/* Support and Authority Visual Showcase */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
            <ScrollReveal className="relative group overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 hover:shadow-2xl hover:border-neutral-300 transition-all duration-300">
              <div className="relative overflow-hidden rounded-2xl h-80 md:h-96 w-full bg-neutral-100">
                <img
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/local-drone-repair_2_kefrex.webp"
                  alt="Taller especializado y servicio técnico de drones en Lima Perú"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[6000ms] ease-out-back"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#ff4d00] text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Taller de Servicio en Lima</span>
                  <h4 className="font-display font-extrabold uppercase text-xl md:text-2xl text-white mb-2">Soporte Técnico Especializado</h4>
                  <p className="text-neutral-300 text-xs md:text-sm font-sans leading-relaxed">Olvídate de trámites lentos ante aduanas o correos genéricos sin respuesta. Diagnosticamos, calibramos y reparamos tu equipo directamente en nuestro laboratorio técnico con repuestos 100% originales en stock inmediato.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative group overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 hover:shadow-2xl hover:border-neutral-300 transition-all duration-300">
              <div className="relative overflow-hidden rounded-2xl h-80 md:h-96 w-full bg-neutral-100">
                <img
                  src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816469/drone-fishing-master-award_600x_alcpke.webp"
                  alt="Swellpro Drone Fishing Master Award torneo de pesca"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[6000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#ff4d00] text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">Inducción Profesional</span>
                  <h4 className="font-display font-extrabold uppercase text-xl md:text-2xl text-white mb-2">Clase Práctica en la Costa</h4>
                  <p className="text-neutral-300 text-xs md:text-sm font-sans leading-relaxed">No te dejamos solo en tu primer despegue. Te enseñamos de forma práctica y guiada a calibrar, cargar la carnada, liberar el lastre y recuperar el drone con seguridad. Pescar con éxito desde el primer día está garantizado.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Neurological comparison blocks: Jugarte la inversión vs SwellPro Perú */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Si te la juegas solo block */}
            <ScrollReveal className="bg-white p-10 rounded-3xl border border-red-500/10 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-red-750"></div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="bg-red-50/70 p-3 rounded-2xl text-red-700">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg md:text-xl uppercase tracking-tight">
                  Arriesgándote a importar solo
                </h3>
              </div>

              <ul className="space-y-4 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {[
                  "Garantía ausente en el país: Ante cualquier anomalía técnica o daño de software, deberás costear envíos internacionales costosos y lidiar con trámites aduaneros.",
                  "Asesoría técnica inexistente: Respuestas genéricas escritas por robots automáticos en inglés en horarios opuestos con días de tardanza.",
                  "Desprotección ante la aduana peruana: Riesgo de retención de baterías de litio y aduanas bloqueadas por falta de homologación de telecomunicaciones (MTC).",
                  "Prueba a ciegas con peligro de caída: Sin entrenamiento previo, corres el riesgo de perder tu drone en la primera rompiente brava por un mal cálculo de despegue.",
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-red-700 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Con SwellPro Perú block */}
            <ScrollReveal className="bg-white p-10 rounded-3xl border border-[#ff4d00]/10 shadow-xl shadow-neutral-100/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#ff4d00]"></div>
              
              <div className="absolute top-4 right-4 bg-[#ff4d00]/5 text-[#ff4d00] font-bold text-[8.5px] tracking-widest px-3 py-1 rounded-full border border-[#ff4d00]/10 uppercase font-mono">
                RESPALDO NACIONAL
              </div>

              <div className="flex items-center gap-3.5 mb-8">
                <div className="bg-orange-50 p-3 rounded-2xl text-[#ff4d00]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg md:text-xl uppercase tracking-tight">
                  Comprando en SwellPro Perú
                </h3>
              </div>

              <ul className="space-y-4 text-neutral-700 text-xs sm:text-sm leading-relaxed font-normal">
                {[
                  "Garantía legítima directa de fábrica en Lima: Diagnosticamos, configuramos y reparamos en nuestro laboratorio sin enviar nada al extranjero.",
                  "Asistencia técnica de pescador a pescador: Te brindamos asesoría al instante vía telefónica o WhatsApp incluso en plena playa ante cualquier reto.",
                  "Entrega inmediata sin demoras ni trámites: Equipos nacionales totalmente homologados ante el MTC listos para entrega inmediata y despacho seguro.",
                  "Clase práctica post-venta incluida: Capacitación uno a uno frente al mar impartida por instructores especializados para cuidar tu inversión.",
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-neutral-800 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>

          <ScrollReveal className="text-center mt-20">
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, requiero un equipo con el respaldo total de taller local y capacitación directa. Deseo comunicarme para detalles de compra.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-xs uppercase tracking-widest py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl shadow-[#ff4d00]/25 cursor-pointer transform hover:scale-103"
            >
              Comprar Seguro con Garantía Oficial →
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
      </section>      {/* SECTION 8 — REAL SOCIAL PROOF / LOCAL TESTIMONIALS (No placeholders!) */}
      <section id="galeria" className="py-28 bg-neutral-50/40 border-t border-b border-neutral-200/60 relative overflow-hidden">
        
        {/* Subtle decorative glowing background for a high-end feel */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-neutral-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-12 right-12 w-[350px] h-[350px] bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main heading section */}
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#ff4d00] uppercase tracking-widest block mb-3 bg-[#ff4d00]/5 px-3 py-1.5 rounded-full w-fit mx-auto border border-[#ff4d00]/10">
              {currentHeader.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight uppercase leading-none transition-all duration-300">
              {currentHeader.title}
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-neutral-550 mt-4 text-sm md:text-base font-sans leading-relaxed max-w-2xl mx-auto h-auto transition-all duration-300">
              {currentHeader.desc}
            </p>
            <div className="text-neutral-450 italic text-xs font-bold font-sans tracking-widest mt-4 uppercase">
              “No te lo contamos. Te lo mostramos.”
            </div>
          </ScrollReveal>

          {/* Interactive filter tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
            <ScrollReveal className="bg-white/80 border border-neutral-200 p-1.5 rounded-2xl flex items-center gap-1 overflow-x-auto max-w-full scrollbar-none shadow-sm shadow-neutral-100 shrink-0">
              {[
                { id: 'todo', label: 'Ver Todo' },
                { id: 'capturas', label: 'Capturas Reales' },
                { id: 'accion', label: 'En Acción' },
                { id: 'equipo', label: 'Drone y Equipo' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setGalleryFilter(tab.id as any);
                    setShowAllMedia(false);
                  }}
                  className={`text-[10px] md:text-xs font-display font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                    galleryFilter === tab.id
                      ? 'bg-neutral-950 text-white shadow-md shadow-neutral-950/20'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Media Grid Section (Mobile horizontal-scroll snap carousel, Desktop responsive editorial grid) */}
          <ScrollReveal>
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none scroll-smooth">
              {(galleryFilter === 'todo'
                ? (showAllMedia 
                    ? galleryItems 
                    : [
                        galleryItems.find(i => i.id === "action-1")!,
                        galleryItems.find(i => i.id === "captura-1")!,
                        galleryItems.find(i => i.id === "action-2")!,
                        galleryItems.find(i => i.id === "captura-2")!,
                        galleryItems.find(i => i.id === "dron-1")!,
                        galleryItems.find(i => i.id === "action-5")!,
                        galleryItems.find(i => i.id === "captura-3")!,
                        galleryItems.find(i => i.id === "dron-3")!,
                      ].filter(Boolean)
                  )
                : galleryItems.filter(item => item.category === galleryFilter)
              ).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedMedia(item)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-[#ff4d00]/45 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-300 cursor-pointer snap-center shrink-0 w-[280px] md:w-auto h-[380px] md:h-[420px] flex flex-col justify-between"
                >
                  {/* Media Content Stage */}
                  <div className="relative w-full h-full overflow-hidden bg-neutral-950">
                    {item.type === 'video' ? (
                      <div className="w-full h-full relative">
                        <video
                          src={item.url}
                          muted
                          loop
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 select-none pointer-events-none"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full relative">
                        <img
                          src={item.url}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 select-none pointer-events-none"
                        />
                      </div>
                    )}
                    
                    {/* Double gradient overlay for superior readability on light properties */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 group-hover:via-neutral-950/40 transition-all duration-300"></div>

                    {/* Highly visible Category Tag indicator on top-left of the card */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                      <span className="bg-[#ff4d00] text-white text-[9.5px] font-extrabold uppercase tracking-widest px-2.5 py-1.5 rounded-full shadow-lg border border-white/10 flex items-center gap-1">
                        {item.type === 'video' && <Play className="w-2.5 h-2.5 fill-white" />}
                        {item.tag}
                      </span>
                    </div>

                    {/* Floating Sharing & Direct Link Actions Panel */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 z-20">
                      {/* Copiar Enlace Directo a la Web */}
                      <button
                        onClick={(e) => copyShareLink(item.id, e)}
                        className={`p-2 rounded-xl transition-all duration-200 border shadow-lg flex items-center justify-center cursor-pointer text-xs font-bold gap-1 ${
                          copiedId === item.id 
                            ? "bg-[#25D366] text-white border-transparent" 
                            : "bg-black/75 hover:bg-[#ff4d00] text-white border-white/10"
                        }`}
                        title="Copiar enlace para compartir"
                      >
                        {copiedId === item.id ? (
                          <span className="text-[9px] font-extrabold uppercase px-1">¡Copiado!</span>
                        ) : (
                          <ExternalLink className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Compartir por WhatsApp sin número de teléfono específico */}
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`¡Mira esta evidencia real de pesca de SwellPro Perú! 🎣\n\n"${item.title}"\n\nVer en la web: ${window.location.origin || "https://swellpro.pe"}/?media=${item.id}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-black/75 hover:bg-[#25D366] text-white p-2 rounded-xl transition-all duration-200 border border-white/10 shadow-lg flex items-center justify-center cursor-pointer"
                        title="Compartir por WhatsApp (Selecciona contacto)"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Card Title & Desc - persisting on mobile, smoothly fading/lifting on hover in desktop */}
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col gap-1.5 z-10">
                      <h4 className="font-display font-extrabold uppercase tracking-tight text-sm leading-tight group-hover:text-[#ff4d00] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-neutral-300 text-[10px] font-sans leading-relaxed line-clamp-2 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300 ease-out">
                        {item.desc}
                      </p>
                    </div>

                    {/* Seamless hover lens backdrop for screen expansion feedback */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900/10 backdrop-blur-2xs">
                      <div className="bg-white/95 text-neutral-950 px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-3.5 h-3.5 text-[#ff4d00]" /> Ver pantalla completa
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Optional Expansion Trigger & WhatsApp Evidence Link */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 mb-16">
            {!showAllMedia && galleryFilter === 'todo' && (
              <button
                onClick={() => setShowAllMedia(true)}
                className="w-full sm:w-auto text-center font-display font-bold text-xs uppercase tracking-wider py-4.5 px-8 rounded-2xl border border-neutral-300 text-neutral-800 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-150 inline-block cursor-pointer"
              >
                Ver más evidencia real →
              </button>
            )}
            
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, he estado revisando su galería premium de evidencias de pesca. Deseo recibir asesoría exclusiva y coordinar mi compra.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center font-bold text-xs uppercase tracking-widest py-4.5 px-8 rounded-2xl bg-[#ff4d00] hover:bg-[#e04400] text-white shadow-xl shadow-[#ff4d00]/20 inline-flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" /> Quiero ver más evidencia por WhatsApp
            </a>
          </div>



        </div>
      </section>


      {/* NUEVA SECCIÓN — LA MARCA DETRÁS DEL DRONE */}
      <section className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-b border-neutral-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4d00]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase block mb-3 bg-[#ff4d00]/10 px-3 py-1.5 rounded-full w-fit mx-auto border border-[#ff4d00]/20">
              Autoridad e Innovación Global
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight leading-none mb-4">
              Más de 10 años siendo los mejores en esto
            </h2>
            <div className="w-14 h-1 bg-[#ff4d00] mx-auto mt-5 rounded-full"></div>
            <p className="text-neutral-400 text-sm md:text-base mt-4 font-sans max-w-xl mx-auto leading-relaxed">
              SwellPro no es una marca de drones improvisada. Somos los pioneros globales absolutos en tecnología de drones sumergibles para la pesca comercial y deportiva.
            </p>
          </ScrollReveal>

          {/* Estadísticas Globales */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-stretch mb-20">
            {[
              { num: "10+", label: "Años de Innovación", desc: "Fundada en 2014, liderando la tecnología waterproof." },
              { num: "60", label: "Países", desc: "Presencia sólida global en los entornos marítimos más hostiles." },
              { num: "1M+", label: "Drones Vendidos", desc: "Más de un millón de unidades operando activamente en el mundo." },
              { num: "100+", label: "Distribuidores", desc: "Soporte internacional de la mano de centros oficiales autorizados." },
              { num: "2015", label: "Hito Histórico", desc: "Lanzamos el primer sistema de liberación de carga del planeta." },
            ].map((stat, idx) => (
              <ScrollReveal 
                key={idx}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-[#ff4d00]/30 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="font-display font-black text-4xl md:text-5xl text-[#ff4d00] mb-2">
                    {stat.num}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white mb-2 font-display">
                    {stat.label}
                  </div>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed font-sans">
                  {stat.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>





          {/* Copy de cierre de sección & CTA */}
          <ScrollReveal className="mt-16 text-center max-w-2xl mx-auto border-t border-neutral-900 pt-12">
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-medium font-sans">
              Y ahora, con representación oficial en Perú, puedes tener todo ese respaldo tecnológico con soporte real aquí mismo.
            </p>
            <a
              href={getWhatsAppUrl("Quiero asesoría por WhatsApp de SwellPro Perú")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-xs uppercase tracking-widest py-4.5 px-8 rounded-2xl transition duration-150 inline-block shadow-lg shadow-[#ff4d00]/20"
            >
              Quiero asesoría por WhatsApp
            </a>
          </ScrollReveal>

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


      {/* FULLSCREEN REAL EVIDENCE LIGHTBOX MODAL */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center p-4 backdrop-blur-md animate-fade-in select-none">
          {/* Close trigger */}
          <button 
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-150 border border-white/10 z-[60] cursor-pointer"
            aria-label="Cerrar vista"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Active media canvas */}
          <div className="max-w-4xl w-full max-h-[70vh] flex justify-center items-center relative overflow-hidden rounded-2xl bg-black">
            {selectedMedia.type === 'video' ? (
              <video 
                src={selectedMedia.url} 
                controls 
                autoPlay 
                playsInline
                className="max-w-full max-h-[70vh] object-contain rounded-2xl"
              />
            ) : (
              <img 
                src={selectedMedia.url} 
                alt={selectedMedia.title} 
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-2xl"
              />
            )}
          </div>

          {/* Descriptive footer context */}
          <div className="max-w-2xl text-center mt-6 text-white px-2">
            <span className="inline-block bg-[#ff4d00] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 shadow-md">
              {selectedMedia.tag}
            </span>
            <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight text-white mb-2">
              {selectedMedia.title}
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm font-sans leading-relaxed max-w-lg mx-auto">
              {selectedMedia.desc}
            </p>

             {/* In-Modal Direct Action */}
            <div className="mt-5 flex flex-wrap gap-2.5 justify-center items-center">
              {/* Cotización directa con Carlos / SwellPro */}
              <a
                href={getWhatsAppUrl(`Hola SwellPro Perú, vi su evidencia real "${selectedMedia.title}" en la galería de su web. Me interesa asesoramiento y cotización para comprar mi drone.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff4d00]/95 hover:bg-[#ff4d00] text-white font-bold text-[10px] uppercase tracking-widest py-3 px-5 rounded-xl transition duration-150 cursor-pointer shadow-md"
              >
                <PhoneCall className="w-3.5 h-3.5 animate-pulse" /> Cotizar por WhatsApp
              </a>

              {/* Copiar enlace de la web */}
              <button
                onClick={() => copyShareLink(selectedMedia.id)}
                className={`inline-flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest py-3 px-5 rounded-xl transition duration-150 border cursor-pointer shadow-md ${
                  copiedId === selectedMedia.id
                    ? "bg-[#25D366] text-white border-transparent"
                    : "bg-white/10 hover:bg-white/20 text-white border-white/15"
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#ff4d00]" /> 
                {copiedId === selectedMedia.id ? "¡Enlace Copiado!" : "Copiar Enlace"}
              </button>

              {/* Compartir por WhatsApp a amigos / contactos seleccionados */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`¡Mira esta evidencia real de pesca de SwellPro Perú! 🎣\n\n"${selectedMedia.title}"\n\nVer directamente en la web: ${window.location.origin || "https://swellpro.pe"}/?media=${selectedMedia.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-[#25D366] font-bold text-[10px] uppercase tracking-widest py-3 px-5 rounded-xl transition duration-150 border border-neutral-800 cursor-pointer shadow-md"
              >
                <Share2 className="w-3.5 h-3.5" /> Compartir con Amigos
              </a>

              {/* Botón secundario para el archivo original */}
              <a
                href={selectedMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-neutral-400 hover:text-white transition py-1.5 px-3 rounded-lg border border-neutral-800/60 hover:border-neutral-700 bg-neutral-950/20"
              >
                Archivo Original ↗
              </a>
            </div>
          </div>
        </div>
      )}


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
