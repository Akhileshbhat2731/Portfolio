import React from 'react';
import { FadeIn } from './UI';

const skillsData = [
  {
    number: "01",
    name: "Manual & Functional Testing",
    description: "Designing and executing comprehensive test cases, scenarios, and plans across regression, smoke, sanity, and end-to-end testing cycles."
  },
  {
    number: "02",
    name: "Defect Life Cycle & Triage",
    description: "Defect logging, severity and priority triage, tracking bug resolution with developers, and change request documentation."
  },
  {
    number: "03",
    name: "SDLC, STLC & Agile Methodology",
    description: "Applying structured Software Testing Life Cycle workflows in fast-paced Agile environments for seamless project delivery."
  },
  {
    number: "04",
    name: "Root-Cause Debugging",
    description: "In-depth analytical investigation, change history validation, and system audit log verification to isolate defects."
  },
  {
    number: "05",
    name: "Cross-Functional Collaboration",
    description: "Direct coordination with development teams and stakeholders to support quality assurance, knowledge sharing, and release validation."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="skills" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Expertise
        </h2>

        <div className="flex flex-col">
          {skillsData.map((skill, i) => (
            <FadeIn key={skill.number} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-6 md:gap-12">
                <span
                  className="text-[#0C0C0C] font-black leading-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {skill.number}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    className="text-[#0C0C0C] font-medium uppercase"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};