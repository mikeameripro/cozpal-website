'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Baby, ArrowRight } from 'lucide-react';
import { SectionHeading, Card } from '@/components/ui';

const scenarios = [
  {
    icon: Heart,
    title: '长者关怀',
    subtitle: '守护每一个独居的他们',
    description: '足底按摩时的 AI 陪伴、理疗椅上的智能陪护、健康监测加家人通知。让冰冷的设备成为温暖的伴侣。',
    features: ['AI 语音陪聊', '用药提醒', '跌倒检测', '家人远程关怀'],
    image: '👴',
    color: 'primary' as const,
  },
  {
    icon: Baby,
    title: '儿童陪伴',
    subtitle: '每个孩子的第一个 AI 朋友',
    description: 'AI 毛绒玩具、故事互动、情感对话。离线随时可用，不依赖网络，安全又好玩。',
    features: ['互动故事', '情感对话', '离线可用', '内容安全'],
    image: '🧒',
    color: 'secondary' as const,
  },
];

export function ScenariosPreview() {
  return (
    <section className="section-padding bg-bg-warm">
      <div className="container-main">
        <SectionHeading
          label="应用场景"
          title="温暖，从场景开始"
          subtitle="暖暖模组适用于长者关怀和儿童陪伴两大场景，让每一个产品都成为有温度的伙伴"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card accent={scenario.color} className="h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-5xl">{scenario.image}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={20} className="text-primary" />
                        <h3 className="text-xl font-bold text-text-dark">{scenario.title}</h3>
                      </div>
                      <p className="text-sm text-text-muted">{scenario.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    {scenario.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {scenario.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-bg-light text-xs text-text-muted font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/scenarios"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
                  >
                    了解更多 <ArrowRight size={14} />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
