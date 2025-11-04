"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
  description?: string;
  tech?: string[];
};

export const ProjectCard = ({
  src,
  title,
  link,
  description,
  tech,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="w-full h-[28rem] relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-gradient-to-br from-[#0c0c1d] to-[#111132] group flex flex-col"
    >
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="block flex flex-col h-full"
      >
        <div className="relative overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          
          {description && (
            <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
              {description}
            </p>
          )}
          
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tech.map((technology, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
