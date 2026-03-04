'use client';

import { motion } from 'framer-motion';
import { motionPresets } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  /** Small label above the title */
  label?: string;
  /** Main heading */
  title: string;
  /** Subtitle / description */
  subtitle?: string;
  /** Center or left alignment */
  align?: 'center' | 'left';
  /** Additional className */
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      {...motionPresets.fadeInUp}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
