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
        { name: "E-Commerce App", features: ["Payment Integration", "Real-time Inventory", "GSTIN Integration"], icon: "💳" },
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
        { name: "PLAB App", features: ["Study Materials", "Progress Tracking", "AI Tutoring"], icon: "📚" }
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
      className="flex flex-col items-center justify-center py-20 px-4 min-h-screen bg-gradient-to-br from-[#030014] via-[#0a0a2e] to-[#16213e]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 lg:py-20">
          My Experience
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Over 3+ years of expertise in Flutter development, creating innovative mobile applications with cutting-edge technologies
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 w-full max-w-4xl"
      >
        {Object.entries(experienceData.overview).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center bg-gradient-to-br from-[#0c0c1d] to-[#111132] p-6 rounded-lg border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {Array.isArray(value) ? value.length : value}
            </div>
            <div className="text-gray-300 text-sm mt-2 capitalize">
              {key === 'years' ? 'Years Experience' : 
               key === 'apps' ? 'Mobile Apps' :
               key === 'successRate' ? 'Success Rate' : 'Platforms'}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Technology Stack */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-6xl mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Technology Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(experienceData.technologies).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0c0c1d] to-[#111132] p-6 rounded-lg border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Categories */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Project Portfolio
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {experienceData.projects.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-lg scale-105"
                  : "bg-transparent text-gray-300 border-gray-600 hover:border-purple-500 hover:text-purple-400"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active Category Projects */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experienceData.projects[activeCategory].apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0c0c1d] to-[#111132] p-6 rounded-lg border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {app.name}
              </h3>
              <div className="space-y-2">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-4xl mt-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experienceData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4 rounded-lg border border-purple-500/30"
            >
              <span className="text-2xl mr-4">🏆</span>
              <span className="text-gray-300 font-medium">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
