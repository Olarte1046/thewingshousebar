import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { MapPin, Clock, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 px-4 max-w-7xl mx-auto border-t border-white/10">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Info & Details */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Visítanos en Nuestro Local
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            VIVE LA EXPERIENCIA <span className="text-amber-500">EN PERSONA</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Te esperamos con la cerveza más helada, el mejor ambiente deportivo y la terraza perfecta para tus noches.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-white/5">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase">Dirección</h4>
                <p className="text-gray-300 text-sm">{RESTAURANT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-white/5">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase">Horario de Atención</h4>
                <p className="text-gray-300 text-sm">{RESTAURANT_INFO.schedule}</p>
              </div>
            </div>
          </div>

          {/* Location Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all hover:scale-105"
            >
              <Navigation className="w-4 h-4 fill-slate-950 stroke-none" />
              Abrir en Google Maps
            </a>

            <a 
              href={RESTAURANT_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 font-bold text-sm border border-blue-500/30 transition-all hover:scale-105"
            >
              Página de Facebook Oficial
            </a>
          </div>

        </div>

        {/* Real Venue Ambience Photo Showcase */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 aspect-[4/3] group">
          <img 
            src="/images/restaurant/wine_drinks_bar.jpg" 
            alt="Ambiente real del bar The Wing's House" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/90 text-slate-950 font-black text-xs">
              FOTO REAL DE NUESTRO BAR
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h3 className="text-2xl font-black text-white">Transmisiones Deportivas & Vinos</h3>
            <p className="text-gray-300 text-sm mt-1">Disfruta los partidos con tus amigos y el mejor servicio de mesa.</p>
          </div>
        </div>

      </div>

    </section>
  );
};
