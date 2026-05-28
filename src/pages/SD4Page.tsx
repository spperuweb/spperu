import React, { useState } from "react";
import { 
  ArrowLeft, 
  Battery, 
  ShieldCheck, 
  Zap, 
  Waves, 
  ChevronDown,
  Camera,
  Compass,
  Tv
} from "lucide-react";

const getWhatsAppUrl = (text: string) => {
  return `https://api.whatsapp.com/send?phone=51991664146&text=${encodeURIComponent(text)}`;
};

export default function SD4Page() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans selection:bg-[#ff4d00] selection:text-white">
      {/* Sutil bandera peruana en el borde superior */}
      <div className="h-1 w-full flex">
        <div className="h-full w-1/3 bg-[#ff4d00]" />
        <div className="h-full w-1/3 bg-white" />
        <div className="h-full w-1/3 bg-[#ff4d00]" />
      </div>

      {/* HEADER NAV */}
      <nav className="border-b border-neutral-900 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="../index.html" className="flex items-center gap-2 text-neutral-400 hover:text-white transition font-sans text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 text-[#ff4d00]" />
            Volver al Inicio
          </a>
          
          <div className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779807248/SwellProPeru_logo-01-01_pub6gp.png" 
              alt="SwellPro Perú" 
              className="w-8 h-8 rounded-full"
            />
            <span className="font-display font-extrabold tracking-tight text-white">
              SWELLPRO <span className="text-[#ff4d00]">PERÚ</span>
            </span>
          </div>

          <a 
            href={getWhatsAppUrl("Hola, quiero cotizar el SplashDrone 4.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-xl transition"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-20 lg:py-32 overflow-hidden flex items-center min-h-[85vh] border-b border-neutral-900">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff4d00]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div>
            <span className="bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-4 font-display">
              Lo más avanzado
            </span>
            <h1 className="text-5xl sm:text-7xl font-display font-black leading-tight uppercase mb-4 tracking-tight">
              SwellPro <span className="text-[#ff4d00]">SplashDrone 4</span>
            </h1>
            <p className="text-[#ff4d00] font-sans italic text-lg sm:text-xl font-medium mb-6">
              "El drone marino profesional. Para el que no negocia."
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-sans">
              La plataforma marina impermeable más tecnológica de la industria mundial. Equipado con transmisión digital de nivel militar ultra-largo, óptica avanzada Sony 4K de 48 Megapíxeles con zoom de alto aumento y protección ambiental total IP67 que permite operaciones avanzadas tanto recreativas como industriales en mar abierto.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-4 gap-3 mb-10 text-center max-w-lg">
              <div className="bg-[#ff4d00]/10 border border-[#ff4d00]/25 p-3 rounded-xl">
                <span className="text-[#ff4d00] font-display font-black text-xl block">7.0 km</span>
                <span className="text-[9px] text-neutral-400 uppercase tracking-widest block mt-1">Alcance</span>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 p-3 rounded-xl">
                <span className="text-[#ff4d00] font-display font-black text-xl block">2.0 kg</span>
                <span className="text-[9px] text-neutral-400 uppercase tracking-widest block mt-1">Carga Máx</span>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 p-3 rounded-xl">
                <span className="text-[#ff4d00] font-display font-black text-xl block">Sony 4K</span>
                <span className="text-[9px] text-neutral-400 uppercase tracking-widest block mt-1">Óptica 48MP</span>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 p-3 rounded-xl">
                <span className="text-[#ff4d00] font-display font-black text-xl block">29 min</span>
                <span className="text-[9px] text-neutral-400 uppercase tracking-widest block mt-1">Batería</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={getWhatsAppUrl("Hola, quiero info del SplashDrone 4")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-2xl text-center shadow-lg shadow-[#ff4d00]/20 transition transform hover:-translate-y-0.5"
              >
                Preguntar por WhatsApp
              </a>
              <a 
                href="#especificaciones"
                className="border border-neutral-800 hover:border-neutral-700 text-white font-display font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-2xl text-center transition"
              >
                Ficha Técnica
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Background water ripple glow */}
            <div className="absolute w-72 h-72 bg-[#ff4d00]/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img 
              src="https://res.cloudinary.com/drvejtepq/image/upload/q_auto/f_auto/v1779816468/new-waterproof-drone-splashrone-4-plus_1570x_fgdu3n.webp" 
              alt="SwellPro SplashDrone 4" 
              className="w-full max-w-md relative z-10 transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </header>

      {/* TECNOLOGÍA CLAVE (BENEFITS) */}
      <section className="py-24 bg-neutral-950/40 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight">
              Ingeniería Marina Profesional Sin Límites
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mt-2 font-sans text-xs sm:text-sm">
              Conexión digital de extrema distancia, óptica con estándar cinematográfico y sellado estanco total.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/40 border border-neutral-900 rounded-2xl p-8 hover:border-[#ff4d00]/20 transition">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <Tv className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-3">7 km de Rango de Cobertura</h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                La tecnología de transmisión Slide 3 de SwellPro asegura un enlace de video HD y radio analógica fluidos hasta una distancia colosal de 7,000 metros en condiciones óptimas sobre la superficie del Océano Pacíﬁco.
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-900 rounded-2xl p-8 hover:border-[#ff4d00]/20 transition">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-3">Cámara Sony de Nivel Cine</h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                Consigue tomas de exploración marina asombrosas gracias a su sensor Sony 4K 60fps de 48 MP. Aprieta zoom de 8x para verificar movimientos marinos en peñascos lejanos con total nitidez cromática.
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-900 rounded-2xl p-8 hover:border-[#ff4d00]/20 transition">
              <div className="w-12 h-12 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6">
                <Waves className="w-6 h-6 text-[#ff4d00]" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-3">Sello Hermético Total IP67</h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                No solo es resistente a la lluvia: el marco de SplashDrone 4 puede ser sumergido completamente en agua marina y su control remoto también cuenta con grado de protección IP66 a salpicaduras pesadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section id="especificaciones" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight">
              Especificaciones Técnicas SplashDrone 4
            </h2>
            <div className="w-12 h-1 bg-[#ff4d00] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-neutral-950 rounded-2xl border border-neutral-900 overflow-hidden shadow-2xl">
            {[
              { label: "Modelo", val: "SwellPro SplashDrone 4" },
              { label: "Nivel de Experiencia", val: "Profesional y Operaciones Avanzadas / Creadores de Contenido" },
              { label: "Rango de Enlace Máximo", val: "7.0 Kilómetros de distancia (SwellPro Slide 3)" },
              { label: "Capacidad de Carga de Arrastre", val: "Fuerza de un solo anzuelo certificada de hasta 2.0 kg" },
              { label: "Lente Integrado", val: "Óptica Sony 4K a 60fps con resolución fotográfica de 48 Megapíxeles" },
              { label: "Autonomía de Operación", val: "Hasta 29 minutos / hasta 7 lanzamientos vigorosos por carga" },
              { label: "Nivel de Sellado", val: "Clasificación ambiental certificada IP67 completa" },
              { label: "Motores & Estabilidad", val: "Soporte de viento de nivel 7 (hasta 61 km/h) + hélices de carbono de liberación rápida" },
              { label: "Navegación inteligente", val: "Auto-retorno, modo de órbita marina, seguimiento dinámico al piloto" },
            ].map((spec, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 p-5 border-b border-neutral-900 hover:bg-neutral-900/20 transition duration-150">
                <span className="font-display font-bold text-neutral-400 uppercase text-xs sm:text-sm">{spec.label}</span>
                <span className="font-sans text-sm text-white sm:text-right font-medium">{spec.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 bg-neutral-950/40 border-t border-b border-neutral-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight mb-12">
            Preguntas Frecuentes — SplashDrone 4
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué diferencia al SplashDrone 4 de la línea Fisherman convencional?",
                a: "SplashDrone 4 es una plataforma multiuso. Mientras la línea Fisherman está optimizada estrictamente para sostener carnadas desde la arena de manera simple, el SplashDrone 4 permite intercambiar gimbals de cámara de 3 ejes, cámaras infrarrojas/térmicas, cámaras de visión nocturna y megáfonos para misiones de salvamento industrial, rescate marino o filmación submarina cinematográfica en 4K."
              },
              {
                q: "¿Qué tan segura es la transmisión Slide 3 de 7 km?",
                a: "Utiliza un transceptor digital de espectro ensanchado adaptativo de alto rendimiento, reduciendo interferencias con torres telefónicas de orilla. Sintonizarás el canal de vídeo en vivo fluido en tu dispositivo móvil sin cortes a gran distancia."
              },
              {
                q: "¿El control puede mojarse bajo la lluvia?",
                a: "Sí, a diferencia de todos los drones de consumo ordinarios, el transmisor de SplashDrone 4 es hermético IP66, por lo que tolera tormentas, lluvias torrenciales o caídas incidentales en charcos de agua de lodo de mar sin fallar."
              },
              {
                q: "¿Garantizan atención en Lima?",
                a: "SwellPro Perú entrega soporte integral en nuestro local. Atendemos mantenimiento de motores, calibración avanzada y stock permanente de baterías de alto rendimiento y gimbals opcionales."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden transition duration-150">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-display font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-between hover:bg-neutral-900 hover:text-[#ff4d00] transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#ff4d00] transition-transform duration-200 ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-6 pt-0 border-t border-neutral-900 text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer className="py-20 text-center bg-black">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-neutral-500 font-display text-[10px] uppercase tracking-widest mb-6 block">
            SwellPro Perú — Único Representante Técnico Comercial en el Perú
          </p>
          <p className="text-neutral-300 font-sans text-sm leading-relaxed mb-8">
            El rey absoluto de la ingeniería impermeable deportiva e industrial. Conéctate hoy con nuestro equipo técnico para una proforma oficial o programa una cita de demostración.
          </p>
          <a
            href={getWhatsAppUrl("Hola, quiero info del SplashDrone 4")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff4d00] hover:bg-[#e04400] text-white font-display font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-2xl transition duration-150 inline-block shadow-lg shadow-[#ff4d00]/20"
          >
            Preguntar por WhatsApp
          </a>

          <div className="mt-16 text-neutral-600 font-sans text-[11px] border-t border-neutral-900 pt-8">
            © 2026 SwellPro Perú. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
