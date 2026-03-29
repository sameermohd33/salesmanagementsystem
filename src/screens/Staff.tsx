import { motion } from 'motion/react';
import { 
  User, 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  FileText,
  Star,
  CheckCircle2
} from 'lucide-react';

export default function Staff() {
  const performance = [
    { label: 'Sales Target', value: '82%', color: 'bg-primary' },
    { label: 'Customer Rating', value: '4.8/5', color: 'bg-teal-500' },
    { label: 'Attendance', value: '98%', color: 'bg-blue-500' },
  ];

  const recentInvoices = [
    { id: '#INV-2934', time: '10 mins ago', amount: '$142.00', status: 'Paid' },
    { id: '#INV-2933', time: '45 mins ago', amount: '$89.50', status: 'Paid' },
    { id: '#INV-2932', time: '2 hours ago', amount: '$1,240.00', status: 'Paid' },
    { id: '#INV-2931', time: '3 hours ago', amount: '$45.00', status: 'Paid' },
    { id: '#INV-2930', time: 'Yesterday', amount: '$582.00', status: 'Paid' },
  ];

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmCa9Vfqo7A9wm0aJoK-Czj54-iSRvjVmbADTPFxWQFFvT9U9r-UlFPb9EHg3HVnWntk9hVVpbRtxq80iZnKgMh494evikyHexUdOQ8C7Bd41dSIEwGuKa0UIowECa1-0cF9GcV4-TvDck_OUaxpXsAtQ9pW8kujr_rFQ_0T7EwKjK_lzNML9eJiON6qgaIm9h8IzkFnDcHMrC5v0s9heoUra-Yjyliajp549oFhqEpkZ_bGhaht80fSlRwiTS9I348j4mHSs20Xw" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-3xl font-headline font-bold text-on-surface">Welcome back, Alex</h1>
            <p className="text-on-surface-variant font-medium">Store Associate • Terminal #04</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Shift Ends In</p>
          <p className="text-2xl font-headline font-bold text-primary">02:45:12</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-slate-50">
          <h2 className="text-xl font-headline font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="text-primary" size={20} />
            Your Performance
          </h2>
          <div className="space-y-8">
            {performance.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-500 uppercase tracking-wider">{item.label}</span>
                  <span className="text-on-surface">{item.value}</span>
                </div>
                <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: item.value.includes('%') ? item.value : '90%' }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-teal-50 rounded-xl border border-teal-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="text-teal-600" size={20} />
              <p className="text-sm font-bold text-teal-900">Top Performer Badge Earned!</p>
            </div>
            <button className="text-xs font-bold text-teal-700 hover:underline">View Rewards</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-error p-6 rounded-2xl text-white shadow-lg shadow-error/20 relative overflow-hidden">
            <AlertTriangle className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Inventory Alert</p>
              <h3 className="text-xl font-bold mt-2">Low Stock: Impact Drivers</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">Only 4 units remaining in Aisle 4. Restock requested.</p>
              <button className="mt-6 w-full py-3 bg-white text-error font-bold rounded-xl text-sm hover:bg-opacity-90 transition-all">
                Acknowledge Alert
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-50">
            <h3 className="font-bold text-on-surface mb-4 flex items-center gap-2">
              <Clock className="text-primary" size={18} />
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Sale Completed</p>
                  <p className="text-[10px] text-slate-400">#INV-2934 • $142.00</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Package size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Inventory Updated</p>
                  <p className="text-[10px] text-slate-400">Hammer SKU-2934-HM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-slate-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-headline font-bold flex items-center gap-2">
            <FileText className="text-primary" size={20} />
            Last 5 Invoices
          </h2>
          <button className="text-primary font-bold text-sm hover:underline">View All History</button>
        </div>
        <div className="space-y-4">
          {recentInvoices.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-bold text-on-surface">{inv.id}</p>
                  <p className="text-xs text-slate-400">{inv.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <p className="font-bold text-on-surface">{inv.amount}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-[10px] font-bold uppercase tracking-wider">{inv.status}</span>
                  <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
