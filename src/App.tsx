import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RealGallery } from './components/RealGallery';
import { MenuSection } from './components/MenuSection';
import { CartDrawer, type CartItem } from './components/CartDrawer';
import { LocationSection } from './components/LocationSection';
import type { MenuItem } from './data/menuData';
import { RESTAURANT_INFO } from './data/menuData';
import { ShieldCheck, Flame, MessageCircle, ShoppingBag } from 'lucide-react';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (item: MenuItem, selectedSauce?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (ci) => ci.item.id === item.id && ci.selectedSauce === selectedSauce
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [...prev, { item, quantity: 1, selectedSauce }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number, sauce?: string) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id && ci.selectedSauce === sauce) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => setCartItems([]);

  const totalCartCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  const handleDirectGeneralWhatsApp = () => {
    const msg = encodeURIComponent("¡Hola The Wing's House! 🍗🔥 Me gustaría realizar una consulta o hacer un pedido directo.");
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappFormatted}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-gray-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Authentic Notice Ribbon */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 py-2.5 px-4 text-center text-xs font-bold text-emerald-300 flex items-center justify-center gap-2 backdrop-blur-md">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>RESTAURANTE OFICIAL — Fotografías 100% reales de nuestro establecimiento y platillos. Sin IA.</span>
      </div>

      {/* Main Navbar */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Hero Section */}
      <Hero />

      {/* Real Gallery (Strictly 5 Authentic Photos Showcase) */}
      <RealGallery />

      {/* Menu Section */}
      <MenuSection onAddToCart={handleAddToCart} />

      {/* Location & Experience Section */}
      <LocationSection />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Persistent Floating WhatsApp & Cart Buttons */}
      {showFloatingBtn && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
          
          {/* Quick Cart Trigger if items exist */}
          {totalCartCount > 0 && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 text-slate-950 font-black text-sm shadow-2xl shadow-amber-500/40 hover:scale-105 transition-all cursor-pointer border border-amber-300/40"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
              <span>Ver Pedido ({totalCartCount})</span>
            </button>
          )}

          {/* Persistent WhatsApp Floating Button */}
          <button
            onClick={handleDirectGeneralWhatsApp}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all cursor-pointer border border-emerald-300/40 animate-bounce"
            title="Pedir por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950/20 stroke-[2.5]" />
            <span className="hidden sm:inline">WhatsApp Directo</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
              <Flame className="w-5 h-5 fill-slate-950 stroke-none" />
            </div>
            <div>
              <span className="text-lg font-black text-white block">THE WING'S HOUSE</span>
              <span className="text-[10px] text-amber-500 font-extrabold uppercase -mt-1 block">BURGER · RIBS · BEER</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 max-w-md">
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. Todos los derechos reservados. Fotografías auténticas del restaurante.
          </p>

          <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
            <a href={RESTAURANT_INFO.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Facebook Oficial</a>
            <span>•</span>
            <a href={RESTAURANT_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Google Maps</a>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
