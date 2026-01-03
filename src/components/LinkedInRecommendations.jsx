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
          flex flex-col gap-4
          rounded-xl
          border border-lime-400/60
          bg-lime-400/10
          px-6 py-5
          shadow-sm

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            See what my peers and managers say about my work
          </h3>
          <p className="mt-1 text-sm text-zinc-300">
            View verified LinkedIn recommendations
          </p>
        </div>

        {/* Center – desktop trust cue */}
        <div className="hidden md:block text-sm text-zinc-400 italic text-center px-6">
          Endorsed by peers, managers & cross-functional teams
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 text-lime-400 flex-shrink-0">
          <FaLinkedin className="h-7 w-7" />
          <span className="text-sm font-medium">
            View
          </span>
        </div>
      </motion.a>
    </section>
  );
}
