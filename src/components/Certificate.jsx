'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const certificates = [
  // n8n
  {
    certification: 'n8n Course Level 1',
    issuedBy: 'n8n',
    validFrom: 'Oct 2025',
    credentialId: '4916639a1c6dddf0372d1f9fcf29623c',
    skills: ['n8n', 'Workflow Management', 'Managing Workflow'],
    credentialUrl:
      'https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=victorjohnson',
  },
  {
    certification: 'n8n Course Level 2',
    issuedBy: 'n8n',
    validFrom: 'Oct 2025',
    credentialId: '4916639a1c6dddf0372d1f9fcf29623c',
    skills: ['n8n', 'Managing Workflow', 'Workflow Automation'],
    credentialUrl:
      'https://community.n8n.io/badges/105/completed-n8n-course-level-2?username=victorjohnson',
  },

  // Databricks
  {
    certification: 'Academy Accreditation - Databricks Fundamentals',
    issuedBy: 'Databricks',
    validFrom: 'Sep 2025',
    validTo: 'Sep 2028',
    skills: ['Azure Databricks', 'Data Engineering', 'Big Data Analytics'],
    credentialUrl:
      'https://credentials.databricks.com/82781fa1-ecc6-4856-a236-186dcecee27a#acc.MoK0uxXz',
  },
  {
    certification: 'Academy Accreditation - Generative AI Fundamentals',
    issuedBy: 'Databricks',
    validFrom: 'Sep 2025',
    validTo: 'Sep 2028',
    skills: ['Generative AI', 'Azure Databricks', 'AI Fundamentals'],
    credentialUrl:
      'https://credentials.databricks.com/5a74e3c5-3569-4002-a1bb-79c087dc9b7d#acc.Zi1PBLKr',
  },

  // Oracle
  {
    certification:
      'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuedBy: 'Oracle',
    validFrom: 'Sep 2025',
    validTo: 'Sep 2028',
    credentialId: '1Z0-1122-25',
    skills: [
      'Artificial Intelligence (AI)',
      'Machine Learning',
      'Oracle Cloud',
      'Neural Networks',
    ],
    credentialUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1721C59E2FC0174426F0471B05B617123247EDA5B52D715C9DDE2310D37114B7',
  },

  // Udemy
  {
    certification: 'Expert Certificate: Marketing Data Analysis & Data Analytics',
    issuedBy: 'Udemy',
    validFrom: 'May 2025',
    skills: [
      'Marketing Analytics',
      'Data Analysis',
      'Data Visualization',
      'Business Intelligence',
    ],
    credentialUrl:
      'https://www.udemy.com/certificate/UC-208070e5-bee6-4c72-8b27-9e4717f9140a/',
  },
  {
    certification: 'Professional Certificate: Finance Data Analysis & Analytics',
    issuedBy: 'Udemy',
    validFrom: 'May 2025',
    skills: [
      'Financial Analytics',
      'Data Analysis',
      'Quantitative Analysis',
      'Business Intelligence',
    ],
    credentialUrl:
      'https://www.udemy.com/certificate/UC-619457ea-eef3-4e9a-9d15-3b30584c4ce5/',
  },
  {
    certification:
      'Sales & Service Data Analysis & Analytics Expert Certificate',
    issuedBy: 'Udemy',
    validFrom: 'May 2025',
    skills: [
      'Sales Analytics',
      'Customer Service Analytics',
      'Data Visualization',
      'CRM Data Analysis',
    ],
    credentialUrl:
      'https://www.udemy.com/certificate/UC-24881597-f861-435d-9215-9015dc1e326f/',
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
