import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [activePage, setActivePage] = useState('philosophy');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#0d1117] overflow-hidden font-sans text-[#c9d1d9]">
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#161b22] border-b border-[#30363d] flex items-center px-4 z-20">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 -ml-2 text-[#c9d1d9] hover:bg-[#21262d] rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span className="ml-3 font-bold text-lg tracking-tight">Docs</span>
      </header>

      <Sidebar 
        activePage={activePage} 
        onNavigate={setActivePage}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <div className="flex-1 flex flex-col min-w-0 pt-16 md:pt-0">
        <ContentArea pageKey={activePage} />
      </div>

      <WhatsAppButton />
    </div>
  );
}