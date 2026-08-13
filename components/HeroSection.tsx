import React from 'react';
import { ContactButton, FadeIn, Magnet } from './UI';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-20">
        <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          About
        </a>
        <a href="#skills" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          Skills
        </a>
        <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          Projects
        </a>
        <a href="#experience" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
          Contact
        </a>
      </FadeIn>

      {/* Main Heading */}
      <div className="overflow-hidden w-full text-center relative z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m akhilesh
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait/Graphic */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Akhilesh Bhat Portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain pointer-events-none"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[280px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a software test engineer driven by crafting reliable and bug-free web solutions
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};