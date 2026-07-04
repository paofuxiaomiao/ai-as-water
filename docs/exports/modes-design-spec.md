# 五种展示模式设计规格文档

本文档详细记录了"人工智能如水"网页中五种视觉/字体模式的完整设计参数，供复用和参考。

---

## 模式一：极简 (Minimal / OpenAI Style)

### 设计理念
纯黑白灰，零装饰，最大限度还原 OpenAI 文章页的克制美学。文字即设计，留白即语言。

### 色彩系统

| 元素 | 色值 | 说明 |
|---|---|---|
| 页面背景 | `#FFFFFF` | 纯白 |
| 正文文字 | `#374151` | 深灰，长时间阅读不疲劳 |
| 标题文字 | `#0d0d0d` | 近黑 |
| 次要信息 | `#666666` | 石墨灰 |
| 弱化信息 | `#999999` | 浅灰 |
| 卡片背景 | `#f7f7f8` | 极浅灰 |
| 卡片边框 | `#ececed` | 细线灰 |
| 分隔线 | `#e5e5e5` | 工具栏边框 |
| 进度条 | `#0d0d0d` | 黑色 |
| 强调色 | 无 | 不使用任何彩色 |

### 排版规格

| 元素 | 字体 | 字号 | 字重 | 行高 |
|---|---|---|---|---|
| 页面标题 H1 | Noto Sans SC | 2.5rem → 4rem (响应式) | 900 (Black) | 1.15 |
| 章节标题 H2 | Noto Sans SC | 1.5rem (24px) | 700 | 1.35 |
| 正文段落 | Noto Sans SC | 16px | 400 | 1.75 |
| 引言块 | Noto Sans SC | 15px | 400 | 1.8 |
| 卡片标签 | Noto Sans SC | 12px | 600 | — |
| 卡片标题 | Noto Sans SC | 16px | 700 | — |
| 卡片正文 | Noto Sans SC | 15px | 400 | 1.75 |
| 元信息 | Noto Sans SC | 14px | 400 | — |

### 布局参数

- 标题区域：`max-w-[680px]`，居中对齐
- 工具栏：`max-w-[680px]`，`border-t border-b border-[#e5e5e5]`
- 内容容器：`max-w-[1080px]`
- 侧边目录：`w-[220px]`，`sticky top-16`
- 文章正文：`max-w-[680px]`
- 段落间距：`margin-bottom: 1.4em`
- 章节标题上间距：`margin-top: 3.5rem`，`padding-top: 2rem`

### 交互细节

- 装饰图：**隐藏**
- Logo：显示（小尺寸 32px）
- 目录高亮：`bg-[#f0f0f0] text-[#0d0d0d] font-semibold`
- 引言样式：`border-left: 3px solid #e5e5e5`，斜体，`color: #666`
- 选中文字：`background: #d1d5db`

---

## 模式二：装饰 (Decorated)

### 设计理念
在极简基础上增加品牌装饰元素（Hero 背景图、Logo），保持无衬线体，增加一层视觉温度。默认模式。

### 色彩系统

与极简模式完全相同，额外增加：

| 元素 | 色值 | 说明 |
|---|---|---|
| Hero 背景图透明度 | `opacity: 0.04` | 极淡水纹背景 |
| Logo | 原色显示 | 深海蓝水滴符号 |

### 排版规格

与极简模式完全相同。

### 布局参数

与极简模式完全相同。

### 交互细节

- 装饰图：**显示**（Hero 区域背景，`opacity: 0.04`）
- Logo：显示（`w-8 h-8`）
- 其余与极简模式一致

### 与极简模式的差异

仅在 `<header>` 区域增加了：
```jsx
<div className="absolute inset-0 pointer-events-none opacity-[0.04]">
  <img src="hero-water-abstract.png" className="w-full h-full object-cover" />
</div>
```

---

## 模式三：编辑 (Editorial)

