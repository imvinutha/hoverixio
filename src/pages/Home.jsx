import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Palette, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  Layout, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  ChevronRight, 
  ArrowUpRight,
  Star,
  Cpu,
  Database,
  Cloud,
  MessageCircle,
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { team } from '../data/team';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Mega Offer Banner */}
      <section className="relative pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-1 mb-10 shadow-2xl shadow-orange-500/20"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMEMyMCA4Ljk1NCAyNy4wNDYgMTYgMzYgMTZIMzZDMjcuMDQ2IDE2IDIwIDIzLjA0NiAyMCAzMkMwIDIzLjA0NiAxMi45NTQgMTYgNCAxNkg0QzEyLjk1NCAxNiAyMCA4Ljk1NCAyMCAweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            <div className="relative bg-slate-950/90 backdrop-blur rounded-[22px] px-6 py-5 sm:px-10 sm:py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/40 animate-pulse">
                    <span className="text-3xl">🎁</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                        Limited Time Offer
                      </span>
                      <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs sm:text-sm font-bold">
                        🔥 Hurry Up!
                      </span>
                    </div>
                    <h3 className="text-white text-lg sm:text-2xl font-bold">
                      Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">FREE Domain + Hosting</span> for 1 Year!
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base">On all website packages - Launch your business online at zero extra cost!</p>
                  </div>
                </div>
                <Link
                  to="/pricing"
                  className="group flex-shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-base sm:text-lg shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                >
                  Grab Offer
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">🎁 FREE Domain + Hosting with every website!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
            >
              Grow Your Business
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Get Found Online
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              We build modern websites, web applications, and mobile apps at really affordable prices! <span className="text-pink-400 font-semibold">Prices depend on your requirements</span>, and we give you <span className="text-orange-400 font-bold">FREE Domain + Hosting for 1 year</span> on every website project - we're here to help your business grow!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                Let's Build Something
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/8217453079" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
            >
              {[ 
                { label: "Projects Done", value: "50+" },
                { label: "Happy Clients", value: "30+" },
                { label: "Years Experience", value: "5+" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Full-stack development and design services to bring your digital vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-blue-400" />, title: "Website Development", description: "Modern, responsive websites tailored to your business needs.", link: "/services/website-development" },
              { icon: <Code2 className="w-6 h-6 text-purple-400" />, title: "Web App Development", description: "Powerful web applications that streamline your operations.", link: "/services/web-app-development" },
              { icon: <Smartphone className="w-6 h-6 text-pink-400" />, title: "Mobile App Development", description: "Beautiful, performant mobile apps for iOS and Android.", link: "/services/mobile-app-development" },
              { icon: <Palette className="w-6 h-6 text-yellow-400" />, title: "UI/UX Design", description: "User-centric designs that provide exceptional experiences.", link: "/services/ui-ux-design" },
              { icon: <Cpu className="w-6 h-6 text-indigo-400" />, title: "MERN Stack Development", description: "Full-stack solutions using MongoDB, Express, React, and Node.js.", link: "/services/mern-stack-development" },
              { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, title: "Maintenance & Support", description: "Keep your applications running smoothly with our support.", link: "/services/maintenance-support" },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                as={Link}
                to={service.link}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Case studies of our recent projects, from concept to launch.
              </p>
            </div>
            <Link to="/portfolio" className="mt-4 md:mt-0 text-white font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 text-white font-semibold"
                    >
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose Hoverixio?</h2>
              <p className="text-slate-400 text-lg mb-8">
                We don't just build websites. We build digital assets that drive growth. Here's what makes us different:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "🎁 FREE Domain + Hosting for 1 Year with every website",
                  "Expert team with 5+ years of experience",
                  "Modern, cutting-edge technologies",
                  "Really affordable prices - tailored to your requirements",
                  "Fast delivery without compromising quality",
                  "100% satisfaction guarantee",
                  "Ongoing support after deployment",
                ].map((reason, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      i === 0 ? "bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg shadow-orange-500/40" : "bg-blue-500/20"
                    )}>
                      <CheckCircle2 className={cn(
                        "w-5 h-5",
                        i === 0 ? "text-white" : "text-blue-400"
                      )} />
                    </div>
                    <span className={cn(
                      "font-medium",
                      i === 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 text-lg font-bold" : "text-slate-200"
                    )}>{reason}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 border border-orange-500/30"
              >
                <div className="absolute top-0 right-0 text-8xl opacity-10">🎉</div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold">SPECIAL BONUS</span>
                  </div>
                  <h4 className="text-white font-bold text-xl mb-1">Save ₹5,000+ on Domain & Hosting!</h4>
                  <p className="text-slate-400 text-sm">Launch your business without worrying about extra costs. We handle it all for you for FREE!</p>
                </div>
              </motion.div>
            </div>
            
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur-xl opacity-20" />
               <div className="relative p-8 rounded-3xl bg-slate-950 border border-white/10">
                  <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-orange-500/10 to-pink-500/10 border border-orange-500/20 mb-4">
                    <div className="absolute top-2 right-2 animate-bounce">🎁</div>
                    <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-2">Our Biggest Offer</div>
                    <div className="text-3xl font-bold text-white mb-1">₹0 Extra</div>
                    <div className="text-slate-400 text-sm">Domain + Hosting Included</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                     <div className="p-6 rounded-2xl bg-white/5 text-center">
                        <div className="text-3xl font-bold text-white mb-1">24h</div>
                        <div className="text-xs text-slate-500 uppercase">Response Time</div>
                     </div>
                     <div className="p-6 rounded-2xl bg-white/5 text-center">
                        <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                        <div className="text-xs text-slate-500 uppercase">Uptime Promise</div>
                     </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                     <div className="flex items-center gap-3 mb-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-bold">5.0 Rated</span>
                     </div>
                     <p className="text-slate-400 text-sm">“They delivered beyond our expectations. Truly professional work!”</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        What Our Clients Say
      </h2>
      <p className="text-slate-400 text-lg">
        Hear from the people who trusted us
      </p>
    </div>

    <style>
      {`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .testimonial-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }
      `}
    </style>

    <div className="relative overflow-hidden">

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent" />

      <div className="testimonial-track gap-8 py-2">

        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="w-[380px] flex-shrink-0 rounded-3xl border border-white/10
                       bg-white/[0.05] backdrop-blur-xl
                       p-8
                       shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                       hover:border-blue-500/40
                       hover:shadow-blue-500/10
                       transition-all duration-500"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-5">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-slate-300 leading-8 text-lg mb-8 italic">
              "{testimonial.review}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-lg shadow-blue-500/20"
              />

              <div>
                <h4 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* Team Section */}
      {/* <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The talented people behind Hoverixio who make magic happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-full aspect-square object-cover rounded-3xl border border-white/10"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-slate-400 mb-4">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                Let's work together to bring your vision to life. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="https://wa.me/8217453079" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
