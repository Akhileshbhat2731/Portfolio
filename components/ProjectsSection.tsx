import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './UI';

interface Project {
  number: string;
  name: string;
  category: string;
  imgCol1Top: string;
  imgCol1Bottom: string;
  imgCol2: string;
}

const projects: Project[] = [
  {
    number: "01",
    name: "PMO Dashboard Application",
    category: "Functional & System Testing",
    imgCol1Top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    imgCol1Bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    imgCol2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    number: "02",
    name: "Code Management App",
    category: "Configuration & Audit Testing",
    imgCol1Top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    imgCol1Bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    imgCol2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    number: "03",
    name: "Software Testing with Java",
    category: "Dhee Coding Lab Internship",
    imgCol1Top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    imgCol1Bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    imgCol2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 pb-32">
      <div className="max-w-6xl mx-auto">
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <Card key={project.number} project={project} index={index} totalCards={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ project: Project; index: number; totalCards: number }> = ({
  project,
  index,
  totalCards
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sticky top-24 md:top-32"
      style={{ top: `calc(5rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-[#D7E2EA] uppercase">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton label="Case Study" />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-12 gap-4 flex-1 h-full min-h-0 overflow-hidden pt-2">
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 h-full">
            <img
              src={project.imgCol1Top}
              alt={`${project.name} preview top`}
              className="w-full rounded-[30px] sm:rounded-[40px] object-cover flex-shrink-0"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.imgCol1Bottom}
              alt={`${project.name} preview bottom`}
              className="w-full rounded-[30px] sm:rounded-[40px] object-cover flex-1 min-h-0"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          <div className="col-span-12 md:col-span-7 h-full">
            <img
              src={project.imgCol2}
              alt={`${project.name} preview full`}
              className="w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};