'use client';

import {
  SectionHeading,
  Card,
  Button,
} from '@/components/ui';
import { colors, motionPresets } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Pricing cards data
const pricingPlans = [
  {
    name: 'Core Lite',
    description: 'AI 芯入门级解决方案',
    priceRange: '¥100-150',
    features: ['轻量级部署', '基础 AI 识别', '快速集成'],
    accent: 'primary',
  },
  {
    name: 'Core Pro',
    description: '专业版全功能 AI 芯',
    priceRange: '¥400-550',
    features: ['高性能计算', '多模态识别', '边缘部署优化'],
    accent: 'secondary',
  },
  {
    name: 'Care',
    description: '健康监护与情感陪伴模块',
    priceRange: '¥60-100',
    features: ['生命体征监测', '异常预警', '情感交互'],
    accent: 'primary',
  },
];

// Upgrade comparison data
const upgrades = [
  {
    product: '足底按摩仪',
    originalPrice: '¥200-500',
    newPrice: '¥600-1200',
    multiplier: '3x 溢价',
  },
  {
    product: '理疗椅',
    originalPrice: '¥1000-3000',
    newPrice: '¥2000-5000',
    multiplier: '2x 升级',
  },
];

export default function SolutionsPage() {
  return (
    <motion.div
      {...motionPresets.staggerContainer}
      initial=""
      whileInView="animate"
      viewport={{ once: true }}
      className="min-h-screen bg-bg-warm"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-text-dark mb-6 whitespace-nowrap">
            把AI装进你的产品，只需一颗芯
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            CozPal AI 芯模组为硬件制造商提供开箱即用的智能能力，从基础识别到高级感知，
            让传统产品瞬间升级
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="primary">
              立即咨询
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16">
        <div className="container-main">
          <SectionHeading
            label="解决方案"
            title="选择适合你的 AI 芯模组"
            subtitle="根据产品需求选择合适的配置，快速集成智能能力"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-text-dark mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {plan.priceRange}
                    </p>
                  </div>
                  
                  <p className="text-text-muted mb-6 flex-grow">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-text-dark"
                      >
                        <span className="text-success mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" passHref>
                    <Button
                      variant={plan.accent === 'secondary' ? 'secondary' : 'primary'}
                      size="md"
                      className="w-full"
                    >
                      了解详情
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Comparison */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-main">
          <SectionHeading
            label="价值提升"
            title="赋能传统产品，实现价格升级"
            subtitle="通过 AI 芯技术赋予硬件新的智能属性，显著提升产品溢价能力"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
            {upgrades.map((item, index) => (
              <motion.div
                key={item.product}
                {...motionPresets.staggerItem}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-light rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-xl font-bold text-text-dark mb-3">
                  {item.product}
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-text-muted line-through text-lg">
                      {item.originalPrice}
                    </span>
                    <span className="text-lg text-text-muted">→</span>
                    <span className="text-success font-bold text-2xl">
                      {item.newPrice}
                    </span>
                  </div>
                  
                  <div
                    className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item.multiplier}
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-text-muted">
                    <span>🤖</span>
                    <span>AI 识别与交互</span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <span>📱</span>
                    <span>APP 联动控制</span>
                  </li>
                  <li className="flex items-center gap-2 text-text-muted">
                    <span>💡</span>
                    <span>OTA 远程升级</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container-main text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            开始你的 AI 产品升级之旅
          </h2>
          <p className="text-lg text-text-muted mb-8">
            联系我们的销售团队，获取定制化解决方案和技术支持
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" variant="primary">
                联系我们
              </Button>
            </Link>
            <Link href="/docs" passHref>
              <Button size="lg" variant="outline">
                查看文档
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
