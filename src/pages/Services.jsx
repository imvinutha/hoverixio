import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Code2, Smartphone, Palette, Cpu, ShoppingCart, Cloud, Server, Wrench, ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Layout: <Layout className="w-6 h-6 text-blue-400" />,
  Code2: <Code2 className="w-6 h-6 text-purple-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-pink-400" />,
  Palette: <Palette className="w-6 h-6 text-yellow-400" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6 text-green-400" />,
  Cloud: <Cloud className="w-6 h-6 text-cyan-400" />,
  Server: <Server className="w-6 h-6 text-orange-400" />,
  Wrench: <Wrench className="w-6 h-6 text-red-400" />,
};

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Comprehensive digital solutions to help your business grow and succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                as={Link}
                to={`/services/${service.slug}`}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <div className="text-blue-400 font-medium flex items-center gap-2">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Not Sure What You Need?
              </h2>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                Let's discuss your project and find the best solution for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
