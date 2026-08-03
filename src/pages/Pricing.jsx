import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, Gift, Sparkles, Zap, MapPin, Globe2 } from 'lucide-react';
import { pricingPlans } from '../data/pricing';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { usePricing } from '../utils/pricingContext';
import CountryCurrencySwitcher from '../components/CountryCurrencySwitcher';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Pricing = () => {
  const { country, countryCode, getServiceRawPrice, formatPrice } = usePricing();

  const savingsAmount = {
    DE: 120, US: 120, AE: 450, MY: 550, SG: 160, IN: 5000
  }[countryCode] || 5000;

  return (
    <div className="min-h-screen pt-24">
      {/* Mega Offer Banner */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-1 shadow-2xl shadow-orange-500/20"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMEMyMCA4Ljk1NCAyNy4wNDYgMTYgMzYgMTZIMzZDMjcuMDQ2IDE2IDIwIDIzLjA0NiAyMCAzMkMwIDIzLjA0NiAxMi45NTQgMTYgNCAxNkg0QzEyLjk1NCAxNiAyMCA4Ljk1NCAyMCAweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            <div className="relative bg-slate-950/90 backdrop-blur rounded-[22px] px-6 py-8 sm:px-10 sm:py-10 text-center">
              <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-bold text-orange-400">LIMITED TIME OFFER - DON'T MISS OUT!</span>
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-sm font-bold text-white">Pricing for {country.name}</span>
                  <MapPin className="w-4 h-4 text-orange-400" />
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">FREE Domain + Hosting</span>
                <br />
                Worth {formatPrice(savingsAmount)} Included!
              </h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-6">
                On all website packages. Pay only for development - launch your business online with zero extra costs!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                  <Gift className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold">.com Domain FREE</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold">Fast Hosting FREE</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-bold">SSL Certificate FREE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero + Switcher */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Simple, Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-4">
              Choose the perfect plan for your business needs. <span className="text-orange-400 font-bold">No hidden fees</span>, <span className="text-pink-400 font-bold">FREE Domain + Hosting</span> included with every website!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="w-4 h-4" />
                Showing prices in <span className="font-bold text-white">{country.currency} ({country.currencySymbol})</span>
              </span>
              <span className="text-slate-700">•</span>
              <CountryCurrencySwitcher variant="banner" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => {
              const rawPrice = getServiceRawPrice(plan.name);
              const displayPrice = rawPrice === null ? plan.price : formatPrice(rawPrice);
              const isCustom = rawPrice === null;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -12 }}
                  className={cn(
                    "relative p-8 rounded-3xl border transition-all duration-300 group flex flex-col",
                    plan.popular
                      ? "bg-gradient-to-b from-blue-500/10 to-slate-900 border-blue-500/30 shadow-2xl shadow-blue-500/10"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]"
                  )}
                >
                  {plan.badge && (
                    <div className={cn(
                      "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg",
                      plan.popular 
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 shadow-orange-500/40" 
                        : "bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-500/40"
                    )}>
                      {plan.badge}
                    </div>
                  )}
                  <div className="pt-2 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-6 text-sm min-h-[48px]">{plan.description}</p>
                    <div className="mb-8">
                      <div className={cn(
                        "text-4xl md:text-5xl font-bold mb-1",
                        isCustom
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                          : "text-white"
                      )}>
                        {displayPrice}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {plan.period}
                        {!isCustom && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            + {country.vatRate * 100}% VAT if applicable
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, j) => {
                        const isFree = feature.includes("🎁");
                        return (
                          <li key={j} className={cn(
                            "flex items-start gap-3",
                            isFree && "p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-pink-500/10 -mx-2 border border-orange-500/20"
                          )}>
                            <CheckCircle2 className={cn(
                              "w-5 h-5 flex-shrink-0 mt-0.5",
                              isFree ? "text-orange-400" : "text-green-400"
                            )} />
                            <span className={cn(
                              "text-sm sm:text-base",
                              isFree ? "text-orange-300 font-bold" : "text-slate-300"
                            )}>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <Link
                      to="/contact"
                      className={cn(
                        "block w-full px-6 py-4 rounded-full font-bold text-center transition-all hover:scale-105 group-hover:shadow-xl",
                        plan.popular
                          ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-orange-500/40"
                          : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30"
                      )}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is Domain & Hosting really FREE? What's the catch?", a: "Yes, it's 100% FREE! We include a .com domain and high-speed hosting for 1 year with all our website packages. No hidden fees, no strings attached. After 1 year, you can renew at standard rates or transfer to your own provider - it's completely up to you!" },
              { q: `I'm from ${country.name} - how does billing work?`, a: `Great question! We'll bill you in ${country.currency} (${country.currencySymbol}) via local payment methods including cards, UPI/wallets (where available), bank transfer, and international cards. Local VAT/taxes of ${country.vatRate * 100}% apply if applicable under your country's rules.` },
              { q: "Can I switch the currency/country for pricing?", a: "Absolutely! Use the country switcher in the top navbar (next to Get Started) or the one above the pricing grid. Prices are automatically tailored for Germany, USA, UAE, Malaysia, Singapore, and India with local currencies." },
              { q: "Which domain extension do you provide for free?", a: "We provide a FREE .com domain with all our website packages. If you prefer .in, .de, .ae, .my, .sg, .co or other extensions, we can arrange those too at no extra cost (or small difference for premium TLDs)." },
              // { q: "What are the hosting specifications?", a: "Our FREE hosting includes: 10GB SSD Storage, Unlimited Bandwidth, Free SSL Certificate, 99.9% Uptime Guarantee, Control Panel Access, Weekly Backups, and 24/7 Technical Support. Perfect for any business website!" },
              { q: "What payment methods do you accept?", a: `We accept all major credit cards, debit cards, local payment methods (UPI in India, Giropay/Sofort in Germany, ACH in US, Apple/Google Pay, GrabPay in MY/SG, etc.), bank transfers, and crypto for larger projects. Flexible EMI/payment plans available!` },
              // { q: "Do you offer refunds?", a: "We offer a 100% satisfaction guarantee. If you're not happy with our work within the first 14 days, we'll either make it right or issue a full refund - your choice!" },
              { q: "How long does a typical project take?", a: "Project timelines vary depending on complexity: Starter Website (1-2 weeks), Business Website (2-3 weeks), Premium Website (3-4 weeks), E-commerce Store (3-5 weeks). Rush delivery available at no extra cost!" },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
            <div className="absolute inset-0 bg-slate-950/50" />
            <div className="relative p-12 md:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-6">
                <span className="text-lg">{country.flag}</span>
                Pricing for {country.name}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Quote?
              </h2>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                Every business is unique. Let's discuss your project and create a custom plan with {country.currencySymbol} pricing that fits your budget perfectly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
