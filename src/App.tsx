/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './screens/Dashboard';
import Products from './screens/Products';
import Reports from './screens/Reports';
import Login from './screens/Login';
import POS from './screens/POS';
import Staff from './screens/Staff';

export default function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('login');
  };

  if (!isLoggedIn || activeTab === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar activeTab={activeTab} setActiveTab={(tab) => tab === 'login' ? handleLogout() : setActiveTab(tab)} />
      
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <TopBar />
        
        <div className="mt-16 p-8 flex-1 overflow-y-auto no-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {activeTab === 'dashboard' && <Dashboard />}
              {activeTab === 'products' && <Products />}
              {activeTab === 'reports' && <Reports />}
              {activeTab === 'stock' && <POS />}
              {activeTab === 'settings' && <Staff />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
