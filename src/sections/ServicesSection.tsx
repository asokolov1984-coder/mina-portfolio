import FadeIn from '../components/FadeIn';

const SERVICES = [
  { n: '01', name: '3D Modeling', text: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.' },
  { n: '02', name: 'Rendering', text: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.' },
  { n: '03', name: 'Motion Design', text: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.' },
  { n: '04', name: 'Branding', text: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.' },
  { n: '05', name: 'Web Design', text: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.' },
];

export default function ServicesSection() {
  return (
    <section id="price" className="relative z-0 rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn as="h2" delay={0} y={40} className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Services
      </FadeIn>
      <ul className="mx-auto max-w-5xl">
        {SERVICES.map((s, i) => (
          <FadeIn
            as="li"
            key={s.n}
            delay={i * 0.1}
            className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span className="font-black leading-none text-[#0C0C0C]" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {s.n}
            </span>
            <div className="flex flex-col gap-2 pt-2 sm:gap-3 md:gap-4">
              <h3 className="font-medium uppercase text-[#0C0C0C]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {s.name}
              </h3>
              <p className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}>
                {s.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
