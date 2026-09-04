import React, { useState } from 'react';
import { REAL_GALLERY, type GalleryItem } from '../data/menuData';
import { Camera, ShieldCheck, Eye } from 'lucide-react';

export const RealGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="fotos-reales" className="py-20 px-4 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-4 h-4" />
          Fotografía Oficial y Real del Restaurante
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          LO QUE VES ES LO QUE <span className="text-amber-500">DISFRUTAS</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base sm:text-lg">
          Sin filtros de IA, sin imágenes de stock inventadas. Estas son las fotografías reales tomadas directamente en nuestro local y con nuestras recetas auténticas.
        </p>
      </div>

      {/* Grid Showcase of the 5 Real Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REAL_GALLERY.map((item, idx) => (
          <div 
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`group relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer hover-lift ${
              idx === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'
            }`}
          >
            {/* Real Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/90 text-slate-950 font-black text-xs shadow-md">
                <Camera className="w-3.5 h-3.5" />
                FOTO REAL
              </span>
            </div>

            {/* Category Tag */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 rounded-lg bg-gray-900/80 backdrop-blur-md text-amber-400 font-bold text-xs border border-amber-500/20">
                {item.category}
              </span>
            </div>

            {/* Bottom Content Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                {item.description}
              </p>

              <div className="mt-3 flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Eye className="w-4 h-4" />
                <span>Haz clic para ampliar detalle real</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View for Expanded High-Res Inspection */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/20 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 text-white font-bold flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ✕
            </button>

            <div className="rounded-2xl overflow-hidden mb-4 max-h-[65vh]">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain bg-black/60 max-h-[65vh] mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Fotografía Tomada en Nuestro Establecimiento
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{selectedImage.description}</p>
              </div>

              <a 
                href="#menu" 
                onClick={() => setSelectedImage(null)}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all whitespace-nowrap"
              >
                Pedir este Plato
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
