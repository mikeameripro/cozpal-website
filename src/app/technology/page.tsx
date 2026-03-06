'use client';

import {
  SectionHeading,
  Card,
  Button,
} from '@/components/ui';
import { motionPresets } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import Link from 'next/link';

const coreTech = [
  {
    emoji: '📡',
    title: '离线优先架构',
    desc: '市面唯一完整离线 AI 对话方案。没 WiFi 也能自然对话，延迟仅 0.5-1.5 秒。',
    highlight: '智能音箱没网变砖，暖暖芯照常陪你聊',
  },
  {
    emoji: '💬',
    title: '情感对话引擎',
    desc: '不是 Siri 式问答，是有性格、会关心人的对话伙伴。根据语气语调感知情绪，主动关怀。',
    highlight: '能听出你开心还是难过',
  },
  {
    emoji: '🛡️',
    title: '健康守护系统',
    desc: '心率监测 + 跌倒检测 + 异常自动警报。静默守护，不打扰日常生活。',
    highlight: '异常时自动通知远方家人',
  },
  {
    emoji: '📱',
    title: '家人连接平台',
    desc: '配套 App 让远方家人随时了解长辈状况。语音留言、健康报告、使用统计一目了然。',
    highlight: '亲情零距离',
  },
];

const comparison = [
  { feature: '没 WiFi', speaker: '❌ 变砖', cozpal: '✅ 正常对话' },
  { feature: '响应延迟', speaker: '2-5 秒', cozpal: '0.5-1.5 秒' },
  { feature: '隐私保护', speaker: '⚠️ 上传云端', cozpal: '✅ 本地处理' },
  { feature: '情感交互', speaker: '❌ 无', cozpal: '✅ 情绪感知' },
  { feature: '健康监测', speaker: '❌ 无', cozpal: '✅ 心率+跌倒' },
];

export default function TechnologyPage() {
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
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-text-dark mb-6">
            {'不只是听得懂，更听得出你的心情'}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            {'四大核心技术，让产品从「能用」变成「有温度」'}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <SectionHeading
            label={'核心技术'}
            title={'四大技术模块'}
            subtitle={'每一项技术都为「陪伴」而生'}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
            {coreTech.map((tech, index) => (
              <motion.div
                key={tech.title}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="text-4xl mb-3">{tech.emoji}</div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">{tech.title}</h3>
                  <p className="text-text-muted text-sm mb-3">{tech.desc}</p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {tech.highlight}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-main">
          <SectionHeading
            label={'技术对比'}
            title={'暖暖芯 vs 传统智能音箱'}
            subtitle={'不是更好的音箱，是完全不同的物种'}
          />
          <div className="mt-8 overflow-x-auto">
            <div className="min-w-[500px] bg-bg-light rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-text-dark">{'功能'}</div>
                <div className="font-bold text-text-muted text-center">{'智能音箱'}</div>
                <div className="font-bold text-primary text-center">{'暖暖芯'}</div>
              </div>
              {comparison.map((row) => (
                <div key={row.feature} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="text-text-dark text-sm font-medium">{row.feature}</div>
                  <div className="text-text-muted text-sm text-center">{row.speaker}</div>
                  <div className="text-text-dark text-sm text-center font-medium">{row.cozpal}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-main text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {'技术为人服务，不是人为技术妥协'}
          </h2>
          <p className="text-lg text-text-muted mb-8">
            {'想了解暖暖芯如何融入你的产品？和我们聊聊'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" variant="primary">
                {'技术咨询'}
              </Button>
            </Link>
            <Link href="/solutions" passHref>
              <Button size="lg" variant="outline">
                {'查看方案'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
