import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Target, Users, Zap, ShieldCheck } from 'lucide-react';
import { team } from '../data/team';

const About = () => {
  const values = [
    { icon: <Target className="w-6 h-6 text-blue-400" />, title: "Excellence", description: "We strive for excellence in everything we do." },
    { icon: <Users className="w-6 h-6 text-purple-400" />, title: "Client Focus", description: "Our clients' success is our priority." },
    { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Innovation", description: "We embrace new technologies and ideas." },
    { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, title: "Integrity", description: "We operate with honesty and transparency." },
  ];

  const timeline = [
    { year: "2019", title: "Foundation", description: "Hoverixio was founded with a vision to help businesses grow online." },
    { year: "2020", title: "First Milestone", description: "Completed our first 10 projects and gained valuable experience." },
    { year: "2022", title: "Expansion", description: "Expanded our team and started offering more services." },
    { year: "2024", title: "Academy Launch", description: "Launched our training academy to help aspiring developers." },
  ];

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
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Hoverixio</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              We are a team of passionate developers and designers dedicated to helping businesses succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Hoverixio was born from a simple idea: to make quality web development accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                What started as a small team of passionate developers has grown into a full-service digital agency. We've helped dozens of businesses establish their online presence and achieve their goals.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Today, we continue to innovate and provide cutting-edge solutions to our clients, while also nurturing the next generation of developers through our academy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-slate-900 rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-white/5">
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-slate-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/5">
                    <div className="text-4xl font-bold text-white mb-2">30+</div>
                    <div className="text-slate-400">Happy Clients</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/5">
                    <div className="text-4xl font-bold text-white mb-2">5+</div>
                    <div className="text-slate-400">Years Experience</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/5">
                    <div className="text-4xl font-bold text-white mb-2">5.0</div>
                    <div className="text-slate-400">Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <TrendingUp className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                To be the leading digital agency that empowers businesses and individuals to thrive in the digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            >
              <Target className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                To deliver exceptional digital solutions that drive growth and success for our clients, while fostering innovation and learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-slate-400">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-slate-400">From humble beginnings to where we are today</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "relative flex items-center gap-8 md:justify-center",
                    i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  )}
                >
                  <div className="hidden md:block w-[45%]" />
                  
                  <div className="absolute left-2 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-slate-950 border-4 border-blue-500 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                  
                  <div className="pl-12 md:pl-0 md:w-[45%]">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-lg font-bold text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-400">The talented people behind Hoverixio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-full aspect-square object-cover rounded-3xl border border-white/10"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-slate-400 mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default About;
