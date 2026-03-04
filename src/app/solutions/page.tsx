import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '产品方案',
  description: '暖暖 AI 模组矩阵 — Core / Eye / Care / Full Kit，为传统制造商提供即插即用的智能陪伴升级方案。',
};

export default function SolutionsPage() {
  return (
    <div className="section-padding pt-28">
      <div className="container-main text-center">
        <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
          Solutions
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">产品方案</h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          模组矩阵 — Core / Eye / Care / Full Kit
        </p>
        {/* TODO: Falcon 实现完整产品方案页 */}
        <div className="mt-16 p-12 rounded-2xl border-2 border-dashed border-primary/20 text-text-light">
          🚧 页面开发中 — 由 Falcon 完成
        </div>
      </div>
    </div>
  );
}
