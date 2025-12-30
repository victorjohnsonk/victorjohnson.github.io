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
  title: 'Victor Johnson | Data Scientist',
  description:
    'Data Scientist with over seven years of experience using analytics, machine learning, and business intelligence to solve complex problems and support strategic decisions. Known for translating large and varied datasets into clear, actionable insights that help leaders respond quickly to business challenges. Experienced in guiding small teams, developing scalable data platforms, and working closely with senior stakeholders to ensure data initiatives meet organisational priorities.',
  keywords: [
    'Data Scientist',
    'Machine Learning Engineer',
    'AI Specialist',
    'LLM & RAG',
    'Advanced Analytics',
    'Data Science',
    'Statistical Modeling',
    'Predictive Analytics',
    'Business Intelligence',
    'Data Strategy',
    'Data Platform Development',
    'Big Data',
    'Data Visualization',
    'Python',
    'SQL',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'Natural Language Processing (NLP)',
    'Deep Learning',
    'Generative AI',
    'Data Storytelling',
    'Strategic Decision-Making',
    'Data-Driven Insights',
    'Team Leadership',
    'Stakeholder Management',
    'ETL Pipelines',
    'Data Governance',
    'Cloud Analytics',
    'Azure Machine Learning',
    'AWS SageMaker',
    'Model Deployment',
    'MLOps',
    'Data Architecture',
    'Business Analytics',
    'Experimentation & A/B Testing',
    'Performance Optimization',
  ],
  authors: [{ name: 'Victor Johnson', url: 'https://victorjohnson.online' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://victorjohnson.online',
    title: 'Victor Johnson | Data Scientist',
    description:
      'Data Scientist | AI & Machine Learning | LLM & RAG | Data Science & Advanced Analytics | Strategic Leadership',
    images: [
      {
        url: '/vj-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Victor Johnson | Data Scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@',
    title: 'Victor Johnson | Data Scientist',
    description:
      'Data Scientist | AI & Machine Learning | LLM & RAG | Data Science & Advanced Analytics | Strategic Leadership',
    images: ['/vj-photo.jpg'],
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
    <html lang="en">
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
