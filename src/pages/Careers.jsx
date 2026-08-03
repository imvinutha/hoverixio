import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowUpRight, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePricing } from '../utils/pricingContext';
import { convertAndFormatPriceINR } from '../utils/pricingContext';
import CountryCurrencySwitcher from '../components/CountryCurrencySwitcher';

const JOBS = [
  { title: "Senior React Developer", location: "Bangalore (Remote)", type: "Full-time", minINR: 1500000, maxINR: 2500000, unit: 'LPA' },
  { title: "UI/UX Designer", location: "Bangalore (Hybrid)", type: "Full-time", minINR: 800000, maxINR: 1500000, unit: 'LPA' },
  { title: "MERN Stack Developer", location: "Remote", type: "Full-time", minINR: 1000000, maxINR: 2000000, unit: 'LPA' },
  { title: "Frontend Developer", location: "Bangalore", type: "Full-time", minINR: 600000, maxINR: 1200000, unit: 'LPA' },
];

const Careers = () => {
  const { country, countryCode } = usePricing();

  const formatLPA = (lpaINR) => {
    const lakhs = lpaINR / 100000;
    return `₹${lakhs.toFixed(lakhs % 1 === 0 ? 0 : 1)} LPA`;
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold mb-6">
              <Globe2 className="w-4 h-4" />
              <span>Salaries shown in INR and your local {country.currency} ({country.flag} {country.name})</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Looking for your next opportunity? We're always on the lookout for talented individuals to join our growing team.
            </p>
            <div className="flex justify-center">
              <CountryCurrencySwitcher variant="banner" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Open Positions</h2>
          <div className="space-y-6">
            {JOBS.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <Briefcase className="w-4 h-4 text-green-400" />
                        <span className="font-bold text-green-300 text-sm">
                          {formatLPA(job.minINR)} - {formatLPA(job.maxINR)}
                        </span>
                      </div>
                      {countryCode !== 'IN' && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                          <span className="text-lg leading-none">{country.flag}</span>
                          <span className="font-bold text-blue-300 text-sm">
                            ≈ {convertAndFormatPriceINR(job.minINR, countryCode)}
                            {' – '}
                            {convertAndFormatPriceINR(job.maxINR, countryCode)}
                            <span className="text-blue-400/70 font-normal"> /yr approx</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 flex items-center gap-2 self-start"
                  >
                    Apply Now <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don't see a role that fits?</h2>
          <p className="text-xl text-slate-400 mb-8">
            We're always interested in hearing from talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
