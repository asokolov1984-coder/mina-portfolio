import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const IMG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_';
const img = (id: string) => `${IMG}${id}.png&w=1280&q=85`;

const PROJECTS = [
  {
    n: '01', name: 'Nextlevel Studio', category: 'Client',
    col1: [img('20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db'), img('20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8')],
    col2: img('20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327'),
  },
  {
    n: '02', name: 'Aura Brand Identity', category: 'Personal',
    col1: [img('20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f'), img('20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1')],
    col2: img('20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea'),
  },
  {
    n: '03', name: 'Solaris Digital', category: 'Client',
    col1: [img('20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f'), img('20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b')],
    col2: img('20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee'),
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
