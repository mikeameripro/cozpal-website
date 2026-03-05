'use client';

import {
  SectionHeading,
  Card,
  Button,
} from '@/components/ui';
import { motionPresets } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: '方案确认',
    duration: '1-2 周',
    desc: '选择模组配置，确认功能需求。我们根据你的产品特性推荐最适合的方案。',
    emoji: '📋',
  },
  {
    number: '02',
    title: '适配开发',
    duration: '2-3 周',
    desc: '我们免费适配你的第一款产品。包含硬件对接、固件烧录、功能测试。',
    emoji: '🔧',
  },
  {
    number: '03',
    title: '批量生产',
    duration: '按订量',
    desc: '模组即插即用，产线不用改。我们提供持续的技术支持和固件升级。',
    emoji: '🏭',
  },
];

const faqs = [
  { q: '需要改产线吗？', a: '不需要，预留安装空间就行。模组体积小，兼容主流产品结构。' },
  { q: '需要招 AI 工程师吗？', a: '不需要，模组出厂已烧录好固件。我们负责所有 AI 相关开发。' },
  { q: '最少订多少？', a: 'Core Lite 500 套起，Core Pro 200 套起。支持小批量试产验证。' },
  { q: '首款产品适配收费吗？', a: '免费。我们投入工程资源，建立长期合作关系。' },
  { q: '后续固件升级怎么办？', a: 'OTA 远程升级，我们持续优化 AI 模型和功能。你的产品会越用越好。' },
];

export default function PartnershipPage() {
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
            {'三步完成智能升级，产线零改造'}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            {'不用招人、不用改产线、不用懂 AI。我们把复杂的事做完，你只管卖更贵的产品。'}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <SectionHeading
            label={'合作流程'}
            title={'从零到量产，比你想象的简单'}
            subtitle={'全程技术支持，首款产品免费适配'}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full text-center relative">
                  <div className="text-5xl mb-3">{step.emoji}</div>
                  <div className="text-sm text-primary font-bold mb-1">
                    {'STEP ' + step.number}
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-1">{step.title}</h3>
                  <div className="text-xs text-text-muted mb-3">{step.duration}</div>
                  <p className="text-text-muted text-sm">{step.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-main">
          <SectionHeading
            label={'常见问题'}
            title={'工厂老板最关心的问题'}
            subtitle={'直接回答，不绕弯子'}
          />
          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-bg-light rounded-xl p-5"
              >
                <h4 className="font-bold text-text-dark mb-2">{'Q: ' + faq.q}</h4>
                <p className="text-text-muted text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-main text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {'让你的产品成为下一个爆品'}
          </h2>
          <p className="text-lg text-text-muted mb-8">
            {'AI 陪伴赛道正在爆发。先行者吃肉，后来者喝汤。'}
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="primary">
              {'立即开始合作'}
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
