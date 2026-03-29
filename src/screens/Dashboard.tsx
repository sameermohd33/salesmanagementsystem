import { motion } from 'motion/react';
import { Plus, CreditCard, Package, AlertTriangle, TrendingUp, ArrowRight, MoreHorizontal } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Sales', value: '$45,231', change: '+12.5%', icon: CreditCard, color: 'text-primary', bg: 'bg-primary/10' },
    { title: 'Total Products', value: '1,240', change: 'Static', icon: Package, color: 'text-secondary', bg: 'bg-secondary/10' },
    { title: 'Low Stock', value: '12 Items', change: 'Critical', icon: AlertTriangle, color: 'text-error', bg: 'bg-error/10', isCritical: true },
    { title: 'Monthly Profit', value: '$8,940', change: '+8.2%', icon: TrendingUp, color: 'text-teal-600', bg: 'bg-teal-50' },
  ];

  const transactions = [
    { id: '#TRX-8821', date: 'Oct 24, 2023 • 14:22', amount: '$1,420.00', status: 'Completed', statusColor: 'bg-teal-50 text-teal-700' },
    { id: '#TRX-8820', date: 'Oct 24, 2023 • 13:45', amount: '$582.00', status: 'Processing', statusColor: 'bg-blue-50 text-blue-700' },
    { id: '#TRX-8819', date: 'Oct 24, 2023 • 12:10', amount: '$2,100.00', status: 'Completed', statusColor: 'bg-teal-50 text-teal-700' },
    { id: '#TRX-8818', date: 'Oct 23, 2023 • 18:05', amount: '$95.00', status: 'Cancelled', statusColor: 'bg-error-container/40 text-error' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Dashboard Overview</h1>
          <p className="text-on-surface-variant mt-1">Real-time performance metrics for <span className="text-primary font-semibold italic">Hardware Suite</span> terminal.</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-semibold shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2 active:scale-95">
          <Plus size={18} />
          New Sale
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow border border-slate-50 group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 ${stat.bg} rounded-lg ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                stat.isCritical ? 'bg-error-container/30 text-error' : 
                stat.change === 'Static' ? 'bg-slate-50 text-slate-400' : 'bg-teal-50 text-teal-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-[10px] uppercase tracking-[0.05em] text-slate-500 font-bold">{stat.title}</h3>
            <p className="font-headline text-2xl font-bold mt-1 text-on-surface">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-[1.5rem] ambient-shadow">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-headline text-xl font-bold">Sales Performance</h2>
              <p className="text-sm text-slate-500">Revenue trajectory for the current quarter</p>
            </div>
            <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
              <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-md text-primary">Weekly</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-500">Monthly</button>
            </div>
          </div>
          
          <div className="h-[300px] w-full flex items-end justify-between gap-4 pt-4">
            {[60, 45, 80, 65, 95, 40, 30].map((height, i) => (
              <div key={i} className="flex flex-col items-center gap-3 w-full">
                <div className="w-full bg-primary/5 rounded-t-lg relative group h-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className={`absolute bottom-0 w-full rounded-t-lg transition-all ${i % 2 === 0 ? 'bg-primary-container' : 'bg-primary'}`} 
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 rounded-[1.5rem] text-white relative overflow-hidden flex flex-col justify-between min-h-[420px] shadow-xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
          <div className="relative z-10">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase">Performance Leader</span>
            <h2 className="text-3xl font-headline font-extrabold mt-6 leading-tight">High-Torque <br/>Impact Driver</h2>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">Generated $12,400 in revenue this week. 15% increase in purchase frequency across industrial segments.</p>
          </div>
          <div className="relative z-10">
            <div className="h-24 w-full bg-white/10 rounded-xl mb-6 flex items-center justify-center border border-white/10 overflow-hidden">
              <img 
                className="h-full object-contain mix-blend-screen opacity-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7MQGItDqeiiKmIJVmYs4u14ZzjTtrd_lCFtWF4pDJUzcsljK_5vl06d5dbe-MJN_DD_pcbseXYhR55b39nome4Q-fGIAEowi6KzXb4TRnL5hX65I9zbw5qGVClyUsR5v7gSlJO4xuPI0GppgilmTh1QIZUSSw47sa7VWrQ-AdnysCijl0GpDvHovgoun8OjDFbD_d19LPducklzD2HpnJZLnCJWGa77eYavJlui5THKJfHCSv2T4iyA7CuazqoqirspmGwXVcXFhQ"
                alt="Impact Driver"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="w-full py-4 bg-white text-primary font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
              View Product Detail
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <section className="bg-surface-container-lowest rounded-[1.5rem] ambient-shadow p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-headline text-xl font-bold">Recent Transactions</h2>
            <p className="text-sm text-slate-500">Last 24 hours of sales activity</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline underline-offset-4 decoration-2">See All Transactions</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant">
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] rounded-l-xl">Order ID</th>
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Date</th>
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Amount</th>
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Status</th>
                <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] rounded-r-xl">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-transparent">
              {transactions.map((trx) => (
                <tr key={trx.id} className="group hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-5 font-bold text-on-surface">{trx.id}</td>
                  <td className="px-6 py-5 text-slate-600 text-sm">{trx.date}</td>
                  <td className="px-6 py-5 font-bold text-on-surface">{trx.amount}</td>
                  <td className="px-6 py-5">
                    <span className={`${trx.statusColor} px-3 py-1 rounded-full text-xs font-medium`}>{trx.status}</span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
