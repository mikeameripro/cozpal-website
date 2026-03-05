'use client';

import { useState } from 'react';
import {
  SectionHeading,
  Card,
  Button,
} from '@/components/ui';
import { motionPresets } from '@/lib/design-tokens';
import { motion } from 'framer-motion';

const productTypes = [
  '按摩仪',
  '理疗仪 / 理疗椅',
  '儿童玩具',
  '智能家居设备',
  '健康监测设备',
  '其他',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            {'聊聊你的产品，看看暖暖能帮什么'}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            {'不管是初步了解还是准备合作，我们都欢迎。首款产品适配免费。'}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Card>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">{'🎉'}</div>
                    <h3 className="text-2xl font-bold text-text-dark mb-2">
                      {'收到了！'}
                    </h3>
                    <p className="text-text-muted">
                      {'我们会在 1-2 个工作日内联系你。期待合作！'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          {'公司名称'}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          placeholder={'深圳XX科技有限公司'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          {'联系人姓名'}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          placeholder={'张先生'}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          {'电话'}
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          placeholder={'138-xxxx-xxxx'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          {'邮箱'}
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          placeholder={'zhang@company.com'}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        {'您的产品类型'}
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      >
                        <option value="">{'请选择'}</option>
                        {productTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        {'留言'}
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                        placeholder={'简单描述你的产品和需求，我们会更精准地为你推荐方案'}
                      />
                    </div>
                    <Button type="submit" size="lg" variant="primary" className="w-full">
                      {'提交咨询'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div {...motionPresets.staggerItem} viewport={{ once: true }}>
                <Card>
                  <h3 className="text-lg font-bold text-text-dark mb-4">{'联系方式'}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{'📧'}</span>
                      <div>
                        <div className="text-sm text-text-muted">{'邮箱'}</div>
                        <div className="text-text-dark font-medium">{'hello@cozpal.ai'}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{'💬'}</span>
                      <div>
                        <div className="text-sm text-text-muted">{'微信'}</div>
                        <div className="text-text-dark font-medium">{'添加客服微信咨询'}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div {...motionPresets.staggerItem} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Card>
                  <h3 className="text-lg font-bold text-text-dark mb-4">{'合作承诺'}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-success mt-0.5">{'✓'}</span>
                      <span>{'1-2 个工作日内回复'}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-success mt-0.5">{'✓'}</span>
                      <span>{'首款产品免费适配'}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-success mt-0.5">{'✓'}</span>
                      <span>{'提供完整技术文档和 SDK'}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-success mt-0.5">{'✓'}</span>
                      <span>{'NDA 保密协议保护你的产品信息'}</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
