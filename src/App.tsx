import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RealGallery } from './components/RealGallery';
import { MenuSection } from './components/MenuSection';
import { CartDrawer, type CartItem } from './components/CartDrawer';
import { LocationSection } from './components/LocationSection';
import type { MenuItem } from './data/menuData';
import { RESTAURANT_INFO } from './data/menuData';
import { ShieldCheck, Flame } from 'lucide-react';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-gray-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Authentic Notice Ribbon */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 py-2 px-4 text-center text-xs font-bold text-emerald-400 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4" />
        <span>RESTAURANTE OFICIAL — Todas las fotografías son 100% reales del establecimiento y de nuestros platillos.</span>
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

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              <Flame className="w-5 h-5 fill-slate-950 stroke-none" />
            </div>
            <span className="text-lg font-extrabold text-white">THE WING'S HOUSE</span>
          </div>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. Todos los derechos reservados. Fotos auténticas del local.
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
