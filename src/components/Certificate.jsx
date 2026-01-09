'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const certificates = [
  {
    certification: 'AI Security & Governance CertificationI',
    issuedBy: 'Securiti',
    validFrom: 'Jan 2026',
    validTo: 'Jan 2028',
    skills: ['Artificial Intelligence (AI)', 'Governance', 'AI Security'],
    credentialUrl:
      'https://education.securiti.ai/verification/144EFD399-144EFD208-13ECBB641/',
  },
  // LinkedIn Learning
  {
    certification: 'Data Versioning, Lineage, and Quality Monitoring for AI',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: [],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/d299716f05bb9b98354c3b6e127353d0065b8a6ebda00143083b5ae05f315daa',
  },
  {
    certification: 'Introduction to MLSecOps',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: [
      'Machine Learning',
      'MLOps',
      'Artificial Intelligence (AI)',
    ],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/24d9c8481209a5a5c13a445c371fd170db429436be225b7e48bdf0e0ab8d8af0',
  },
  {
    certification:
      'Knowledge Graph Data Engineering for Generative AI Use Cases',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: [
      'Generative AI',
      'Knowledge Graphs',
      'Retrieval-Augmented Generation (RAG)',
      'Artificial Intelligence (AI)',
    ],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/41bcab725208fdcb8688db5786e20eab5295e204bda3fdc49613a804966709d4',
  },
  {
    certification: 'MLOps Essentials: Monitoring Model Drift and Bias',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: ['MLOps', 'Artificial Intelligence (AI)'],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/29ed69be0a871e7073d250cbb7bd2662f6c304c99450eafe6e7029e5155da750',
  },
  {
    certification: 'MLOps and Data Pipeline Orchestration for AI Systems',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: [],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/7a99c12d388d26f7dbff179b5b9557d08a93831b38a854fd96e3ada7490da1ae',
  },
  {
    certification: 'Semantic Search and Information Retrieval using GenAI',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: [
      'Generative AI',
      'Semantic Search',
      'Artificial Intelligence (AI)',
    ],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/546d59112472bfad28484b00c23da5c581a880989261507a3a6660af8bd4ff8e',
  },
  {
    certification:
      'Working with Data: Engineering, Integration, and MLOps for AI',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: [
      'Large Language Model Operations (LLMOps)',
      'Vector Databases',
      'MLOps',
      'Artificial Intelligence (AI)',
    ],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/1967558dc71f5ee15d2ae42b5b9260e8e268836d5715abbc55d403e21351a12d',
  },

  // Hugging Face
  {
    certification: 'AI Agents Fundamentals',
    issuedBy: 'Hugging Face',
    validFrom: 'Oct 2025',
    credentialId: 'victor-johnson',
    skills: [],
    credentialUrl:
      'https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/victor-johnson/2025-10-13.png',
  },

  // Alteryx
  {
    certification: 'Alteryx Auto Insights Micro-Credential',
    issuedBy: 'Alteryx',
    validFrom: 'Oct 2025',
    validTo: 'Oct 2027',
    credentialId: '30b212a6-8f6b-4a8d-b44a-d19004b4ab08',
    skills: [],
    credentialUrl:
      'https://www.credly.com/badges/30b212a6-8f6b-4a8d-b44a-d19004b4ab08/public_url',
  },
  {
    certification: 'Alteryx Designer Core Certified',
    issuedBy: 'Alteryx',
    validFrom: 'Oct 2025',
    validTo: 'Oct 2027',
    credentialId: 'fa2d1b38-ef83-402b-ab21-e21a91d3e4a3',
    skills: [],
    credentialUrl:
      'https://www.credly.com/badges/fa2d1b38-ef83-402b-ab21-e21a91d3e4a3/public_url',
  },
  {
    certification:
      'Alteryx Machine Learning Fundamentals Micro-Credential',
    issuedBy: 'Alteryx',
    validFrom: 'Oct 2025',
    validTo: 'Oct 2027',
    credentialId: 'af37e6ea-67cb-4b9e-9b8d-ff94afb292a3',
    skills: [],
    credentialUrl:
      'https://www.credly.com/badges/af37e6ea-67cb-4b9e-9b8d-ff94afb292a3/public_url',
  },

  // n8n
  {
    certification: 'n8n Course Level 1',
    issuedBy: 'n8n',
    validFrom: 'Oct 2025',
    credentialId: '4916639a1c6dddf0372d1f9fcf29623c',
    skills: [],
    credentialUrl:
      'https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=victorjohnson',
  },
  {
    certification: 'n8n Course Level 2',
    issuedBy: 'n8n',
    validFrom: 'Oct 2025',
    credentialId: '4916639a1c6dddf0372d1f9fcf29623c',
    skills: [],
    credentialUrl:
      'https://community.n8n.io/badges/105/completed-n8n-course-level-2?username=victorjohnson',
  },

  // Databricks
  {
    certification: 'Academy Accreditation - Databricks Fundamentals',
    issuedBy: 'Databricks',
    validFrom: 'Sep 2025',
    skills: ['Azure Databricks'],
    credentialUrl:
      'https://credentials.databricks.com/82781fa1-ecc6-4856-a236-186dcecee27a#acc.MoK0uxXz',
  },
  {
    certification: 'Academy Accreditation - Generative AI Fundamentals',
    issuedBy: 'Databricks',
    validFrom: 'Sep 2025',
    skills: ['Azure Databricks'],
    credentialUrl:
      'https://credentials.databricks.com/5a74e3c5-3569-4002-a1bb-79c087dc9b7d#acc.Zi1PBLKr',
  },

  // Oracle
  {
    certification:
      'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuedBy: 'Oracle',
    validFrom: 'Sep 2025',
    validTo: 'Sep 2027',
    credentialId: '1Z0-1122-25',
    skills: [
      'Machine Learning',
      'Artificial Intelligence (AI)',
    ],
    credentialUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1721C59E2FC0174426F0471B05B617123247EDA5B52D715C9DDE2310D37114B7',
  },

  // Udemy
  {
    certification:
      'AI-Driven Market Analysis: Predict & Profit with ML Models',
    issuedBy: 'Udemy',
    validFrom: 'Oct 2025',
    skills: ['Machine Learning'],
    credentialUrl:
      'https://www.udemy.com/certificate/UC-acf45108-2f17-40c8-bc0a-67c4b09e2c0f/',
  },
  {
    certification:
      'Expert Certificate: Marketing Data Analysis & Data Analytics',
    issuedBy: 'Udemy',
    validFrom: 'Oct 2025',
    skills: ['Machine Learning'],
    credentialUrl:
      'https://www.udemy.com/certificate/UC-208070e5-bee6-4c72-8b27-9e4717f9140a/',
  },
  {
    certification:
      'NLP in Python: Probability Models, Statistics, Text Analysis',
    issuedBy: 'Udemy',
    validFrom: 'Oct 2025',
    skills: [],
    credentialUrl:
      'https://www.udemy.com/certificate/UC-051aad05-0f90-4511-9ee0-339092370fba/',
  },
  {
    certification:
      'NotebookLM Mastery: Organize, Analyze, and Optimize with AI',
    issuedBy: 'Udemy',
    validFrom: 'Oct 2025',
    skills: [],
    credentialUrl:
      'https://www.udemy.com/certificate/UC-5a7033f8-4193-4290-a6bb-53c9f5905644/',
  },
];


