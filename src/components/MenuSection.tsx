import React, { useState } from 'react';
import type { MenuItem } from '../data/menuData';
import { MENU_ITEMS } from '../data/menuData';
import { FoodCard } from './FoodCard';
import { Search } from 'lucide-react';

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
    // Search query filter
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Category filter
    if (activeCategory === 'all') return true;
    if (activeCategory === 'realOnly') return item.isRealPhoto;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="py-16 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block mb-1">
            NUESTRA CARTA DE SABORES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            MENÚ Y ESPECIALIDADES
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text"
            placeholder="Buscar alitas, combos, papas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-200 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/80 text-gray-300 hover:bg-slate-800 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-panel rounded-2xl border border-white/10">
          <p className="text-gray-400 text-lg font-medium">
            No se encontraron productos en esta categoría o búsqueda.
          </p>
        </div>
      )}

    </section>
  );
};
