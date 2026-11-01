import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import LivingPortrait from '../portrait/LivingPortrait';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Price', href: '#price' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex w-full items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        {NAV.map((n) => (
          <a
            key={n.label}
            href={n.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {n.label}
          </a>
        ))}
      </FadeIn>

      <div className="w-full overflow-hidden">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[12vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[11vw] md:-mt-3 md:text-[10.5vw] lg:text-[10vw]">
          Hi, i&apos;m alla
        </FadeIn>
      </div>

      <LivingPortrait />

      <div className="mt-auto flex w-full items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
