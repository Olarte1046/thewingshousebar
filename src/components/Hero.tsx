import React from 'react';
import { ShieldCheck, MessageCircle, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Hero: React.FC = () => {
  const handleQuickWhatsApp = () => {
    const defaultMsg = encodeURIComponent("¡Hola The Wing's House! 🍗🔥 Quiero hacer un pedido directo.");
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappFormatted}?text=${defaultMsg}`, '_blank');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-24 px-4">
      {/* Background Image Overlay strictly using real facade photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/restaurant/facade_night.jpg" 
          alt="Fachada real de The Wing's House" 
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/95 via-[#07080a]/30 to-[#07080a]/95" />
      </div>

      {/* Ambient glowing spots */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/20 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Quality Banner Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-black mb-8 backdrop-blur-xl shadow-lg shadow-emerald-500/10">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>FOTOGRAFÍA 100% REAL DEL LOCAL Y NUESTRAS RECETAS</span>
        </div>

        {/* High Conversion Headline */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase mb-6 leading-[0.92] drop-shadow-2xl">
          LAS MEJORES ALITAS DE LA CIUDAD <br />
          <span className="text-gradient-fire">
            DIRECTO A TU PUERTA 🍗🔥
          </span>
        </h1>

        <p className="max-w-2xl text-gray-200 text-base sm:text-xl mb-10 font-medium leading-relaxed drop-shadow-md">
          Disfruta nuestras crujientes alitas con salsas artesanales, hamburguesas jugosas y costillas ahumadas BBQ. Pedido rápido sin intermediarios.
        </p>

        {/* BRUTAL CONVERSION CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          
          {/* Main WhatsApp CTA */}
          <button 
            onClick={handleQuickWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xl transition-all shadow-2xl shadow-emerald-500/30 hover:scale-105 hover:shadow-emerald-500/50 cursor-pointer border border-emerald-300/40"
          >
            <MessageCircle className="w-6 h-6 fill-slate-950/20 stroke-[2.5]" />
            🛵 PEDIR AHORA POR WHATSAPP
          </button>

          {/* Quick Menu Exploration Button */}
          <a 
            href="#menu" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-lg transition-all shadow-xl shadow-amber-500/25 hover:scale-105 cursor-pointer"
          >
            <Flame className="w-5 h-5 fill-slate-950 stroke-none" />
            Ver Menú Estático
          </a>

        </div>

        {/* Visual Trust Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 pt-8 border-t border-white/10 w-full max-w-3xl text-gray-300 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2 font-bold">
            <span className="text-amber-400 text-lg">🚀</span>
            <span>Entrega Rápida en Casa</span>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold">
            <span className="text-emerald-400 text-lg">💬</span>
            <span>Sin Comisiones de Apps</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 font-bold">
            <span className="text-red-400 text-lg">🔥</span>
            <span>Salsas 100% Caseras</span>
          </div>
        </div>

      </div>
    </section>
  );
};