### 设计理念
第一版设计风格。衬线体为主，深海蓝 `#1E40AF` 作为品牌强调色贯穿全文。更大字号、更宽松行高、蓝色章节分隔线，营造文人气质与学术权威感。

### 色彩系统

| 元素 | 色值 | 说明 |
|---|---|---|
| 页面背景 | `#FFFFFF` | 纯白 |
| 正文文字 | `#1A1A1A` | 深墨（比极简模式更深） |
| 标题文字 | `#1A1A1A` | 深墨 |
| 品牌强调色 | `#1E40AF` | 深海蓝 |
| 引言文字 | `#1E40AF` | 蓝色引言 |
| 加粗文字 | `#1E40AF` | 蓝色强调 |
| 章节分隔线 | `#1E40AF` | 蓝色 3px 顶部边框 |
| 目录高亮 | `#1E40AF/5` 背景 + `#1E40AF` 左边框 | 蓝色系 |
| 分类标签 | `#1E40AF/70` | 半透明蓝 |
| Hero 背景透明度 | `opacity: 0.08` | 比装饰模式更明显 |
| 进度条 | `#1E40AF` | 蓝色 |

### 排版规格

| 元素 | 字体 | 字号 | 字重 | 行高 |
|---|---|---|---|---|
| 页面标题 H1 | Noto Serif SC | 2.5rem → 4.5rem (响应式) | 700 (Bold) | 1.15 |
| 章节标题 H2 | Noto Serif SC | 2rem (32px) | 700 | 1.35 |
| 正文段落 | Noto Serif SC | 18px | 400 | 1.85 |
| 引言块 | Noto Serif SC | 20px | 500 | 1.8 |
| 列表项 | Noto Serif SC | 18px | 400 | 1.85 |
| 卡片标签 | Noto Sans SC | 12px | 600 | — |
| 卡片标题 | Noto Sans SC | 16px | 700 | — |
| 卡片正文 | Noto Sans SC | 15px | 400 | 1.75 |

### 布局参数

- 标题区域：`max-w-[780px]`（比极简更宽）
- 工具栏：`max-w-[780px]`
- 内容容器：`max-w-[1120px]`（比极简更宽）
- 侧边目录：`w-[220px]`
- 文章正文：`max-w-[680px]`
- 章节标题：`margin-top: 4rem`，`padding-top: 2.5rem`，`border-top: 3px solid #1E40AF`

### 交互细节

- 装饰图：**显示**（`opacity: 0.08`，更明显）
- Header 底部：白色渐变遮罩 `bg-gradient-to-t from-white to-transparent`
- Logo：`w-10 h-10`（比极简更大）
- 目录高亮：`text-[#1E40AF] bg-[#1E40AF]/5 border-l-2 border-[#1E40AF]`
- 引言样式：`border-left: 3px solid #1E40AF`，`color: #1E40AF`，斜体，500 字重
- 工具栏按钮高亮：`bg-[#1E40AF]/10 text-[#1E40AF]`

### CSS 规则

```css
.article-editorial p {
  font-family: "Noto Serif SC", "Source Serif 4", serif;
  font-size: 18px;
  line-height: 1.85;
  color: #1A1A1A;
}

.article-editorial .article-h2 {
  font-family: "Noto Serif SC", "Source Serif 4", serif;
  font-size: 2rem;
  font-weight: 700;
  color: #1A1A1A;
  margin-top: 4rem;
  margin-bottom: 2rem;
  border-top: 3px solid #1E40AF;
  padding-top: 2rem;
}

.article-editorial .article-quote {
  font-family: "Noto Serif SC", "Source Serif 4", serif;
  font-size: 20px;
  line-height: 1.8;
  font-weight: 500;
  color: #1E40AF;
  border-left: 3px solid #1E40AF;
  padding-left: 1.5rem;
  margin: 2.5rem 0;
  font-style: italic;
}

.article-editorial strong {
  color: #1E40AF;
}
```

---

## 模式四：衬线体切换 (Serif Font Toggle)

