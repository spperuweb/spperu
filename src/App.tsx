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
const WHATSAPP_NUMBER = "51987654321"; // Reemplazable por el usuario

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to add shadow and bg to Navbar
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

  // WhatsApp Url builder helper
  const getWhatsAppUrl = (text: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const products: Product[] = [
    {
      id: "fd1",
      name: "Fisherman FD1+",
      badge: "Ideal para empezar",
      image: "https://www.swellpro.com/cdn/shop/files/swellpro-fisherman-fd1-plus-drone-thumnail.jpg?v=1723624282",
      specs: {
        reach: "1.3 km alcance",
        payload: "2.2 kg carga",
        camera: "Sin cámara",
      },
      description: "El punto de entrada perfecto. Resistente, simple y hecho para pescar desde el primer vuelo sin distracciones complejas.",
      statusMessage: "Hola, quiero información del Fisherman FD1+",
    },
    {
      id: "fd2-max",
      name: "Fisherman Max FD2",
      badge: "Carga + Cámara 4K",
      isPopular: true,
      image: "https://www.swellpro.com/cdn/shop/files/fisherman-max-fd2-drone-thumbnail.jpg?v=1723623441",
      specs: {
        reach: "1.5 km alcance",
        payload: "3.5 kg carga extrema",
        camera: "Cámara 4K",
      },
      description: "Para el pescador serio. La mayor capacidad de carga certificada de la categoría con cámara de resolución 4K para ver el fondo en vivo.",
      statusMessage: "Hola, quiero información del Fisherman Max FD2",
    },
    {
      id: "fd3",
      name: "Fisherman FD3",
      badge: "Tecnología Premium",
      image: "https://www.swellpro.com/cdn/shop/files/swellpro-fisherman-fd3-drone-thumnail.jpg?v=1723624172",
      specs: {
        reach: "1.3 km alcance",
        payload: "2 kg carga",
        camera: "Cámara 4K + GPS 9.0",
      },
      description: "El equilibrio tecnológico perfecto. GPS ultra avanzado, cámara estabilizada en 4K y diseño de flotación IP67 sin concesiones.",
      statusMessage: "Hola, quiero información del Fisherman FD3",
    },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "¿Hacen envíos a todo el Perú?",
      answer: "Sí, coordinamos envíos seguros y asegurados a nivel nacional (Lima, Trujillo, Arequipa, Chiclayo, Chimbote, Piura, Ilo y más). El embalaje y resguardo garantizan que el drone llegue de forma óptima a tus manos.",
    },
    {
      question: "¿Cómo se realiza la compra?",
      answer: "Es sumamente sencillo: haces clic en el botón de WhatsApp, te brindamos una asesoría preliminar para certificar que elijas el modelo adecuado, coordinamos el medio de pago (depósitos bancarios directos, tarjetas, etc.) y de inmediato procedemos con tu envío y plan de inducción.",
    },
    {
      question: "¿Necesito experiencia previa con drones?",
      answer: "No. Los drones SwellPro están diseñados específicamente para pescadores y no para pilotos de carrera. Cuentan con modos automatizados de retorno y despegue con un botón. Además, con tu compra se incluye una capacitación personal y directa de uso seguro.",
    },
    {
      question: "¿Cuánto dura la batería en una jornada?",
      answer: "Alrededor de 25 minutos de vuelo efectivo en el aire. Esto equivale a realizar entre 8 y 10 soltadas continuas de línea a una distancia promedio de 250 metros de la costa, lo que cubre con creces una jornada completa de pesca deportiva.",
    },
    {
      question: "¿Qué ocurre si el drone cae accidentalmente al agua?",
      answer: "Están fabricados exclusivamente para eso. SwellPro es el líder mundial absoluto en tecnología hermética e impermeable con certificación IP67. Flotan con estabilidad, resisten agua salada y cuentan con un sistema inteligente de auto-volteo que les permite darse vuelta en el agua por control remoto y despegar nuevamente de inmediato.",
    },
    {
      question: "¿Cuál modelo es el ideal para mí?",
      answer: "Depende de tu estilo de pesca: Si buscas simplicidad robusta el Fisherman FD1+ es ideal. Si lo tuyo es analizar el fondo marino y necesitas arrojar carnadas masivas, el Fisherman Max FD2 es imbatible. Y si deseas la máxima sofisticación y balance de GPS con cámara de alta precisión, elige el Fisherman FD3. Escríbenos y te resolveremos la duda en segundos.",
    },
    {
      question: "¿Los drones cuentan con garantía?",
      answer: "Sí, todos nuestros equipos cuentan con Garantía Real Local directamente con nosotros en el Perú. Olvídate de complejos trámites virtuales o de enviar empaques al extranjero; nosotros respaldamos tu drone desde territorio nacional.",
    },
    {
      question: "¿Tienen disponibilidad de repuestos y servicio técnico?",
      answer: "Por supuesto. Contamos con un taller oficial de Servicio Técnico Especializado en Perú equipado con partes y repuestos de fábrica 100% originales (hélices, motores, baterías, sistemas de suelta rápida). No te dejamos solo tras la compra.",
    },
  ];

  const timelineSteps = [
    {
      icon: <PhoneCall className="w-5 h-5 text-[#ff4d00]" />,
      title: "Asesoría antes",
      desc: "Te ayudamos a elegir el modelo idóneo para tu zona y tipo de pesca, sin presionarte."
    },
    {
      icon: <Anchor className="w-5 h-5 text-[#ff4d00]" />,
      title: "Entrega e Inspección",
      desc: "Te entregamos tu equipo calibrado, actualizado y probado para asegurar un funcionamiento impecable."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#ff4d00]" />,
      title: "Capacitación personal",
      desc: "Te enseñamos paso a paso a despegar, navegar, soltar carnada y retornar con seguridad."
    },
    {
      icon: <Users className="w-5 h-5 text-[#ff4d00]" />,
      title: "WhatsApp Directo",
      desc: "Tienes comunicación inmediata con nosotros ante dudas en el campo."
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#ff4d00]" />,
      title: "Servicio Técnico Local",
      desc: "Diagnósticos rápidos, mantenimiento preventivo y reparación autorizada en Perú."
    },
    {
      icon: <Award className="w-5 h-5 text-[#ff4d00]" />,
      title: "Garantía Real",
      desc: "Resolución de inconvenientes sin intermediarios en el extranjero ni envíos costosos."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#ff4d00]" />,
      title: "Comunidad Exclusiva",
      desc: "Intercambio de datos, mejores zonas de lanzamiento y tips entre dueños SwellPro Perú."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo area */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
                alt="SwellPro Perú Logo" 
                width="50" 
                height="50"
                className="rounded-full shadow-lg border border-gray-100 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className={`font-display font-bold tracking-tight text-xl ${isScrolled ? "text-black" : "text-white"}`}>
                  SwellPro <span className="text-[#ff4d00]">Perú</span>
                </span>
                <span className={`text-[9px] uppercase tracking-widest font-bold -mt-1 ${isScrolled ? "text-gray-500" : "text-white/80"}`}>
                  Representante Oficial
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {["Modelos", "Por qué nosotros", "Cómo funciona", "Contacto"].map((tab) => {
                const targetId = tab.toLowerCase().replace(/\s+/g, '-').replace('¿', '').replace('?', '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return (
                  <a
                    key={tab}
                    href={`#${targetId}`}
                    className={`font-medium text-sm transition-colors hover:text-[#ff4d00] ${
                      isScrolled ? "text-gray-700" : "text-white/90"
                    }`}
                  >
                    {tab}
                  </a>
                );
              })}
            </div>

            {/* CTA Nav button */}
            <div className="hidden md:flex items-center">
              <a
                href={getWhatsAppUrl("Hola, me interesa solicitar una cotización para un drone de pesca SwellPro.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-medium text-sm px-5 py-2.5 rounded-full transition shadow-lg shadow-orange-brand/20 flex items-center gap-1.5"
              >
                Cotiza por WhatsApp →
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none transition ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                aria-label="Abrir Menú"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 animate-slide-down">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {["Modelos", "Por qué nosotros", "Cómo funciona", "Contacto"].map((tab) => {
                const targetId = tab.toLowerCase().replace(/\s+/g, '-').replace('¿', '').replace('?', '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return (
                  <a
                    key={tab}
                    href={`#${targetId}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-medium text-gray-800 hover:text-[#ff4d00] py-2.5 border-b border-gray-50 text-base"
                  >
                    {tab}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hola, me interesa asesorarme para elegir mi drone SwellPro ideal en Perú.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#ff4d00] text-center text-white py-3 rounded-xl font-semibold inline-block shadow-md"
                >
                  Asesorarme por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>


      {/* SECTION 1 — HERO EMOCIONAL */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-black/95 text-white pt-24 pb-16 overflow-hidden">
        {/* Background Image with Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.swellpro.com/cdn/shop/files/fisherman-max-drone-banner.jpg?v=1682147382&width=1880"
            alt="SwellPro Fisherman Max Drone"
            className="w-full h-full object-cover object-center opacity-65"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/75 z-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          
          {/* Badge de Autoridad */}
          <div className="inline-flex items-center gap-2 bg-[#ff4d00] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border-2 border-[#c0392b] mb-6 animate-fade-in shadow-xl">
            🇵🇪 Representante Oficial SwellPro en Perú
          </div>

          {/* Headline - Oswald ExtraBold */}
          <h1 className="font-display font-extrabold text-[#ffffff] text-4xl sm:text-6xl md:text-[5.5rem] tracking-tight leading-none mb-4 uppercase">
            Llega donde <br />
            <span className="text-[#ff4d00]">solo los mejores</span> <br />
            pescan.
          </h1>

          {/* Sutil Perú line decor */}
          <div className="peru-line z-10 w-16 my-4 mx-auto"></div>

          {/* Subheadline - DM Sans */}
          <p className="font-sans text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 text-white/90">
            El drone de pesca más avanzado del mundo ya está en Perú.
            Con soporte real, garantía local y un representante oficial que responde cuando lo necesitas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            <a
              href={getWhatsAppUrl("Hola, quiero asesoría para elegir mi drone SwellPro de pesca ideal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ff4d00] hover:bg-[#e04400] text-white font-semibold text-lg py-4 px-8 rounded-xl transition-transform duration-200 hover:scale-103 shadow-lg shadow-orange-brand/35 text-center cursor-pointer"
            >
              → Elegir mi drone por WhatsApp
            </a>
            <a
              href="#modelos"
              className="text-white hover:text-[#ff4d00] font-medium text-base py-3 px-6 transition duration-200"
            >
              Ver modelos ↓
            </a>
          </div>

        </div>
      </section>


      {/* SECTION 2 — BARRA DE CREDIBILIDAD (horizontal) */}
      <section className="bg-black text-white py-6 border-y border-gray-900 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-gray-800">
            {[
              { icon: "🔧", text: "Soporte técnico local" },
              { icon: "📦", text: "Repuestos originales" },
              { icon: "🎓", text: "Capacitación incluida" },
              { icon: "🇵🇪", text: "El único en Perú" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-2">
                <span className="text-2xl mb-1.5 filter drop-shadow">{item.icon}</span>
                <span className="text-xs sm:text-sm font-medium tracking-tight text-white/95">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 3 — POR QUÉ COMPRARNOS A NOSOTROS (neurológico: miedo a perder) */}
      <section id="por-que-nosotros" className="py-20 bg-[#fbfbfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight leading-tight max-w-3xl mx-auto">
              ¿Por qué comprar con SwellPro Perú <br />
              <span className="text-gray-500 font-semibold font-sans">y no importarlo tú solo?</span>
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-lg mx-auto">
              Comprar tecnología marina especializada requiere garantías locales. No dejes tu inversión a la deriva.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Columna izquierda — "Si lo importas solo" */}
            <ScrollReveal className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200/80 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-red-800"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 p-2.5 rounded-xl text-red-700">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                  Si lo importas por tu cuenta
                </h3>
              </div>

              <ul className="space-y-4 text-gray-600">
                {[
                  "Garantía internacional que no aplica en Perú ni cubre costos de reenvío.",
                  "Soporte técnico a miles de kilómetros con tiempos de respuesta de semanas.",
                  "Repuestos que tardan meses en aduanas mientras se pasa la temporada de pesca.",
                  "Nadie experto que te enseñe a configurarlo o calibrarlo en tu idioma.",
                  "Si cometes un error en el primer vuelo, estás completamente solo."
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm md:text-base">
                    <span className="text-red-600 font-bold shrink-0 mt-0.5">❌</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Columna derecha — "Con SwellPro Perú" */}
            <ScrollReveal className="bg-white p-8 md:p-10 rounded-2xl border border-orange-500/20 shadow-md shadow-[#ff4d00]/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ff4d00]"></div>
              
              <div className="absolute top-4 right-4 bg-orange-50 text-[#ff4d00] font-bold text-[10px] tracking-widest px-2.5 py-1 rounded-full border border-orange-200 uppercase">
                Seguridad Total
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-50 p-2.5 rounded-xl text-[#ff4d00]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                  Comprando en SwellPro Perú
                </h3>
              </div>

              <ul className="space-y-4 text-gray-700">
                {[
                  "Garantía local real de inmediato, gestionada de forma directa.",
                  "Soporte técnico y mantenimiento especializado aquí mismo en el Perú.",
                  "Repuestos originales en stock local para entregas ultra-rápidas.",
                  "Capacitación guiada e inducción paso a paso para evitar accidentes de pérdida.",
                  "Atención al cliente personalizada por WhatsApp en todo momento."
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm md:text-base font-medium">
                    <span className="text-green-600 font-bold shrink-0 mt-0.5">✅</span>
                    <span className="text-gray-800">{text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>

          {/* CTA Sección */}
          <ScrollReveal className="text-center mt-12">
            <a
              href={getWhatsAppUrl("Hola, busco adquirir un drone de pesca con el respaldo de garantía local oficial en Perú.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold py-4 px-8 rounded-xl transition duration-200 text-base md:text-lg shadow-xl shadow-orange-brand/15 cursor-pointer"
            >
              Comprar con respaldo real →
            </a>
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 4 — MODELOS (cards de producto premium) */}
      <section id="modelos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16">
            <span className="text-[#ff4d00] text-xs font-semibold tracking-widest uppercase block mb-2">
              Línea de Drones de Pesca
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 uppercase">
              Elige el drone que va contigo
            </h2>
            <div className="w-12 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
              Diseños sumergibles IP67 construidos expresamente para resistir la pesca costera, el agua salada y condiciones extremas de viento peruano.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {products.map((product) => {
              const ContainerClass = product.isPopular
                ? "bg-[#0c0c0c] text-white border-2 border-[#ff4d00] shadow-2xl shadow-[#ff4d00]/20 scale-102 lg:-translate-y-4 card-peru-border rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                : "bg-white text-gray-900 border border-gray-200/85 shadow-md hover:shadow-xl hover:border-gray-300/80 hover:-translate-y-1.5 rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative";

              const ImageWrapperClass = product.isPopular
                ? "h-64 bg-gradient-to-b from-neutral-900 to-[#111111] border-b border-neutral-900 flex items-center justify-center p-6 relative overflow-hidden shrink-0"
                : "h-64 bg-gradient-to-b from-gray-50 to-slate-50 border-b border-gray-100/80 flex items-center justify-center p-6 relative overflow-hidden shrink-0";

              return (
                <ScrollReveal
                  key={product.id}
                  className={ContainerClass}
                >
                  {/* Product Badge */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      product.isPopular
                        ? "bg-[#ff4d00] text-white shadow-md shadow-[#ff4d00]/20"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}>
                      {product.badge}
                    </span>
                    
                    {product.isPopular && (
                      <span className="bg-[#ff4d00]/10 text-[#ff4d00] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#ff4d00]/25">
                        🔥 El Más Elegido
                      </span>
                    )}
                  </div>

                  {/* Product Image Area */}
                  <div className={ImageWrapperClass}>
                    {product.isPopular ? (
                      <div className="absolute inset-0 bg-radial from-[#ff4d00]/20 via-transparent to-neutral-900/40 pointer-events-none z-0"></div>
                    ) : (
                      <div className="absolute inset-0 bg-radial from-orange-400/5 via-transparent to-gray-50/10 pointer-events-none z-0"></div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      width="260"
                      height="260"
                      loading="lazy"
                      className={`object-contain hover:scale-110 transition-transform duration-500 z-10 ${
                        product.isPopular 
                          ? "filter drop-shadow-[0_12px_28px_rgba(255,77,0,0.3)]" 
                          : "filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
                      }`}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className={`font-display text-2xl lg:text-3xl font-bold tracking-tight uppercase mb-2 ${
                        product.isPopular ? "text-white" : "text-gray-900"
                      }`}>
                        {product.name}
                        {product.isPopular && <span className="text-[#ff4d00] ml-1">★</span>}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm md:text-base leading-relaxed mb-6 ${
                        product.isPopular ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {product.description}
                      </p>

                      {/* Specs Board */}
                      <div className={`border-t border-b py-4 mb-6 space-y-2.5 ${
                        product.isPopular ? "border-neutral-800" : "border-gray-100"
                      }`}>
                        <div className="flex items-center gap-2.5 text-sm">
                          <Ruler className="w-4.5 h-4.5 text-[#ff4d00] shrink-0" />
                          <span className={`font-medium ${product.isPopular ? "text-neutral-300" : "text-gray-700"}`}>
                            <strong>Alcance:</strong> {product.specs.reach}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm">
                          <Scale className="w-4.5 h-4.5 text-[#ff4d00] shrink-0" />
                          <span className={`font-medium ${product.isPopular ? "text-neutral-300" : "text-gray-700"}`}>
                            <strong>Capacidad:</strong> {product.specs.payload}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm">
                          <Camera className="w-4.5 h-4.5 text-[#ff4d00] shrink-0" />
                          <span className={`font-medium ${product.isPopular ? "text-neutral-300" : "text-gray-700"}`}>
                            <strong>Cámara:</strong> {product.specs.camera}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTA button */}
                    <a
                      href={getWhatsAppUrl(product.statusMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center font-bold py-3.5 px-6 rounded-xl transition duration-200 block text-sm cursor-pointer ${
                        product.isPopular
                          ? "bg-[#ff4d00] hover:bg-[#e04400] text-white shadow-xl shadow-[#ff4d00]/20 transform hover:-translate-y-0.5"
                          : "bg-black hover:bg-neutral-900 text-white"
                      }`}
                    >
                      Solicitar Asesoría por WhatsApp →
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>


      {/* SECTION 5 — ASISTENTE DE SELECCIÓN (interactivo) */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ff4d00] block mb-2">
              Toma la Decisión Correcta
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 tracking-tight">
              ¿No estás seguro de cuál modelo elegir?
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-2">
              Prueba nuestro asistente rápido y descubre al instante cuál es el drone que responde a tus necesidades.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <SelectionAssistant products={products} whatsappNumber={WHATSAPP_NUMBER} />
          </ScrollReveal>
        </div>
      </section>


      {/* SECTION 6 — CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold text-[#ff4d00] uppercase tracking-widest block mb-2">
              Simplicidad e Ingeniería
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight">
              Así de fácil es pescar con tecnología
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
              No dejes que la electrónica avanzada te asuste. Diseñado de pescadores para pescadores: fácil, intuitivo y seguro desde el primer vuelo.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Cargas la carnada",
                desc: "Anclas firmemente tu línea plomada al sistema hermético de liberación incorporado. Listo en 5 segundos. Sin enredos mecánicos."
              },
              {
                num: "02",
                title: "Vuelas al punto exacto",
                desc: "El drone surca la rompiente de olas más agresivas y se interna mar adentro hasta el kilómetro. Monitorea el fondo gracias a la transmisión."
              },
              {
                num: "03",
                title: "Sueltas y pescas",
                desc: "Sueltas la plomada con el botón de liberación del mando. El drone inicia automáticamente el viaje de retorno autónomo de inmediato."
              }
            ].map((step, idx) => (
              <ScrollReveal 
                key={idx}
                className="bg-gray-50/50 border border-gray-150 p-8 rounded-2xl hover:border-orange-brand/20 transition-all duration-300 relative group"
              >
                <div className="absolute top-4 right-6 font-display font-extrabold text-[#ff4d00]/10 text-6xl group-hover:text-[#ff4d00]/15 transition-colors">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-gray-900 mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-display font-bold text-lg md:text-2xl uppercase tracking-wider text-[#ff4d00]">
              Más distancia. Menos riesgo. Más peces.
            </p>
          </div>

        </div>
      </section>


      {/* SECTION 7 — COMPARATIVA DE MODELOS */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold text-[#ff4d00] uppercase tracking-widest block mb-2">
              Frente a Frente
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0a0a0a]">
              Especificaciones de los 3 modelos
            </h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-gray-150 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-black text-white font-display text-sm tracking-widest uppercase">
                  <th className="p-5">Característica</th>
                  <th className="p-5">FD1+</th>
                  <th className="p-5 bg-[#ff4d00] text-center">FD2 Max (Recomendado)</th>
                  <th className="p-5">FD3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Para quién</td>
                  <td className="p-5">Principiante exigente</td>
                  <td className="p-5 bg-orange-brand/5 text-center font-bold text-gray-900">Pescador serio y masivo</td>
                  <td className="p-5">Tecnología premium equilibrada</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Alcance Máximo</td>
                  <td className="p-5">1.3 km</td>
                  <td className="p-5 bg-orange-brand/5 text-[#ff4d00] text-center font-bold">1.5 km</td>
                  <td className="p-5">1.3 km</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Carga Útil</td>
                  <td className="p-5">2.2 kg</td>
                  <td className="p-5 bg-orange-brand/5 text-[#ff4d00] text-center font-bold">3.5 kg</td>
                  <td className="p-5">2.0 kg</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Cámara</td>
                  <td className="p-5 text-gray-400">Sin cámara (vuelo visual)</td>
                  <td className="p-5 bg-orange-brand/5 text-center font-semibold">Cámara 4K Estabilizada</td>
                  <td className="p-5">Cámara 4K Estabilizada</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Módulo GPS</td>
                  <td className="p-5">Básico</td>
                  <td className="p-5 bg-orange-brand/5 text-center font-semibold">S5 GPS 9.0 Pro</td>
                  <td className="p-5">S5 GPS 9.0 Pro</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Estanqueidad</td>
                  <td className="p-5">IP67 Impermeable total</td>
                  <td className="p-5 bg-orange-brand/5 text-center font-semibold">IP67 Impermeable total</td>
                  <td className="p-5">IP67 Impermeable total</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-gray-900">Ideal para</td>
                  <td className="p-5">Empezar bien y fácil</td>
                  <td className="p-5 bg-orange-brand/5 text-center font-semibold text-gray-900">Ver cardúmenes y cargar plomadas masivas</td>
                  <td className="p-5">Calidad de imagen superior y precisión GPS</td>
                </tr>
              </tbody>
            </table>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-8">
            <span className="text-gray-500 text-sm block mb-4">
              ¿Todavía con inquietudes técnico-prácticas? Te asesoramos en vivo.
            </span>
            <a
              href={getWhatsAppUrl("Hola, vi la tabla comparativa pero me gustaría que me ayuden a elegir el modelo indicado para mi tipo de pesca.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-black hover:bg-gray-900 font-bold py-3 px-6 rounded-xl transition text-sm cursor-pointer shadow-md"
            >
              <HelpCircle size={16} /> Preguntar por WhatsApp libremente
            </a>
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 8 — EXPERIENCIA DE COMPRA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold text-[#ff4d00] uppercase tracking-widest block mb-2">
              Un Viaje Sin Fisuras
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight">
              Cuando compras con nosotros, no compras solo
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
              Te llevamos de la mano desde la elección inicial hasta tu primera gran jornada de pesca exitosa en el mar peruano.
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <ScrollReveal 
                key={idx} 
                className="bg-gray-50 border border-gray-150 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 flex flex-col justify-start relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ff4d00]/30 group-hover:bg-[#ff4d00]"></div>
                <div className="flex items-center gap-3 mb-3 shrink-0">
                  <div className="bg-orange-50 p-2 rounded-lg">
                    {step.icon}
                  </div>
                  <span className="text-xs font-extrabold text-[#ff4d00]/40 font-display">
                    PASO {(idx+1).toString().padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1.5">
                  {step.title}
                </h4>
                <p className="text-gray-650 text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 9 — EVIDENCIA REAL (galería de autoridad y testimonios) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold text-[#ff4d00] uppercase tracking-widest block mb-1">
              Testificando la Leyenda
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900">
              SwellPro ya vuela en todo el Perú
            </h2>
            <div className="w-12 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto mb-16">
            
            {/* Mapa conceptual / Coordenadas */}
            <ScrollReveal className="bg-black text-white p-8 rounded-2xl md:col-span-1 shadow-lg border border-gray-900 self-stretch flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#ff4d00] text-xs font-extrabold tracking-widest uppercase mb-4">
                  <MapPin className="w-4 h-4" /> Despliegue Nacional
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">
                  Cobertura y Puntos Estratégicos
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                  Nuestros drones y sistemas ya operan desde costas ventosas del norte peruano hasta la rompiente de la costa sur central.
                </p>
              </div>

              <div className="space-y-3 border-t border-gray-800 pt-6">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>⚓ Costa Norte (Chiclayo, Trujillo, Piura)</span>
                  <span className="text-green-500 font-semibold md:font-bold">Activo</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>⚓ Costa Centro (Ancón, Chorrillos, Cañete)</span>
                  <span className="text-green-500 font-semibold">Activo</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>⚓ Costa Sur (Ilo, Chala, Mollendo)</span>
                  <span className="text-green-500 font-semibold">Activo</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Galería Lifestyle */}
            <ScrollReveal className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl h-48 bg-gray-200">
                <img
                  src="https://www.swellpro.com/cdn/shop/files/1_1.png?v=1739933785&width=1100"
                  alt="SwellPro Pesca en Campo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 p-3 text-white text-xs font-semibold">
                  SwellPro Fisherman en costas del Pacífico
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl h-48 bg-gray-200">
                <img
                  src="https://www.swellpro.com/cdn/shop/files/splashdrone-4.jpg?v=1682144419&width=1880"
                  alt="Swellpro SplashDrone Tecnología"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 p-3 text-white text-xs font-semibold">
                  Inspección y resistencia hermética total
                </div>
              </div>
              <div className="relative col-span-2 group overflow-hidden rounded-xl h-48 bg-gray-200">
                <img
                  src="https://www.swellpro.com/cdn/shop/files/1_2_1.png?v=1739935120&width=1100"
                  alt="Pesca de Playa con Drone"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 px-4 py-3 text-white text-xs md:text-sm font-semibold">
                  Soporte continuo y entrenamiento práctico en condiciones de campo reales
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Testimonios e Inducción a Comentarios de Clientes */}
          <div className="max-w-4xl mx-auto bg-white border border-gray-150 p-8 rounded-2xl shadow-sm">
            <h3 className="font-display font-bold text-center uppercase tracking-wider text-gray-800 mb-6 text-sm">
              🗣️ Comentarios Pendientes de Validación
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-4 bg-gray-50 rounded-xl relative border border-gray-100">
                <p className="text-gray-500 italic text-sm mb-4">
                  &ldquo;[Nombre del cliente, ciudad] — Testimonio pendiente de confirmación formal antes del despliegue final en producción.&rdquo;
                </p>
                <span className="text-xs font-semibold text-[#ff4d00]">Pescador Costero — Lima Sede</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl relative border border-gray-100">
                <p className="text-gray-500 italic text-sm mb-4">
                  &ldquo;[Nombre del cliente, ciudad] — Testimonio pendiente de confirmación formal antes del despliegue final en producción.&rdquo;
                </p>
                <span className="text-xs font-semibold text-[#ff4d00]">Pesca Embarcada — Ilo Sede</span>
              </div>
            </div>

            <div className="text-center mt-6 text-[10px] text-gray-400">
              {/* TODO: agregar testimonios reales de pescadores que hayan completado la capacitación en las playas de Lima, Piura o Tacna */}
              <span>&lt;!-- TODO: Agregar testimonios oficiales validados --&gt;</span>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 10 — FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-semibold text-[#ff4d00] uppercase tracking-widest block mb-2">
              Derribando Miedos
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight">
              Lo que todos preguntan antes de decidir
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQSection items={faqItems} />
          </ScrollReveal>

        </div>
      </section>


      {/* SECTION 11 — CTA FINAL (cierre emocional) */}
      <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden border-t-4 border-[#ff4d00]">
        
        {/* Subtle orange accent mesh overlay */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-[#ff4d00]/5 -skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          
          {/* Headline Oswald Bold */}
          <h2 className="font-display font-extrabold text-white text-4xl sm:text-6xl md:text-[5rem] leading-none mb-6 uppercase">
            Tu siguiente pesca <br />
            <span className="text-[#ff4d00]">va a ser diferente.</span>
          </h2>

          <div className="peru-line w-16 my-4 mx-auto"></div>

          {/* Subheadline */}
          <p className="font-sans text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            No solo adquieres el drone sumergible más avanzado y legendario de la industria. Adquieres la tranquilidad del único representante oficial en Perú que te acompaña antes, durante y después de la compra.
          </p>

          <div className="inline-block">
            <a
              href={getWhatsAppUrl("Hola, leí la página de SwellPro Perú y quiero coordinar los precios y facilidades para mi compra.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold text-lg md:text-xl py-4.5 px-10 rounded-xl transition duration-200 shadow-xl shadow-orange-brand/30 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 shrink-0" /> → Escríbenos ahora por WhatsApp
            </a>
          </div>

          <div className="text-gray-500 text-xs mt-4 tracking-wide font-medium">
            Asesoría gratuita · Sin compromiso · Respuesta en minutos
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer id="contacto" className="bg-black text-white py-12 relative">
        
        {/* Subtle Peru line on top of the footer as an accent divider */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#c0392b] via-white to-[#c0392b]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-gray-900">
            
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
                alt="SwellPro Logo Circular" 
                width="60" 
                height="60"
                className="rounded-full shadow-md object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <span className="font-display font-bold tracking-tight text-xl block">
                  SwellPro <span className="text-[#ff4d00]">Perú</span>
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block">
                  Drones de Pesca Sumergibles
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#modelos" className="hover:text-white transition">Modelos</a>
              <a href="#por-que-nosotros" className="hover:text-white transition">Soporte y Garantía</a>
              <a href="#como-funciona" className="hover:text-white transition">Cómo funciona</a>
              <a href={getWhatsAppUrl("Hola, deseo ponerme en contacto con el soporte administrativo de SwellPro Perú.")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contacto</a>
            </div>

            {/* Redes Sociales Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-gray-400 flex items-center justify-center" 
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 animate-none" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-900 border border-neutral-800 p-3 rounded-full hover:bg-[#ff4d00] hover:text-white transition-all duration-200 text-gray-400 flex items-center justify-center" 
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 animate-none" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.18-.3-.21v6.94c0 5.59-4.56 10.13-10.15 10.13-5.59 0-10.13-4.54-10.13-10.13C0 9.4 4.54 4.86 10.13 4.86c.38 0 .76.02 1.14.07v4.09c-.38-.05-.76-.07-1.14-.07-3.33 0-6.04 2.71-6.04 6.04 0 3.33 2.71 6.04 6.04 6.04 3.33 0 6.04-2.71 6.04-6.04V.02z"/>
                </svg>
              </a>
            </div>

          </div>

          <div className="text-center text-xs text-gray-500 font-medium">
            <span className="block mb-2 font-semibold">SwellPro Perú — Representante oficial en el Perú</span>
            <p>&copy; {new Date().getFullYear()} SwellPro Perú. Todos los derechos reservados.</p>
          </div>

        </div>
      </footer>


      {/* BOTÓN FLOTANTE WHATSAPP (OBLIGATORIO) */}
      <a 
        href={getWhatsAppUrl("Hola, quiero asesoría personalizada para elegir mi drone SwellPro de pesca.")}
        className="whatsapp-float shrink-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" className="shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="whatsapp-label">¡Escríbenos!</span>
      </a>

    </div>
  );
}
