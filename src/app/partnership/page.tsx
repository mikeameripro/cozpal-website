import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '合作方式',
  description: '暖暖 AI B2B 合作模式 — 四阶段合作方案、ODM 方案输出、合作流程。',
};

export default function PartnershipPage() {
  return (
    <div className="section-padding pt-28">
      <div className="container-main text-center">
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          Partnership
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">合作方式</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          B2B 合作四阶段模式
        </p>
        <div className="mt-16 p-12 rounded-2xl border-2 border-dashed border-primary/20 text-text-light">
          🚧 页面开发中 — 由 Falcon 完成
        </div>
      </div>
    </div>
  );
}
