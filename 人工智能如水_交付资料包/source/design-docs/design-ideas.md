# 人工智能如水 — 网页设计方案

## 三种设计方向

### 方向一：墨水流淌 (Ink Flow)
以中国水墨画的流动感为灵感，结合现代极简排版，营造东方文人气质与科技感的碰撞。
**概率**: 0.04

### 方向二：白纸黑字 (Pure Prose)
参考 OpenAI 官网文章页的极简学术风格，以纯白底、深黑字、大量留白和精致排版为核心，让文字本身成为主角。
**概率**: 0.08

### 方向三：深海潮汐 (Deep Tide)
以深蓝色调为主，模拟水下光影效果，营造沉浸式阅读体验。
**概率**: 0.03

---

## 选定方向：白纸黑字 (Pure Prose)

### Design Movement
**Swiss International Style + Editorial Long-form** — 结合瑞士国际主义的网格秩序感与当代数字编辑排版的呼吸节奏。参考 OpenAI 官网文章页的设计语言：极简、克制、以内容为绝对中心。

### Core Principles
1. **内容至上 (Content Supremacy)** — 一切设计决策服务于阅读体验，排版即设计
2. **呼吸留白 (Breathing Whitespace)** — 段落间距、章节间距、页面边距都宽松舒适
3. **层次分明 (Clear Hierarchy)** — 通过字号、字重、间距建立清晰的信息层级
4. **克制优雅 (Restrained Elegance)** — 装饰元素极少，但每一个都精心设计

### Color Philosophy
- **主背景**: 纯白 `#FFFFFF` — 如白纸，承载文字
- **正文色**: 深墨 `#1A1A1A` — 高对比度，长时间阅读不疲劳
- **辅助色**: 石墨灰 `#6B7280` — 用于次要信息、日期、标签
- **强调色**: 深海蓝 `#1E40AF` — 呼应"水"的主题，用于链接和交互高亮
- **卡片背景**: 极淡灰蓝 `#F8FAFC` — 名词解释和案例卡片的底色
- **边框色**: `#E5E7EB` — 细腻的分隔线

### Layout Paradigm
- **居中窄栏主体** — 正文最大宽度 680px，如同书页
- **左侧固定目录** — sticky sidebar，随滚动高亮当前章节
- **全宽引言区** — 重要引言突破正文宽度，形成视觉节奏变化
- **卡片模块** — 名词解释和案例使用浅色卡片，与正文区分

### Signature Elements
1. **水波纹进度指示** — 页面顶部的阅读进度条，以水波纹动画呈现
2. **浮现式章节标题** — 滚动到新章节时，标题从下方淡入浮现
3. **呼吸卡片** — 名词解释卡片左侧有一条细蓝色竖线，如水流标记

### Interaction Philosophy
- 交互极度克制，不打断阅读流
- 滚动驱动的淡入动画，缓慢且自然
- 目录导航点击平滑滚动到对应章节
- 移动端目录收起为顶部下拉

### Animation
- 章节标题：`opacity 0 → 1, translateY 20px → 0`，duration 600ms，ease-out
- 卡片：`opacity 0 → 1, translateY 10px → 0`，duration 400ms，stagger 100ms
- 进度条：实时跟随滚动，无延迟
- 目录高亮：`transition 200ms` 背景色变化
- 所有动画尊重 `prefers-reduced-motion`

### Typography System
- **标题字体**: "Noto Serif SC" — 宋体质感，文人气质
- **正文字体**: "Noto Sans SC" — 清晰易读的无衬线
- **英文辅助**: "Source Serif 4" 搭配 "Inter"
- **字号层级**:
  - H1 (文章标题): 42px / font-weight 700
  - H2 (章节标题): 32px / font-weight 700
  - H3 (小节标题): 24px / font-weight 600
  - Body: 18px / line-height 1.8 / font-weight 400
  - Caption/Meta: 14px / font-weight 400 / color gray
  - Blockquote: 20px / font-weight 500 / italic

### Brand Essence
一篇面向教育者的 AI 认知启蒙长文，以"水"为核心比喻，将复杂的技术概念转化为可感知的自然意象。文风温润、有力、不媚俗。
**三个性格形容词**: 温润、锐利、沉稳

### Brand Voice
标题和正文应当如演讲般有节奏感，不使用"欢迎来到"或"点击了解更多"等泛化表达。
- 示例标题："不是先学会按钮，而是先学会看见水流。"
- 示例引言："模型能力是水势，Harness Engineering 是河道工程。"

### Wordmark & Logo
一个抽象的水滴/河流符号，由简洁的曲线构成，暗示流动与方向感。不使用默认字体直接拼写品牌名。

### Signature Brand Color
**深海蓝 `#1E40AF`** — 如深水般沉稳有力，既呼应"水"的主题，又传递专业与信任。


## Style Decisions

- **Editorial hierarchy rule:** Major section openings use serif display type with generous whitespace and a clear gradient divider line before returning to body text.
- **Brand mark rule:** The abstract water/river symbol appears as a recognizable signature in the header and footer, with `#1E40AF` as the only brand accent for active states, rules, links, and key editorial emphasis.
- **Long-form rhythm rule:** Every major chapter includes at least one deliberate rhythm device (pull quote, definition card, framework card, or wide editorial statement) so the article never becomes an uninterrupted paragraph column.
