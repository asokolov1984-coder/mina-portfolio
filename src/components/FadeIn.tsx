import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type FadeInProps = {
  children?: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
};

// one motion component per element type, created once
const cache = new Map<ElementType, ElementType>();
const motionFor = (tag: ElementType): ElementType => {
  let m = cache.get(tag);
  if (!m) {
    m = motion.create(tag as never) as unknown as ElementType;
    cache.set(tag, m);
  }
  return m;
};

export default function FadeIn({ children, as = 'div', delay = 0, duration = 0.7, x = 0, y = 30, ...rest }: FadeInProps) {
  const Comp = motionFor(as);
  return (
    <Comp
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
