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
          {/* Mobile: icon only */}
          <FaLinkedin className="h-7 w-7 md:hidden" />

          {/* Desktop: LinkedIn wordmark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 135 34"
            className="hidden md:block h-6 w-auto fill-current"
            aria-label="LinkedIn"
          >
            <path d="M4 34H0V11h4v23zM2 9C.9 9 0 8.1 0 7s.9-2 2-2 2 .9 2 2-.9 2-2 2zM34 34h-4V22.2c0-2.8-.1-6.4-4-6.4-4 0-4.6 3.1-4.6 6.2V34h-4V11h3.8v3.1h.1c.5-1 2.6-3.1 5.5-3.1 5.9 0 7 3.9 7 8.9V34z" />
            <path d="M51 0h84c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H51c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4z" />
            <path
              fill="#000"
              d="M68 27h-4V14h4v13zm-2-15c-1.3 0-2-.9-2-2s.7-2 2-2 2 .9 2 2-.7 2-2 2zm21 15h-4v-6.6c0-1.7-.6-2.9-2.2-2.9-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V27h-4V14h3.8v1.8h.1c.5-.9 1.9-2.2 4.5-2.2 3.2 0 5.6 2.1 5.6 6.7V27z"
            />
          </svg>
        </div>
      </motion.a>
    </section>
  );
}
