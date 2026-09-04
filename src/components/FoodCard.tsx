import React from 'react';
import type { MenuItem } from '../data/menuData';
import { Camera, Plus, Check, Star, AlertCircle } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, selectedSauce?: string) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onAddToCart }) => {
  const [selectedSauce, setSelectedSauce] = React.useState<string>(
    item.options?.sauces?.[0] || ''
  );
  const [added, setAdded] = React.useState(false);

  const handleAdd = () => {
    onAddToCart(item, selectedSauce);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl glass-panel border border-white/10 overflow-hidden hover-lift transition-all duration-300">
      
      <div>
        {/* IMAGE PORTION (STRICTLY REAL OR CLEAN TYPOGRAPHIC PLACEHOLDER) */}
        {item.isRealPhoto && item.image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            {/* Real Photo Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/90 text-slate-950 font-black text-[11px] shadow-md">
                <Camera className="w-3.5 h-3.5" />
                FOTO REAL DEL LOCAL
              </span>
            </div>

            {item.isPopular && (
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px]">
                  <Star className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                  MÁS VENDIDO
                </span>
              </div>
            )}
          </div>
        ) : (
          /* ELEGANT TYPOGRAPHIC HEADER FOR ITEMS WITHOUT REAL PHOTO (STRICTLY NO AI IMAGES) */
          <div className="relative p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-white/5 flex flex-col justify-between min-h-[140px] checker-bg">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 font-extrabold text-[11px] uppercase tracking-wider border border-amber-500/20">
                {item.category}
              </span>
              
              <span className="inline-flex items-center gap-1 text-gray-400 text-[11px] font-medium italic">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                Sin foto (Receta Oficial)
              </span>
            </div>

            <h4 className="text-xl font-black text-white mt-2 group-hover:text-amber-400 transition-colors">
              {item.name}
            </h4>
          </div>
        )}

        {/* CARD BODY CONTENT */}
        <div className="p-5">
          {item.isRealPhoto && (
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
              {item.name}
            </h4>
          )}

          <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
            {item.description}
          </p>

          {/* Ingredient Pills */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.ingredients.map((ing, i) => (
                <span key={i} className="px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-400 text-[11px] font-medium border border-gray-700/50">
                  {ing}
                </span>
              ))}
            </div>
          )}

          {/* Sauce Selector Option if Available */}
          {item.options?.sauces && (
            <div className="mb-4">
              <label className="block text-xs font-bold text-amber-400 mb-1.5">
                Selecciona tu Salsa Principal:
              </label>
              <select
                value={selectedSauce}
                onChange={(e) => setSelectedSauce(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-gray-200 font-medium focus:outline-none focus:border-amber-500"
              >
                {item.options.sauces.map((sauce, idx) => (
                  <option key={idx} value={sauce}>
                    Salsa: {sauce}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER & ADD TO CART BUTTON */}
      <div className="p-5 pt-0 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-bold">Precio</span>
          <span className="text-xl font-black text-amber-400">
            {formatPrice(item.price)}
          </span>
        </div>

        <button
          onClick={handleAdd}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
            added 
              ? 'bg-emerald-500 text-slate-950' 
              : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              ¡Agregado!
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 stroke-[3]" />
              Agregar
            </>
          )}
        </button>
      </div>

    </div>
  );
};
