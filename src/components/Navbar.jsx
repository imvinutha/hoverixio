import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MessageCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import CountryCurrencySwitcher from './CountryCurrencySwitcher';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Website Development', path: '/services/website-development' },
        { name: 'Web Application Development', path: '/services/web-app-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'MERN Stack Development', path: '/services/mern-stack-development' },
        { name: 'E-commerce Development', path: '/services/ecommerce-development' },
        { name: 'SaaS Development', path: '/services/saas-development' },
        { name: 'API Development', path: '/services/api-development' },
        { name: 'Maintenance & Support', path: '/services/maintenance-support' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Academy', path: '/academy' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Hoverixio Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Hoverixio
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <div 
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:rotate-90" />
                  
                  <div 
                    className={cn(
                      "absolute top-full left-0 mt-0.3 w-64 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300",
                      activeDropdown === item.name ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link 
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-6 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={item.path} 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location.pathname === item.path 
                      ? "text-blue-400" 
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <CountryCurrencySwitcher variant="navbar" />
          
          <Link 
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 flex items-center gap-2"
          >
            Get Started
            <MessageCircle className="w-4 h-4" />
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button 
                      className="w-full flex items-center justify-between py-3 text-slate-200 font-medium"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronRight className={cn(
                        "w-4 h-4 transition-transform",
                        activeDropdown === item.name && "rotate-90"
                      )} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1 mb-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link 
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block py-2 text-sm text-slate-400 hover:text-white transition-colors"
                            onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={cn(
                      "block py-3 text-sm font-medium transition-colors",
                      location.pathname === item.path 
                        ? "text-blue-400" 
                        : "text-slate-300 hover:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
