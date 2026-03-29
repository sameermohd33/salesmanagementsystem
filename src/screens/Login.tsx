import { motion } from 'motion/react';
import { User, Lock, ChevronDown, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-12 relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl mb-4">
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">StorePro</h1>
        <p className="text-on-surface-variant font-medium mt-1">Sales Management System</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-md bg-surface-container-lowest p-10 rounded-xl ambient-shadow relative z-10"
      >
        <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">Welcome back</h2>
        <p className="text-on-surface-variant text-sm mb-8">Please enter your details to sign in</p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Username</label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full bg-surface-container-low border-none rounded-default py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Password</label>
              <button type="button" className="text-[10px] font-bold text-primary hover:underline">Forgot?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface-container-low border-none rounded-default py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Access Role</label>
            <div className="relative group">
              <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
              <select className="w-full bg-surface-container-low border-none rounded-default py-3 pl-10 pr-10 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer">
                <option>Staff</option>
                <option>Manager</option>
                <option>Administrator</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="remember" className="rounded border-slate-200 text-primary focus:ring-primary/20" />
            <label htmlFor="remember" className="text-xs text-on-surface-variant font-medium cursor-pointer">Remember this device</label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all"
          >
            Login to Terminal
          </button>
        </form>
      </motion.div>

      <div className="mt-12 flex gap-12 text-center relative z-10">
        <div>
          <p className="text-2xl font-headline font-bold text-on-surface">2.4k+</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Active Users</p>
        </div>
        <div className="w-px h-10 bg-slate-200" />
        <div>
          <p className="text-2xl font-headline font-bold text-on-surface">99.9%</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Uptime</p>
        </div>
      </div>

      <p className="mt-8 text-[10px] text-slate-400 text-center max-w-xs leading-relaxed relative z-10">
        Authorized access only. By logging in, you agree to our <button className="text-slate-600 font-bold hover:underline">Security Policy</button>.
      </p>
    </div>
  );
}
