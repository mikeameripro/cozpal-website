import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们',
  description: 'CozPal 暖暖品牌故事、愿景与团队介绍。',
};

export default function AboutPage() {
  return (
    <div className="section-padding pt-28">
      <div className="container-main text-center">
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">关于我们</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          品牌故事与团队
        </p>
        <div className="mt-16 p-12 rounded-2xl border-2 border-dashed border-primary/20 text-text-light">
          🚧 页面开发中 — 由 Falcon 完成
        </div>
      </div>
    </div>
  );
}
