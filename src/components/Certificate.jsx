'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

/* =======================
   CERTIFICATE DATA
======================= */

const certificates = [
  {
    certification: 'Agentic AI Design Patterns for GenAI and Predictive AI',
    issuedBy: 'LinkedIn',
    validFrom: 'Jan 2026',
    skills: [],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/fc88214d34d003f54a1f4e7cae570921f5e947afba368af4898cd3944ead5b22',
  },
  {
    certification: 'Azure OpenAI: Advanced Topics',
    issuedBy: 'LinkedIn',
    validFrom: 'Jan 2026',
    skills: [],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/4906d2da936250e1cfd1f6de5436329de8864d20482adc066c709afe0a5012d8',
  },
  {
    certification:
      'ISO/IEC 42001:2023: Understanding and Implementing the Artificial Intelligence Management System (AIMS) Standard',
    issuedBy: 'LinkedIn',
    validFrom: 'Jan 2026',
    skills: [],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/dbdf3a78e651974d0a92efcd9cadd9457b6adaef3f4034204e5f9657228f0e7a',
  },
  {
    certification: 'AI Security & Governance Certification I',
    issuedBy: 'Securiti',
    validFrom: 'Jan 2026',
    validTo: 'Jan 2028',
    skills: ['Artificial Intelligence (AI)', 'Governance', 'AI Security'],
    credentialUrl:
      'https://education.securiti.ai/verification/144EFD399-144EFD208-13ECBB641/',
  },
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
    skills: ['Machine Learning', 'MLOps', 'Artificial Intelligence (AI)'],
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
    certification:
      'Semantic Search and Information Retrieval using GenAI',
    issuedBy: 'LinkedIn',
    validFrom: 'Dec 2025',
    skills: ['Generative AI', 'Semantic Search', 'Artificial Intelligence (AI)'],
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/546d59112472bfad28484b00c23da5c581a880989261507a3a6660af8bd4ff8e',
  },
];

/* =======================
   COMPONENT
======================= */

const ITEMS_PER_PAGE = 6;

export default function Certificate() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);

  const paginatedCertificates = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return certificates.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  return (
    <section
      id="certifications"
      className="mx-auto w-full max-w-6xl px-4 py-14"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 border-l-4 border-lime-400 pl-4 text-3xl font-semibold tracking-tight text-zinc-100"
      >
        Certifications
      </motion.h1>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {paginatedCertificates.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 shadow-sm transition hover:border-lime-400 hover:shadow-md"
            >
              {/* Title */}
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-white leading-tight">
                  {cert.certification}
                </h2>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-lime-400 hover:text-white hover:underline"
                  >
                    Check
                    <HiArrowTopRightOnSquare className="h-3 w-3" />
                  </a>
                )}
              </div>

              {/* Meta */}
              <div className="mt-1 text-xs text-zinc-400">
                <span className="font-medium text-lime-400">
                  {cert.issuedBy}
                </span>{' '}
                · Issued {cert.validFrom}
                {cert.validTo && ` · Expires ${cert.validTo}`}
              </div>

              {/* Skills */}
              {cert.skills?.length > 0 && (
                <p className="mt-2 text-xs text-zinc-400">
                  <span className="font-medium text-zinc-300">Skills:</span>{' '}
                  {cert.skills.join(' · ')}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="rounded border border-zinc-700 px-3 py-1 text-zinc-300 disabled:opacity-40 hover:border-lime-400 hover:text-lime-400"
        >
          First
        </button>

        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="rounded border border-zinc-700 px-3 py-1 text-zinc-300 disabled:opacity-40 hover:border-lime-400 hover:text-lime-400"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`rounded px-3 py-1 border ${
                page === pageNum
                  ? 'border-lime-400 bg-lime-400/10 text-lime-400'
                  : 'border-zinc-700 text-zinc-400 hover:border-lime-400 hover:text-lime-400'
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="rounded border border-zinc-700 px-3 py-1 text-zinc-300 disabled:opacity-40 hover:border-lime-400 hover:text-lime-400"
        >
          Next
        </button>

        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
          className="rounded border border-zinc-700 px-3 py-1 text-zinc-300 disabled:opacity-40 hover:border-lime-400 hover:text-lime-400"
        >
          Last
        </button>
      </div>
    </section>
  );
}
