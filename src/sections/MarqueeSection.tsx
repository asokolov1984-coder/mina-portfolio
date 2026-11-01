import { useEffect, useRef, useState } from 'react';

// Six generated hero-style renders; each row is tripled for seamless scroll, row two runs them in reverse order.
const TILES = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_3ESgq2B6qtlnB3MO1NzrHPw6Q2U/hf_20261101_090155_2ffdac3c-85e1-438f-b041-675145a03a1c.png',
  'https://d8j0ntlcm91z4.cloudfront.net/user_3ESgq2B6qtlnB3MO1NzrHPw6Q2U/hf_20261101_090212_05155ec1-a1ae-4439-b129-e76640f11844.png',
  'https://d8j0ntlcm91z4.cloudfront.net/user_3ESgq2B6qtlnB3MO1NzrHPw6Q2U/hf_20261101_090232_28ada7ee-b8c7-4e8a-822a-7da08eac7c12.png',
  'https://d8j0ntlcm91z4.cloudfront.net/user_3ESgq2B6qtlnB3MO1NzrHPw6Q2U/hf_20261101_090249_888251d5-3b9b-4b1c-98ba-fc5962a21f34.png',
  'https://d8j0ntlcm91z4.cloudfront.net/user_3ESgq2B6qtlnB3MO1NzrHPw6Q2U/hf_20261101_090308_772490c7-6686-4485-abad-03a65b471368.png',
  'https://d8j0ntlcm91z4.cloudfront.net/user_3ESgq2B6qtlnB3MO1NzrHPw6Q2U/hf_20261101_090331_5a97bb70-c2c5-4544-bf36-e640f73c0e82.png'
];

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
