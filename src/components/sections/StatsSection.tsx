'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { heroStats } from '@/lib/site-config';
import { SectionHeading } from '@/components/ui';

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Simple reveal effect with slight delay
      const timer = setTimeout(() => setDisplayed(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <span ref={ref} className="inline-block">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={displayed ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-gradient-warm text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)]"
      >
        {value}
      </motion.span>
      {suffix && (
        <span className="text-xl md:text-2xl text-text-muted ml-1">{suffix}</span>
      )}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="section-padding gradient-warm-subtle">
      <div className="container-main">
        <SectionHeading
          label="市场数据"
          title="一个被忽视的巨大市场"
          subtitle="460 亿按摩器具市场、3.1 亿老年人口 — 没有一款产品拥有 AI 陪伴能力"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
