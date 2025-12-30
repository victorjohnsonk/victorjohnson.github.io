'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
  {
    category: 'LLMs & Generative AI',
    items: [
      'Large Language Models (LLMs)',
      'Generative AI',
      'Prompt Engineering',
      'Retrieval-Augmented Generation (RAG)',
      'Semantic Search',
      'Embeddings & Vector Search',
      'Vector Databases',
      'LLM Evaluation & Monitoring',
      'LLMOps',
      'Chatbot Development',
      'LlamaIndex',
      'Azure OpenAI',
      'Azure AI Foundry',
    ],
  },
  {
    category: 'Machine Learning & NLP',
    items: [
      'Machine Learning',
      'Applied Machine Learning',
      'Natural Language Processing (NLP)',
      'Scikit-learn',
      'Artificial Intelligence (AI)',
      'Predictive Maintenance',
    ],
  },
  {
    category: 'Data Science & Analytics',
    items: [
      'Data Science',
      'Python',
      'SQL',
      'Transact-SQL (T-SQL)',
      'Statistical Modeling',
      'Data Visualization',
      'Financial Modeling',
    ],
  },
  {
    category: 'Data Engineering & Big Data',
    items: [
      'Apache Spark',
      'Azure Databricks',
      'Apache Kafka',
      'Kafka Streams',
      'Apache Airflow',
      'Azure Data Factory',
      'Elasticsearch',
      'Azure SQL',
    ],
  },
  {
    category: 'Knowledge Graphs & Search',
    items: [
      'Knowledge Graphs',
      'Knowledge Graph Data Engineering',
      'Semantic Search & Information Retrieval',
    ],
  },
  {
    category: 'MLOps & Production AI',
    items: [
      'MLOps',
      'MLflow',
      'Model Monitoring',
      'Model Drift & Bias Detection',
      'Docker',
    ],
  },
  {
    category: 'Cloud & Platforms',
    items: [
      'Microsoft Azure',
      'Azure Machine Learning',
      'Oracle Cloud Infrastructure (AI Foundations)',
    ],
  },
  {
    category: 'Software & APIs',
    items: [
      'FastAPI',
      'REST APIs',
      'Software Development',
      'Git',
      'GitHub',
    ],
  },
];


  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <div className="flex flex-col items-start space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight text-zinc-100 border-l-4 border-lime-400 pl-4"
        >
          Tech Stack
        </motion.h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-zinc-900/30 p-5 transition-all hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/10"
            >
              <h2 className="text-xl font-medium text-lime-300 mb-3">
                {skill.category}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-300 bg-zinc-800/60 px-3 py-1 rounded-md border border-zinc-700/30 hover:border-lime-400/50 hover:text-lime-200 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
