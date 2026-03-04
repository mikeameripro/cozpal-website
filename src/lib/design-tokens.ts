/**
 * CozPal Design Tokens
 * 
 * 暖暖品牌设计系统 — 温暖 · 专业 · 智能 · 陪伴 · 可信赖
 * 
 * Usage: import { colors, fonts, spacing } from '@/lib/design-tokens'
 */

export const colors = {
  // Primary palette
  primary: '#FF8C42',        // 暖橙 — 主品牌色
  primaryLight: '#FFA86B',   // 暖橙浅色
  primaryDark: '#E67A35',    // 暖橙深色
  
  // Secondary
  secondary: '#FFD166',      // 柔黄
  secondaryLight: '#FFE08A', // 柔黄浅色
  
  // Backgrounds
  bgWarm: '#FFF8F0',         // 暖白背景
  bgWhite: '#FFFFFF',        // 纯白
  bgLight: '#FFF3E6',        // 浅暖色背景
  
  // Text
  textDark: '#2D3436',       // 深灰文字
  textMuted: '#636E72',      // 辅助文字
  textLight: '#B2BEC3',      // 弱化文字
  
  // Accent
  accent: '#3B82F6',         // 科技蓝（技术页面用）
  accentLight: '#60A5FA',    // 科技蓝浅色
  
  // Semantic
  success: '#00B894',
  warning: '#FDCB6E',
  error: '#E17055',
} as const;

export const fonts = {
  heading: '"Noto Sans SC", "Inter", system-ui, sans-serif',
  body: '"Noto Sans SC", "Inter", system-ui, sans-serif',
  display: '"Poppins", "Noto Sans SC", system-ui, sans-serif',
} as const;

export const spacing = {
  section: 'py-20 md:py-28',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation presets for Framer Motion
export const motionPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  },
  staggerContainer: {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  },
} as const;
