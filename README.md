# CozPal 官网 — cozpal.ai

> 暖暖 AI 模组 — 让每一台设备，都有温度

B2B 官网，面向工厂老板和品牌商，展示 AI 智能陪伴模组产品方案。

## 快速开始

```bash
npm install
npm run dev     # → http://localhost:3000
npm run build   # 生产构建
```

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16 (App Router) | React 全栈框架，SSR + SSG |
| Tailwind CSS | 4 | Utility-first CSS（通过 `@theme` 自定义 token） |
| Framer Motion | 12 | 页面过渡和滚动动画 |
| Lucide Icons | latest | 现代简洁图标库 |
| TypeScript | 5 | 类型安全 |

**部署目标**: Vercel（绑定域名 cozpal.ai，Cloudflare DNS）

---

## 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx          # 根布局（字体、Header、Footer）
│   ├── page.tsx            # 首页 ✅ 完整实现
│   ├── globals.css         # 全局样式 + 设计 token（@theme）
│   ├── solutions/page.tsx  # 产品方案 ✅ 基础实现
│   ├── scenarios/page.tsx  # 应用场景 🚧 待开发
│   ├── technology/page.tsx # 技术能力 🚧 待开发
│   ├── partnership/page.tsx# 合作方式 🚧 待开发
│   ├── about/page.tsx      # 关于我们 🚧 待开发
│   └── contact/page.tsx    # 联系我们 🚧 待开发
├── components/
│   ├── layout/             # 布局组件
│   │   ├── Header.tsx      # 固定导航栏（桌面 + 移动端汉堡菜单）
│   │   └── Footer.tsx      # 页脚（产品/场景/公司 三栏链接）
│   ├── sections/           # 首页各 section 组件
│   │   ├── HeroSection.tsx         # 首屏 Hero
│   │   ├── ProductCardsSection.tsx # 三大模组卡片
│   │   ├── StatsSection.tsx        # 市场数据滚动动画
│   │   ├── ScenariosPreview.tsx    # 应用场景预览
│   │   └── CTASection.tsx          # 底部 Call-to-Action
│   └── ui/                 # 可复用 UI 组件
│       ├── Button.tsx      # 按钮（primary/secondary/outline/ghost）
│       ├── Card.tsx        # 卡片容器（hover 动画 + accent 边框）
│       └── SectionHeading.tsx # 区块标题（label + title + subtitle）
└── lib/
    ├── design-tokens.ts    # 设计 token（颜色、字体、间距、动画预设）
    ├── site-config.ts      # 站点配置（导航、数据、产品模组定义）
    └── utils.ts            # 工具函数（cn class merge）
```

---

## 设计系统

### 颜色

| 用途 | CSS 变量 | Tailwind Class | 色号 |
|------|----------|---------------|------|
| 主色（暖橙） | `--color-primary` | `text-primary`, `bg-primary` | `#FF8C42` |
| 辅色（柔黄） | `--color-secondary` | `text-secondary`, `bg-secondary` | `#FFD166` |
| 暖白背景 | `--color-bg-warm` | `bg-bg-warm` | `#FFF8F0` |
| 浅暖背景 | `--color-bg-light` | `bg-bg-light` | `#FFF3E6` |
| 深灰文字 | `--color-text-dark` | `text-text-dark` | `#2D3436` |
| 辅助文字 | `--color-text-muted` | `text-text-muted` | `#636E72` |
| 科技蓝 | `--color-accent` | `text-accent`, `bg-accent` | `#3B82F6` |

### 字体

- **中文**: `Noto Sans SC`（通过 `next/font/google` 加载）
- **英文**: `Inter`（正文）/ `Poppins`（Display/数字）
- CSS 变量: `--font-heading`, `--font-body`, `--font-display`

### 预设渐变 CSS 类

- `.gradient-warm` — 暖橙→柔黄（按钮、强调区块）
- `.gradient-warm-subtle` — 暖白→浅暖（section 背景）
- `.gradient-tech` — 科技蓝渐变（技术页面）
- `.text-gradient-warm` — 文字暖色渐变

### 布局工具类

