import Hero from '@/components/Hero';
import LinkedInRecommendations from '@/components/LinkedInRecommendations';
import ProjectsFeatured from '@/components/ProjectsFeatured';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certificate from '@/components/Certificate';
import React from 'react';

const page = () => {
  return (
    <div className="space-y-5">
      <Hero />
      <Skills />
      {/* <ProjectsFeatured /> */}
      <Experience />
      <LinkedInRecommendations />
      <Education />
      <Certificate />
    </div>
  );
};

export default page;
