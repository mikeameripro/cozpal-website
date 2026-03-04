import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '技术能力',
  description: '暖暖 AI 技术能力 — 端侧 AI、语音交互、情感引擎、健康监测算法。',
};

export default function TechnologyPage() {
  return (
    <div className="section-padding pt-28">
      <div className="container-main text-center">
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          Technology
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">技术能力</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          端侧 AI · 语音交互 · 情感引擎 · 健康监测
        </p>
        <div className="mt-16 p-12 rounded-2xl border-2 border-dashed border-primary/20 text-text-light">
          🚧 页面开发中 — 由 Falcon 完成
        </div>
      </div>
    </div>
  );
}
