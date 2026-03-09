'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-primary mb-2">产品演示</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            35 秒了解暖暖模组
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
            <video
              ref={videoRef}
              src="/cozpal-demo.mp4"
              className="w-full h-full object-cover"
              playsInline
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Play/Pause overlay */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/30"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mb-4 hover:bg-primary transition-colors shadow-lg">
                  <Play size={36} className="text-white ml-1" />
                </div>
                <p className="text-white/70 text-sm">点击播放</p>
              </div>
            )}

            {/* Decorative elements */}
            <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none">
              <span className="text-2xl">🧸</span>
              <span className="text-white/60 text-sm font-medium">CozPal Demo</span>
            </div>
            <div className="absolute bottom-6 right-6 pointer-events-none">
              <span className="text-white/40 text-xs">0:35</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
