'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  /** Accent border color: 'primary' | 'secondary' | 'accent' */
  accent?: 'primary' | 'secondary' | 'accent';
}

const accentColors = {
  primary: 'hover:border-primary/30',
  secondary: 'hover:border-secondary/50',
  accent: 'hover:border-accent/30',
};

export function Card({ children, className, hover = true, accent = 'primary' }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      className={cn(
        'bg-white rounded-2xl p-6 md:p-8 border border-transparent shadow-sm transition-all duration-300',
        hover && 'hover:shadow-lg cursor-default',
        hover && accentColors[accent],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
