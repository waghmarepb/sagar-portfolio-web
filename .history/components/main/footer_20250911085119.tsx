import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return <div className="relative w-full bg-gradient-to-br from-[#030014] via-[#0a0a2e] to-[#16213e] border-t border-[#7042f88b]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%237042f8" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sagar Kumbhar
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Flutter Developer passionate about creating beautiful, 
                cross-platform mobile applications that make a difference.
              </p>
              <div className="flex space-x-4">
                {FOOTER_DATA.find(col => col.title === "Connect")?.data.map(({ icon: Icon, name, link }) => (
                  Icon && (
                    <motion.a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-[#7042f88b] rounded-lg hover:bg-[#7042f8] transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.a>
                  )
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {FOOTER_DATA.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <li key={`${column.title}-${name}`}>
                    <Link
                      href={link}
                      target={link.startsWith('http') ? '_blank' : '_self'}
                      rel={link.startsWith('http') ? 'noreferrer noopener' : undefined}
                      className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 mr-3 group-hover:text-purple-400 transition-colors duration-300" />
                      )}
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#7042f88b] pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sagar Kumbhar. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ using Flutter & Next.js</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};
