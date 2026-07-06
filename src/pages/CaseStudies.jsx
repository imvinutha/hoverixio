import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Case <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Studies</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Detailed success stories of how we've helped businesses achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10">
                    <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
                  </div>
                </div>
                <div className={i % 2 === 0 ? 'order-2' : 'order-1'}>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 inline-block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors"
                  >
                    Read Full Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
