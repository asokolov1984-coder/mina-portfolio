import { useEffect, useRef, useState } from 'react';

import t09 from '../assets/work/09.webp';
import t10 from '../assets/work/10.webp';
import t11 from '../assets/work/11.webp';
import t12 from '../assets/work/12.webp';
import t13 from '../assets/work/13.webp';
import t14 from '../assets/work/14.webp';

// Six generated hero-style renders; each row is tripled for seamless scroll, row two runs them in reverse order.
const TILES = [t09, t10, t11, t12, t13, t14];

const ROW1 = TILES;
const ROW2 = [...TILES].reverse();
const triple = <T,>(a: T[]) => [...a, ...a, ...a];

function Row({ images, transform }: { images: string[]; transform: string }) {
  return (
    <div className="flex gap-3" style={{ transform, willChange: 'transform' }}>
      {triple(images).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="shrink-0 rounded-2xl object-cover"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <Row images={ROW1} transform={`translateX(${offset - 200}px)`} />
      <Row images={ROW2} transform={`translateX(${-(offset - 200)}px)`} />
    </section>
  );
}
