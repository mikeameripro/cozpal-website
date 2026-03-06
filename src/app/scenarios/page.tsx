'use client';

import {
  SectionHeading,
  Card,
  Button,
} from '@/components/ui';
import { motionPresets } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import Link from 'next/link';

const elderCareFeatures = [
  { emoji: '🗣️', title: 'AI 语音陪伴', desc: '自然对话，倾听与回应，让独居长辈不再孤单' },
  { emoji: '💊', title: '用药提醒', desc: '智能语音提醒吃药时间，家人远程确认服药状态' },
  { emoji: '❤️', title: '健康监测', desc: '实时追踪心率、活动量、睡眠质量，异常自动预警' },
  { emoji: '👨‍👩‍👦', title: '家人连接', desc: '一键语音留言、远程查看健康报告，亲情零距离' },
];

const childCareFeatures = [
  { emoji: '📖', title: '互动故事', desc: '让孩子参与剧情，培养想象力和决策力' },
  { emoji: '🤗', title: '情感陪伴', desc: '识别情绪变化，在孩子开心时一起笑，难过时温柔安慰' },
  { emoji: '🔒', title: '离线安全', desc: '所有数据本地处理，无需联网，保护儿童隐私安全' },
  { emoji: '🌙', title: '睡前模式', desc: '柔和灯光 + 舒缓故事 + 白噪音，陪伴孩子安心入睡' },
];

export default function ScenariosPage() {
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
            {'让每一个产品，成为有温度的伙伴'}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            {'CozPal AI 芯赋予产品关怀的能力，让科技真正走进生活中最重要的时刻'}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <SectionHeading
            label={'长者关怀'}
            title={'守护每一个独居的他们'}
            subtitle={'张阿姨每天下午在按摩仪上按摩 30 分钟。暖暖轻声问阿姨今天感觉怎么样。远在北京的儿子打开 App，看到妈妈今天按摩了 30 分钟，心率正常，一切安好。'}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
            {elderCareFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="text-5xl mb-4">{feature.emoji}</div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">{feature.title}</h3>
                  <p className="text-text-muted text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-main">
          <SectionHeading
            label={'儿童陪伴'}
            title={'每个孩子的第一个 AI 朋友'}
            subtitle={'小明抱着毛绒玩具说「暖暖，给我讲个太空故事」。暖暖不只播放故事，而是和小明一起创造故事——太空船要往左还是往右？你来决定！'}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
            {childCareFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="text-5xl mb-4">{feature.emoji}</div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">{feature.title}</h3>
                  <p className="text-text-muted text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-main text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {'你的产品，也可以有温度'}
          </h2>
          <p className="text-lg text-text-muted mb-8">
            {'无论是长者健康设备还是儿童玩具，CozPal AI 芯都能赋予产品全新的关怀能力'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" variant="primary">
                {'了解合作方案'}
              </Button>
            </Link>
            <Link href="/solutions" passHref>
              <Button size="lg" variant="outline">
                {'查看解决方案'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
