import type { Metadata } from 'next';
import { Noto_Sans_SC, Inter, Poppins } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const notoSansSC = Noto_Sans_SC({
  variable: '--font-noto-sans-sc',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CozPal — 让每一台设备，都有温度',
    template: '%s | CozPal',
  },
  description: '暖暖 AI 模组 — 为传统制造商提供智能陪伴升级方案。不改产线、不招工程师，一个模组让传统设备秒变 AI 智能陪伴产品。',
  keywords: ['AI 模组', '智能陪伴', 'B2B', '按摩仪', 'AI 玩具', '端侧 AI', '离线大模型', 'CozPal', '暖暖'],
  authors: [{ name: 'CozPal Team' }],
  metadataBase: new URL('https://cozpal.ai'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://cozpal.ai',
    siteName: 'CozPal',
    title: 'CozPal — 让每一台设备，都有温度',
    description: '暖暖 AI 模组 — 为传统制造商提供智能陪伴升级方案',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CozPal — 让每一台设备，都有温度',
    description: '暖暖 AI 模组 — 为传统制造商提供智能陪伴升级方案',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${notoSansSC.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
