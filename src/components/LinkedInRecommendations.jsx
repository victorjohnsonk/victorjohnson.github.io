'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

export default function LinkedInRecommendations() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <motion.a
        href="https://www.linkedin.com/in/victor-johnson-7a4700386/details/recommendations/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          flex items-center justify-between gap-4
          rounded-xl
          border border-lime-400/60
          bg-lime-400/10
          px-6 py-5
          shadow-sm
        "
      >
        {/* Left content */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            What my colleagues say about me
          </h3>
          <p className="mt-1 text-sm text-zinc-300">
            View recommendations on LinkedIn
          </p>
        </div>

        {/* Right icon */}
        <div className="flex items-center gap-2 text-lime-400">
          <FaLinkedin className="h-7 w-7" />
          <span className="text-sm font-medium hidden sm:inline">
            View
          </span>
        </div>
      </motion.a>
    </section>
  );
}
