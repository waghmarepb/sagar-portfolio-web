"use client";

import { motion } from "framer-motion";
import { HiMail, HiLightBulb, HiCode, HiPlay } from "react-icons/hi";

export const Collaboration = () => {
  return (
    <section
      id="collaboration"
      className="flex flex-col items-center justify-center py-20 px-4 min-h-screen relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
          >
            Have an App Idea?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Let's transform your vision into reality! Share your app idea with me and I'll help you bring it to life with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm">
              <HiLightBulb className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Idea Consultation</h3>
              <p className="text-gray-400">Free consultation to refine and validate your app concept</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 rounded-xl border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-sm">
              <HiCode className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Full Development</h3>
              <p className="text-gray-400">Complete app development from design to deployment</p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm">
              <HiRocket className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Launch Support</h3>
              <p className="text-gray-400">App Store & Play Store deployment with ongoing support</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="group relative max-w-2xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-8 md:p-10 rounded-2xl border border-purple-500/40 group-hover:border-purple-500/70 transition-all duration-300 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-6"
            >
              <HiMail className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Drop me an email with your app idea, and let's discuss how we can make it happen. 
              From concept to deployment, I'll guide you through every step of the journey.
            </p>
            
            <motion.a
              href="mailto:sagarkumbhar2018@gmail.com?subject=App Idea Collaboration&body=Hi Sagar,%0D%0A%0D%0AI have an app idea that I'd like to discuss with you.%0D%0A%0D%0AApp Idea:%0D%0A[Please describe your app idea here]%0D%0A%0D%0ATarget Platform:%0D%0A[ ] Android%0D%0A[ ] iOS%0D%0A[ ] Web%0D%0A[ ] All platforms%0D%0A%0D%0ATimeline:%0D%0A[When would you like to launch?]%0D%0A%0D%0ABudget Range:%0D%0A[Optional - your budget range]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
            >
              <HiMail className="text-xl group-hover:scale-110 transition-transform" />
              Let's Collaborate
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.a>
            
            <div className="mt-6 text-sm text-gray-400">
              <p>📧 sagarkumbhar2018@gmail.com</p>
              <p className="mt-2">💡 Free initial consultation • 🚀 Quick response guaranteed</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm italic">
            "Every great app starts with a simple idea. Let's make yours extraordinary."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