### 设计理念
独立于视觉模式的字体覆盖层。可以与任何视觉模式组合使用（如"极简+衬线体"、"装饰+衬线体"）。切换后正文、标题和引言改用衬线体，字号和行高微调以适配衬线体的阅读节奏。

### 排版规格（覆盖层）

| 元素 | 字体 | 字号 | 行高 | 变化说明 |
|---|---|---|---|---|
| 正文段落 | Noto Serif SC / Source Serif 4 | 17px (+1px) | 1.9 (+0.15) | 衬线体需要更大行高 |
| 列表项 | Noto Serif SC / Source Serif 4 | 17px | 1.9 | 同上 |
| 章节标题 | Noto Serif SC / Source Serif 4 | 不变 | 不变 | 仅切换字体 |
| 引言块 | Noto Serif SC / Source Serif 4 | 16px (+1px) | 不变 | 微调 |

### CSS 规则

```css
.article-serif p,
.article-serif ul li {
  font-family: "Noto Serif SC", "Source Serif 4", serif;
  font-size: 17px;
  line-height: 1.9;
}

.article-serif .article-h2 {
  font-family: "Noto Serif SC", "Source Serif 4", serif;
}

.article-serif .article-quote {
  font-family: "Noto Serif SC", "Source Serif 4", serif;
  font-size: 16px;
}
```

### 优先级规则

- 当"编辑模式"激活时，已经是衬线体，字体切换按钮的效果被编辑模式覆盖
- 字体切换状态独立存储，切回极简/装饰模式后仍然生效
- 逻辑：`const useSerif = viewMode === 'editorial' || fontSerif;`

---

## 模式五：大屏 / 演示模式 (Widescreen / Presentation)

### 设计理念
深色沉浸式阅读体验，适合投影、大屏展示或夜间阅读。隐藏侧边目录，加宽内容区域，增大字号，深灰背景配白色文字。类似 Medium 的暗色模式或演讲稿全屏视图。

### 色彩系统

| 元素 | 色值 | 说明 |
|---|---|---|
| 页面背景 | `#1a1a1a` | 深灰（非纯黑，减少视觉疲劳） |
| 正文文字 | `rgba(255,255,255,0.85)` | 85% 白 |
| 标题文字 | `#FFFFFF` | 纯白 |
| 加粗文字 | `#FFFFFF` | 纯白 |
| 引言文字 | `rgba(255,255,255,0.6)` | 60% 白 |
| 引言边框 | `rgba(255,255,255,0.2)` | 20% 白 |
| 章节分隔线 | `rgba(255,255,255,0.1)` | 10% 白 |
| 进度条 | `rgba(255,255,255,0.4)` | 40% 白 |
| 工具栏边框 | `rgba(255,255,255,0.1)` | 10% 白 |
| 次要信息 | `rgba(255,255,255,0.40)` | 40% 白 |
| 极弱信息 | `rgba(255,255,255,0.30)` | 30% 白 |
| 选中按钮 | `rgba(255,255,255,0.10)` 背景 | 微亮 |

### 排版规格

| 元素 | 字体 | 字号 | 字重 | 行高 |
|---|---|---|---|---|
| 页面标题 H1 | 继承当前模式 | 2.5rem → 4.5rem | 900 (Black) | 1.15 |
| 章节标题 H2 | 继承当前模式 | 2.25rem (36px) | 800 | 1.35 |
| 正文段落 | 继承当前模式 | 20px (+4px) | 400 | 1.9 |
| 列表项 | 继承当前模式 | 20px | 400 | 1.9 |
| 引言块 | 继承当前模式 | 22px | 400 | 1.7 |

### 布局参数

