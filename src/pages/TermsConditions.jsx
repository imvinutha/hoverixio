import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms and Conditions</h1>
          <p className="text-slate-400 mb-8">Last updated: June 2024</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
              <p className="leading-relaxed mb-4">
                Hoverixio provides web development, mobile app development, UI/UX design, and related services. The specific terms for each project will be outlined in a separate agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>50% upfront payment required to start a project</li>
                <li>Remaining 50% due upon project completion</li>
                <li>All payments are non-refundable unless otherwise specified</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                Upon full payment, you will receive a license to use the final product. We retain ownership of all intellectual property until full payment is received.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Project Timeline</h2>
              <p className="leading-relaxed">
                We will provide an estimated timeline for your project. Delays may occur due to client feedback, third-party services, or unforeseen circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Warranties and Disclaimers</h2>
              <p className="leading-relaxed">
                We warrant that our services will be performed professionally. We disclaim all other warranties, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Hoverixio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
              <p className="leading-relaxed">
                Either party may terminate the agreement with written notice. In case of termination, you will be responsible for payment for work completed up to that point.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
              <p className="leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at contact@hoverixio.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;
