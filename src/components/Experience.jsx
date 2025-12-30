'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Data Scientist',
    company: 'SYMEUS',
    industry: 'Finance',
    start: 'Feb 2021',
    end: 'Present',
    location: 'England, United Kingdom · Hybrid',
    description: `
Driving the design and implementation of AI, LLM, and RAG-based solutions for internal tools, ranking systems, and intelligent knowledge discovery.
Leading a data audit and governance function, introducing compliance and automation processes that improved data accuracy and reduced reporting time by 40%.
Partnered with senior executives to design analytics approaches that informed investment decisions, financial planning, and operational priorities.
Built scalable data pipelines with Apache Spark and Azure Synapse to deliver near real-time analytics, enabling faster response to business changes.
Created financial KPI monitoring tools in Power BI with advanced DAX, helping budget owners track performance and adjust plans proactively.
Developed forecasting and statistical models to predict revenue, visitors, and clicks, improving planning accuracy and resource allocation.`,
  },
  {
    title: 'Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2018',
    end: 'Dec 2020',
    location: 'Bengaluru, India · On-site',
    description: `
Designed predictive maintenance solutions using Remaining Useful Life forecasting to reduce downtime and improve train availability.
Built an internal R analytics toolkit with Qlik Sense integration, standardising analytical workflows across business units.
Managed a small data engineering team, setting standards for ingestion, transformation, and warehousing.
Created dashboards in Shiny, Qlik Sense, and Tableau to help executives review KPIs quickly.
Performed exploratory analysis on train telemetry data using Python and R, identifying anomalies and operational inefficiencies.`,
  },
  {
    title: 'Junior Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2017',
    end: 'Dec 2018',
    location: 'Bengaluru, India · On-site',
    description: `
Developed a semantic search engine using Elasticsearch and Flask to improve document access.
Built automated ETL workflows with Apache Airflow, reducing manual effort.
Implemented an SAP RPA solution to manage maintenance records, later adopted company-wide.
Supported Spark and Kafka streaming workflow development for real-time telemetry data.`,
  },
  {
    title: 'Data Science Intern',
    company: 'Pi Revolutions',
    industry: 'Retail Tech',
    start: 'Sep 2017',
    end: 'Nov 2017',
    location: 'Bengaluru, India · On-site',
    description: `
Contributed to data analysis and automation workflows for NFC-enabled billing kiosks, supporting IoT product deployment.`,
  },
  {
    title: 'Intern',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Aug 2016',
    end: 'Sep 2016',
    location: 'Bengaluru, India · On-site',
    description: `
Automated routine business processes using VBA in Excel, saving over 10 hours per week in reporting tasks.`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-14">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 border-l-4 border-lime-400 pl-4 text-3xl font-semibold tracking-tight text-zinc-100"
      >
        Experience
      </motion.h1>

      <div className="relative space-y-8">
        {experiences.map((exp, i) => {
          const isPresent = exp.end?.toLowerCase() === 'present';

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-sm transition hover:border-lime-400 hover:shadow-md"
            >
              {/* Dot */}
              <div className="mt-2 flex-shrink-0 relative">
                {isPresent ? (
                  <>
                    <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-lime-400"></span>
                  </>
                ) : (
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-zinc-500"></span>
                )}
              </div>

              {/* Card Content */}
              <div className="w-full">
                <div className="flex w-full items-start justify-between gap-2">
                  <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
                  <span className="flex-shrink-0 text-xs text-lime-400 text-right whitespace-nowrap">
                    {exp.start} — {exp.end}
                  </span>
                </div>

                {/* Company */}
                <p className="text-lime-400 font-medium">{exp.company}</p>

                {/* Location + Industry */}
                <p className="text-xs text-zinc-400 italic">
                  {exp.location}
                  {exp.industry && (
                    <span className="not-italic text-zinc-500"> | </span>
                  )}
                  {exp.industry && (
                    <span className="not-italic">Industry: {exp.industry}</span>
                  )}
                </p>

                <p className="mt-2 text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                  {exp.description.trim()}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
