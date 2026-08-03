import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, MapPin, Check } from 'lucide-react';
import { COUNTRY_LIST, usePricing } from '../utils/pricingContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const CountryCurrencySwitcher = ({ variant = 'navbar' }) => {
  const { country, countryCode, selectCountry, detected } = usePricing();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isSmall = variant === 'navbar';

  return (
    <div ref={dropdownRef} className="relative z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "group flex items-center gap-2 rounded-full transition-all hover:scale-[1.02]",
          isSmall
            ? "px-3 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
            : "px-5 py-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 hover:border-orange-500/50"
        )}
      >
        <span className="text-xl leading-none">{country.flag}</span>
        <div className={cn("hidden sm:flex flex-col items-start leading-tight text-left", !isSmall && "!flex")}>
          <span className={cn(
            "text-white font-bold",
            isSmall ? "text-xs" : "text-sm"
          )}>
            {country.currencySymbol} {country.currency}
          </span>
          <span className={cn(
            "text-slate-400",
            isSmall ? "text-[10px]" : "text-xs"
          )}>
            {country.name}
          </span>
        </div>
        <ChevronDown className={cn(
          "w-4 h-4 text-slate-400 group-hover:text-white transition-all",
          open && "rotate-180"
        )} />
      </button>

      {open && (
        <div className={cn(
          "mt-3 rounded-2xl overflow-hidden border backdrop-blur-xl shadow-2xl animate-[fadeIn_0.15s_ease-out]",
          isSmall
            ? "absolute right-0 w-72 bg-slate-900/95 border-white/10"
            : "w-full max-w-sm mx-auto bg-slate-900/95 border-white/10"
        )}>
          <div className="px-4 py-3 border-b border-white/10 bg-white/[0.03]">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <Globe className="w-4 h-4 text-orange-400" />
              Select Country & Currency
            </div>
            {detected && (
              <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                <MapPin className="w-3 h-3" />
                <span>We auto-detected your location</span>
              </div>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto p-2">
            {COUNTRY_LIST.map((c) => {
              const active = c.code === countryCode;
              return (
                <button
                  key={c.code}
                  onClick={() => {
                    selectCountry(c.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 text-left transition-all",
                    active
                      ? "bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/40"
                      : "hover:bg-white/5 border border-transparent"
                  )}
                >
                  <span className="text-2xl leading-none flex-shrink-0">{c.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className={cn(
                      "font-bold text-sm truncate",
                      active ? "text-orange-300" : "text-white"
                    )}>
                      {c.name}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span className="font-mono">{c.currency}</span>
                      <span>·</span>
                      <span>{c.currencySymbol} {c.currencySymbol === '₹' ? 'Rupee' : c.currencySymbol === '€' ? 'Euro' : c.currencySymbol === '$' ? 'Dollar' : c.currencySymbol === 'د.إ' ? 'Dirham' : c.currencySymbol === 'RM' ? 'Ringgit' : 'Dollar'}</span>
                    </div>
                  </div>
                  <Check className={cn(
                    "w-4 h-4 flex-shrink-0",
                    active ? "text-orange-400" : "opacity-0"
                  )} />
                </button>
              );
            })}
          </div>

          <div className="px-4 py-3 border-t border-white/10 bg-gradient-to-r from-orange-500/5 to-pink-500/5">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              💡 Prices are adjusted for your region. VAT & taxes applicable as per local regulations.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCurrencySwitcher;
