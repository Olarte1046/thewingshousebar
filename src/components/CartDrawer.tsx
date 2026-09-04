import React, { useState } from 'react';
import type { MenuItem } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/menuData';
import { X, Plus, Minus, ShoppingBag, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedSauce?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number, sauce?: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    let message = `*¡HOLA! QUIERO HACER UN PEDIDO EN THE WING'S HOUSE* 🍗🔥\n\n`;

    if (customerName) {
      message += `👤 *Cliente:* ${customerName}\n`;
    }
    if (deliveryAddress) {
      message += `📍 *Dirección/Mesa:* ${deliveryAddress}\n`;
    }

    message += `\n*DETALLE DEL PEDIDO:*\n`;

    cartItems.forEach((ci, idx) => {
      message += `${idx + 1}. *${ci.quantity}x ${ci.item.name}*`;
      if (ci.selectedSauce) {
        message += ` (Salsa: ${ci.selectedSauce})`;
      }
      message += ` - ${formatPrice(ci.item.price * ci.quantity)}\n`;
    });

    message += `\n💰 *TOTAL:* ${formatPrice(totalAmount)}\n`;

    if (orderNotes) {
      message += `\n📝 *Notas adicionales:* ${orderNotes}\n`;
    }

    message += `\n¡Quedo atento a la confirmación de mi pedido! Gracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappFormatted}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex justify-end transition-opacity">
      <div className="w-full max-w-md bg-[#0d0f12] border-l border-white/10 h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase">Tu Pedido</h3>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Directo por WhatsApp
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-800/80 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          {cartItems.length === 0 ? (
            <div className="py-16 text-center text-gray-400 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-gray-600 stroke-[1.5]" />
              <p className="text-lg font-extrabold text-white">Tu pedido está vacío</p>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Explora el menú y agrega tus alitas o hamburguesas favoritas.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-1 scrollbar-none">
              {cartItems.map((ci, index) => (
                <div 
                  key={`${ci.item.id}-${ci.selectedSauce || ''}-${index}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-white/5 shadow-md"
                >
                  <div className="flex-1 pr-3">
                    <h4 className="text-sm font-black text-white leading-tight">
                      {ci.item.name}
                    </h4>
                    {ci.selectedSauce && (
                      <span className="text-[11px] text-amber-400 block font-bold mt-0.5">
                        Salsa: {ci.selectedSauce}
                      </span>
                    )}
                    <span className="text-xs text-amber-400 font-extrabold mt-1 block">
                      {formatPrice(ci.item.price * ci.quantity)}
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-slate-950 px-2.5 py-1.5 rounded-xl border border-slate-800">
                    <button 
                      onClick={() => onUpdateQuantity(ci.item.id, -1, ci.selectedSauce)}
                      className="text-gray-400 hover:text-white p-1 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-black text-white w-4 text-center">
                      {ci.quantity}
                    </span>
                    <button 
                      onClick={() => onUpdateQuantity(ci.item.id, 1, ci.selectedSauce)}
                      className="text-gray-400 hover:text-white p-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Customer Form & Checkout */}
        {cartItems.length > 0 && (
          <div className="pt-6 border-t border-white/10 space-y-4 mt-6">
            
            <div className="space-y-3">
              <label className="block text-xs font-extrabold text-gray-300 uppercase tracking-wider">
                Datos de Envío o Mesa:
              </label>
              <input 
                type="text" 
                placeholder="Tu Nombre completo" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-500"
              />
              <input 
                type="text" 
                placeholder="Dirección exacta o N° de Mesa en el local" 
                value={deliveryAddress} 
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-500"
              />
              <textarea 
                placeholder="Notas especiales (Ej. salsas aparte, sin verduras...)" 
                value={orderNotes} 
                onChange={(e) => setOrderNotes(e.target.value)}
                rows={2}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            {/* Total display */}
            <div className="flex items-center justify-between py-3 border-t border-b border-white/10">
              <span className="text-sm font-bold text-gray-300">Total a Pagar:</span>
              <span className="text-2xl font-black text-amber-400">{formatPrice(totalAmount)}</span>
            </div>

            {/* Submit via WhatsApp Button */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition-all cursor-pointer hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950/20" />
              Enviar Pedido por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
