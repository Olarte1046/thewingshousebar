import { ShoppingBag, ShieldCheck, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 glass-nav w-full px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 fill-slate-950 stroke-none" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              THE WING'S HOUSE
            </span>
            <span className="block text-[10px] tracking-widest text-amber-500 font-bold uppercase -mt-1">
              {RESTAURANT_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menú Especial</a>
          <a href="#fotos-reales" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" /> Fotos Reales
          </a>
          <a href="#experiencia" className="hover:text-amber-400 transition-colors">El Local</a>
          <a href="#ubicacion" className="hover:text-amber-400 transition-colors">Ubicación</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenCart} 
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-md shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
            <span className="hidden sm:inline">Ver Pedido</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center animate-bounce shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
