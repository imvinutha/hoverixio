import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Github, Instagram, Linkedin, Twitter, MapPin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Web App Development', path: '/services/web-app-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'MERN Stack Development', path: '/services/mern-stack-development' },
    { name: 'E-commerce Development', path: '/services/ecommerce-development' },
  ];

  const academyLinks = [
    { name: 'MERN Stack Training', path: '/academy/mern-stack-training' },
    { name: 'Full Stack Course', path: '/academy/full-stack-course' },
    { name: 'Course Curriculum', path: '/academy/curriculum' },
    { name: 'Student Projects', path: '/academy/student-projects' },
    { name: 'Placement Assistance', path: '/academy/placement' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Hoverixio Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Hoverixio
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Building digital experiences that drive growth. We craft modern websites, web applications, and mobile apps that help businesses succeed online.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/8217453079" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-green-500/10 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://github.com/imvinutha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/_i.vinutha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="www.linkedin.com/in/vinutha-k-36a739192" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-medium">Phone / WhatsApp</div>
                  <a href="tel:8217453079" className="text-slate-400 hover:text-green-400 transition-colors">8217453079</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-medium">Email</div>
                  <a href="mailto:contact@hoverixio.com" className="text-slate-400 hover:text-blue-400 transition-colors">contact@hoverixio.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-medium">Location</div>
                  <span className="text-slate-400">Bangalore, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hoverixio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
