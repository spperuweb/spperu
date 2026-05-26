import { useState } from "react";
import { Product } from "../types";
import { Check, ArrowRight, RotateCcw } from "lucide-react";

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
      setStep(4); // Result screen
    }
  };

  const getRecommendation = (): Product => {
    const budget = answers.budget;
    const priority = answers.priority;

    // High level logic
    if (budget === "basic") {
      return products.find((p) => p.id === "fd1") || products[0];
    }
    if (budget === "premium") {
      return products.find((p) => p.id === "fd3") || products[2];
    }
    if (budget === "max" || priority === "weight") {
      return products.find((p) => p.id === "fd2-max") || products[1];
    }

    // Fallbacks
    return products[1]; // Fisherman Max FD2 default
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
  };

  const recommendedProduct = getRecommendation();

  // Custom text per path
  const getCustomRecommendationDescription = () => {
    const activity = answers.activity === "beach" ? "desde la orilla" : answers.activity === "boat" ? "desde embarcaciones" : "en diversos terrenos de altura";
    const priorityText = answers.priority === "accuracy" ? "lanzamientos precisos a gran distancia" : answers.priority === "camera" ? "un monitoreo en vivo de alta definición sobre el agua" : "capacidad de soltar carnadas de peso considerable";

    return `Basado en tu preferencia de pesca ${activity} y tu prioridad de contar con ${priorityText}, el ${recommendedProduct.name} es tu herramienta definitiva bajo el respaldo oficial de SwellPro Perú.`;
  };

  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
      {/* Quiz Header */}
      <div className="bg-black text-white p-6 relative">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-[#ff4d00]/10 skew-x-12 transform origin-top-right"></div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#ff4d00] text-xs font-semibold tracking-widest uppercase">
            Asistente Interactivo
          </span>
          {step <= 3 && (
            <span className="text-gray-400 text-xs font-medium">
              Pregunta {step} de 3
            </span>
          )}
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight">
          ¿No sabes cuál elegir? En 3 preguntas te decimos cuál es tu drone ideal.
        </h3>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
          <div 
            className="bg-[#ff4d00] h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Quiz Body */}
      <div className="p-8 min-h-[300px] flex flex-col justify-between">
        {step === 1 && (
          <div className="space-y-6">
            <h4 className="text-gray-900 font-bold text-lg md:text-xl flex items-center gap-2">
              <span className="flex items-center justify-center bg-[#ff4d00]/10 text-[#ff4d00] w-8 h-8 rounded-full text-sm font-bold">1</span>
              ¿Cómo pescas normalmente o dónde planeas operar el drone?
            </h4>
            <div className="grid gap-3 sm:grid-cols-1">
              {[
                { label: "🎣 Desde la orilla o la playa", value: "beach" },
                { label: "⛵ Desde kayak, bote o embarcación pequeña", value: "boat" },
                { label: "🏔️ En ríos, lagunas o zonas de altura", value: "heights" }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("activity", opt.value)}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#ff4d00] hover:bg-orange-brand/5 transition duration-200 flex justify-between items-center group cursor-pointer"
                >
                  <span className="text-gray-800 font-medium group-hover:text-black">{opt.label}</span>
                  <div className="w-6 h-6 rounded-full border border-gray-300 group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00]">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h4 className="text-gray-900 font-bold text-lg md:text-xl flex items-center gap-2">
              <span className="flex items-center justify-center bg-[#ff4d00]/10 text-[#ff4d00] w-8 h-8 rounded-full text-sm font-bold">2</span>
              ¿Qué es lo más importante en tus jornadas de pesca?
            </h4>
            <div className="grid gap-3 sm:grid-cols-1">
              {[
                { label: "🎯 Lanzar la línea lo más lejos posible con precisión", value: "accuracy" },
                { label: "📷 Ver el fondo marino, detectar cardúmenes y grabar en vivo", value: "camera" },
                { label: "💪 Cargar mucho peso de carnada y carnadas pesadas", value: "weight" }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("priority", opt.value)}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#ff4d00] hover:bg-orange-brand/5 transition duration-200 flex justify-between items-center group cursor-pointer"
                >
                  <span className="text-gray-800 font-medium group-hover:text-black">{opt.label}</span>
                  <div className="w-6 h-6 rounded-full border border-gray-300 group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00]">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-gray-500 hover:text-[#ff4d00] text-sm flex items-center gap-1 mt-4 cursor-pointer"
            >
              ← Ir a la pregunta anterior
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h4 className="text-gray-900 font-bold text-lg md:text-xl flex items-center gap-2">
              <span className="flex items-center justify-center bg-[#ff4d00]/10 text-[#ff4d00] w-8 h-8 rounded-full text-sm font-bold">3</span>
              ¿Cuánto buscas invertir en tu equipo de pesca inteligente?
            </h4>
            <div className="grid gap-3 sm:grid-cols-1">
              {[
                { label: "🟢 Empezar con lo esencial (Resistente, simple y sin cámara)", value: "basic" },
                { label: "🟡 Invertir en tecnología equilibrada (Gps avanzado + Cámara 4K)", value: "premium" },
                { label: "🔴 Quiero el tope de línea (Cámara 4K, GPS 9.0 y carga extrema de 3.5kg)", value: "max" }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("budget", opt.value)}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#ff4d00] hover:bg-orange-brand/5 transition duration-200 flex justify-between items-center group cursor-pointer"
                >
                  <span className="text-gray-800 font-medium group-hover:text-black">{opt.label}</span>
                  <div className="w-6 h-6 rounded-full border border-gray-300 group-hover:border-[#ff4d00] flex items-center justify-center text-[#ff4d00]">
                    <Check size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-gray-500 hover:text-[#ff4d00] text-sm flex items-center gap-1 mt-4 cursor-pointer"
            >
              ← Ir a la pregunta anterior
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="text-center pb-4 border-b border-gray-100">
              <div className="inline-flex items-center gap-2 bg-[#ff4d00]/10 text-[#ff4d00] font-bold px-4 py-1.5 rounded-full text-sm mb-3">
                🎯 Resultado del Diagnóstico
              </div>
              <h4 className="font-display text-3xl font-bold tracking-tight text-gray-900">
                Tu Drone Ideal es el {recommendedProduct.name}
              </h4>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 py-2">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  width="180"
                  height="180"
                  loading="lazy"
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {getCustomRecommendationDescription()}
                </p>
                
                {/* Visual specs pill board */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest">Alcance</span>
                    <span className="text-xs font-bold text-gray-800">{recommendedProduct.specs.reach}</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest">Capacidad</span>
                    <span className="text-xs font-bold text-[#ff4d00]">{recommendedProduct.specs.payload}</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <span className="block text-[10px] text-gray-500 uppercase tracking-widest">Cámara</span>
                    <span className="text-xs font-bold text-gray-800">{recommendedProduct.specs.camera}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hola, realicé el diagnóstico interactivo en tu web y me recomendó el Drone ${recommendedProduct.name}. Me gustaría recibir detalles sobre este equipo.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#ff4d00] hover:bg-[#e04400] text-white text-center font-semibold py-4 px-6 rounded-xl transition shadow-lg shadow-orange-brand/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Solicitar Cotización Asistida por WhatsApp →
              </a>
              <button
                onClick={resetQuiz}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw size={16} /> Volver a Empezar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
