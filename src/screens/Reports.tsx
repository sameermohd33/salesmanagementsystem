import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  Calendar, 
  Download, 
  MoreVertical, 
  Lightbulb,
  Printer,
  Share2
} from 'lucide-react';

export default function Reports() {
  const stats = [
    { title: 'Total Revenue', value: '$142,850.00', change: '+12.4%', icon: DollarSign, trend: 'up' },
    { title: 'Orders Fulfilled', value: '1,284', change: '+8.1%', icon: ShoppingCart, trend: 'up' },
    { title: 'Profit Margin', value: '32.8%', change: '-2.4%', icon: TrendingUp, trend: 'down' },
    { title: 'New Customers', value: '452', change: '+18.2%', icon: Users, trend: 'up' },
  ];

  const topProducts = [
    { name: 'Titan-X Cordless Drill Kit', category: 'Power Tools', sold: '842 Units', revenue: '$25,260.00', status: 'In Stock', img: 'https://picsum.photos/seed/drill/100/100' },
    { name: 'Structural Steel Pipe (3m)', category: 'Construction', sold: '612 Units', revenue: '$18,360.00', status: 'Low Stock', img: 'https://picsum.photos/seed/pipe/100/100' },
    { name: 'Luminaire Industrial LED', category: 'Electrical', sold: '520 Units', revenue: '$41,600.00', status: 'In Stock', img: 'https://picsum.photos/seed/led/100/100' },
  ];

  return (
    <div className="space-y-8 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[2rem] font-headline font-semibold tracking-tight text-on-surface leading-tight">Analytics & Reports</h1>
          <p className="text-on-surface-variant mt-1">Real-time performance metrics for your hardware inventory.</p>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-lowest p-1.5 rounded-xl shadow-sm">
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-surface-container-low rounded-lg transition-colors">Today</button>
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-surface-container-low rounded-lg transition-colors">7 Days</button>
          <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg shadow-md">Last 30 Days</button>
          <div className="px-3 py-2 flex items-center gap-2 border-l border-slate-100 ml-1">
            <Calendar className="text-slate-400" size={18} />
            <span className="text-sm font-medium text-slate-700">Oct 01 - Oct 31, 2023</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl shadow-sm relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <stat.icon size={20} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'text-teal-600 bg-teal-50' : 'text-error bg-error-container/30'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-[0.75rem] font-medium text-slate-500 uppercase tracking-wider">{stat.title}</p>
            <p className="text-2xl font-bold tracking-tight mt-1 text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Sales Growth</h3>
              <p className="text-sm text-on-surface-variant">Revenue performance over the last 30 days</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-container-low rounded-lg"><Download className="text-slate-400" size={20} /></button>
              <button className="p-2 hover:bg-surface-container-low rounded-lg"><MoreVertical className="text-slate-400" size={20} /></button>
            </div>
          </div>
          
          <div className="h-80 w-full relative">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(37, 99, 235, 0.1)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(37, 99, 235, 0)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M0,250 Q100,200 200,220 T400,150 T600,180 T800,80 T1000,100 L1000,300 L0,300 Z" fill="url(#gradient)" />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,250 Q100,200 200,220 T400,150 T600,180 T800,80 T1000,100" 
                fill="none" 
                stroke="#2563EB" 
                strokeLinecap="round" 
                strokeWidth="3" 
              />
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50" />
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="125" y2="125" />
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="200" y2="200" />
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="275" y2="275" />
            </svg>
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-slate-400 font-medium px-2 pt-4 border-t border-slate-100">
              <span>01 OCT</span>
              <span>07 OCT</span>
              <span>14 OCT</span>
              <span>21 OCT</span>
              <span>28 OCT</span>
              <span>31 OCT</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-on-surface mb-2">Monthly Profit</h3>
          <p className="text-sm text-on-surface-variant mb-8">Net profit versus previous period</p>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-500">Current Month</span>
                <span className="text-slate-900">$48,200</span>
              </div>
              <div className="h-3 bg-surface-container-low rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-primary rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-500">Last Month</span>
                <span className="text-slate-900">$42,150</span>
              </div>
              <div className="h-3 bg-surface-container-low rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} className="h-full bg-slate-300 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-500">Target</span>
                <span className="text-slate-900">$55,000</span>
              </div>
              <div className="h-3 bg-surface-container-low rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} className="h-full bg-primary/20 rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="mt-10 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-blue-600 shrink-0" size={20} />
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-tight">Strategy Note</p>
                <p className="text-xs text-blue-800/80 mt-1 leading-relaxed">Profits are up 14% this month due to optimized supply chain costs in the electrical department.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Top Selling Products</h3>
              <p className="text-sm text-on-surface-variant">Top performers by volume and revenue generated</p>
            </div>
            <button className="text-primary font-semibold text-sm hover:underline">View All Products</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4 -mt-4">
              <thead>
                <tr className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">
                  <th className="pb-2 px-4">Product Name</th>
                  <th className="pb-2 px-4">Category</th>
                  <th className="pb-2 px-4">Units Sold</th>
                  <th className="pb-2 px-4">Revenue</th>
                  <th className="pb-2 px-4">Inventory Status</th>
                  <th className="pb-2 px-4">Trend</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {topProducts.map((p, i) => (
                  <motion.tr 
                    key={p.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-4 px-4 bg-white first:rounded-l-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                          <img src={p.img} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="font-semibold text-slate-900">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 bg-white">{p.category}</td>
                    <td className="py-4 px-4 bg-white font-medium">{p.sold}</td>
                    <td className="py-4 px-4 bg-white font-bold">{p.revenue}</td>
                    <td className="py-4 px-4 bg-white">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${p.status === 'In Stock' ? 'bg-teal-50 text-teal-700' : 'bg-orange-50 text-orange-700'}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 bg-white last:rounded-r-xl">
                      <TrendingUp className="text-teal-500" size={18} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 pb-12">
        <button className="px-6 py-3 bg-surface-container-high text-on-surface font-semibold rounded-xl hover:bg-surface-container-highest transition-colors flex items-center gap-2">
          <Printer size={18} />
          Print Full Report
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white font-semibold rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center gap-2">
          <Share2 size={18} />
          Export to Stakeholders
        </button>
      </div>
    </div>
  );
}
