import React from 'react';
import { ShieldCheck, MapPin, Clock, ArrowRight, Utensils, Star, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Hero: React.FC = () => {
  const handleQuickWhatsApp = () => {
    const defaultMsg = encodeURIComponent("¡Hola! Quisiera consultar el menú y hacer un pedido en The Wing's House 🍗🔥");
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappFormatted}?text=${defaultMsg}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Image Overlay strictly using real facade photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/restaurant/facade_night.jpg" 
          alt="Fachada nocturna real de The Wing's House" 
          className="w-full h-full object-cover object-center filter brightness-[0.3] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/95 via-[#07080a]/40 to-[#07080a]/95" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-600/10 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Authentic Guarantee Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-extrabold mb-8 backdrop-blur-xl shadow-lg shadow-emerald-500/10 animate-pulse">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>FOTOGRAFÍA 100% REAL — SIN IA NI IMÁGENES FALSAS</span>
        </div>

        <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase mb-6 leading-[0.95] drop-shadow-2xl">
          SABOR AUTÉNTICO & <br />
          <span className="text-gradient-fire">
            ALITAS EXTRAORDINARIAS
          </span>
        </h1>

        <p className="max-w-2xl text-gray-200 text-base sm:text-xl mb-10 font-medium leading-relaxed drop-shadow-md">
          Alitas crujientes en salsas artesanales, hamburguesas jugosas, costillas ahumadas y cervezas heladas. Disfruta la verdadera experiencia del bar o recíbelo en casa por WhatsApp.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          
          {/* Main Menu Button */}
          <a 
            href="#menu" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-lg transition-all shadow-xl shadow-amber-500/25 hover:scale-105 hover:shadow-amber-500/40 cursor-pointer"
          >
            <Utensils className="w-5 h-5 stroke-[2.5]" />
            Explorar Menú & Pedir
          </a>

          {/* Quick WhatsApp Order Button */}
          <button 
            onClick={handleQuickWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-emerald-600/90 hover:bg-emerald-500 text-slate-950 font-black text-lg transition-all shadow-xl shadow-emerald-600/25 hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 stroke-[2.5]" />
            Pedido Rápido por WhatsApp
          </button>

          {/* Gallery button */}
          <a 
            href="#fotos-reales" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/20 text-white font-bold text-base backdrop-blur-md transition-all hover:scale-105"
          >
            Ver Fotos Reales
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>

        {/* Quick Highlights Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10 w-full max-w-4xl text-gray-300 text-xs sm:text-sm">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-md">
            <Clock className="w-5 h-5 text-amber-500 mb-1" />
            <span className="font-extrabold text-white">4:00 PM - 11:30 PM</span>
            <span className="text-[11px] text-gray-400">Atención Diaria</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-md">
            <MessageCircle className="w-5 h-5 text-emerald-400 mb-1" />
            <span className="font-extrabold text-white">Pedidos por WhatsApp</span>
            <span className="text-[11px] text-gray-400">Directo sin Comisiones</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-md">
            <Star className="w-5 h-5 text-amber-500 mb-1 fill-amber-500 stroke-none" />
            <span className="font-extrabold text-white">Alitas & Costillas BBQ</span>
            <span className="text-[11px] text-gray-400">Receta de la Casa</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-md">
            <MapPin className="w-5 h-5 text-amber-500 mb-1" />
            <span className="font-extrabold text-white">Excelente Ambiente</span>
            <span className="text-[11px] text-gray-400">Terraza & Deportes</span>
          </div>
        </div>

      </div>
    </section>
  );
};
