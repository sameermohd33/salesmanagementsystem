import { motion } from 'motion/react';
import { Plus, Filter, SortAsc, Hammer, Drill, Paintbrush, ChevronLeft, ChevronRight, Edit2, Trash2 } from 'lucide-react';

export default function Products() {
  const products = [
    { name: 'Hammer', sku: 'SKU-2934-HM', category: 'Tools', price: '$15.99', stock: 45, progress: 45, icon: Hammer },
    { name: 'Electric Drill', sku: 'SKU-9912-ED', category: 'Power Tools', price: '$89.50', stock: 8, progress: 8, isLow: true, icon: Drill },
    { name: 'Acrylic Paint - Slate', sku: 'SKU-1022-AP', category: 'Decor', price: '$24.99', stock: 112, progress: 82, icon: Paintbrush },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">Product Management</h1>
          <p className="text-on-surface-variant font-body">Catalog and inventory control for StorePro Hardware.</p>
        </div>
        <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-2 active:scale-95 transition-all">
          <Plus size={20} />
          <span>New Product</span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-50">
          <p className="text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant mb-4">Total Inventory Value</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-semibold">$142,850.00</span>
            <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">+12%</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-50">
          <p className="text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant mb-4">Active SKUs</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-semibold">1,284</span>
            <span className="text-xs font-medium text-on-surface-variant">In 12 Categories</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-50">
          <p className="text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant mb-4">Stock Alerts</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-semibold text-error">24</span>
            <span className="text-xs font-medium text-on-surface-variant">Low inventory items</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-slate-50">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-white">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg text-sm font-medium text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">
              <Filter size={18} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg text-sm font-medium text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">
              <SortAsc size={18} />
              Sort By: Recently Added
            </button>
          </div>
          <div className="text-xs font-medium text-on-surface-variant">
            Showing 1-10 of 1,284 products
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low/50">
            <tr>
              <th className="px-8 py-4 text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant">Product Name</th>
              <th className="px-8 py-4 text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant">Category</th>
              <th className="px-8 py-4 text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant text-right">Price</th>
              <th className="px-8 py-4 text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant">Stock Level</th>
              <th className="px-8 py-4 text-[0.75rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {products.map((p, i) => (
              <motion.tr 
                key={p.sku}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:bg-primary/5 transition-colors group"
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-slate-400">
                      <p.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface text-sm">{p.name}</p>
                      <p className="text-xs text-on-surface-variant">{p.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-xs font-medium">{p.category}</span>
                </td>
                <td className="px-8 py-5 text-right font-medium text-sm">{p.price}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                      <div className={`${p.isLow ? 'bg-error' : 'bg-teal-500'} h-full rounded-full`} style={{ width: `${p.progress}%` }}></div>
                    </div>
                    <span className={`text-xs font-semibold ${p.isLow ? 'text-error' : 'text-on-surface'}`}>{p.stock} units</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-on-surface-variant hover:text-error transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        <div className="px-8 py-4 bg-surface-container-low/30 border-t border-slate-50 flex justify-between items-center">
          <button className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <ChevronLeft size={16} />
            Previous
          </button>
          <div className="flex gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface-variant text-sm font-medium cursor-pointer">2</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface-variant text-sm font-medium cursor-pointer">3</span>
          </div>
          <button className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
