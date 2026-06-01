import { useState } from "react";
import { Product } from "../types";
import { Check, ArrowRight, RotateCcw, Sparkles, Navigation, Anchor } from "lucide-react";

interface SelectionAssistantProps {
  products: Product[];
  whatsappNumber: string;
}

export default function SelectionAssistant({ products, whatsappNumber }: SelectionAssistantProps) {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      setStep(4); // Pantalla de resultado
    }
  };

  const getRecommendation = (): Product => {
    const budget = answers.budget;
    const priority = answers.priority;

    // SplashDrone 4 Plus routing: camera priority + premium/max investment
    if (priority === "camera" && (budget === "premium" || budget === "max")) {
      return products.find((p) => p.id === "sd4-plus") || products.find((p) => p.id === "fd3") || products[2];
    }
    if (budget === "basic") {
      return products.find((p) => p.id === "fd1") || products[0];
    }
    if (budget === "premium") {
      return products.find((p) => p.id === "fd3") || products[2];
    }
    if (budget === "max" || priority === "weight") {
      return products.find((p) => p.id === "fd2-max") || products[1];
    }

    return products[1]; // Fisherman FD2 Max por defecto
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
  };

  const recommendedProduct = getRecommendation();

  const getCustomRecommendationDescription = () => {
    const activity = 
      answers.activity === "beach" 
        ? "desde la orilla de la playa" 
        : answers.activity === "boat" 
        ? "desde botes, lanchas o kayak" 
        : "desde peñas, cerros o muelles";
        
    const priorityText = 
      answers.priority === "accuracy" 
        ? "hacer lanzamientos muy lejanos y precisos" 
        : answers.priority === "camera" 
        ? "ver el fondo del mar en vivo desde la pantalla para encontrar peces" 
        : "llevar carnadas grandes o pesadas mar adentro sin esfuerzo";

    return `Para tu estilo de pesca ${activity} y tu gran prioridad de ${priorityText}, el ${recommendedProduct.name} es exactamente la herramienta que cambiará tus jornadas para siempre. Diseñado con tecnología marina premium y respaldado localmente por nuestro equipo oficial en Lima.`;
  };

  return (
    <div className="bg-white border border-neutral-200/90 rounded-3xl shadow-xl shadow-neutral-100 overflow-hidden max-w-2xl mx-auto transition-all duration-300">
      
      {/* Quiz Header */}
      <div className="bg-neutral-950 text-white p-8 relative overflow-hidden border-b border-neutral-900">
        <div className="absolute -top-12 -right-12 h-44 w-44 bg-[#ff4d00]/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 h-36 w-36 bg-red-600/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="flex justify-between items-center mb-3 relative z-10">
          <span className="text-[#ff4d00] text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 bg-[#ff4d00]/10 px-3 py-1 rounded-full border border-[#ff4d00]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#ff4d00]" /> Guía de Compra Exclusiva
          </span>
          {step <= 3 && (
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
              Paso {step} de 3
            </span>
          )}
        </div>
        
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight uppercase leading-tight relative z-10">
          Encuentra tu compañero de costa perfecto
        </h3>
        <p className="text-neutral-400 text-xs md:text-sm font-sans mt-2 leading-relaxed max-w-lg relative z-10">
          Responde estas 3 breves sugerencias basadas en cómo pescas en el mar peruano y nuestro sistema te recomendará el drone preciso para ti.
        </p>
        
        {/* Progress bar */}
        <div className="w-full bg-neutral-900 h-1 mt-6 rounded-full overflow-hidden relative z-10">
          <div 
            className="bg-[#ff4d00] h-full transition-all duration-500 rounded-full"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Quiz Body */}
      <div className="p-6 md:p-8 min-h-[340px] flex flex-col justify-between bg-[#FDFDFD]">
        
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-neutral-900 font-display font-bold text-lg md:text-xl flex items-start gap-3 leading-snug">
              <span className="flex items-center justify-center bg-[#ff4d00] text-white w-7 h-7 rounded-lg text-sm font-bold shrink-0 mt-0.5 shadow-md shadow-[#ff4d00]/20">
                1
              </span>
              ¿Desde dónde pescas habitualmente?
            </h4>
            
            <div className="grid gap-3.5 sm:grid-cols-1">
              {[
                { 
                  label: "🎣 Playas de arena (para lanzar la línea desde la orilla)", 
                  value: "beach",
                  desc: "Para pescar parado en la arena y hacer que tu carnada llegue lo más lejos posible."
                },
                { 
                  label: "🌊 Peñas altas, cerros o desde el muelle", 
                  value: "heights",
                  desc: "Zonas de altura donde se necesita resistir el viento del mar y las olas."
                },
                { 
                  label: "⛵ Embarcado (desde botes, lanchas o kayak)", 
                  value: "boat",
                  desc: "Para pescar mar adentro buscando mayor comodidad y facilidad."
                }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("activity", opt.value)}
                  className="w-full text-left p-4 rounded-2xl border border-neutral-200 hover:border-[#ff4d00] hover:bg-neutral-50/50 transition-all duration-200 flex justify-between items-center group cursor-pointer hover:shadow-md hover:shadow-neutral-100"
                >
                  <div className="pr-4">
                    <span className="text-neutral-800 font-semibold group-hover:text-neutral-950 block text-sm md:text-base">
                      {opt.label}
                    </span>
                    <span className="text-neutral-400 text-xs block mt-0.5 group-hover:text-neutral-550 font-normal">
                      {opt.desc}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-neutral-200 group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00] bg-white group-hover:bg-[#ff4d00]/5 shrink-0 transition-colors">
                    <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-neutral-900 font-display font-bold text-lg md:text-xl flex items-start gap-3 leading-snug">
              <span className="flex items-center justify-center bg-[#ff4d00] text-white w-7 h-7 rounded-lg text-sm font-bold shrink-0 mt-0.5 shadow-md shadow-[#ff4d00]/20">
                2
              </span>
              ¿Qué es lo más importante para ti cuando usas el drone?
            </h4>
            
            <div className="grid gap-3.5 sm:grid-cols-1">
              {[
                { 
                  label: "🎯 Llegar lo más lejos posible con plomo pesado", 
                  value: "accuracy",
                  desc: "Volar con total tranquilidad y soltar la línea exactamente donde quieres."
                },
                { 
                  label: "📷 Ver el agua en vivo para buscar peces y grabar tus mejores capturas", 
                  value: "camera",
                  desc: "Ver la pantalla en tiempo real para encontrar cardúmenes y bancos de de arena."
                },
                { 
                  label: "💪 Llevar carnadas grandes o pesadas sin esfuerzo", 
                  value: "weight",
                  desc: "Llevar la carnada con fuerza y potencia sin que el drone sufra o se gasten rápido las baterías del motor."
                }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("priority", opt.value)}
                  className="w-full text-left p-4 rounded-2xl border border-neutral-200 hover:border-[#ff4d00] hover:bg-neutral-50/50 transition-all duration-200 flex justify-between items-center group cursor-pointer hover:shadow-md hover:shadow-neutral-100"
                >
                  <div className="pr-4">
                    <span className="text-neutral-800 font-semibold group-hover:text-neutral-950 block text-sm md:text-base">
                      {opt.label}
                    </span>
                    <span className="text-neutral-400 text-xs block mt-0.5 group-hover:text-neutral-550 font-normal">
                      {opt.desc}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-neutral-200 group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00] bg-white group-hover:bg-[#ff4d00]/5 shrink-0 transition-colors">
                    <ArrowRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setStep(1)}
              className="text-neutral-400 hover:text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-4 transition-colors cursor-pointer"
            >
              ← Pregunta anterior
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-neutral-900 font-display font-bold text-lg md:text-xl flex items-start gap-3 leading-snug">
              <span className="flex items-center justify-center bg-[#ff4d00] text-white w-7 h-7 rounded-lg text-sm font-bold shrink-0 mt-0.5 shadow-md shadow-[#ff4d00]/20">
                3
              </span>
              ¿Qué tipo de equipo estás buscando?
            </h4>
            
            <div className="grid gap-3.5 sm:grid-cols-1">
              {[
                { 
                  label: "🟢 Uno que sea súper fácil de usar para pescar rápido", 
                  value: "basic",
                  desc: "Encender, conectar la batería y llevar tu anzuelo al mar de la forma más rápida y directa."
                },
                { 
                  label: "🟡 Uno intermedio con cámara en vivo para ver dónde lanzas", 
                  value: "premium",
                  desc: "Un equipo completo con pantalla a color para guiarte y ver el fondo marino."
                },
                { 
                  label: "🔴 El más potente y resistente para llevar las cargas más pesadas", 
                  value: "max",
                  desc: "Para volar con total seguridad con viento fuerte y llevar carnadas gigantes de hasta 3.5 kg."
                }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("budget", opt.value)}
                  className="w-full text-left p-4 rounded-2xl border border-neutral-200 hover:border-[#ff4d00] hover:bg-neutral-50/50 transition-all duration-200 flex justify-between items-center group cursor-pointer hover:shadow-md hover:shadow-neutral-100"
                >
                  <div className="pr-4">
                    <span className="text-neutral-800 font-semibold group-hover:text-neutral-950 block text-sm md:text-base">
                      {opt.label}
                    </span>
                    <span className="text-neutral-400 text-xs block mt-0.5 group-hover:text-neutral-550 font-normal">
                      {opt.desc}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-neutral-200 group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00] bg-white group-hover:bg-[#ff4d00]/5 shrink-0 transition-colors">
                    <Check size={16} className="opacity-40 group-hover:opacity-100 transition-all" />
                  </div>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setStep(2)}
              className="text-neutral-400 hover:text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-4 transition-colors cursor-pointer"
            >
              ← Pregunta anterior
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center pb-6 border-b border-neutral-100">
              <span className="inline-flex items-center gap-1.5 bg-[#ff4d00]/10 text-[#ff4d00] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-3">
                <Navigation className="w-3.5 h-3.5" /> Recomendación de Experto
              </span>
              <h4 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
                {recommendedProduct.name}
              </h4>
              <p className="text-[#ff4d00] text-xs font-bold tracking-widest uppercase mt-1">
                Disponible con Garantía Local y Soporte 24/7 en Perú
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 py-2">
              <div className="md:w-5/12 flex flex-col justify-center items-center relative py-6 bg-neutral-50/70 rounded-2xl border border-neutral-100 overflow-hidden w-full">
                {/* Soft glow background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full opacity-90 blur-xl pointer-events-none z-0"></div>
                {/* Visual ground shadow pedestal for 3D realism */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-36 h-2 bg-black/[0.05] rounded-full blur-md pointer-events-none z-0"></div>
                
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  width="180"
                  height="180"
                  loading="lazy"
                  className="max-h-36 max-w-[85%] object-contain select-none hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.03)] relative z-10"
                />
              </div>
              <div className="md:w-7/12 space-y-5">
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  {getCustomRecommendationDescription()}
                </p>
                
                {/* Visual specs pill board */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/60 shadow-xs">
                    <span className="block text-[9px] text-neutral-400 uppercase tracking-widest font-semibold">Alcance</span>
                    <span className="text-xs font-bold text-neutral-800">{recommendedProduct.specs.reach}</span>
                  </div>
                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-[#ff4d00]/15 shadow-xs">
                    <span className="block text-[9px] text-[#ff4d00] uppercase tracking-widest font-semibold">Carga útil</span>
                    <span className="text-xs font-bold text-[#ff4d00]">{recommendedProduct.specs.payload}</span>
                  </div>
                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/60 shadow-xs">
                    <span className="block text-[9px] text-neutral-400 uppercase tracking-widest font-semibold">Cámara</span>
                    <span className="text-xs font-bold text-neutral-800">{recommendedProduct.specs.camera}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA panel */}
            <div className="flex flex-col gap-3 pt-6 border-t border-neutral-100">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hola SwellPro Perú. Completé el recomendador interactivo en su web y mi modelo ideal resultó el *${recommendedProduct.name}*. Me gustaría recibir información de stock, precio actual con descuento exclusivo y coordinar detalles sobre la asesoría y capacitación en campo.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-3 bg-[#ff4d00] hover:bg-[#e04400] text-white text-center font-bold text-sm uppercase tracking-wider py-4 px-6 rounded-2xl transition-all duration-200 shadow-xl shadow-orange-brand/20 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Anchor className="w-4 h-4" /> Solicitar este equipo por WhatsApp →
                </a>
                
                <a
                  href={
                    recommendedProduct.id === "fd1" 
                      ? "./fd1s/index.html" 
                      : recommendedProduct.id === "fd2-max" 
                      ? "./fd2/index.html" 
                      : recommendedProduct.id === "fd3" 
                      ? "./fd3/index.html" 
                      : "./sd4-plus/index.html"
                  }
                  className="flex-1 bg-neutral-950 hover:bg-neutral-900 text-white text-center font-display font-semibold text-xs uppercase tracking-wider py-4 px-5 rounded-2xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Ver Ficha de Producto →
                </a>
              </div>
              
              <button
                onClick={resetQuiz}
                className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-2xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw size={14} /> Reintentar recomendador
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