- 标题区域：`max-w-[900px]`，**左对齐**（非居中）
- 工具栏：`max-w-[900px]`
- 内容容器：`max-w-[900px]`
- 侧边目录：**隐藏**
- 文章正文：`max-w-[900px]`（全宽）
- 章节标题：`margin-top: 5rem`，`padding-top: 3rem`，`border-top: 1px solid rgba(255,255,255,0.1)`
- 段落间距：`margin-bottom: 2rem`（比默认更宽松）
- Header 内边距：`pt-12 pb-8` (移动) / `pt-20 pb-12` (桌面)

### 交互细节

- 装饰图：**隐藏**（所有模式的装饰图在大屏下都不显示）
- 侧边目录：**隐藏**
- 移动端浮动按钮：**隐藏**
- Logo：显示，`w-9 h-9`
- 分类标签：`text-white/50`
- 副标题：`text-white/40`
- 日期：`text-white/30`
- Footer Logo 透明度：`opacity-40`
- Footer 标题：`text-white/80`
- Footer 日期：`text-white/20`

### CSS 规则

```css
.article-widescreen p {
  font-size: 20px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
}

.article-widescreen ul li {
  font-size: 20px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.85);
}

.article-widescreen strong {
  color: white;
  font-weight: 700;
}

.article-widescreen .article-h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: white;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.article-widescreen .article-quote {
  font-size: 22px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  padding-left: 1.5rem;
  margin: 2.5rem 0;
  font-style: italic;
}
```

### 容器背景切换

