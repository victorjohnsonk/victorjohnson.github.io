'use client';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col justify-between gap-20 px-4 pt-20 lg:flex-row lg:pt-40">
      <div>
        <span>Hey there, I am</span>
        <h1 className="text-2xl font-medium lg:text-4xl">Victor Johnson</h1>
        <p className="font-light lg:text-xl">
          Senior AI / LLM Engineer | Production RAG & LLM Systems | Data Science | Azure, Python
        </p>
        <p className="mt-5">
          Senior AI / LLM Engineer with 7+ years of experience building production LLM and GenAI systems, including RAG, intelligent search, and LLM-powered applications in Azure.{' '}
          <br className="hidden lg:block" />
          I own LLM systems end-to-end: ingestion, embeddings, retrieval, prompt orchestration, evaluation, deployment, and monitoring, with a focus on reliability, performance, and cost in real products.{' '}
          <br className="hidden lg:block" />
          Core expertise: LLMs, RAG, Vector search, LLM evaluation, Python, Azure OpenAI, Spark, MLOps etc.
        </p>

        {/* Availability */}
        <div className="mt-6 flex items-center gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-lime-500"></span>
          </span>
          <p>England, United Kingdom</p>
        </div>

        {/* Buttons with icons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/victor-johnson-7a4700386/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-lime-400/50 bg-lime-400/10 px-8 py-2 font-semibold text-lime-400 transition duration-300 hover:bg-lime-400/20 hover:text-lime-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
              0 16 .513 16 1.146v13.708c0 .633-.526 
              1.146-1.175 1.146H1.175C.526 16 0 
              15.487 0 14.854V1.146zm4.943 
              12.248V6.169H2.542v7.225h2.401zm-1.2
              -8.212c.837 0 1.358-.554 
              1.358-1.248-.015-.709-.52-1.248-1.342
              -1.248-.822 0-1.359.54-1.359 
              1.248 0 .694.521 1.248 1.327 
              1.248h.016zm4.908 8.212V9.359c0
              -.216.016-.432.08-.586.173-.431.568
              -.878 1.232-.878.869 0 1.216.662 
              1.216 1.634v3.865h2.401V9.25c0-2.22
              -1.184-3.252-2.764-3.252-1.274 0
              -1.845.7-2.165 1.193v.025h-.016a5.54
              5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 
              0 7.225 0 7.225h2.4z" />
            </svg>
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/victorjohnsonk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-lime-400/50 bg-lime-400/10 px-8 py-2 font-semibold text-lime-400 transition duration-300 hover:bg-lime-400/20 hover:text-lime-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 
              8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49
              -2.69-.94-.09-.23-.48-.94-.82-1.13
              -.28-.15-.68-.52-.01-.53.63-.01 
              1.08.58 1.23.82.72 1.21 1.87.87 
              2.33.66.07-.52.28-.87.51-1.07
              -1.78-.2-3.64-.89-3.64-3.95 
              0-.87.31-1.59.82-2.15-.08-.2
              -.36-1.02.08-2.12 0 0 .67-.21 
              2.2.82.64-.18 1.32-.27 2-.27.68 
              0 1.36.09 2 .27 1.53-1.04 2.2
              -.82 2.2-.82.44 1.1.16 1.92.08 
              2.12.51.56.82 1.27.82 2.15 
              0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
              1.48 0 1.07-.01 1.93-.01 2.2 
              0 .21.15.46.55.38A8.012 8.012 0 0 0 
              16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          {/* Email
          <a
            href="mailto:hello@victorjohnson.online"
            className="inline-flex items-center gap-2 rounded-lg border border-lime-400/50 bg-lime-400/10 px-8 py-2 font-semibold text-lime-400 transition duration-300 hover:bg-lime-400/20 hover:text-lime-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 
              2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 
              1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 
              2.383-4.708 2.825L15 11.105V5.383zM14.247 
              12 9.708 8.875 8 9.944 6.292 8.875 
              1.753 12H14.247zM1 11.105l4.708-2.897L1 
              5.383v5.722z" />
            </svg>
            Email
          </a> */}
        </div>
      </div>

      {/* Profile image */}
      <div>
        <Image
          src="/vj-photo.png"
          width={400}
          height={400}
          alt="Victor Johnson"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
