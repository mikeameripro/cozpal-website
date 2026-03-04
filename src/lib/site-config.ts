/**
 * CozPal Site Configuration
 * 
 * Centralized site metadata, navigation, and content config.
 */

export const siteConfig = {
  name: 'CozPal',
  nameZh: '暖暖',
  tagline: '让每一台设备，都有温度',
  taglineEn: 'Bring Warmth to Every Device',
  description: '暖暖 AI 模组 — 为传统制造商提供智能陪伴升级方案',
  url: 'https://cozpal.ai',
  ogImage: '/og-image.png',
  contact: {
    email: 'hello@cozpal.ai',
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const navigation: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '产品方案', href: '/solutions', description: '模组矩阵 — Core / Eye / Care / Full Kit' },
  { label: '应用场景', href: '/scenarios', description: '长者关怀 + 儿童陪伴' },
  { label: '技术能力', href: '/technology', description: '端侧 AI · 语音交互 · 情感引擎' },
  { label: '合作方式', href: '/partnership', description: 'B2B 合作四阶段模式' },
  { label: '关于我们', href: '/about', description: '品牌故事与团队' },
  { label: '联系我们', href: '/contact', description: '开始合作对话' },
];

// Home page data
export const heroStats = [
  { value: '460亿', label: '中国按摩器具市场规模', suffix: '元' },
  { value: '3.1亿', label: '中国60岁以上人口', suffix: '人' },
  { value: '0', label: '消费级按摩仪中具备 AI 陪伴功能的产品', suffix: '' },
  { value: '10倍', label: 'AI 模组可带来的产品溢价', suffix: '' },
];

export const productModules = [
  {
    id: 'core',
    icon: 'Brain',
    title: '暖暖·芯',
    titleEn: 'CozPal Core',
    tagline: 'AI 大脑',
    description: '端侧大语言模型，离线也能自然对话',
    color: 'primary',
    features: ['端侧 LLM 推理', '离线语音识别', '情感理解', '多轮对话'],
  },
  {
    id: 'eye',
    icon: 'Eye',
    title: '暖暖·眼',
    titleEn: 'CozPal Eye',
    tagline: '情感窗口',
    description: 'LCD 表情系统，让设备有喜怒哀乐',
    color: 'secondary',
    features: ['双 LCD 显示', '50+ 表情动画', '情绪驱动切换', '自定义角色'],
  },
  {
    id: 'care',
    icon: 'HeartPulse',
    title: '暖暖·护',
    titleEn: 'CozPal Care',
    tagline: '健康守护',
    description: '心率监测 + 跌倒检测 + 家人 App 通知',
    color: 'accent',
    features: ['心率实时监测', '跌倒检测报警', '用药提醒', '家人 App 通知'],
  },
] as const;
