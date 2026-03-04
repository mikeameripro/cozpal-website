import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '应用场景',
  description: '暖暖 AI 模组应用场景 — 长者关怀与儿童陪伴，让每一个产品成为有温度的伙伴。',
};

export default function ScenariosPage() {
  return (
    <div className="section-padding pt-28">
      <div className="container-main text-center">
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          Scenarios
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">应用场景</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          长者关怀 + 儿童陪伴
        </p>
        <div className="mt-16 p-12 rounded-2xl border-2 border-dashed border-primary/20 text-text-light">
          🚧 页面开发中 — 由 Falcon 完成
        </div>
      </div>
    </div>
  );
}
