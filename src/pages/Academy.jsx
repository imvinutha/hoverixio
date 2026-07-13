import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, Users, BookOpen, Briefcase } from 'lucide-react';
import { academyCourses, studentProjects, studentTestimonials } from '../data/academy';

const Academy = () => {
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
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
              Hoverixio Academy
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Learn to Code, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Build Your Future</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Master modern web development with our comprehensive courses and mentorship programs.
            </p>
            {/* <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">90%</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Hiring Partners</div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Courses</h2>
            <p className="text-xl text-slate-400">Choose the perfect course for your career goals</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {academyCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                as={Link}
                to={`/academy/${course.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all bg-slate-900">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium">
                        {course.duration}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-medium">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-400 mb-6">{course.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">What you'll get:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.features.slice(0, 4).map((feature, j) => (
                          <div key={j} className="flex items-center gap-2 text-slate-400 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold text-white">{course.price}</div>
                      <div className="flex items-center gap-2 text-purple-400 font-semibold">
                        View Course <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Hoverixio Academy?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert-Led Training</h3>
              <p className="text-slate-400">Learn from industry experts with real-world experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Placement Assistance</h3>
              <p className="text-slate-400">Get help with interviews, resume building, and job placements</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1:1 Mentorship</h3>
              <p className="text-slate-400">Get personalized guidance and support from our mentors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
              >
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.review}"</p>
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role} at {testimonial.placedAt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Student Projects</h2>
            <p className="text-xl text-slate-400">See what our students have built</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-slate-900">
                  <h3 className="font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-slate-400 text-sm">by {project.student}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.map((tech, j) => (  
                      <span key={j} className="px-2 py-1 rounded-full bg-white/5 text-slate-400 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
            <div className="absolute inset-0 bg-slate-950/50" />
            <div className="relative p-12 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                Enroll now and take the first step towards a successful career in web development.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105"
              >
                Enroll Now <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
