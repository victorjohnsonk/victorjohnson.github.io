'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Data Scientist (AI/LLM Focus)',
    company: 'SYMEUS LTD',
    industry: 'Finance',
    start: 'Feb 2021',
    end: 'Present',
    location: 'England, United Kingdom · Hybrid',
    description: `
Operating as a senior individual contributor, leading the design, deployment, and operation of production LLM and RAG systems end-to-end.

AI / LLM Systems (Primary):
  Led development of production-grade LLM and RAG solutions, owning ingestion, embedding pipelines, retrieval, prompt orchestration, evaluation, deployment, and monitoring
  Built LLM-powered intelligent search, chatbots, and ranking workflows used in internal products
  Designed and implemented LLM evaluation frameworks (precision/recall, F1, BLEU, ROUGE, relevance & faithfulness metrics) to measure quality and reduce hallucinations
  Implemented prompt strategies, grounding logic, guardrails, and output validation to improve reliability and safety in live systems
  Applied parameter-efficient model adaptation approaches (LoRA) using domain-specific data to support retrieval and contextual understanding.
  Built scalable data preparation pipelines (cleaning, tokenization, chunking, embeddings) for training and fine-tuning
  Ran A/B tests and benchmarks across models, embeddings, retrievers, and prompt variants to optimize quality, latency, and cost

Machine Learning & Applied Analytics (Secondary):
  Developed forecasting models for revenue, traffic, and user activity using Python and ML frameworks
  Built statistical models to support scenario planning and financial analysis
  Created automated insights pipelines using GA4, GSC, and internal data sources

Data Engineering & Platform:
  Built scalable data pipelines using Apache Spark and Azure Synapse to support near real-time analytics and ML workloads
  Optimized complex SQL / T-SQL queries (CTEs, window functions, indexing) to improve performance
  Designed KPI dashboards in Power BI and Streamlit using advanced DAX and Python
  Improved data quality through governance, validation, and automated checks, reducing reporting turnaround time by ~40%`,
  },
  {
    title: 'Data Scientist (ML Focus)',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2018',
    end: 'Dec 2020',
    location: 'Bengaluru, India · On-site',
    description: `
Applied Machine Learning & Predictive Systems:
  Developed production machine learning models for predictive maintenance, including Remaining Useful Life (RUL) estimation for critical train components
  Built time-series and survival analysis models to predict failures, degradation, and maintenance needs across multiple subsystems
  Analyzed high-volume telemetry data to identify failure patterns, sensor drift, and anomalous behavior in operational environments
  Designed component-level health indicators and engineered features that improved prediction accuracy and model stability

Data Engineering & Model Integration
  Implemented robust data validation, preprocessing, and feature pipelines to ensure reliability of sensor and operational data
  Integrated predictive models into operational reporting and decision-support systems, enabling faster and more informed maintenance decisions
  Supported condition-based maintenance strategies that improved fleet availability and reduced unplanned downtime

Analytics Platforms & Visualization
  Built dashboards in Shiny, Qlik Sense, and Tableau to visualize asset health, predictions, and maintenance KPIs
  Contributed to the setup of the operations center by delivering KPI-driven visualizations and automated model outputs
  Applied IEC 62541 standards to improve data acquisition consistency and interoperability across systems`,
  },
  {
    title: 'Junior Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2017',
    end: 'Dec 2018',
    location: 'Bengaluru, India · On-site',
    description: `
  Developed an Elasticsearch-based search application leveraging BM25 relevance scoring, inverted indexes, and NLP techniques for information retrieval.
  Developed automated ETL pipelines using Apache Airflow
  Contributed to Spark and Kafka streaming workflows for real-time telemetry data processing
  Built RPA workflows to automate SAP-based maintenance data handling`,
  },
  {
    title: 'Data Science Intern',
    company: 'Pi Revolutions',
    industry: 'Retail Tech',
    start: 'Sep 2017',
    end: 'Nov 2017',
    location: 'Bengaluru, India · On-site',
    description: `
  Supported data analysis and automation workflows for NFC-enabled billing kiosks
  Performed exploratory analysis to support process improvements`,
  },
  {
    title: 'Intern',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Aug 2016',
    end: 'Sep 2016',
    location: 'Bengaluru, India · On-site',
    description: `
  Automated routine business processes using VBA in Excel, ensuring compliance with internal data standards and improving efficiency, which saved more than 10 hours of reporting work each week`,
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
                <p className="text-lime-400 font-medium">Company - {exp.company}</p>

                {/* Location + Industry */}
                <p className="text-xs text-zinc-400 italic">
                  {exp.location}
                  {exp.industry && (
                    <span className="not-italic text-zinc-500"> | </span>
                  )}
                  {exp.industry && (
                    <span className="not-italic">Industry - {exp.industry}</span>
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
