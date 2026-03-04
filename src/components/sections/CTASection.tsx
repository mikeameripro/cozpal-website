'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import { motionPresets } from '@/lib/design-tokens';

const benefits = [
  { icon: Zap, text: '不改产线，即插即用' },
  { icon: Shield, text: '离线可用，隐私安全' },
  { icon: Cpu, text: '端侧 AI，无需服务器' },
];

export function CTASection() {
  return (
    <section className="section-padding bg-text-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          {...motionPresets.fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            窗口期只有 <span className="text-gradient-warm">6-12 个月</span>
            <br />
            先做的，定义品类
          </h2>

          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            460 亿市场里，¥200-3,000 的消费级产品零 AI。
            <br />
            加了暖暖模组，产品售价翻 3-5 倍。
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {benefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon size={18} className="text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium text-base hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20 group"
            >
              了解合作方案
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/10 transition-all"
            >
              预约演示
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
