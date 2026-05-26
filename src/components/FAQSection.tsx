import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQItem } from "../types";

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({
    0: true, // First item open by default as requested
  });

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndexes[index] || false;
        return (
          <div
            key={index}
            className="border border-gray-150 rounded-xl bg-white transition-all overflow-hidden"
          >
            <button
              id={`faq-btn-${index}`}
              onClick={() => toggleIndex(index)}
              className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 cursor-pointer hover:bg-gray-50/50 transition duration-150 group"
              aria-expanded={isOpen}
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-[#ff4d00] transition-colors text-base md:text-lg">
                {item.question}
              </h4>
              <span className="text-gray-400 group-hover:text-[#ff4d00] transition-colors shrink-0">
                {isOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] border-t border-gray-100 opacity-100 p-5 md:p-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
