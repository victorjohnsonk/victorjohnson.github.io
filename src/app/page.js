import Hero from '@/components/Hero';
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
      <Certificate />
      <Education />
    </div>
  );
};

export default page;
