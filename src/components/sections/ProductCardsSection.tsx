'use client';

import { motion } from 'framer-motion';
import { Brain, Eye, HeartPulse } from 'lucide-react';
import { productModules } from '@/lib/site-config';
import { SectionHeading, Card } from '@/components/ui';
import Image from 'next/image';

const iconMap = {
  Brain,
  Eye,
  HeartPulse,
} as const;

const imageMap: Record<string, string> = {
  core: '/products/core.jpg',
  eye: '/products/eye.svg',
  care: '/products/care.svg',
};

const colorMap = {
  primary: {
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    badge: 'bg-primary/10 text-primary',
  },
  secondary: {
    iconBg: 'bg-secondary/20',
    iconColor: 'text-yellow-600',
    badge: 'bg-secondary/20 text-yellow-700',
  },
  accent: {
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    badge: 'bg-accent/10 text-accent',
  },
} as const;

export function ProductCardsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          label="产品模组"
          title="三大核心模组，即插即用"
          subtitle="不改产线、不招工程师，一个模组让传统设备秒变 AI 智能陪伴产品"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {productModules.map((module, index) => {
            const Icon = iconMap[module.icon as keyof typeof iconMap];
            const colors = colorMap[module.color as keyof typeof colorMap];
            const productImage = imageMap[module.id];

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card accent={module.color as 'primary' | 'secondary' | 'accent'} className="h-full">
                  {/* Product Image */}
                  {productImage && (
                    <div className="mb-5 rounded-xl overflow-hidden">
                      <Image
                        src={productImage}
                        alt={module.title}
                        width={400}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.iconBg} mb-5`}>
                    <Icon size={28} className={colors.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-dark mb-1">
                    {module.title}
                  </h3>
                  <p className="text-xs text-text-light font-medium tracking-wider uppercase mb-3">
                    {module.titleEn}
                  </p>

                  {/* Tagline badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.badge} mb-4`}>
                    {module.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    {module.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
