'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function VideoPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-primary mb-2">产品演示</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            30 秒了解暖暖模组
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            看看一个小小的模组，如何让冰冷的设备变得有温度
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video placeholder - replace src when video is ready */}
            {/* <video src="/demo.mp4" controls className="w-full h-full object-cover" /> */}
            
            {/* Placeholder overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mb-4 cursor-pointer hover:bg-primary transition-colors shadow-lg">
                <Play size={36} className="text-white ml-1" />
              </div>
              <p className="text-white/70 text-sm">演示视频即将上线</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="text-2xl">🧸</span>
              <span className="text-white/60 text-sm font-medium">CozPal Demo</span>
            </div>
            <div className="absolute bottom-6 right-6">
              <span className="text-white/40 text-xs">0:30</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
