import React, { useState } from "react";
import { 
  ArrowLeft, 
  Battery, 
  Settings, 
  Tv, 
  Zap, 
  Camera, 
  Briefcase, 
  ShieldAlert, 
  HelpCircle, 
  Check, 
  Sliders, 
  Info, 
  ArrowRight, 
  PhoneCall,
  ExternalLink
} from "lucide-react";

// Predefined WhatsApp helper
const WHATSAPP_NUMBER = "51949643347";
const getWhatsAppUrl = (text: string) => {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
};

interface Accesorio {
  id: string;
  name: string;
  family: string;
  image: string;
  compatibility: string[];
  desc: string;
  ctaMessage: string;
}

const ACCESORIOS_DATA: Accesorio[] = [
  // BATERÍAS
  {
    id: "bat-fd2",
    name: "Aircraft Battery B-FD2",
    family: "Baterías",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031708/Aircraft_Battery_B-FD2_-_FD2_blbncg.jpg",
    compatibility: ["FD2"],
    desc: "Batería inteligente de vuelo sellada de alta densidad para máxima autonomía y pescas prolongadas costeras.",
    ctaMessage: "Hola SwellPro Perú, requiero información y precio sobre el accesorio Batería de Vuelo inteligente B-FD2 para el modelo FD2 Max."
  },
  {
    id: "bat-fd3",
    name: "Aircraft Battery B-FD3",
    family: "Baterías",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031707/Aircraft_Battery_B-FD3_-_FD3_FD1plus_vgyybm.jpg",
    compatibility: ["FD3"],
    desc: "Batería de alta potencia e inteligente para el dron Fisherman FD3, garantizando un retorno seguro y máxima duración.",
    ctaMessage: "Hola SwellPro Perú, requiero información y precio sobre la Batería inteligente de Vuelo para el modelo FD3."
  },
  {
    id: "bat-fd1s",
    name: "IB4+ Battery B-FD1S",
    family: "Baterías",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031724/IB4__battery_B-FD1S_-_FD1S_SD4plus_saiumb.jpg",
    compatibility: ["FD1S", "SD4+"],
    desc: "Batería oficial estanca redundante para el modelo tradicional Fisherman FD1S y compatible con plataforma SplashDrone 4+.",
    ctaMessage: "Hola SwellPro Perú, consulto sobre el precio y disponibilidad de la batería IB4+ (B-FD1S)."
  },

  // HÉLICES
  {
    id: "prop-fd2",
    name: "FD2 Propeller P-FD2",
    family: "Hélices",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031715/FD2_Propeller_P-FD2_-_FD2_gtlikc.jpg",
    compatibility: ["FD2"],
    desc: "Hélices de fibra de carbono premium con anclaje rápido de seguridad para máxima tracción con cargas de 3.5 kg.",
    ctaMessage: "Hola SwellPro Perú, solicito cotización del juego de hélices reforzadas P-FD2 para el drone Fisherman FD2 Max."
  },
  {
    id: "prop-fd2-pair",
    name: "FD2 Propeller P-FD2 One Pair",
    family: "Hélices",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031716/FD2_Propeller_P-FD2_ONE_PAIR_-_FD2_lbrzpx.jpg",
    compatibility: ["FD2"],
    desc: "Set de dos unidades (una hélice horaria de giro CW y otra hélice antihoraria CCW) listas para emergencias de orilla.",
    ctaMessage: "Hola SwellPro Perú, deseo adquirir un par extra de hélices P-FD2 One Pair para repuesto inmediato de mi Fisherman FD2."
  },
  {
    id: "prop-fd3",
    name: "FD1+/FD1S/FD3 Propeller P-FD3",
    family: "Hélices",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031714/FD1plus_FD1S_FD3_Propeller_P-FD3_-_FD1plus_FD1S_FD3_SD4plus_ze9ulw.jpg",
    compatibility: ["FD1S", "FD3", "SD4+"],
    desc: "Unidad de hélice optimizada con perfil aerodinámico de mayor empuje y estabilidad frente a vientos cruzados fuertes.",
    ctaMessage: "Hola SwellPro Perú, consulto sobre las hélices P-FD3 compatibles con FD1S/FD3/SD4+."
  },
  {
    id: "prop-pfd3-pair",
    name: "P-FD3 Propeller One Pair",
    family: "Hélices",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031715/FD1plus_FD1S_FD3_Propeller_P-FD3_ONE_PAIR_-_FD1plus_FD1S_FD3_SD4plus_mqi5bb.jpg",
    compatibility: ["FD1S", "FD3", "SD4+"],
    desc: "Blíster con un juego completo de dos hélices (reforzado con polímeros marinos de alta respuesta) de fácil acoplamiento.",
    ctaMessage: "Hola SwellPro Perú, requiero un blíster de repuesto (One Pair) de hélices P-FD3 para mi kit."
  },
  {
    id: "prop-fd1sd4-pair",
    name: "FD1/SD4 Propeller One Pair",
    family: "Hélices",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031711/FD1_SD4_Propeller_ONE_PAIR_-_FD1_SD4_aclzub.jpg",
    compatibility: ["FD1S", "SD4+"],
    desc: "Hélices balanceadas de alta velocidad resistentes al desgaste salino y arena costera de arrastre en zona de rompiente.",
    ctaMessage: "Hola SwellPro Perú, consulto stock de hélices FD1/SD4 Propeller One Pair para repuesto."
  },

  // CONTROL Y SEÑAL
  {
    id: "dual-payload",
    name: "Dual Payload Release",
    family: "Control y señal",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031712/Dual_Payload-Release_-_FD1plus_FD1S_FD2_FD3_SD4plus_fx59mn.jpg",
    compatibility: ["FD1S", "FD2", "FD3", "SD4+"],
    desc: "Sistema de liberación doble servoasistido que te permite calar dos carnadas o plomadas independientes en el mismo viaje.",
    ctaMessage: "Hola SwellPro Perú, deseo cotizar el sistema especial de suelta doble mecánico (Dual Payload Release) universal."
  },
  {
    id: "ant-58",
    name: "Remote Controller Antenna 5.8G",
    family: "Control y señal",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031707/R02_remote-controller_antenna_5.8_GHz_-_FD2_FD3_eau8wj.jpg",
    compatibility: ["FD2", "FD3", "SD4+"],
    desc: "Antena omnidireccional de alta ganancia de 5.8 GHz que estabiliza la señal de video y telemetría en tiempo real sobre el mar.",
    ctaMessage: "Hola SwellPro Perú, requiero una antena de repuesto o repotenciadora de 5.8 GHz R02 para mi transmisor."
  },
  {
    id: "ant-24",
    name: "Remote Controller Antenna 2.4G",
    family: "Control y señal",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031723/R02_Remote_Controller_Antenna_2.4G_-_FD2_FD3_tyhtjq.jpg",
    compatibility: ["FD2", "FD3", "SD4+"],
    desc: "Antena de transmisión de comando de vuelo R02 de 2.4 GHz de alta sensibilidad para operaciones sin interferencias a larga distancia.",
    ctaMessage: "Hola SwellPro Perú, consulto stock por la antena de radiocontrol de 2.4G R02 compatible con mis drones."
  },
  {
    id: "sunshade",
    name: "R01 / R02 Controller Screen Sunshade",
    family: "Control y señal",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031722/R01_R02_Remote_Controller_Screen_Sunshade_-_FD2_FD3_f9vr4r.jpg",
    compatibility: ["FD2", "FD3"],
    desc: "Parasol estanco plegable diseñado a la medida para pantallas de radiocontroles de drones de pesca, evitando encandilamiento.",
    ctaMessage: "Hola SwellPro Perú, me interesa adquirir el parasol plegable para pantalla de control remoto R02."
  },
  {
    id: "ctrl-r02",
    name: "Remote Controller R02",
    family: "Control y señal",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031724/Remote_Controller_R02_-_FD2_FD3_e8gqv1.jpg",
    compatibility: ["FD2", "FD3"],
    desc: "Radiocontrol premium resistente a salpicaduras e impermeable (IP54) con pantalla de alta luminosidad integrada.",
    ctaMessage: "Hola SwellPro Perú, solicito cotización para un Control Remoto R02 principal de repuesto para Fisherman FD2 o FD3."
  },
  {
    id: "ctrl-r03",
    name: "Remote Controller R03",
    family: "Control y señal",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031725/Remote_Controller_R03_-_SD4plus_zvejhe.jpg",
    compatibility: ["SD4+"],
    desc: "Controlador táctico sellado con diales múltiples servoasistidos de respuesta inmediata, exclusivo para SplashDrone 4+.",
    ctaMessage: "Hola SwellPro Perú, solicito información de stock y precio para el control remoto profesional R03 especial."
  },
  {
    id: "ctrl-fd1s",
    name: "FD1S Remote Controller",
    family: "Control y señal",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031713/FD1S_Remote_Controller_-_FD1S_zy7wve.jpg",
    compatibility: ["FD1S"],
    desc: "Estación de control nativa simplificada para el Fisherman FD1S con palancas ultraprecisas y switch de suelta independiente.",
    ctaMessage: "Hola SwellPro Perú, consulto precio por el control inteligente de repuesto del drone clásico FD1S."
  },

  // CARGA
  {
    id: "char-fd1s",
    name: "Smart Charger FD1S/SD4+",
    family: "Carga",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031709/Charger_-_FD1S_SD4plus_pkcx4w.jpg",
    compatibility: ["FD1S", "SD4+"],
    desc: "Cargador rápido balanceado inteligente diseñado específicamente para evitar sobrecalentamientos marinos de las celdas.",
    ctaMessage: "Hola SwellPro Perú, requiero comprar el cargador de celdas inteligente compatible con el drone FD1S / SD4+."
  },
  {
    id: "char-fd3",
    name: "Charger Components FD3/FD1+",
    family: "Carga",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031710/Charger_Components_-_FD3_FD1plus_uqpvka.jpg",
    compatibility: ["FD3"],
    desc: "Kit de transformador de pared y adaptadores con conectores rápidos reforzados contra cortocircuitos por humedad marina.",
    ctaMessage: "Hola SwellPro Perú, consulto stock por los componentes del cargador para el modelo FD3."
  },
  {
    id: "char-fd2",
    name: "Charger Components FD2 Max",
    family: "Carga",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031711/Charger_Components_-_FD2_kmp1t7.jpg",
    compatibility: ["FD2"],
    desc: "Conectores y transformador de alto amperaje para equilibrar celdas pesadas de la batería B-FD2 de forma ultra rápida.",
    ctaMessage: "Hola SwellPro Perú, solicito cotización para repuesto de cargador rápido inteligente del modelo FD2 Max."
  },

  // CÁMARAS Y GIMBALS
  {
    id: "cam-gc1m",
    name: "Single-Axis Gimbal Camera GC1-M",
    family: "Cámaras y gimbals",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031726/Single-Axis_Gimbal_Camera_GC1-M_-_FD2_FD3_evmv7r.jpg",
    compatibility: ["FD2", "FD3"],
    desc: "Cámara sumergible con gimbal de un eje (servo vertical) para verificar la zona de pesca perfecta e inspeccionar carnadas.",
    ctaMessage: "Hola SwellPro Perú, deseo consultar precio de la cámara monoeje GC1-M sumergible para mi drone de pesca."
  },
  {
    id: "cam-g03h",
    name: "3-axis Gimbal 4K Camera G03H",
    family: "Cámaras y gimbals",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031707/3-axis_gimbal_4K_camera_G03H_-_SD4plus_m5msuv.jpg",
    compatibility: ["SD4+"],
    desc: "Cátedra de estabilización activa en tres ejes con sensor Sony de alta resolución 4K y lente especial libre de reflejo del agua.",
    ctaMessage: "Hola SwellPro Perú, solicito asesoría técnica y precio sobre el Gimbal servoasistido 3-Axis 4K G03H especializado."
  },
  {
    id: "cam-ext",
    name: "Gimbal Extension Bar",
    family: "Cámaras y gimbals",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031720/Gimbal_Extention_Bar_-_FD3_qhmtmo.jpg",
    compatibility: ["FD3"],
    desc: "Varilla de extensión estanca de aleación de aluminio para reubicar mecánicamente la cámara ante cargas de pesca complejas.",
    ctaMessage: "Hola SwellPro Perú, solicito stock e información del soporte extensor de aluminio Gimbal Extension Bar."
  },

  // TRANSPORTE Y SOPORTE
  {
    id: "case-fd3",
    name: "FD3 Carrying Case Finished Product",
    family: "Transporte y soporte",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031719/FD3_FD1plus_Carrying_Case_Finished_Product_-_FD1plus_FD1S_FD3_oatxrn.jpg",
    compatibility: ["FD1S", "FD3"],
    desc: "Maleta rígida impermeable termoformada de alto impacto con espumas protectoras troqueladas con láser a medida exacta.",
    ctaMessage: "Hola SwellPro Perú, consulto precio sobre la maleta rígida para transporte de los modelos FD1S o FD3."
  },
  {
    id: "case-fd2",
    name: "FD2 Carrying Case Finished Product",
    family: "Transporte y soporte",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031717/FD2_Carrying_Case_Finished_Product_-_FD2_yt8eet.jpg",
    compatibility: ["FD2"],
    desc: "Maleta blindada rígida con válvula de compensación de presión atmosférica, específica para el chasis robusto FD2 Max.",
    ctaMessage: "Hola SwellPro Perú, requiero cotización de la maleta rígida oficial de viaje FD2 Carrying Case."
  },
  {
    id: "float-fd2",
    name: "FL-FD2 Float Pod Kit",
    family: "Transporte y soporte",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031719/FL-FD2_Float_-_FD2_iz9gdc.jpg",
    compatibility: ["FD2"],
    desc: "Par de flotadores de alta flotabilidad que aumentan el coeficiente estanco y permiten descansar el drone sobre cualquier rompiente.",
    ctaMessage: "Hola SwellPro Perú, consulto stock de los flotadores adicionales FL-FD2 Float para acoplar a mi dron de pesca."
  },
  {
    id: "landing-pad",
    name: "SwellPro Drone Landing Pad",
    family: "Transporte y soporte",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031707/SwellPro_Drone_Landing_Pad_-_All_models_kzqr1w.jpg",
    compatibility: ["FD1S", "FD2", "FD3", "SD4+"],
    desc: "Plataforma de despegue y aterrizaje de alta visibilidad para arena suelta de playa, previniendo polvo en motores.",
    ctaMessage: "Hola SwellPro Perú, deseo añadir a mi kit el Landing Pad original de despegue para arena de playa."
  },

  // SEGURIDAD Y FLOTACIÓN
  {
    id: "safety-ring",
    name: "Automatic Inflatable Life Ring LB1",
    family: "Seguridad y flotación",
    image: "https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1780031709/Automatic_Inflatable_Life_Ring_LB1_-_All_models_hivadn.jpg",
    compatibility: ["FD1S", "FD2", "FD3", "SD4+"],
    desc: "Dispositivo salvavidas inflable de despliegue automático al contacto con agua. Perfecto para operaciones de rescate acuático.",
    ctaMessage: "Hola SwellPro Perú, solicito asesoría técnica y precios del accesorio de seguridad Aro Salvavidas Inflable LB1."
  }
];

