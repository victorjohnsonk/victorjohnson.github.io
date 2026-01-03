'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
          border border-lime-400/50
          bg-lime-400/10
          px-6 py-5
          shadow-sm
          transition duration-300

          sm:flex-row
          sm:items-center
          sm:justify-between

          md:opacity-90
          md:hover:opacity-100
        "
      >
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            See what my peers and managers say about my work
          </h3>
         <p className="mt-1 text-sm text-zinc-300">
          View verified LinkedIn recommendations <span className="ml-1">↗</span>
        </p>
        </div>

        {/* Center – desktop trust cue */}
        <div className="hidden md:block text-sm text-zinc-400 italic text-center px-6">
          Endorsed by peers, managers & cross-functional teams
        </div>

        {/* Right – your LinkedIn SVG */}
        <div className="flex items-center gap-2 font-semibold text-lime-400 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
          <span>LinkedIn</span>
        </div>
      </motion.a>
    </section>
  );
}
