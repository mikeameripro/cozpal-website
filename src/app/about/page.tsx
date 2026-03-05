'use client';

import {
  SectionHeading,
  Card,
  Button,
} from '@/components/ui';
import { motionPresets } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import Link from 'next/link';

const milestones = [
  { date: '2026.01', title: '项目启动', desc: '完成技术可行性评估，确定离线 AI 陪伴方向' },
  { date: '2026.02', title: '方案设计', desc: '完成竞品分析、商业计划、模组方案设计' },
  { date: '2026.03', title: '官网上线', desc: '品牌发布，工厂合作正式启动' },
];

const values = [
  { emoji: '❤️', title: '温度优先', desc: '技术只是手段，让人感受到关怀才是目的' },
  { emoji: '🔒', title: '隐私至上', desc: '数据不上云，对话不出设备。用户隐私不是商品' },
  { emoji: '🤝', title: '共赢合作', desc: '不是卖芯片，是帮工厂做出更有价值的产品' },
  { emoji: '🚀', title: '持续进化', desc: 'OTA 升级让产品越用越好，不会被时代淘汰' },
];

export default function AboutPage() {
  return (
    <motion.div
      {...motionPresets.staggerContainer}
      initial=""
      whileInView="animate"
      viewport={{ once: true }}
      className="min-h-screen bg-bg-warm"
    >
      <section className="py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6">
            {'让每一台设备，都有温度'}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            {'市面上的智能设备越来越聪明，却越来越冷。我们相信，技术的终极价值不是替代人，而是让人感受到温暖。'}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <SectionHeading
            label={'品牌故事'}
            title={'从一个简单的观察开始'}
            subtitle={''}
          />
          <div className="max-w-3xl mx-auto mt-8 space-y-6 text-text-muted leading-relaxed">
            <p>
              {'你有没有注意到，家里的老人每天独自面对各种电子设备——按摩仪、理疗仪、健康监测器——这些设备功能越来越强，但依然冰冷。'}
            </p>
            <p>
              {'CozPal（暖暖）诞生于这个观察。我们不做另一个智能音箱，而是把 AI 的温度注入到已有的产品中。一个小小的模组，就能让一台普通的按摩仪变成会关心人的伙伴。'}
            </p>
            <p>
              {'我们的愿景很简单：让制造商不需要成为科技公司，就能做出有温度的智能产品。'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-main">
          <SectionHeading
            label={'核心价值'}
            title={'我们坚信的事'}
            subtitle={''}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8">
            {values.map((v, index) => (
              <motion.div
                key={v.title}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="text-4xl mb-3">{v.emoji}</div>
                  <h3 className="text-lg font-bold text-text-dark mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm">{v.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <SectionHeading
            label={'发展历程'}
            title={'里程碑'}
            subtitle={''}
          />
          <div className="max-w-2xl mx-auto mt-8">
            {milestones.map((m, index) => (
              <motion.div
                key={m.date}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 mb-6 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-1" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="text-sm text-primary font-bold">{m.date}</div>
                  <h4 className="text-lg font-bold text-text-dark">{m.title}</h4>
                  <p className="text-text-muted text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-main text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {'一起，让设备有温度'}
          </h2>
          <p className="text-lg text-text-muted mb-8">
            {'如果你也相信产品可以更有人情味，欢迎和我们聊聊'}
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="primary">
              {'联系我们'}
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