const FAMILIAS_LIST = [
  "Baterías",
  "Hélices",
  "Control y señal",
  "Carga",
  "Cámaras y gimbals",
  "Transporte y soporte",
  "Seguridad y flotación"
];

export default function AccesoriosPage() {
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [compatFilter, setCompatFilter] = useState<string | null>(null);

  // Filter logic
  const filteredAccesorios = ACCESORIOS_DATA.filter((item) => {
    const matchesFamily = selectedFamily ? item.family === selectedFamily : true;
    const matchesCompat = compatFilter ? item.compatibility.includes(compatFilter) : true;
    return matchesFamily && matchesCompat;
  });

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans selection:bg-[#ff4d00] selection:text-white antialiased">
      
      {/* Sutil bandera peruana en cabecera */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-[#ff4d00]" />
        <div className="h-full w-1/3 bg-neutral-100" />
        <div className="h-full w-1/3 bg-[#ff4d00]" />
      </div>

      {/* STICKY HEADER NAV */}
      <nav className="border-b border-neutral-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="../index.html" 
            className="flex items-center gap-2 text-neutral-500 hover:text-[#ff4d00] transition font-semibold text-xs sm:text-sm uppercase tracking-wider"
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
            href={getWhatsAppUrl("Hola SwellPro Perú, estoy navegando en el catálogo completo de accesorios oficiales y deseo realizar consultas sobre stock inmediato.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider py-2.5 px-4.5 rounded-xl transition shadow-md shadow-[#ff4d00]/15"
          >
            Consultar Stock
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative bg-neutral-900 text-white py-20 lg:py-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff4d00]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="bg-[#ff4d00]/15 border border-[#ff4d00]/30 text-[#ff4d00] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">
            🇵🇪 Repuestos Originales con Garantía Local
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-7xl uppercase tracking-tight leading-none mb-6">
            Accesorios para<br/>
            <span className="text-[#ff4d00]">cada misión.</span>
          </h1>
          <p className="font-sans text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Encuentra primero la familia del accesorio y luego la variante compatible con tu modelo SwellPro. Stock garantizado en Lima con envío a nivel nacional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hola SwellPro Perú, deseo consultar los detalles técnicos, precios y stock de accesorios del catálogo nacional.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs uppercase tracking-widest py-4.5 px-8 rounded-xl transition shadow-lg shadow-[#ff4d00]/25 transform hover:-translate-y-0.5"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#familias"
              className="w-full sm:w-auto text-center bg-transparent hover:bg-white/10 border border-neutral-600 text-neutral-200 hover:text-white font-display font-bold text-xs uppercase tracking-widest py-4.5 px-8 rounded-xl transition"
            >
              Ver familias de accesorios
            </a>
          </div>
        </div>
      </header>

      {/* FILTER CONTROLS BAR */}
      <section id="filtrado" className="bg-white border-b border-neutral-100 sticky top-20 z-40 shadow-xs py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Compatibility Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-extrabold text-neutral-400 tracking-wider flex items-center gap-1.5 mr-2">
              <Sliders className="w-3.5 h-3.5 text-neutral-400" /> Compatibilidad:
            </span>
            <button
              onClick={() => setCompatFilter(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition ${
                compatFilter === null 
                  ? "bg-neutral-900 text-white" 
                  : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              Todos los modelos
            </button>
            {["FD1S", "FD2", "FD3", "SD4+"].map((mod) => (
              <button
                key={mod}
                onClick={() => setCompatFilter(mod)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition ${
                  compatFilter === mod 
                    ? "bg-[#ff4d00] text-white" 
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {mod}
              </button>
            ))}
          </div>

          {/* Quick Stats Helper */}
          <div className="text-xs text-neutral-500 font-medium">
            Mostrando <span className="text-[#ff4d00] font-bold">{filteredAccesorios.length}</span> accesorios de fábrica
          </div>

        </div>
      </section>

      {/* SECCIÓN DE FAMILIAS & MINI GALERÍA */}
      <main id="familias" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-36">
        
        {/* Navigation Sidebar/Top family tabs */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-[#ff4d00]" />
            <span className="text-xs uppercase font-extrabold text-neutral-400 tracking-widest block">
              Estructura de Categorías
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 uppercase">
            Selecciona una Familia de Equipos
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedFamily(null)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                selectedFamily === null 
                  ? "bg-neutral-900 text-white" 
                  : "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50"
              }`}
            >
              Toda la Flota (Completo)
            </button>
            {FAMILIAS_LIST.map((famy) => (
              <button
                key={famy}
                onClick={() => setSelectedFamily(famy)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                  selectedFamily === famy 
                    ? "bg-[#ff4d00] text-white" 
                    : "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50"
                }`}
              >
                {famy}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display of families and products */}
        <div className="space-y-16">
          {FAMILIAS_LIST.map((family) => {
            // Check if user has filtered by a specific family, if so skip other families
            if (selectedFamily && selectedFamily !== family) return null;
            
            // Get products in this family that matches compatibility filter
            const familyProducts = filteredAccesorios.filter(item => item.family === family);
            
            if (familyProducts.length === 0) return null;

            return (
              <div key={family} className="border-t border-neutral-200/60 pt-10" id={`family-${family.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="font-display font-extrabold text-neutral-900 text-xl sm:text-3xl uppercase tracking-tight flex items-center gap-3">
                      <span className="w-2.5 h-7 bg-[#ff4d00] rounded-full inline-block"></span>
                      {family}
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-sm font-medium mt-1">
                      Componentes de ingeniería oficiales SwellPro bajo certificación marina estanca.
                    </p>
                  </div>
                  <span className="text-xs bg-neutral-100 px-3.5 py-1 rounded-full text-neutral-600 font-bold">
                    {familyProducts.length} Variantes
                  </span>
                </div>

                {/* Sub-Gallery Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {familyProducts.map((p) => (
                    <div 
                      key={p.id}
                      className="group bg-white rounded-2xl border border-neutral-150/80 p-5 hover:border-[#ff4d00]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                      id={`card-${p.id}`}
                    >
                      <div>
                        {/* Cloudinary Visual Area */}
                        <div className="aspect-square w-full rounded-xl overflow-hidden bg-white hover:bg-neutral-50/50 flex items-center justify-center p-4 border border-neutral-100 relative">
                          <img 
                            src={p.image} 
                            alt={p.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                            referrerPolicy="no-referrer"
                          />
                          {/* Visual badges for compatibility on corner */}
                          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                            {p.compatibility.map(item => (
                              <span 
                                key={item} 
                                className={`text-[8.5px] font-black uppercase px-2 py-0.5 rounded-md ${
                                  item === "FD2" ? "bg-neutral-900 text-[#ff4d00]" :
                                  item === "FD3" ? "bg-neutral-800 text-blue-400" :
                                  item === "FD1S" ? "bg-neutral-200 text-neutral-800" :
                                  "bg-[#ff4d00]/10 text-[#ff4d00]"
                                }`}
                              >
                                {item === "FD2" ? "FD2 Max" : item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Text and context */}
                        <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block mt-4">
                          {p.family}
                        </span>
                        <h4 className="font-display font-extrabold text-neutral-900 text-lg mt-1 group-hover:text-[#ff4d00] transition-colors leading-tight">
                          {p.name}
                        </h4>
                        <p className="text-xs text-neutral-500 font-medium mt-2 leading-relaxed h-12 overflow-hidden text-ellipsis">
                          {p.desc}
                        </p>
                      </div>

                      {/* Visual Compatibility & CTA Block */}
                      <div className="mt-5 border-t border-neutral-100 pt-4">
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="font-bold text-neutral-500">Compatibilidad:</span>
                          <span className="text-[#ff4d00] font-black tracking-tight">
                            {p.compatibility.map(c => c === "FD2" ? "FD2 Max" : c).join(" / ")}
                          </span>
                        </div>
                        <a
                          href={getWhatsAppUrl(p.ctaMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center bg-neutral-900 hover:bg-[#ff4d00] text-white py-3 rounded-xl font-bold tracking-wider uppercase text-xs block transition-all"
                        >
                          Consultar por WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* BLOQUE DE COMPATIBILIDAD MATRIX DE LA FLOTA */}
      <section id="matriz-compatibilidad" className="bg-neutral-900 text-white py-20 border-t border-[#ff4d00]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff4d00] text-xs font-bold uppercase tracking-widest block mb-2">
              SOPORTE DE USO PRECISADO
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
              Compatibilidad Oficial por Modelo
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3">
              Evita errores de calibración y fallas estancas. Aquí puedes escanear de un vistazo el hardware exacto certificado para tu equipo de la flota SwellPro.
            </p>
            <div className="w-12 h-1 bg-[#ff4d00]/80 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Table Matrix Container */}
          <div className="overflow-x-auto rounded-2xl border border-neutral-800 shadow-xl bg-neutral-950">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-neutral-800 font-display text-neutral-400 uppercase text-xs tracking-wider">
                  <th className="p-5">Repuestos Oficiales</th>
                  <th className="p-5 bg-neutral-900/40 text-center">Fisherman FD1S</th>
                  <th className="p-5 text-center text-[#ff4d00] font-bold">FD2 Max (Recomendado)</th>
                  <th className="p-5 text-center">Fisherman FD3</th>
                  <th className="p-5 text-center text-orange-400">SplashDrone 4+</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-xs sm:text-sm text-neutral-400">
                
                {/* Row 1 */}
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-bold text-white">Batería inteligente</td>
                  <td className="p-4 text-center">B-FD1S (IB4+)</td>
                  <td className="p-4 text-center text-white font-semibold">B-FD2 Inteligente</td>
                  <td className="p-4 text-center">B-FD3 Inteligente</td>
                  <td className="p-4 text-center text-white">B-FD1S (IB4+)</td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-bold text-white">Hélices recomendadas</td>
                  <td className="p-4 text-center">P-FD3 balanceadas</td>
                  <td className="p-4 text-center text-white font-semibold">P-FD2 Carbono</td>
                  <td className="p-4 text-center">P-FD3 Balanceadas</td>
                  <td className="p-4 text-center text-white">P-FD3 / FD1 One Pair</td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-bold text-white">Radio Transmisor</td>
                  <td className="p-4 text-center">Control FD1S</td>
                  <td className="p-4 text-center text-white font-semibold">Control R02 IP54</td>
                  <td className="p-4 text-center">Control R02 IP54</td>
                  <td className="p-4 text-center text-white">Profesional R03 IP66</td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-bold text-white">Sistemas de Carga</td>
                  <td className="p-4 text-center">Cargador Inteligente</td>
                  <td className="p-4 text-center text-white font-semibold">Cargador FD2 Dual</td>
                  <td className="p-4 text-center">Cargador FD3 Adapt</td>
                  <td className="p-4 text-center text-white">Cargador Inteligente</td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-bold text-white">Cámaras y Soporte</td>
                  <td className="p-4 text-center">Cámara fija FPV</td>
                  <td className="p-4 text-center text-white font-semibold">Single-Axis GC1-M</td>
                  <td className="p-4 text-center">GC1-M o Extensor</td>
                  <td className="p-4 text-center text-white">3-axis 4K G03H</td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-neutral-900/30">
                  <td className="p-4 font-bold text-white">Sistema de Defensa / Flotación</td>
                  <td className="p-4 text-center">Auto inflable universal</td>
                  <td className="p-4 text-center text-white font-semibold">Flotadores FL-FD2 / Life Ring LB1</td>
                  <td className="p-4 text-center">Auto inflable universal</td>
                  <td className="p-4 text-center text-white">Auto inflable universal</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* CTA FINAL DE APOYO */}
      <section className="bg-neutral-100 py-20 border-t border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-neutral-900 text-3xl sm:text-4xl uppercase tracking-tight mb-4">
            ¿No estás seguro de cuál accesorio necesitas?
          </h2>
          <p className="text-neutral-600 font-medium max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Nuestros pilotos e ingenieros de SwellPro Perú te brindarán asesoría inmediata por WhatsApp para asegurar compatibilidad exacta con tu dron.
          </p>
          
          <a
            href={getWhatsAppUrl("Hola SwellPro Perú, requiero asesoría técnica sobre compatibilidad de repuestos y accesorios para mi equipo. ¿Me ayudan por favor?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider py-4.5 px-10 rounded-2xl transition duration-150 shadow-xl shadow-orange-brand/25 cursor-pointer transform hover:-translate-y-0.5"
            id="cta-final-accessories"
          >
            <PhoneCall className="w-5 h-5 shrink-0" /> Te ayudamos por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-neutral-900 pb-10 mb-10">
            
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
                alt="SwellPro Perú" 
                className="w-11 h-11"
              />
              <div className="text-left">
                <span className="font-display font-extrabold text-lg block uppercase tracking-tight">SWELLPRO <span className="text-[#ff4d00]">PERÚ</span></span>
                <span className="text-[9px] uppercase tracking-widest text-[#ff4d00] font-bold block">Accesorios con garantía local</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <a href="../index.html" className="hover:text-white transition">Drones de Pesca</a>
              <a href="../index.html#soporte-local" className="hover:text-white transition">Garantía Real</a>
              <a href="../index.html#como-funciona" className="hover:text-white transition">Cómo Funciona</a>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 font-medium gap-4">
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

      {/* WHATSAPP FLOAT BUTTON COMPONENT */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={getWhatsAppUrl("Hola SwellPro Perú, consulto stock de accesorios.")}
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).playPopSound) {
              (window as any).playPopSound();
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 completed rounded-full shadow-2xl flex items-center justify-center transition duration-200 transform hover:scale-105"
          title="Consúltanos al WhatsApp Directo"
          id="whatsapp-floating-accessories"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45 5.518 0 10.007-4.489 10.01-10.007.002-2.673-1.025-5.186-2.893-7.058C16.596 1.666 14.1 .64 11.66 24V2h-.1C6.014 2.1 1.5 6.6 1.49 12.1c0 1.7.45 3.3 1.35 4.7l-1 3.65 3.8-.996zM17.5 14.3c-.3-.15-1.7-.85-2-.95-.25-.1-.45-.15-.65.15-.2.3-.75.95-.9 1.1-.15.2-.3.2-.6.05-1.15-.5-1.95-.9-2.7-1.55-.6-.5-1.2-1.15-1.6-1.8-.15-.3 0-.45.15-.6.1-.1.25-.3.35-.45.1-.1.15-.25.25-.4.1-.15.05-.3 0-.45-.05-.15-.65-1.55-.9-2.15-.25-.6-.5-.5-.65-.5h-.55c-.2 0-.5.1-.75.4-.25.3-1 1-1 2.4s1 2.75 1.15 2.95c.15.2 2 3.05 4.8 4.25.7.3 1.2.45 1.6.6.7.2 1.35.15 1.85.1.55-.1 1.7-.7 1.95-1.35.25-.65.25-1.2.15-1.35-.1-.2-.3-.3-.6-.45z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
