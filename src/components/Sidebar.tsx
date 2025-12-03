import { Link } from 'react-router-dom';
import { siteContent } from './data';

export const Sidebar = ({ activePage, isOpen, onClose }) => {
  const links = [
    { key: 'philosophy', label: 'Our Philosophy' },
    { key: 'contact', label: 'Contact Us' },
    { key: 'testimonials', label: 'Testimonials' },
    { key: 'privacy', label: 'Privacy Policy' },
    { key: 'returns', label: 'Returns and Exchanges' },
    { key: 'shipping', label: 'Shipping Policy' },
    { key: 'terms', label: 'Terms and Conditions' },
    { key: 'affiliate', label: 'Affiliate Terms' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-30
          w-64 bg-[#161b22] border-r border-[#30363d]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col
        `}
      >
        <div className="p-6 border-b border-[#30363d]">
          <h1 className="text-xl  text-[#c9d1d9] flex items-center gap-2">
            
            <span className=" text-5xl text-white tracking-wide" style={{ fontFamily: "'Brush Script MT', cursive" }}>SheetCutters</span>
          </h1>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.key}>
                <Link
                  to={`/${link.key}`}
                  onClick={onClose}
                  className={`
                    block w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                    ${activePage === link.key 
                      ? 'bg-[#1f6feb] text-white font-medium' 
                      : 'text-[#c9d1d9] hover:bg-[#21262d] hover:text-[#58a6ff]'}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#30363d] text-xs text-[#8b949e]">
          &copy; 2025 SheetCutters.
        </div>
      </aside>
    </>
  );
};
