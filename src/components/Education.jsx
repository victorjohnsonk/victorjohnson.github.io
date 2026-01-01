'use client';

import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Master of Science in Data Science',
    school: 'University of East Anglia',
    start: '2021',
    end: '2022',
    grade: 'Distinction',
    projects: [
      {
        title: 'Depression Detection Using Machine Learning',
        year: '2021',
      },
    ],
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'University of Calicut',
    start: '2013',
    end: '2017',
    grade: 'First Class',
    projects: [
      {
        title: 'Weather Forecasting Using Data Mining',
        year: '2017',
      }, {
        title: 'Traffic Sign Board Detection and Alerting using Computer Vision',
        year: '2016',
      },
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-4 py-14">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 border-l-4 border-lime-400 pl-4 text-3xl font-semibold tracking-tight text-zinc-100"
      >
        Education
      </motion.h1>

      <div className="relative space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-sm transition hover:border-lime-400 hover:shadow-md"
          >
            {/* Header Row */}
            <div className="flex w-full items-start justify-between gap-2">
              <h2 className="text-xl font-semibold text-white leading-tight">
                {edu.degree}
              </h2>
              <span className="flex-shrink-0 text-xs text-lime-400 text-right whitespace-nowrap">
                {edu.start} — {edu.end}
                {edu.grade && (
                  <span className="text-zinc-400 ml-1"> | Grade: {edu.grade}</span>
                )}
              </span>
            </div>

            {/* School */}
            <p className="text-lime-400 font-medium mt-1">{edu.school}</p>

            {/* Academic Projects (Title Only) */}
            <div className="mt-3">
              <p className="text-sm text-zinc-400 font-medium mb-1">Academic Projects:</p>
              <ul className="space-y-1 text-zinc-300 text-sm">
  {edu.projects.map((proj, idx) => (
    <li key={idx} className="flex gap-2">
      <span className="opacity-50">–</span>
      <span>
        {proj.title}
        {proj.year && (
          <span className="text-zinc-500 text-xs ml-2">
            ({proj.year})
          </span>
        )}
      </span>
    </li>
  ))}
</ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
