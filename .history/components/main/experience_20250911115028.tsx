"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const experienceData = {
  overview: {
    years: "3+",
    apps: "10+",
    successRate: "99%",
    platforms: ["Android", "iOS", "Web", "Desktop"]
  },
  technologies: {
    mobile: ["Flutter", "Dart", "Firebase", "Local Database", "Real-time Sync"],
    backend: ["PHP Laravel", "Python Flask", "Django", "REST APIs", "WebSocket"],
    desktop: ["PyQt", "Tkinter", "Windows EXE"],
    integrations: ["Payment Gateway", "GSTIN", "AI/ML", "Voice-to-Text", "WhatsApp", "Facebook", "OTP", "Push Notifications", "OCR Scanner"]
  },
  projects: [
    {
      category: "E-Commerce & Shopping",
      icon: "🛒",
      color: "from-green-500 to-emerald-500",
      apps: [
        { name: "Salon Booking App", features: ["Real-time Booking", "Staff Scheduling", "Customer Management"], icon: "💇‍♀️" },
        { name: "Shopping App", features: ["Multi-vendor Support", "AI Recommendations", "Voice Search"], icon: "🛍️" },
        { name: "Invoice App", features: ["GST Calculation", "PDF Generation", "Real-time Sync"], icon: "📄" }
      ]
    },
    {
      category: "Service & Booking",
      icon: "📅",
      color: "from-blue-500 to-cyan-500",
      apps: [
        { name: "Salon Booking App", features: ["Real-time Booking", "Payment Gateway", "Push Notifications"], icon: "💇‍♀️" },
        { name: "PLAB Blood Check App", features: ["Lab Report Generation", "Barcode Scanning", "Patient Data Management"], icon: "🩸" }
      ]
    },
    {
      category: "Utility & Productivity",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      apps: [
        { name: "Books App", features: ["Digital Library", "Offline Reading", "Sync Across Devices"], icon: "📖" },
        { name: "OCR Scanner App", features: ["Document Scanning", "Text Extraction", "AI Processing"], icon: "📷" },
        { name: "Chat App", features: ["Real-time Messaging", "File Sharing", "Group Chats"], icon: "💬" },
        { name: "Astro App", features: ["Horoscope Generation", "AI Predictions", "User Profiles"], icon: "🔮" }
      ]
    },
    {
      category: "Desktop Applications",
      icon: "🖥️",
      color: "from-orange-500 to-red-500",
      apps: [
        { name: "Billing App (PyQt)", features: ["Invoice Management", "Customer Database", "Report Generation"], icon: "🧾" },
        { name: "Bulk Email Sender (Tkinter)", features: ["Email Templates", "Contact Management", "Scheduling"], icon: "📧" }
      ]
    }
  ],
  achievements: [
    { text: "99% Success Rate in App Development", icon: "🏆" },
    { text: "10+ Live Apps on Play Store & App Store", icon: "📱" },
    { text: "Real-time AI Model Development", icon: "🤖" },
    { text: "Full-stack Development Expertise", icon: "💻" },
    { text: "Cross-platform Deployment (iOS & Android)", icon: "🚀" },
    { text: "Backend Development with PHP & Python", icon: "⚙️" }
  ]
};

export const Experience = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center py-20 px-4 min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0a0a2e] to-[#16213e]">
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237042f8' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
      </div>

      {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6">
              My Experience
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-5xl mx-auto mt-8 leading-relaxed space-y-4"
          >
            <p>
              Over <span className="text-purple-400 font-semibold">3+ years</span> of expertise in Flutter development, creating innovative mobile applications with cutting-edge technologies and achieving a <span className="text-cyan-400 font-semibold">99% success rate</span>.
            </p>
            <p>
              Specialized in building <span className="text-green-400 font-semibold">cross-platform mobile apps</span> for Android and iOS, with expertise in <span className="text-blue-400 font-semibold">real-time data synchronization</span>, payment gateway integration, and AI-powered features.
            </p>
            <p>
              Developed <span className="text-yellow-400 font-semibold">10+ live applications</span> including e-commerce platforms, booking systems, productivity tools, and desktop applications using <span className="text-pink-400 font-semibold">Flutter, PHP Laravel, Python Django/Flask</span>, and modern web technologies.
            </p>
            <p>
              Expert in <span className="text-orange-400 font-semibold">full-stack development</span> with comprehensive knowledge of backend APIs, database design, cloud services, and deployment strategies across multiple platforms.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {Object.entries(experienceData.overview).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-32"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#0c0c1d] to-[#111132] p-8 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {Array.isArray(value) ? value.length : value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium capitalize">
                    {key === 'years' ? 'Years Experience' : 
                     key === 'apps' ? 'Mobile Apps' :
                     key === 'successRate' ? 'Success Rate' : 'Platforms'}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 w-full"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 px-4"
          >
            Technology Expertise
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4">
            {Object.entries(experienceData.technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -50, rotateX: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                whileHover={{ y: -10, rotateX: 5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-52 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#0c0c1d] to-[#111132] p-4 sm:p-6 rounded-xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col overflow-hidden">
                  <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-3 sm:mb-4 capitalize flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span className="truncate">{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-1 overflow-hidden">
                    {techs.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="px-2 sm:px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 whitespace-nowrap"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Project Portfolio
          </motion.h2>
          
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {experienceData.projects.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 flex items-center gap-3 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg shadow-purple-500/25`
                    : "bg-transparent text-gray-300 border-gray-600 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Projects */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {experienceData.projects[activeCategory].apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-80"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${experienceData.projects[activeCategory].color} opacity-10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                <div className="relative bg-gradient-to-br from-[#0c0c1d] to-[#111132] p-8 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{app.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {app.name}
                    </h3>
                  </div>
                  <div className="space-y-3 flex-1">
                    {app.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        className="flex items-center text-gray-300 text-sm group-hover:text-white transition-colors"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Key Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-24"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative flex items-center bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full">
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-3xl mr-4"
                  >
                    {achievement.icon}
                  </motion.span>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {achievement.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};