export default function Certificate() {
  return (
    <section id="certifications" className="mx-auto w-full max-w-6xl px-4 py-14">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 border-l-4 border-lime-400 pl-4 text-3xl font-semibold tracking-tight text-zinc-100"
      >
        Certifications
      </motion.h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 shadow-sm transition hover:border-lime-400 hover:shadow-md"
          >
            {/* Title row */}
            <div className="flex w-full items-start justify-between gap-2">
              <h2 className="text-lg font-semibold text-white leading-tight">
                {cert.certification}
              </h2>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-lime-400 hover:text-white hover:underline"
                >
                  Check Credential
                  <HiArrowTopRightOnSquare className="h-3 w-3" />
                </a>
              )}
            </div>

            {/* Issuer + Issued/Expiry */}
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="font-medium text-lime-400">{cert.issuedBy}</span>
              <span>
                Issued {cert.validFrom}
                {cert.validTo ? ` · Expires ${cert.validTo}` : ''}
              </span>
            </div>

            {/* Credential ID */}
            {cert.credentialId && (
              <p className="mt-1 text-xs text-zinc-500">
                Credential ID: {cert.credentialId}
              </p>
            )}

            {/* Skills */}
            {cert.skills && cert.skills.length > 0 && (
              <p className="mt-2 text-xs text-zinc-400">
                <span className="font-medium text-zinc-300">Skills:</span>{' '}
                {cert.skills.join(' · ')}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