- `.container-main` — 最大宽度 80rem + 响应式 padding
- `.section-padding` — section 上下间距（手机 5rem，桌面 7rem）

### Framer Motion 动画预设

在 `lib/design-tokens.ts` 导出 `motionPresets`：

```tsx
import { motionPresets } from '@/lib/design-tokens';

// 使用方式
<motion.div {...motionPresets.fadeInUp}>...</motion.div>
<motion.div {...motionPresets.scaleIn}>...</motion.div>
```

可用预设: `fadeInUp`, `fadeIn`, `staggerContainer`, `staggerItem`, `scaleIn`

---

## 开发指南（给 Falcon）

### 开发新页面

1. 每个页面都已有 stub，直接在对应文件中开发
2. 子页面需要动画时使用 `'use client'` 指令
3. 纯静态页面（如 about、technology）优先用 Server Component + `export const metadata`

### 组件规范

```tsx
// 新 section 组件模板
'use client';

import { motion } from 'framer-motion';
import { motionPresets } from '@/lib/design-tokens';
import { SectionHeading, Card } from '@/components/ui';

export function MySectionName() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          label="英文标签"
          title="中文标题"
          subtitle="描述文字"
        />
        {/* 内容 */}
      </div>
    </section>
  );
}
```

### UI 组件 API

**Button**
```tsx
<Button variant="primary|secondary|outline|ghost" size="sm|md|lg">
```

**Card**
```tsx
<Card accent="primary|secondary|accent" hover={true}>
```

**SectionHeading**
```tsx
<SectionHeading label="标签" title="标题" subtitle="副标题" align="center|left" />
```

### 注意事项

- ⚠️ 用 `container-main` 而不是 `container`（自定义类）
- ⚠️ 颜色用 Tailwind 变量名（如 `bg-bg-warm`），不要硬编码色号
- ⚠️ 动画尽量用 `motionPresets`，保持全站一致
- ⚠️ 移动端优先：先写手机布局，再用 `md:` / `lg:` 扩展
- ✅ 所有内容文字后续由 Max 提供，目前用占位内容即可
- ✅ 图片素材后续 AI 生成，目前用 emoji 或占位色块

### 内容数据源

- 站点配置: `lib/site-config.ts`（导航、产品模组、统计数据）
- 暖暖芯规格: 参考 Obsidian `16_暖暖芯模组方案说明书.md`
- 官网内容规划: 参考 Obsidian `12_暖暖官网规划.md`

### Git 工作流

```bash
git checkout -b feat/xxx-page   # 功能分支
git add .
git commit -m "feat: 完成 xxx 页面"
git push origin feat/xxx-page
# 合并到 main 后 Vercel 自动部署
```

---

## 页面开发清单

| 页面 | 路由 | 状态 | 负责 |
|------|------|------|------|
| 首页 | `/` | ✅ 完成 | Oscar |
| 产品方案 | `/solutions` | ✅ 基础完成 | Oscar |
| 应用场景 | `/scenarios` | 🚧 待开发 | Falcon |
| 技术能力 | `/technology` | 🚧 待开发 | Falcon |
| 合作方式 | `/partnership` | 🚧 待开发 | Falcon |
| 关于我们 | `/about` | 🚧 待开发 | Falcon |
| 联系我们 | `/contact` | 🚧 待开发 | Falcon |

---

## 内容参考

### 面向工厂老板的语言风格

| ❌ 不要 | ✅ 要 |
|---------|-------|
| 颠覆性 AI 技术 | 让您的按摩仪多卖 3 倍价格 |
| 端侧大语言模型推理 | 不用联网就能跟老人聊天 |
| 情感状态机算法 | 设备会关心人，像家人一样 |
| 模组化 SoC 方案 | 一个模组插进去，产线不用改 |

### 核心信息（每个页面都要传递）

1. **市场空白** — 460 亿市场里，¥200-3,000 的消费级产品零 AI
2. **零门槛** — 不改产线、不招工程师、模组即插即用
3. **高溢价** — 加了暖暖模组，产品售价翻 3-5 倍
4. **先发优势** — 窗口期 6-12 个月，先做的定义品类
