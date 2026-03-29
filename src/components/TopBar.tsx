import { Search, Bell, HelpCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm flex justify-between items-center px-8 font-sans text-sm">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full group focus-within:ring-2 focus-within:ring-primary/20 rounded-xl transition-all">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
          <input
            className="w-full bg-surface-container-low border-none rounded-xl py-2 pl-10 pr-4 focus:ring-0 text-on-surface placeholder:text-slate-400 transition-all focus:bg-surface-container-lowest"
            placeholder="Search orders, stock, or insights..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 hover:text-primary transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-slate-600 hover:text-primary transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
        <div className="h-8 w-[1px] bg-slate-200"></div>
        <div className="flex items-center gap-3 pl-2 group cursor-pointer">
          <div className="text-right">
            <p className="text-xs font-bold text-on-surface leading-tight">Alex Sterling</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Store Manager</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmCa9Vfqo7A9wm0aJoK-Czj54-iSRvjVmbADTPFxWQFFvT9U9r-UlFPb9EHg3HVnWntk9hVVpbRtxq80iZnKgMh494evikyHexUdOQ8C7Bd41dSIEwGuKa0UIowECa1-0cF9GcV4-TvDck_OUaxpXsAtQ9pW8kujr_rFQ_0T7EwKjK_lzNML9eJiON6qgaIm9h8IzkFnDcHMrC5v0s9heoUra-Yjyliajp549oFhqEpkZ_bGhaht80fSlRwiTS9I348j4mHSs20Xw"
              alt="Alex Sterling"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