```jsx
<div className={`min-h-screen transition-colors duration-300 ${wideScreen ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
```

---

## 模式组合矩阵

| 视觉模式 | 字体切换 OFF | 字体切换 ON |
|---|---|---|
| 极简 | Sans 16px, 黑白灰 | Serif 17px, 黑白灰 |
| 装饰 | Sans 16px, 黑白灰+背景图 | Serif 17px, 黑白灰+背景图 |
| 编辑 | Serif 18px, 蓝色强调 (自带衬线) | Serif 18px, 蓝色强调 (无变化) |

大屏模式独立于上述组合，可叠加在任何视觉模式上：

| 大屏 + 视觉模式 | 效果 |
|---|---|
| 大屏 + 极简 | 深色背景, Sans 20px, 无装饰 |
| 大屏 + 装饰 | 深色背景, Sans 20px, 无装饰 (装饰图被隐藏) |
| 大屏 + 编辑 | 深色背景, Serif 20px, 无蓝色强调 (被白色覆盖) |

---

## 状态管理逻辑

```typescript
const [viewMode, setViewMode] = useState<'openai' | 'decorated' | 'editorial'>('decorated');
const [fontSerif, setFontSerif] = useState(false);
const [wideScreen, setWideScreen] = useState(false);

// 派生状态
const showDecorations = viewMode !== 'openai';           // 是否显示装饰图
const useSerif = viewMode === 'editorial' || fontSerif;  // 是否使用衬线体
const isEditorial = viewMode === 'editorial';            // 是否编辑模式

// CSS class 组合
const articleClasses = `
  article-body
  ${wideScreen ? 'max-w-[900px] article-widescreen' : 'max-w-[680px]'}
  ${useSerif ? 'article-serif' : ''}
  ${isEditorial ? 'article-editorial' : ''}
`;
```

### CSS 优先级

```
article-widescreen > article-editorial > article-serif > article-body (base)
```

大屏模式的样式覆盖所有其他模式的颜色（因为背景变暗，文字必须变白）。

---

## 图片插入逻辑（参考 OpenAI 文章页）

本节定义图片在文章中的插入规则、样式规范和各模式下的适配策略。

### 图片类型分类

| 类型 | 用途 | 格式 | 示例 |
|---|---|---|---|
| 流程图/架构图 | 解释系统工作原理 | SVG / PNG | Codex 工作流程图 |
| 概念示意图 | 可视化抽象概念 | PNG (AI 生成) | 水流比喻图 |
| 代码截图 | 展示代码示例 | PNG | Prompt 模板截图 |
| 数据图表 | 展示数据对比 | SVG | 框架对比表格 |
| 装饰性背景 | 品牌氛围 | PNG (半透明) | Hero 水纹背景 |

### 图片样式规范

#### 核心原则

1. **图片是内容的一部分**，不是装饰 — 每张图都有明确的信息传达目的
2. **极简呈现** — 无边框、无阴影、无圆角（与 OpenAI 一致）
3. **与文字等宽** — 图片宽度 = 文章正文宽度，不突破内容区域
4. **标题在上** — 先告诉读者这是什么，再展示图片
5. **留白充足** — 图片上下都有充足的空白，让内容呼吸

#### CSS 基础样式

```css
/* 图片容器 */
.article-figure {
  margin: 2.5rem 0 3rem 0;
  width: 100%;
}

/* 图片标题（在图片上方） */
.article-figure-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

/* 图片本体 */
.article-figure img {
  width: 100%;
  height: auto;
  border-radius: 0;        /* 无圆角 */
  box-shadow: none;         /* 无阴影 */
  border: none;             /* 无边框 */
}

/* 图片描述（可选，在图片下方） */
.article-figure-description {
  margin-top: 0.75rem;
  font-size: 13px;
  color: #666666;
  line-height: 1.6;
}
```

### 图片位置逻辑

#### 插入规则

1. **段落之间** — 图片总是出现在两个段落之间，不会打断段落
2. **章节内部** — 图片属于某个章节的说明材料
3. **紧跟说明文字** — 图片紧跟在解释该图片内容的段落之后
4. **一图一概念** — 每张图片解释一个独立的概念/流程
5. **不连续放置** — 两张图片之间至少间隔一个段落的文字

#### 推荐插入位置

| 位置 | 适合的图片类型 | 说明 |
|---|---|---|
| 章节开头（标题后第一段之后） | 概念总览图 | 帮助读者快速理解本章主题 |
| 解释性段落之后 | 流程图/架构图 | 文字解释 + 图片印证 |
| 对比/列举之后 | 数据图表/对比图 | 将文字信息可视化 |
| 章节结尾 | 总结性示意图 | 回顾本章核心概念 |

### JSX 组件模板

```jsx
{/* 标准图片插入 */}
<figure className="my-10 md:my-14">
  <figcaption className="flex items-center justify-between mb-4">
    <span className="text-sm font-medium text-[#374151]">
      图片标题文字
    </span>
    <svg className="w-5 h-5 text-[#999]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
      <path d="M8 12h8M12 8v8" strokeWidth="1.5"/>
    </svg>
  </figcaption>
  <img 
    src="/path/to/image.png" 
    alt="详细的图片描述文字"
    className="w-full"
    loading="lazy"
  />
  {/* 可选：图片下方补充说明 */}
  <p className="mt-3 text-[13px] text-[#666] leading-relaxed">
    补充说明文字（可选）
  </p>
</figure>
```

### 各模式下的图片适配

#### 极简模式 (Minimal)

```css
.article-figure-caption {
  color: #374151;
}
.article-figure img {
  /* 白色背景图表与页面融为一体 */
  background: transparent;
}
```

#### 装饰模式 (Decorated)

与极简模式完全相同，图片样式不受装饰元素影响。

#### 编辑模式 (Editorial)

```css
.article-editorial .article-figure-caption {
  color: #1A1A1A;
  font-family: "Noto Sans SC", sans-serif;  /* 标题保持无衬线 */
  font-size: 13px;
  letter-spacing: 0.02em;
  text-transform: none;
}

.article-editorial .article-figure {
  margin: 3rem 0 3.5rem 0;  /* 编辑模式间距更大 */
}
```

#### 大屏模式 (Widescreen)

```css
.article-widescreen .article-figure {
  margin: 3.5rem 0 4rem 0;  /* 大屏间距最大 */
  max-width: 900px;          /* 跟随大屏内容宽度 */
}

.article-widescreen .article-figure-caption {
  color: rgba(255, 255, 255, 0.6);  /* 适配深色背景 */
}

.article-widescreen .article-figure img {
  /* 深色背景下的图表需要反色或加白色背景 */
  background: white;
  border-radius: 4px;        /* 大屏模式例外：加微圆角区分图表区域 */
  padding: 1rem;             /* 加内边距让白色背景不贴边 */
}

.article-widescreen .article-figure-description {
  color: rgba(255, 255, 255, 0.4);
}
```

### 图片加载策略

```jsx
// 懒加载 + 渐显动画
<img 
  src={imageSrc}
  alt={imageAlt}
  className="w-full opacity-0 transition-opacity duration-500"
  loading="lazy"
  onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
/>
```

### 图片间距速查表

| 模式 | 上方间距 | 下方间距 | 标题与图片间距 |
|---|---|---|---|
| 极简 | 2.5rem | 3rem | 1rem |
| 装饰 | 2.5rem | 3rem | 1rem |
| 编辑 | 3rem | 3.5rem | 1.25rem |
| 大屏 | 3.5rem | 4rem | 1.5rem |

### 响应式适配

```css
/* 移动端 */
@media (max-width: 768px) {
  .article-figure {
    margin: 1.5rem -1rem;    /* 负边距让图片出血到屏幕边缘 */
    width: calc(100% + 2rem);
  }
  
  .article-figure-caption {
    padding: 0 1rem;
    font-size: 13px;
  }
  
  .article-figure-description {
    padding: 0 1rem;
  }
}

/* 平板 */
@media (min-width: 769px) and (max-width: 1024px) {
  .article-figure {
    margin: 2rem 0 2.5rem 0;
  }
}
```

### 特殊图片类型处理

#### 代码截图

```jsx
<figure className="my-10 md:my-14">
  <figcaption className="flex items-center justify-between mb-4">
    <span className="text-sm font-medium text-[#374151]">Prompt 示例</span>
    <button className="text-xs text-[#999] hover:text-[#374151] transition-colors">
      复制代码
    </button>
  </figcaption>
  <div className="bg-[#1a1a1a] rounded-lg p-6 overflow-x-auto">
    <pre className="text-sm text-white/80 font-mono leading-relaxed">
      {codeContent}
    </pre>
  </div>
</figure>
```

#### 对比图/并排图

```jsx
<figure className="my-10 md:my-14">
  <figcaption className="mb-4">
    <span className="text-sm font-medium text-[#374151]">框架对比</span>
  </figcaption>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <img src="/image-a.png" alt="方案A" className="w-full" />
    <img src="/image-b.png" alt="方案B" className="w-full" />
  </div>
</figure>
```

#### 全宽突破图（用于特别重要的图表）

```jsx
{/* 突破正文宽度，占满内容容器宽度 */}
<figure className="my-12 md:my-16 -mx-8 md:-mx-16 lg:-mx-24">
  <figcaption className="px-8 md:px-16 lg:px-24 mb-4">
    <span className="text-sm font-medium text-[#374151]">系统架构全景</span>
  </figcaption>
  <img src="/architecture-full.svg" alt="..." className="w-full" />
</figure>
```

---

## 完整模式切换状态管理（含图片逻辑）

```typescript
const [viewMode, setViewMode] = useState<'openai' | 'decorated' | 'editorial'>('decorated');
const [fontSerif, setFontSerif] = useState(false);
const [wideScreen, setWideScreen] = useState(false);

// 派生状态
const showDecorations = viewMode !== 'openai';
const useSerif = viewMode === 'editorial' || fontSerif;
const isEditorial = viewMode === 'editorial';

// 图片样式派生
const figureClass = `
  article-figure
  ${wideScreen ? 'article-figure-widescreen' : ''}
  ${isEditorial ? 'article-figure-editorial' : ''}
`;

const captionColor = wideScreen 
  ? 'text-white/60' 
  : isEditorial 
    ? 'text-[#1A1A1A]' 
    : 'text-[#374151]';

const imgBackground = wideScreen ? 'bg-white rounded p-4' : '';
```
