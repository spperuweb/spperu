import React, { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Eye, 
  Play, 
  PhoneCall, 
  Image as ImageIcon,
  Video as VideoIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface BentoMediaItem {
  id: string;
  url: string;
  type?: "image" | "video";
  tag?: string;
  title?: string;
  desc?: string;
  category?: string;
}

interface InteractiveBentoGalleryProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mediaItems: BentoMediaItem[];
  whatsappMessagePrefix: string;
  accentColor?: string; // Default: '#ff4d00'
}

export default function InteractiveBentoGallery({
  id,
  title,
  subtitle,
  description,
  mediaItems = [],
  whatsappMessagePrefix,
  accentColor = "#ff4d00"
}: InteractiveBentoGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const thumbDockRef = useRef<HTMLDivElement>(null);

  // Auto-detect type if not explicitly defined
  const getMediaType = (item: BentoMediaItem): "image" | "video" => {
    if (item.type) return item.type;
    const extension = item.url.split("?")[0].split(".").pop()?.toLowerCase();
    if (extension && ["mp4", "webm", "ogg", "mov", "avi"].includes(extension)) {
      return "video";
    }
    if (item.url.includes("/video/upload/")) {
      return "video";
    }
    return "image";
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setSelectedItemIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, mediaItems]);

  // Center active thumbnail in the dock modal scroll
  useEffect(() => {
    if (selectedItemIndex !== null && thumbDockRef.current) {
      const activeThumb = thumbDockRef.current.children[selectedItemIndex] as HTMLElement;
      if (activeThumb) {
        const dock = thumbDockRef.current;
        const scrollLeft = activeThumb.offsetLeft - dock.offsetWidth / 2 + activeThumb.offsetWidth / 2;
        dock.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [selectedItemIndex]);

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const getBentoSpan = (index: number) => {
    // Elegant staggered dynamic layout spans for desktop view
    const cycle = index % 5;
    switch (cycle) {
      case 0:
        return "md:col-span-2 md:row-span-2 h-[300px] md:h-[460px]"; // Big featured banner
      case 1:
        return "md:col-span-1 md:row-span-1 h-[218px]"; // Compact landscape
      case 2:
        return "md:col-span-1 md:row-span-2 h-[218px] md:h-[460px] md:row-start-auto"; // Portrait pillar
      case 3:
        return "md:col-span-2 md:row-span-1 h-[218px]"; // Wide horizontal banner
      case 4:
        return "md:col-span-1 md:row-span-1 h-[218px]"; // Modular box
      default:
        return "md:col-span-1 md:row-span-1 h-[218px]";
    }
  };

  // Limit initially displayed grid items but keep 100% accessible via expansion or modal toggle
  const initialCount = 7;
  const isLargeCollection = mediaItems.length > initialCount;
  const visibleItems = isExpanded ? mediaItems : mediaItems.slice(0, initialCount);

  // Generate WhatsApp Url for specific item
  const getWhatsAppItemUrl = (item: BentoMediaItem) => {
    const itemTitle = item.title || item.tag || `Evidencia (#${item.id || "real"})`;
    const message = `${whatsappMessagePrefix}\n\n*Referencia de la Evidencia:* "${itemTitle}" (${item.url})`;
    return `https://api.whatsapp.com/send?phone=51949643347&text=${encodeURIComponent(message)}`;
  };

  return (
    <section id={id} className="py-24 bg-neutral-900 border-t border-b border-neutral-950 relative overflow-hidden text-white scroll-mt-20">
      {/* Blueprint Grid Styling Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      
      {/* Radiant glow halos */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#ff4d00]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header content with clean brand design */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs font-bold text-[#ff4d00] uppercase tracking-widest block mb-4 bg-[#ff4d00]/10 px-4 py-2 rounded-full w-fit mx-auto border border-[#ff4d00]/20 font-display">
            {subtitle}
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight uppercase leading-none text-white">
            {title}
          </h2>
          <div className="w-16 h-1.5 bg-[#ff4d00] mx-auto mt-6 rounded-full" />
          <p className="text-neutral-400 mt-6 text-sm sm:text-base font-sans leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-none">
          {visibleItems.map((item, index) => {
            const isVideo = getMediaType(item) === "video";
            const gridClass = getBentoSpan(index);
            
            return (
              <motion.div
                layoutId={`bento-${item.id}`}
                key={item.id}
                onClick={() => setSelectedItemIndex(index)}
                className={`group relative bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 hover:border-[#ff4d00]/50 hover:shadow-2xl hover:shadow-[#ff4d00]/10 transition-all duration-300 cursor-pointer ${gridClass}`}
              >
                {/* Media frame */}
                <div className="absolute inset-0 w-full h-full">
                  {isVideo ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover select-none pointer-events-none opacity-80 group-hover:opacity-100 transition-all duration-500"
                      autoPlay
                      muted
                      playsInline
                      loop
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title || "Evidencia Real"}
                      className="w-full h-full object-cover select-none pointer-events-none opacity-80 group-hover:opacity-100 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  )}

                  {/* Gradient bottom layer inside card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 group-hover:via-neutral-900/40 transition-all duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-neutral-950/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border border-neutral-800 flex items-center gap-1">
                      {isVideo ? <VideoIcon className="w-2.5 h-2.5 text-[#ff4d00]" /> : <ImageIcon className="w-2.5 h-2.5 text-stone-400" />}
                      {item.tag || "DETALLE"}
                    </span>
                  </div>

                  {/* Captions and contextual hover reveal */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col gap-1 z-10">
                    <h4 className="font-display font-black uppercase tracking-tight text-xs sm:text-sm leading-tight text-stone-100 group-hover:text-[#ff4d00] transition-colors">
                      {item.title || "Evidencia Real de Campo"}
                    </h4>
                    {item.desc && (
                      <p className="text-neutral-400 text-[10px] font-sans leading-normal line-clamp-2 mt-1 md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Interactive floating indicator */}
                  <div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-neutral-950 py-2.5 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#ffff4d00]" style={{ color: accentColor }} />
                      <span>AMPLIAR DETALLE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action button row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 relative z-20">
          {isLargeCollection && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full sm:w-auto text-center font-display font-black text-[11px] uppercase tracking-widest py-4.5 px-10 rounded-2xl border border-neutral-800 text-neutral-200 bg-neutral-950 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-250 cursor-pointer shadow-lg"
            >
              {isExpanded ? "← Ver menor cantidad" : `Ver toda la galería (+${mediaItems.length - initialCount}) →`}
            </button>
          )}

          <a
            href={`https://api.whatsapp.com/send?phone=51949643347&text=${encodeURIComponent(whatsappMessagePrefix)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center font-display font-black text-[11px] uppercase tracking-widest py-4.5 px-10 rounded-2xl bg-[#ff4d00] hover:bg-[#e04400] text-white transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-xl shadow-[#ff4d00]/20"
          >
            <PhoneCall className="w-4 h-4 text-white" />
            <span>SOLICITAR ASESORÍA POR WHATSAPP</span>
          </a>
        </div>

      </div>

      {/* DETAILED IMMERSIVE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-neutral-950/98 backdrop-blur-xl flex flex-col justify-between p-4 md:p-6 select-none"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Top Bar inside modal */}
            <div className="flex items-center justify-between w-full p-2 relative z-50">
              <div className="text-white">
                <span className="text-[10px] font-bold text-[#ff4d00] uppercase tracking-widest font-display">
                  {subtitle}
                </span>
                <p className="text-xs text-neutral-400">
                  Item {selectedItemIndex + 1} de {mediaItems.length}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItemIndex(null);
                }}
                className="bg-neutral-900 border border-neutral-800 text-stone-200 hover:text-white p-3 rounded-full hover:bg-neutral-800 transition duration-150 cursor-pointer"
                title="Cerrar galería"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Immersive Center Area */}
            <div className="flex-1 flex items-center justify-between relative max-w-7xl mx-auto w-full group/modal relative px-2">
              {/* Prev Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-0 md:left-4 z-50 bg-neutral-900/80 border border-neutral-800/60 p-4 rounded-xl text-stone-300 hover:text-white hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
                title="Flecha izquierda"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Media viewer stage */}
              <div 
                className="flex-1 h-[50vh] md:h-[62vh] xl:h-[66vh] w-full flex items-center justify-center p-2 rounded-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItemIndex}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="max-h-full max-w-full flex items-center justify-center rounded-2xl overflow-hidden"
                  >
                    {getMediaType(mediaItems[selectedItemIndex]) === "video" ? (
                      <video
                        src={mediaItems[selectedItemIndex].url}
                        className="max-h-[50vh] md:max-h-[62vh] xl:max-h-[66vh] max-w-full object-contain rounded-2xl shadow-2xl"
                        controls
                        autoPlay
                        muted
                        playsInline
                        loop
                      />
                    ) : (
                      <img
                        src={mediaItems[selectedItemIndex].url}
                        alt={mediaItems[selectedItemIndex].title || "Evidencia"}
                        className="max-h-[50vh] md:max-h-[62vh] xl:max-h-[66vh] max-w-full object-contain rounded-2xl shadow-2xl"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-0 md:right-4 z-50 bg-neutral-900/80 border border-neutral-800/60 p-4 rounded-xl text-stone-300 hover:text-white hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
                title="Flecha derecha"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption, triggers & thumbnail carousel */}
            <div 
              className="w-full max-w-4xl mx-auto flex flex-col gap-5 pt-4 relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Info text card + specific WhatsApp Quote button */}
              <div className="bg-neutral-900/90 border border-neutral-850 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                      {mediaItems[selectedItemIndex].tag || "SwellPro Perú"}
                    </span>
                  </div>
                  <h3 className="text-sm font-display font-black uppercase text-stone-100 tracking-tight">
                    {mediaItems[selectedItemIndex].title || "Evidencia Real de Campo"}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                    {mediaItems[selectedItemIndex].desc || "Fotografía de prueba de alta resolución."}
                  </p>
                </div>
                
                <a
                  href={getWhatsAppItemUrl(mediaItems[selectedItemIndex])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ff4d00] hover:bg-[#e04400] text-white text-[10px] font-black uppercase tracking-wider px-4.5 py-3 rounded-xl flex items-center gap-1.5 shrink-0 self-stretch sm:self-auto justify-center transition-all duration-150"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>COTIZAR ESTA EVIDENCIA</span>
                </a>
              </div>

              {/* Bottom horizontal sliding dock representing 100% of images */}
              <div 
                ref={thumbDockRef}
                className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent snap-x scroll-smooth touch-pan-x"
                style={{ contentVisibility: "auto" }}
              >
                {mediaItems.map((item, index) => {
                  const isVid = getMediaType(item) === "video";
                  const isActive = index === selectedItemIndex;
                  return (
                    <button
                      key={`modal-thumb-${item.id}-${index}`}
                      onClick={() => setSelectedItemIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border bg-neutral-950 transition-all duration-200 snap-center cursor-pointer ${
                        isActive 
                          ? "border-[#ff4d00] ring-2 ring-[#ff4d00]" 
                          : "border-neutral-800 opacity-60 hover:opacity-100"
                      }`}
                      title={`Ver item ${index + 1}`}
                    >
                      {isVid ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                          <Play className="w-4 h-4 text-[#ff4d00]" />
                        </div>
                      ) : (
                        <img
                          src={item.url}
                          className="w-full h-full object-cover select-none pointer-events-none"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
