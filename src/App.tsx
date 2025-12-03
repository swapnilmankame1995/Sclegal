import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { WhatsAppButton } from './components/WhatsAppButton';

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Extract the current page from the URL path
  const currentPage = location.pathname.slice(1) || 'philosophy';

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
        activePage={currentPage}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <div className="flex-1 flex flex-col min-w-0 pt-16 md:pt-0">
        <Routes>
          <Route path="/" element={<Navigate to="/philosophy" replace />} />
          <Route path="/philosophy" element={<ContentArea pageKey="philosophy" />} />
          <Route path="/contact" element={<ContentArea pageKey="contact" />} />
          <Route path="/testimonials" element={<ContentArea pageKey="testimonials" />} />
          <Route path="/privacy" element={<ContentArea pageKey="privacy" />} />
          <Route path="/returns" element={<ContentArea pageKey="returns" />} />
          <Route path="/shipping" element={<ContentArea pageKey="shipping" />} />
          <Route path="/terms" element={<ContentArea pageKey="terms" />} />
          <Route path="/affiliate" element={<ContentArea pageKey="affiliate" />} />
        </Routes>
      </div>

      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}