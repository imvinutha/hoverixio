import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, MessageCircle, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-400 hover:text-blue-300">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{project.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 text-slate-400 text-sm font-medium">
                  {project.year}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Client</h3>
                <p className="text-slate-300">{project.client}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
                >
                  Start Your Project
                </Link>
                <a 
                  href="https://wa.me/7259800637" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Project Gallery</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${i + 1}`} 
                    className="w-full aspect-video object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Projects */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">More Projects</h2>
            </div>
            <Link to="/portfolio" className="text-white font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors">
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, i) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  as={Link}
                  to={`/portfolio/${relatedProject.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors mt-3">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
