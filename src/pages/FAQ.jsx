import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { category: "General", questions: [
      { q: "What services do you offer?", a: "We offer website development, web app development, mobile app development, UI/UX design, MERN stack development, e-commerce solutions, and maintenance & support." },
      { q: "How long does a typical project take?", a: "Project timelines vary: a basic website takes 2-4 weeks, a complex web app takes 2-3 months, and a mobile app takes 3-4 months." },
    ]},
    { category: "Pricing", questions: [
      { q: "What are your pricing models?", a: "We offer fixed-price projects, hourly rates, and monthly maintenance packages. Contact us for a custom quote." },
      { q: "Do you offer payment plans?", a: "Yes! We offer flexible payment plans to make our services accessible to businesses of all sizes." },
    ]},
    { category: "Process", questions: [
      { q: "What is your development process?", a: "Our process includes discovery, planning, design, development, testing, deployment, and ongoing support." },
      { q: "Can I make changes during the project?", a: "Yes! We work iteratively and welcome feedback throughout the development process." },
    ]},
    { category: "Support", questions: [
      { q: "Do you offer ongoing support?", a: "Yes, we offer monthly maintenance packages to keep your website or app running smoothly." },
      { q: "What if I find a bug after launch?", a: "We provide a 30-day bug-free guarantee. If you find any issues, we'll fix them promptly." },
    ]},
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const index = categoryIndex * 10 + faqIndex;
                  const isOpen = openIndex === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl bg-slate-950 border border-white/10"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 text-slate-400"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
