import React, { useState } from 'react';
import type { MenuItem } from '../data/menuData';
import { MENU_ITEMS } from '../data/menuData';
import { FoodCard } from './FoodCard';
import { Search, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, selectedSauce?: string) => void;
}

type CategoryFilter = 'all' | 'wings' | 'burgers' | 'sides' | 'drinks' | 'ribs' | 'realOnly';

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: CategoryFilter; label: string; icon?: string }[] = [
    { id: 'all', label: 'Todo el Menú' },
    { id: 'realOnly', label: '📸 Solo Fotos Reales' },
    { id: 'wings', label: '🍗 Alitas' },
    { id: 'burgers', label: '🍔 Hamburguesas' },
    { id: 'ribs', label: '🍖 Costillas BBQ' },
    { id: 'sides', label: '🍟 Acompañamientos' },
    { id: 'drinks', label: '🍷 Cervezas & Vinos' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === 'all') return true;
    if (activeCategory === 'realOnly') return item.isRealPhoto;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Nuestra Carta de Sabores Auténticos
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight">
            MENÚ & <span className="text-gradient-gold">ESPECIALIDADES</span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
          <input 
            type="text"
            placeholder="Buscar alitas, combos, papas, salsas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-white/10 focus:border-amber-500 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-gray-100 placeholder-gray-400 focus:outline-none transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-slate-900/80 text-gray-300 hover:bg-slate-800 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass-card rounded-3xl border border-white/10">
          <p className="text-gray-300 text-lg font-bold">
            No se encontraron productos en esta categoría o búsqueda.
          </p>
          <button 
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase"
          >
            Ver todo el menú
          </button>
        </div>
      )}

    </section>
  );
};
