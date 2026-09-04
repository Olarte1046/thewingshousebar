import React from 'react';
import type { MenuItem } from '../data/menuData';
import { Camera, Plus, Check, Star, MessageCircle, Info } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

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

  const handleDirectWhatsAppOrder = () => {
    let msg = `*¡HOLA THE WINGS HOUSE!* 🍗🔥\nQuiero pedir este plato de la carta:\n- *1x ${item.name}*`;
    if (selectedSauce) {
      msg += ` (Salsa: ${selectedSauce})`;
    }
    msg += `\nPrecio: $${item.price.toLocaleString('es-CO')}\n\n¿Me confirman disponibilidad y tiempo de entrega?`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappFormatted}?text=${encoded}`, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl glass-card overflow-hidden hover-lift transition-all duration-300">
      
      <div>
        {/* IMAGE PORTION (STRICTLY REAL PHOTO OR ELEGANT TYPOGRAPHIC REFINEMENT) */}
        {item.isRealPhoto && item.image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-black/30" />
            
            {/* Real Photo Badge */}
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/90 backdrop-blur-md text-slate-950 font-black text-[11px] shadow-lg shadow-emerald-500/20">
                <Camera className="w-3.5 h-3.5" />
                FOTO REAL DEL LOCAL
              </span>
            </div>

            {item.isPopular && (
              <div className="absolute top-3.5 right-3.5 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-[11px] shadow-lg shadow-amber-500/20">
                  <Star className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                  MÁS VENDIDO
                </span>
              </div>
            )}
          </div>
        ) : (
          /* ELEGANT TYPOGRAPHIC HEADER FOR ITEMS WITHOUT REAL PHOTO (CLEAN & SUBTLE) */
          <div className="relative p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-white/10 flex flex-col justify-between min-h-[140px] checker-bg">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 font-extrabold text-[11px] uppercase tracking-wider border border-amber-500/20">
                {item.category}
              </span>
              
              <span className="inline-flex items-center gap-1 text-gray-400 text-[11px] font-medium bg-slate-900/80 px-2.5 py-1 rounded-full border border-white/5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                Receta Oficial de la Casa
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-white mt-3 group-hover:text-amber-400 transition-colors">
              {item.name}
            </h4>
          </div>
        )}

        {/* CARD BODY CONTENT */}
        <div className="p-6">
          {item.isRealPhoto && (
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
              {item.name}
            </h4>
          )}

          <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 font-normal">
            {item.description}
          </p>

          {/* Ingredient Pills */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {item.ingredients.map((ing, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-gray-300 text-[11px] font-semibold border border-white/10">
                  {ing}
                </span>
              ))}
            </div>
          )}

          {/* Sauce Selector Option if Available */}
          {item.options?.sauces && (
            <div className="mb-5 bg-slate-950/60 p-3 rounded-2xl border border-white/5">
              <label className="block text-xs font-bold text-amber-400 mb-1.5">
                Selecciona tu Salsa Principal:
              </label>
              <select
                value={selectedSauce}
                onChange={(e) => setSelectedSauce(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-gray-200 font-semibold focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
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

      {/* FOOTER: PRICE + ADD TO CART + DIRECT WHATSAPP */}
      <div className="p-6 pt-0 space-y-3">
        
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
          <div>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-extrabold">Precio</span>
            <span className="text-2xl font-black text-amber-400">
              {formatPrice(item.price)}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-sm transition-all cursor-pointer shadow-md ${
              added 
                ? 'bg-emerald-500 text-slate-950' 
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
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

        {/* Direct WhatsApp Instant Order Button per Item */}
        <button
          onClick={handleDirectWhatsAppOrder}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-400 font-bold text-xs transition-all cursor-pointer hover:scale-[1.02]"
        >
          <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
          Pedir este plato directamente por WhatsApp
        </button>

      </div>

    </div>
  );
};
