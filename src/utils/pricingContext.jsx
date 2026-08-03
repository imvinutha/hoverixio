import React, { createContext, useContext, useState, useEffect } from 'react';

export const COUNTRIES = {
  IN: {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    currency: 'INR',
    currencySymbol: '₹',
    language: 'en',
    vatRate: 0.18,
    label: 'India (₹ INR)',
  },
  DE: {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    currency: 'EUR',
    currencySymbol: '€',
    language: 'de',
    vatRate: 0.19,
    label: 'Germany (€ EUR)',
  },
  US: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    language: 'en',
    vatRate: 0,
    label: 'United States ($ USD)',
  },
  AE: {
    code: 'AE',
    name: 'UAE (Dubai)',
    flag: '🇦🇪',
    currency: 'AED',
    currencySymbol: 'د.إ',
    language: 'en',
    vatRate: 0.05,
    label: 'UAE / Dubai (د.إ AED)',
  },
  MY: {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    currency: 'MYR',
    currencySymbol: 'RM',
    language: 'en',
    vatRate: 0.08,
    label: 'Malaysia (RM MYR)',
  },
  SG: {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    currency: 'SGD',
    currencySymbol: 'S$',
    language: 'en',
    vatRate: 0.09,
    label: 'Singapore (S$ SGD)',
  },
};

export const COUNTRY_LIST = Object.values(COUNTRIES);

const IN_PRICES = {
  'Starter Website': 9999,
  'Business Website': 19999,
  'Premium Website': 34999,
  'E-commerce Store': 49999,
  'Mobile App': 79999,
  'MERN Stack Training': 20000,
  'Full Stack Development Course': 25000,
  'Ethical Hacking & Cybersecurity': 18000,
};

const PRICE_MATRIX = {
  IN: IN_PRICES,
  DE: {
    'Starter Website': 499,
    'Business Website': 999,
    'Premium Website': 1799,
    'E-commerce Store': 2499,
    'Mobile App': 3999,
    'MERN Stack Training': 899,
    'Full Stack Development Course': 1199,
    'Ethical Hacking & Cybersecurity': 799,
  },
  US: {
    'Starter Website': 549,
    'Business Website': 1099,
    'Premium Website': 1999,
    'E-commerce Store': 2799,
    'Mobile App': 4499,
    'MERN Stack Training': 999,
    'Full Stack Development Course': 1299,
    'Ethical Hacking & Cybersecurity': 899,
  },
  AE: {
    'Starter Website': 1999,
    'Business Website': 3999,
    'Premium Website': 6999,
    'E-commerce Store': 9999,
    'Mobile App': 15999,
    'MERN Stack Training': 3499,
    'Full Stack Development Course': 4499,
    'Ethical Hacking & Cybersecurity': 2999,
  },
  MY: {
    'Starter Website': 2499,
    'Business Website': 4999,
    'Premium Website': 8499,
    'E-commerce Store': 12499,
    'Mobile App': 19999,
    'MERN Stack Training': 4499,
    'Full Stack Development Course': 5499,
    'Ethical Hacking & Cybersecurity': 3999,
  },
  SG: {
    'Starter Website': 749,
    'Business Website': 1499,
    'Premium Website': 2599,
    'E-commerce Store': 3699,
    'Mobile App': 5999,
    'MERN Stack Training': 1399,
    'Full Stack Development Course': 1799,
    'Ethical Hacking & Cybersecurity': 1199,
  },
};

const EXCHANGE_RATES_TO_USD = {
  INR: 84.5,
  EUR: 0.92,
  USD: 1,
  AED: 3.67,
  MYR: 4.7,
  SGD: 1.34,
};

export function formatPrice(amount, countryCode) {
  const country = COUNTRIES[countryCode] || COUNTRIES.IN;
  const { currency, currencySymbol } = country;

  const formatter = new Intl.NumberFormat(
    country.code === 'IN' ? 'en-IN' : 'en-US',
    {
      style: 'currency',
      currency,
      currencyDisplay: 'symbol',
      maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }
  );

  try {
    return formatter.format(amount);
  } catch {
    return `${currencySymbol}${amount.toLocaleString()}`;
  }
}

export function getServicePrice(serviceName, countryCode) {
  const prices = PRICE_MATRIX[countryCode] || PRICE_MATRIX.IN;
  if (prices[serviceName] !== undefined) {
    return prices[serviceName];
  }
  return null;
}

export function convertAndFormatPriceINR(inrAmount, countryCode) {
  if (countryCode === 'IN') return formatPrice(inrAmount, 'IN');
  const targetCountry = COUNTRIES[countryCode] || COUNTRIES.IN;
  const usdAmount = inrAmount / EXCHANGE_RATES_TO_USD.INR;
  const targetAmount = usdAmount * EXCHANGE_RATES_TO_USD[targetCountry.currency];
  return formatPrice(Math.round(targetAmount), countryCode);
}

export function detectCountry() {
  return new Promise((resolve) => {
    const stored = localStorage.getItem('hoverixio_country');
    if (stored && COUNTRIES[stored]) {
      resolve(stored);
      return;
    }

    const fallback = () => {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz.includes('Berlin') || tz.includes('Europe/Berlin')) resolve('DE');
      else if (tz.includes('New_York') || tz.includes('America/') && !tz.includes('Argentina') && !tz.includes('Sao')) resolve('US');
      else if (tz.includes('Dubai')) resolve('AE');
      else if (tz.includes('Kuala_Lumpur')) resolve('MY');
      else if (tz.includes('Singapore')) resolve('SG');
      else resolve('IN');
    };

    fetch('https://ipapi.co/json/')
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data && data.country && COUNTRIES[data.country]) {
          resolve(data.country);
        } else {
          fallback();
        }
      })
      .catch(() => fallback());
  });
}

const PricingContext = createContext(null);

export function PricingProvider({ children }) {
  const [countryCode, setCountryCode] = useState('IN');
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    detectCountry().then((code) => {
      setCountryCode(code);
      setDetected(true);
      if (!localStorage.getItem('hoverixio_country')) {
        localStorage.setItem('hoverixio_country', code);
      }
    });
  }, []);

  const selectCountry = (code) => {
    setCountryCode(code);
    localStorage.setItem('hoverixio_country', code);
  };

  const country = COUNTRIES[countryCode] || COUNTRIES.IN;

  const value = {
    countryCode,
    country,
    detected,
    selectCountry,
    formatPrice: (amt) => formatPrice(amt, countryCode),
    getServicePrice: (name) => {
      const base = getServicePrice(name, countryCode);
      if (base === null) return 'Custom';
      return formatPrice(base, countryCode);
    },
    getServiceRawPrice: (name) => getServicePrice(name, countryCode),
  };

  return (
    <PricingContext.Provider value={value}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const ctx = useContext(PricingContext);
  if (!ctx) {
    throw new Error('usePricing must be used within PricingProvider');
  }
  return ctx;
}

export { PRICE_MATRIX };
