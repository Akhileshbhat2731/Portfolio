import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- ContactButton Component ---
export const ContactButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <a
      href="mailto:akhileshbhatg@gmail.com"
      onClick={onClick}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
      className="inline-block text-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity"
    >
      Contact Me
    </a>
  );
};

// --- LiveProjectButton Component ---
export const LiveProjectButton: React.FC<{ onClick?: () => void; label?: string }> = ({ onClick, label = "View Details" }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors"
    >
      {label}
    </button>
  );
};

// --- FadeIn Wrapper Component ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  as = "div"
}) => {
  const Component = motion.create(as as string);
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
};

// --- Magnet Component ---
interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDistance) {
        setTransition(activeTransition);
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength
        });
      } else {
        setTransition(inactiveTransition);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition,
        willChange: 'transform'
      }}
      className={className}
    >
      {children}
    </div>
  );
};

// --- AnimatedText Component ---
interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} style={style} className={`relative flex flex-wrap justify-center ${className}`}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 1 / characters.length;
        return (
          <Character key={index} progress={scrollYProgress} range={[start, end]}>
            {char === " " ? "\u00A0" : char}
          </Character>
        );
      })}
    </p>
  );
};

const Character: React.FC<{ children: string; progress: any; range: [number, number] }> = ({
  children,
  progress,
  range
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  );
};