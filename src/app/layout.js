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
    'Senior AI & LLM Engineer with 7+ years of experience building production-grade LLM and Generative AI systems, including RAG, semantic search, and LLM-powered applications on Microsoft Azure. Specialist in end-to-end LLM systems: ingestion, embeddings, vector search, prompt orchestration, evaluation, deployment, and monitoring.',
  keywords: [
    'Senior AI Engineer',
    'LLM Engineer',
    'Generative AI Engineer',
    'Production RAG',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'Semantic Search',
    'Vector Databases',
    'LLMOps',
    'Azure OpenAI',
    'Machine Learning',
    'Natural Language Processing',
    'MLOps',
    'Python',
    'Apache Spark',
  ],
  authors: [{ name: 'Victor Johnson', url: 'https://victorjohnson.online' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://victorjohnson.online',
    title:
      'Victor Johnson | Senior AI & LLM Engineer | Production RAG & GenAI',
    description:
      'Senior AI & LLM Engineer specialising in production RAG, LLM evaluation, vector search, and GenAI systems on Azure.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Victor Johnson',
    url: 'https://victorjohnson.online',
    image: 'https://victorjohnson.online/vj-photo.png',
    jobTitle: 'Senior AI & LLM Engineer',
    description:
      'Senior AI & LLM Engineer specialising in production RAG, LLM systems, semantic search, and Generative AI on Microsoft Azure.',
    sameAs: [
      'https://www.linkedin.com/in/victorjohnsonk',
      'https://github.com/victorjohnsonk',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'SYMEUS',
    },
    knowsAbout: [
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Generative AI',
      'LLMOps',
      'Semantic Search',
      'Vector Databases',
      'Machine Learning',
      'MLOps',
      'Azure OpenAI',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Victor Johnson',
    url: 'https://victorjohnson.online',
    description:
      'Personal website of Victor Johnson, Senior AI & LLM Engineer specialising in production RAG and GenAI systems.',
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
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
