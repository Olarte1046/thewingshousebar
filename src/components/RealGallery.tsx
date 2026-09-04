import React, { useState } from 'react';
import { REAL_GALLERY, type GalleryItem } from '../data/menuData';
import { Camera, ShieldCheck, Eye, X } from 'lucide-react';

export const RealGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="fotos-reales" className="py-24 px-4 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Fotografía Oficial y Real del Restaurante
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
          LO QUE VES ES LO QUE <span className="text-gradient-gold">DISFRUTAS</span>
        </h2>
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
          Cero inteligencia artificial, cero fotos de stock. Estas son fotografías reales tomadas directamente en nuestro local con nuestros platillos auténticos.
        </p>
      </div>

      {/* Grid Showcase of the 5 Real Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REAL_GALLERY.map((item, idx) => (
          <div 
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`group relative rounded-3xl overflow-hidden glass-card cursor-pointer hover-lift ${
              idx === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'
            }`}
          >
            {/* Real Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/90 backdrop-blur-md text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20">
                <Camera className="w-3.5 h-3.5" />
                FOTO REAL DEL LOCAL
              </span>
            </div>

            {/* Category Tag */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-amber-400 font-extrabold text-xs border border-white/10">
                {item.category}
              </span>
            </div>

            {/* Bottom Content Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
              <h3 className="text-xl sm:text-3xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-amber-400 font-bold text-xs">
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
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full glass-card rounded-3xl overflow-hidden border border-white/20 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-slate-900/90 text-white font-bold flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden mb-6 max-h-[65vh] bg-black">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain max-h-[65vh] mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Fotografía Tomada en Nuestro Establecimiento
                </div>
                <h3 className="text-2xl font-black text-white">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{selectedImage.description}</p>
              </div>

              <a 
                href="#menu" 
                onClick={() => setSelectedImage(null)}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all whitespace-nowrap shadow-lg shadow-amber-500/20"
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
