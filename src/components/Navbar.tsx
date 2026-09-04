import React from 'react';
import { ShoppingBag, ShieldCheck, Flame, MessageCircle, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const handleQuickWhatsApp = () => {
    const defaultMsg = encodeURIComponent("¡Hola The Wing's House! 🍗 Me gustaría realizar una consulta o hacer un pedido.");
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappFormatted}?text=${defaultMsg}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 glass-nav w-full px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-600 to-red-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 fill-slate-950 stroke-none" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
              THE WING'S HOUSE
            </span>
            <span className="block text-[10px] tracking-widest text-amber-500 font-extrabold uppercase -mt-0.5">
              {RESTAURANT_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-gray-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menú Especial</a>
          <a href="#fotos-reales" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Fotos Reales
          </a>
          <a href="#ubicacion" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <MapPin className="w-4 h-4 text-amber-500" /> Ubicación & Local
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Quick Direct WhatsApp Button */}
          <button 
            onClick={handleQuickWhatsApp}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-extrabold transition-all cursor-pointer hover:scale-105"
            title="Escribir directamente por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
            <span>WhatsApp Directo</span>
          </button>

          {/* Cart Drawer Trigger */}
          <button 
            onClick={onOpenCart} 
            className="relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer text-sm"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
            <span className="hidden sm:inline">Tu Pedido</span>
            {cartCount > 0 ? (
              <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center animate-bounce shadow-md">
                {cartCount}
              </span>
            ) : (
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-950/20 text-[11px]">
                0
              </span>
            )}
          </button>

        </div>

      </div>
    </header>
  );
};
