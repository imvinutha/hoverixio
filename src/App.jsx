import React from 'react';
import { motion } from 'framer-motion';
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
  Menu, 
  X, 
  ArrowUpRight,
  Star,
  Github,
  Cpu,
  Database,
  Cloud,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Hoverixio Logo" className="h-12 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Work', 'Process'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all hover:scale-105"
          >
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-950 border-b border-white/10"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {['About', 'Services', 'Work', 'Process'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-slate-300 font-medium py-2"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="w-full py-3 rounded-full bg-white text-slate-950 font-semibold"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">Accepting new projects for 2025</span>
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
              Get Found on Google
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            We build modern websites, help you with Google Ads so your business shows up when people search, and create impressive college projects that make you stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              Let's Build Something
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/7259800637" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-green-600 border border-green-500 text-white font-semibold text-lg hover:bg-green-700 transition-all flex items-center gap-2 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
          >
            {[ 
              { label: "Projects Done", value: "50+" },
              { label: "Years Experience", value: "5+" },
              { label: "Happy Clients", value: "30+" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                We Bring <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Creativity</span> to Life
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                At Hoverixio, we don't just build websites - we craft digital experiences that make people stop and stare.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Every pixel is carefully placed, every animation is thoughtfully designed, and every interaction feels magical.
              </p>
              
              <div className="space-y-4">
                {[
                  "🎨 Creative UI/UX Design",
                  "⚡ Blazing Fast Performance",
                  "📱 100% Responsive",
                  "🔒 Secure & Reliable"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-slate-950 rounded-3xl p-8 border border-white/10 overflow-hidden">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center justify-center h-64"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <div className="text-2xl font-bold text-white mb-2">Creative Minds</div>
                    <div className="text-slate-400">Building Digital Magic</div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    x: [0, 20, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 left-4 w-8 h-8 bg-blue-500/20 rounded-full"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-8 right-8 w-6 h-6 bg-purple-500/20 rounded-full"
                />
                
                <motion.div
                  animate={{ 
                    x: [0, -15, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-8 left-8 w-4 h-4 bg-pink-500/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "Custom Web Design",
      description: "Pixel-perfect designs tailored to your brand identity and business goals."
    },
    {
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      title: "Web Development",
      description: "Modern, fast, and scalable web applications built with React & Node.js."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-pink-400" />,
      title: "Mobile-First Approach",
      description: "Every product is built with mobile as the first priority from day one."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "College Projects",
      description: "We help students build impressive, professional college projects that stand out. Special discount available for students!"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: "Google Ads & SEO",
      description: "Get your business noticed! We guide you with Google Ads so your name appears when people search for what you offer."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      title: "Ongoing Support",
      description: "We don't abandon you. Monthly maintenance and updates available."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Full-stack development and design services to bring your digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % laptopImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const laptopImages = [
    "/projects/laptopView/Screenshot 2026-05-16 005129.png",
    "/projects/laptopView/Screenshot 2026-05-16 005254.png",
    "/projects/laptopView/Screenshot 2026-05-16 005319.png",
    "/projects/laptopView/Screenshot 2026-05-16 005334.png",
    "/projects/laptopView/Screenshot 2026-05-16 005359.png",
    "/projects/laptopView/Screenshot 2026-05-16 005417.png",
    "/projects/laptopView/Screenshot 2026-05-16 005435.png",
    "/projects/laptopView/Screenshot 2026-05-16 005456.png",
    "/projects/laptopView/Screenshot 2026-05-16 005514.png",
    "/projects/laptopView/Screenshot 2026-05-16 005525.png",
    "/projects/laptopView/Screenshot 2026-05-16 005543.png",
    "/projects/laptopView/Screenshot 2026-05-16 005611.png"
  ];
  
  const mobileImages = [
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.05 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.06 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.07 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.08 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.10 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.11 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.17 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.17 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.18 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.19 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.19 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.20 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.20 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.21 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.21 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.22 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.22 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.23 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.23 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.24 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.24 AM.jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.25 AM (1).jpeg",
    "/projects/mobileView/WhatsApp Image 2026-05-16 at 1.04.25 AM.jpeg"
  ];
  
  const projects = [
    {
      title: "Studio AR Design",
      description: "A modern interior design website with portfolio showcase, project galleries, and booking system.",
      tech: ["React", "Tailwind", "Framer Motion"],
      features: ["Responsive portfolio", "Interactive galleries", "Booking system", "Mobile-first design"],
      laptopImage: laptopImages[0],
      mobileImage: mobileImages[0],
      allImages: [...laptopImages, ...mobileImages],
      featured: true
    },
    {
      title: "GRT Jewellers",
      description: "An elegant online gold jewellery shopping platform with product showcase, cart functionality, and secure checkout.",
      tech: ["Next.js", "Stripe", "Supabase", "Tailwind"],
      features: ["Product catalog", "Shopping cart", "Secure payments", "Inventory management"],
      laptopImage: laptopImages[1],
      mobileImage: mobileImages[1],
      allImages: [...laptopImages, ...mobileImages],
      featured: false
    }
  ];

  return (
    <>
      <section id="work" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Case studies of our recent projects, from concept to launch.
              </p>
            </div>
            <a href="#" className="mt-4 md:mt-0 text-white font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={cn(
                  "relative overflow-hidden rounded-3xl p-8 border transition-all duration-300",
                  project.featured 
                    ? "bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10" 
                    : "bg-slate-900/60 border-white/5 hover:border-white/10"
                )}>
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="order-2 lg:order-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm font-medium border border-white/10">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 flex items-center gap-2"
                        >
                          View Gallery <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative bg-slate-950 rounded-3xl p-4 border border-white/10 overflow-hidden">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 overflow-hidden">
                              <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                              >
                                <img 
                                  src={laptopImages[currentImageIndex]} 
                                  alt={`${project.title} laptop view`} 
                                  className="w-full h-auto rounded-xl"
                                />
                              </motion.div>
                            </div>
                            <div className="overflow-hidden">
                              <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                              >
                                <img 
                                  src={mobileImages[currentImageIndex % mobileImages.length]} 
                                  alt={`${project.title} mobile view`} 
                                  className="w-full h-auto rounded-xl"
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className="relative w-full max-w-6xl bg-slate-900 rounded-3xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title} - Gallery</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.allImages.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`Gallery image ${idx + 1}`} 
                    className="w-full h-auto rounded-xl border border-white/10 hover:scale-105 transition-transform cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const WhyUs = () => {
  const reasons = [
    "Get found on Google - We help you with ads and SEO so your business shows up when people search",
    "Impressive college projects that help you stand out to professors and future employers",
    "Affordable Prices - Budget-friendly for everyone",
    "Modern UI-first approach to every project",
    "Fast delivery cycles without sacrificing quality",
    "Mobile-first development guaranteed",
    "Ongoing support after deployment"
  ];

  return (
    <section id="why" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Hoverixio?</h2>
            <p className="text-slate-400 text-lg mb-8">
              We don't just build websites. We build digital assets that drive growth. Here's what makes us different:
            </p>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-slate-200 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30" />
             <div className="relative p-8 rounded-3xl bg-slate-950 border border-white/10">
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
                   <p className="text-slate-400 text-sm">“They delivered beyond our expectations. Truly professional.”</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Discovery Call", desc: "We learn about your goals and vision.", icon: <MessageSquare className="w-6 h-6 text-blue-400" /> },
    { title: "UI Planning", desc: "Wireframes and design drafts for approval.", icon: <Palette className="w-6 h-6 text-purple-400" /> },
    { title: "Development", desc: "Coding begins with weekly updates.", icon: <Code2 className="w-6 h-6 text-pink-400" /> },
    { title: "Revisions", desc: "Testing and polishing the final product.", icon: <CheckCircle2 className="w-6 h-6 text-green-400" /> },
    { title: "Launch", desc: "Deployment and ongoing support.", icon: <TrendingUp className="w-6 h-6 text-yellow-400" /> }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-slate-400 text-lg">Transparent steps from idea to launch.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex items-center gap-8 md:justify-center",
                  i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                <div className="hidden md:block w-[45%]" />
                
                <div className="absolute left-6 md:left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-slate-950 border-4 border-blue-500 z-10" />
                
                <div className="pl-16 md:pl-0 md:w-[45%]">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div className="text-sm text-blue-400 font-bold uppercase tracking-widest">Step {i + 1}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  
  const testimonials = [
    {
      name: "Rakesh Achar",
      image: "/projects/people/Rakesh Achar.jpeg",
      review: "Hoverixio did an amazing job with my website! The design is modern and the performance is great. Highly recommend!"
    },
    {
      name: "Shivu",
      image: "/projects/people/Rakesh Achar.jpeg",
      review: "Professional team! They understood my requirements perfectly and delivered a beautiful website. 10/10 experience!"
    },
    {
      name: "Hemant",
      image: "/projects/people/Rakesh Achar.jpeg",
      review: "Outstanding work! My college project turned out way better than I expected. The animations are super smooth!"
    },
    {
      name: "Karthik",
      image: "/projects/people/Rakesh Achar.jpeg",
      review: "Great service! They helped me get my business online and even guided me with Google Ads. My sales increased!"
    },
    {
      name: "Pavan",
      image: "/projects/people/Rakesh Achar.jpeg",
      review: "Creative and reliable! The website they built is exactly what I wanted. Communication was smooth throughout the project."
    }
  ];
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 text-lg">Hear from the people who trusted us</p>
        </div>
        
        <div className="relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 p-8 rounded-3xl border border-white/10 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
              />
            </div>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].review}"
            </p>
            <div className="text-lg font-bold text-white">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </motion.div>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  idx === currentTestimonial ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8" : "bg-slate-600 hover:bg-slate-500"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "React", icon: <Code2 className="w-6 h-6" /> },
    { name: "Angular", icon: <Layout className="w-6 h-6" /> },
    { name: "Node.js", icon: <Cpu className="w-6 h-6" /> },
    { name: "Firebase", icon: <Cloud className="w-6 h-6" /> },
    { name: "Supabase", icon: <Database className="w-6 h-6" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
    { name: "Tailwind", icon: <Palette className="w-6 h-6" /> },
    { name: "AWS", icon: <Cloud className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 uppercase tracking-widest text-sm mb-8">Built with modern technologies</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {techs.map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default">
              {tech.icon}
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    budget: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ABudget: ${formData.budget}%0AProject Details: ${formData.details}`;
    window.open(`https://wa.me/7259800637?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-slate-400 text-lg">Tell us about your project and let's make it happen.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Call / WhatsApp</h3>
                  <a href="tel:7259800637" className="text-slate-400 hover:text-green-400 transition-colors">7259800637</a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Connect with us</h3>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/7259800637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: 7259800637</span>
                </a>
                <a href="https://github.com/imvinutha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                  <span>github.com/imvinutha</span>
                </a>
                <a href="https://www.instagram.com/_i.vinutha/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>@_i.vinutha</span>
                </a>
                <a href="www.linkedin.com/in/vinutha-k-36a739192" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>Vinutha K</span>
                </a>
                <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Estimated Budget</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option>Select a range</option>
                  <option>₹5,000 - ₹15,000</option>
                  <option>₹15,000 - ₹50,000</option>
                  <option>₹50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Hoverixio Logo" className="h-10 w-auto" />
            </div>
            <div className="text-sm text-green-400 font-medium">
              🎓 Special Discount for Students!
            </div>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hoverixio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/7259800637" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://github.com/imvinutha" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/_i.vinutha/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="www.linkedin.com/in/vinutha-k-36a739192" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <WhyUs />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
