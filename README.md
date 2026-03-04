# 🧸 CozPal 官网 (cozpal.ai)

暖暖品牌官网 — 面向 B2B 工厂老板和品牌商的专业展示站。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Next.js** | 15+ | App Router, Server Components, SSR/SSG |
| **TypeScript** | 5+ | 类型安全 |
| **Tailwind CSS** | 4 | Utility-first CSS（CSS-based config） |
| **Framer Motion** | 11+ | 页面过渡和滚动动画 |
| **Lucide Icons** | latest | 现代简洁图标库 |
| **部署** | Vercel | 免费方案，全球 CDN |

## 快速开始

```bash
cd cozpal-website
npm install
npm run dev     # http://localhost:3000
```

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 根布局（字体 + Header + Footer）
│   ├── page.tsx            # 首页（完整实现）
│   ├── globals.css         # 全局样式 + 设计 tokens
│   ├── solutions/page.tsx  # 产品方案（骨架）
│   ├── scenarios/page.tsx  # 应用场景（骨架）
│   ├── technology/page.tsx # 技术能力（骨架）
│   ├── partnership/page.tsx # 合作方式（骨架）
│   ├── about/page.tsx      # 关于我们（骨架）
│   └── contact/page.tsx    # 联系我们（骨架）
│
├── components/
│   ├── layout/             # 布局组件
│   │   ├── Header.tsx      # 导航栏（响应式 + 移动菜单）
│   │   └── Footer.tsx      # 页脚（链接 + 品牌信息）
│   │
│   ├── ui/                 # 通用 UI 组件
│   │   ├── Button.tsx      # 按钮（primary/secondary/outline/ghost）
│   │   ├── Card.tsx        # 卡片（hover 效果 + accent 颜色）
│   │   └── SectionHeading.tsx # 区块标题（label + title + subtitle）
│   │
│   ├── sections/           # 首页区块组件
│   │   ├── HeroSection.tsx         # Hero 区域
│   │   ├── ProductCardsSection.tsx # 产品模组卡片
│   │   ├── StatsSection.tsx        # 数据滚动区
│   │   ├── ScenariosPreview.tsx    # 场景预览
│   │   └── CTASection.tsx          # CTA 行动号召
│   │
│   └── icons/              # 自定义图标（预留）
│
├── lib/
│   ├── design-tokens.ts    # 设计系统 tokens（颜色/字体/动画预设）
│   ├── site-config.ts      # 网站配置（导航/数据/产品模组）
│   └── utils.ts            # 工具函数（cn class merge）
│
└── types/                  # TypeScript 类型定义（预留）
```

## 设计系统

### 色彩

| 用途 | 色号 | CSS Variable |
|------|------|-------------|
| 主色（暖橙） | `#FF8C42` | `--color-primary` |
| 辅色（柔黄） | `#FFD166` | `--color-secondary` |
| 暖白背景 | `#FFF8F0` | `--color-bg-warm` |
| 深灰文字 | `#2D3436` | `--color-text-dark` |
| 科技蓝 | `#3B82F6` | `--color-accent` |

### 字体

- **中文**：Noto Sans SC（Google Fonts，自动加载）
- **英文**：Inter（正文）/ Poppins（展示标题）
- 通过 `next/font` 自动优化

### CSS 工具类

```css
.gradient-warm          /* 暖橙渐变背景 */
.gradient-warm-subtle   /* 暖色柔和背景 */
.gradient-tech          /* 科技蓝渐变 */
.text-gradient-warm     /* 暖橙渐变文字 */
.section-padding        /* 标准 section 间距 */
.container-main         /* 标准容器宽度 */
.animate-float          /* 浮动动画 */
.animate-pulse-warm     /* 暖色脉冲 */
```

### Tailwind 颜色

设计 token 已通过 `@theme inline` 注册为 Tailwind 颜色，可直接使用：

```html
<div class="bg-primary text-white">          <!-- 暖橙背景 -->
<div class="text-text-dark bg-bg-warm">      <!-- 深灰文字 + 暖白背景 -->
<div class="border-accent text-accent">      <!-- 科技蓝 -->
<div class="hover:bg-primary-dark">          <!-- 悬浮深暖橙 -->
```

## 组件使用规范

### Button

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg">了解更多</Button>
<Button variant="outline">联系我们</Button>
<Button variant="ghost" size="sm">返回</Button>
```

| Prop | Type | Default | Options |
|------|------|---------|---------|
| variant | string | 'primary' | primary / secondary / outline / ghost |
| size | string | 'md' | sm / md / lg |

### Card

```tsx
import { Card } from '@/components/ui';

<Card accent="primary" hover>
  <h3>标题</h3>
  <p>内容</p>
</Card>
```

| Prop | Type | Default | Options |
|------|------|---------|---------|
| accent | string | 'primary' | primary / secondary / accent |
| hover | boolean | true | 悬浮效果 |

### SectionHeading

```tsx
import { SectionHeading } from '@/components/ui';

<SectionHeading
  label="SOLUTIONS"
  title="三大核心模组"
  subtitle="不改产线，即插即用"
  align="center"
/>
```

### Framer Motion 预设

```tsx
import { motionPresets } from '@/lib/design-tokens';

<motion.div {...motionPresets.fadeInUp}>内容</motion.div>
<motion.div {...motionPresets.scaleIn}>内容</motion.div>
```

## Falcon 开发指南

### 开发新页面步骤

1. **在 `src/app/<route>/page.tsx` 找到对应骨架文件**
2. **复用现有组件**：`SectionHeading`, `Card`, `Button` 等
3. **使用设计 token**：颜色用 Tailwind 变量（`text-primary`, `bg-bg-warm`）
4. **添加动画**：使用 `motionPresets` 或自定义 Framer Motion 动画
5. **内容数据**：产品/场景等数据在 `site-config.ts`，需要新数据可以在此扩展
6. **图片占位**：用 emoji 或 placeholder div，后续替换为真实图片

### 响应式设计

- **Mobile First**：先写移动端样式，再用 `md:` / `lg:` 适配桌面
- **断点**：`sm:640px` / `md:768px` / `lg:1024px` / `xl:1280px`
- **容器**：统一使用 `container-main` 类
- **间距**：section 间距用 `section-padding`

### 新建组件模板

```tsx
'use client'; // 仅在需要交互/动画时加

import { motion } from 'framer-motion';
import { motionPresets } from '@/lib/design-tokens';

export interface MyComponentProps {
  title: string;
  // ...
}

export function MyComponent({ title }: MyComponentProps) {
  return (
    <motion.div {...motionPresets.fadeInUp}>
      <h2 className="text-3xl font-bold text-text-dark">{title}</h2>
    </motion.div>
  );
}
```

### 注意事项

- ✅ Server Components 优先，仅在需要交互时加 `'use client'`
- ✅ 所有文字使用设计 token 颜色（`text-text-dark`, `text-text-muted`）
- ✅ 保持 Mobile First 响应式设计
- ✅ SEO：每个页面都导出 `metadata` 对象
- ❌ 不要硬编码颜色值，用 CSS 变量 / Tailwind 类
- ❌ 不要使用 `<img>`，用 Next.js `<Image>` 组件
- ❌ 不要忘记 `viewport: { once: true }` 防止重复触发动画

## 部署

```bash
npm run build   # 检查构建
npx vercel      # 部署到 Vercel
```

域名：`cozpal.ai`（Cloudflare 注册，DNS 指向 Vercel）

---

**架构设计：** Oscar 🎭
**页面开发：** Falcon 🦅
**内容提供：** Max 🐾
