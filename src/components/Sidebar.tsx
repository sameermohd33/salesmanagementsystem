import { 
  LayoutDashboard, 
  Package, 
  Warehouse, 
  BarChart3, 
  Settings, 
  LogOut,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'stock', label: 'Stock', icon: Warehouse },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 dark:bg-slate-900 flex flex-col p-4 gap-2 z-50 font-headline antialiased">
      <div className="mb-8 px-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white shadow-lg">
          <Terminal size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Hardware Suite</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Admin Terminal</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-default transition-all duration-200 group relative ${
              activeTab === item.id
                ? 'bg-primary text-white shadow-md'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/50'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
            {activeTab === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary rounded-default -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
        <button 
          onClick={() => setActiveTab('login')}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-error transition-colors hover:bg-error-container/20 rounded-default"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
