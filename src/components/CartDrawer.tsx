import React, { useState } from 'react';
import type { MenuItem } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/menuData';
import { X, Plus, Minus, Send, ShoppingBag } from 'lucide-react';
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
      particleCount: 80,
      spread: 70,
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
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex justify-end">
      <div className="w-full max-w-md bg-slate-900 border-l border-white/10 h-full flex flex-col justify-between p-6 shadow-2xl">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-black text-white uppercase">Tu Pedido</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          {cartItems.length === 0 ? (
            <div className="py-12 text-center text-gray-400">
              <p className="text-base font-medium">Tu carrito está vacío.</p>
              <p className="text-xs text-gray-500 mt-1">
                Agrega deliciosas alitas o hamburguesas desde el menú.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-1">
              {cartItems.map((ci, index) => (
                <div 
                  key={`${ci.item.id}-${ci.selectedSauce || ''}-${index}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-white/5"
                >
                  <div className="flex-1 pr-2">
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {ci.item.name}
                    </h4>
                    {ci.selectedSauce && (
                      <span className="text-[11px] text-amber-400 block font-medium">
                        Salsa: {ci.selectedSauce}
                      </span>
                    )}
                    <span className="text-xs text-amber-500 font-extrabold mt-1 block">
                      {formatPrice(ci.item.price * ci.quantity)}
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-slate-900 px-2 py-1 rounded-lg border border-slate-700">
                    <button 
                      onClick={() => onUpdateQuantity(ci.item.id, -1, ci.selectedSauce)}
                      className="text-gray-400 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-white w-4 text-center">
                      {ci.quantity}
                    </span>
                    <button 
                      onClick={() => onUpdateQuantity(ci.item.id, 1, ci.selectedSauce)}
                      className="text-gray-400 hover:text-white"
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
          <div className="pt-4 border-t border-white/10 space-y-4">
            
            <div className="space-y-2">
              <input 
                type="text" 
                placeholder="Tu Nombre (Opcional)" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-amber-500"
              />
              <input 
                type="text" 
                placeholder="Dirección de envío o número de Mesa" 
                value={deliveryAddress} 
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-amber-500"
              />
              <textarea 
                placeholder="Notas adicionales (Ej. sin cebolla, salsa aparte...)" 
                value={orderNotes} 
                onChange={(e) => setOrderNotes(e.target.value)}
                rows={2}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            {/* Total display */}
            <div className="flex items-center justify-between py-2 border-t border-b border-white/10">
              <span className="text-sm font-bold text-gray-300">Total Pedido:</span>
              <span className="text-2xl font-black text-amber-400">{formatPrice(totalAmount)}</span>
            </div>

            {/* Submit via WhatsApp Button */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Enviar Pedido por WhatsApp
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
