import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  CreditCard, 
  User, 
  Tag, 
  Hammer, 
  Drill, 
  Paintbrush, 
  Wrench,
  Zap,
  Box
} from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Steel Hammer', price: 15.99, category: 'Tools', icon: Hammer, color: 'bg-orange-100 text-orange-600' },
  { id: 2, name: 'Electric Drill', price: 89.50, category: 'Power Tools', icon: Drill, color: 'bg-blue-100 text-blue-600' },
  { id: 3, name: 'Acrylic Paint', price: 24.99, category: 'Decor', icon: Paintbrush, color: 'bg-purple-100 text-purple-600' },
  { id: 4, name: 'Wrench Set', price: 35.00, category: 'Tools', icon: Wrench, color: 'bg-slate-100 text-slate-600' },
  { id: 5, name: 'LED Luminaire', price: 120.00, category: 'Electrical', icon: Zap, color: 'bg-yellow-100 text-yellow-600' },
  { id: 6, name: 'Storage Bin', price: 12.50, category: 'Storage', icon: Box, color: 'bg-teal-100 text-teal-600' },
];

export default function POS() {
  const [cart, setCart] = useState<{id: number, name: string, price: number, qty: number}[]>([]);
  const [search, setSearch] = useState('');

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-headline font-bold text-on-surface">POS Terminal</h1>
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface-container-lowest border-none rounded-xl py-2.5 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2 no-scrollbar">
          {PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
            <motion.button
              key={product.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addToCart(product)}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-50 text-left flex flex-col gap-4 group transition-all hover:shadow-md"
            >
              <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center`}>
                <product.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-on-surface">{product.name}</h3>
                <p className="text-xs text-on-surface-variant font-medium">{product.category}</p>
              </div>
              <div className="flex justify-between items-end mt-2">
                <span className="text-lg font-headline font-bold text-primary">${product.price.toFixed(2)}</span>
                <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={18} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="w-96 bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col overflow-hidden border border-slate-50">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-primary" size={20} />
            <h2 className="font-headline font-bold text-lg">Cart Summary</h2>
          </div>
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-bold">{cart.length} Items</span>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4 opacity-50">
              <ShoppingCart size={48} />
              <p className="font-medium">Cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center group"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-on-surface">{item.name}</h4>
                  <p className="text-xs text-on-surface-variant">${item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-surface-container-low rounded-lg p-1">
                    <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:bg-white rounded-md transition-colors"><Minus size={14} /></button>
                    <span className="w-8 text-center text-xs font-bold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:bg-white rounded-md transition-colors"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-slate-300 hover:text-error transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <div className="p-6 bg-surface-container-low/50 space-y-4 border-t border-slate-100">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-on-surface-variant font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-on-surface-variant font-medium">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-headline font-bold text-on-surface pt-2 border-t border-slate-200">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-all group">
              <User className="text-slate-400 group-hover:text-primary" size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Customer</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-all group">
              <Tag className="text-slate-400 group-hover:text-primary" size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Discount</span>
            </button>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
            <CreditCard size={20} />
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}
