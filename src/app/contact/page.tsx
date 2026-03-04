import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们',
  description: '联系 CozPal 暖暖团队，开始合作对话。',
};

export default function ContactPage() {
  return (
    <div className="section-padding pt-28">
      <div className="container-main text-center">
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">联系我们</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          开始合作对话
        </p>
        <div className="mt-16 p-12 rounded-2xl border-2 border-dashed border-primary/20 text-text-light">
          🚧 页面开发中 — 由 Falcon 完成
        </div>
      </div>
    </div>
  );
}
