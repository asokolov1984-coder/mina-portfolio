import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

// Renders generated for the site, bundled so they load everywhere.
import w00 from '../assets/work/00.webp';
import w01 from '../assets/work/01.webp';
import w02 from '../assets/work/02.webp';
import w03 from '../assets/work/03.webp';
import w04 from '../assets/work/04.webp';
import w05 from '../assets/work/05.webp';
import w06 from '../assets/work/06.webp';
import w07 from '../assets/work/07.webp';
import w08 from '../assets/work/08.webp';

const PROJECTS = [
  {
    n: '01', name: 'Nextlevel Studio', category: 'Client',
    col1: [w00, w01],
    col2: w02,
  },
  {
    n: '02', name: 'Aura Brand Identity', category: 'Personal',
    col1: [w03, w04],
    col2: w05,
  },
  {
    n: '03', name: 'Solaris Digital', category: 'Client',
    col1: [w06, w07],
    col2: w08,
  },
];

type Project = (typeof PROJECTS)[number];
const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function Card({ p, index, total, progress, range, targetScale }: { p: Project; index: number; total: number; progress: ReturnType<typeof useScroll>['scrollYProgress']; range: [number, number]; targetScale: number }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px`, background: '#0C0C0C', zIndex: total - index }}
        className={`relative flex w-full max-w-6xl flex-col gap-6 border-2 border-[#D7E2EA] p-4 sm:gap-8 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{p.n}</span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">{p.category}</span>
              <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{p.name}</h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4 md:gap-5">
            <img src={p.col1[0]} alt="" loading="lazy" className={`w-full object-cover ${RADIUS}`} style={{ height: 'clamp(130px, 16vw, 230px)' }} />
            <img src={p.col1[1]} alt="" loading="lazy" className={`w-full object-cover ${RADIUS}`} style={{ height: 'clamp(160px, 22vw, 340px)' }} />
          </div>
          <div className="w-[60%]">
            <img src={p.col2} alt="" loading="lazy" className={`h-full w-full object-cover ${RADIUS}`} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const total = PROJECTS.length;

  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn as="h2" delay={0} y={40} className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Project
      </FadeIn>
      <div ref={ref}>
        {PROJECTS.map((p, i) => (
          <Card
            key={p.n}
            p={p}
            index={i}
            total={total}
            progress={scrollYProgress}
            range={[i / total, 1]}
            targetScale={1 - (total - 1 - i) * 0.03}
          />
        ))}
      </div>
      <div id="contact" />
    </section>
  );
}
