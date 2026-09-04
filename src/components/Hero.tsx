import { Flame, ShieldCheck, MapPin, Clock, ArrowRight, Utensils } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4">
      {/* Background Image Overlay strictly using real facade photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/restaurant/facade_night.jpg" 
          alt="Fachada nocturna real de The Wing's House" 
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e]/90 via-transparent to-[#0b0c0e]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Authentic Guarantee Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md animate-pulse">
          <ShieldCheck className="w-4 h-4" />
          <span>Fotografía 100% Real del Local y de nuestros Platos</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase mb-4 leading-none">
          SABOR REAL Y <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-red-500 bg-clip-text text-transparent">
            ALITAS EXTRAORDINARIAS
          </span>
        </h1>

        <p className="max-w-2xl text-gray-300 text-base sm:text-xl mb-8 font-medium">
          Hamburguesas jugosas, costillas ahumadas en salsa BBQ y cervezas heladas en el mejor ambiente nocturno.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="#menu" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg transition-all shadow-lg shadow-amber-500/30 hover:scale-105 glow-amber"
          >
            <Utensils className="w-5 h-5" />
            Explorar Menú Completo
          </a>
          <a 
            href="#fotos-reales" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg backdrop-blur-md transition-all hover:scale-105"
          >
            Ver Galería Real
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 w-full max-w-3xl text-gray-300 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Abierto: 4:00 PM - 11:30 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Zona Gastronómica</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>Salsas de la Casa</span>
          </div>
        </div>

      </div>
    </section>
  );
};
