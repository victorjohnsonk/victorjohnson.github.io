import { Figtree } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata = {
  title:
    'Victor Johnson | Senior AI & LLM Engineer | Production RAG & GenAI Systems',
  description:
    'Senior AI & LLM Engineer with 7+ years of experience building production-grade LLM and Generative AI systems, including RAG, semantic search, and LLM-powered applications on Microsoft Azure. Specialist in end-to-end LLM systems: ingestion, embeddings, vector search, prompt orchestration, evaluation, deployment, and monitoring, with a strong focus on reliability, performance, and cost efficiency.',
  keywords: [
    // Core role
    'Senior AI Engineer',
    'LLM Engineer',
    'Generative AI Engineer',
    'AI Engineer UK',

    // LLM & GenAI
    'Large Language Models',
    'LLMs',
    'Generative AI',
    'Prompt Engineering',
    'Retrieval-Augmented Generation',
    'RAG',
    'Semantic Search',
    'Embeddings',
    'Vector Search',
    'Vector Databases',
    'LLM Evaluation',
    'LLM Monitoring',
    'LLMOps',

    // Azure & Cloud
    'Azure OpenAI',
    'Microsoft Azure',
    'Azure Machine Learning',
    'Azure Databricks',
    'Azure AI Foundry',

    // ML & Data
    'Machine Learning',
    'Applied Machine Learning',
    'Natural Language Processing',
    'NLP',
    'Data Science',
    'Python',
    'SQL',
    'Apache Spark',

    // Production & MLOps
    'MLOps',
    'MLflow',
    'Model Monitoring',
    'Model Drift Detection',
    'Docker',
    'Production AI Systems',

    // Search & Knowledge
    'Knowledge Graphs',
    'Knowledge Graph Data Engineering',
    'Information Retrieval',

    // Software
    'FastAPI',
    'REST APIs',
    'Git',
    'GitHub',
  ],
  authors: [
    {
      name: 'Victor Johnson',
      url: 'https://victorjohnson.online',
    },
  ],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://victorjohnson.online',
    title:
      'Victor Johnson | Senior AI & LLM Engineer | Production RAG & GenAI',
    description:
      'Senior AI & LLM Engineer specialising in production RAG, LLM evaluation, vector search, and GenAI systems on Azure. Building reliable, scalable, real-world AI products.',
    images: [
      {
        url: '/vj-photo.png',
        width: 1200,
        height: 630,
        alt: 'Victor Johnson | Senior AI & LLM Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Victor Johnson | Senior AI & LLM Engineer | Production RAG & GenAI',
    description:
      'Senior AI & LLM Engineer building production-grade RAG, LLM, and GenAI systems on Azure.',
    images: ['/vj-photo.png'],
  },
  alternates: {
    canonical: 'https://victorjohnson.online',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body
        className={`${figtree.className} bg-neutral-950 text-white antialiased`}
      >
        <div className="pointer-events-none absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:24px_24px]"></div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
