import { type ClassValue, clsx } from 'clsx';

/**
 * Merge Tailwind classes with conflict resolution.
 * Lightweight: just uses clsx (no tailwind-merge to keep deps minimal).
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
