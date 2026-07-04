# 生图原始提示词 (Image Generation Prompts)

本文档记录了"人工智能如水"网页项目中使用的所有 AI 图片生成提示词。

---

## 1. Hero 背景图 (hero-water-abstract.png)

**用途**: 页面顶部 header 区域的装饰性背景图（低透明度叠加）

**提示词**:
```
Abstract minimalist artwork representing the concept of "AI as water" - flowing, ethereal digital streams rendered in very pale blue-grey tones on pure white background. Subtle watercolor-like washes suggesting fluid movement and data flow. Extremely delicate, almost invisible brushstrokes creating a sense of gentle current. No text, no objects, just pure abstract flow patterns. High resolution, clean edges, suitable as a subtle background texture. Style: contemporary digital art meets traditional Chinese ink wash painting aesthetics.
```

**参数**:
- 尺寸: 1920x1080 (横向)
- 风格: 极简抽象
- 色调: 极淡蓝灰色调，白色背景
- 使用方式: `opacity: 0.04 ~ 0.08` 叠加在白色背景上

---

## 2. 品牌 Logo (logo-water-flow.png)

**用途**: 页面顶部品牌标识、favicon、页脚

**提示词**:
```
A bold graphic symbol representing flowing water and artificial intelligence, minimalist logo design. Abstract water droplet shape formed by two elegant curved lines suggesting a river current or data stream. Deep navy blue color (#1E40AF) on transparent background. No text whatsoever. Clean vector-style rendering with smooth edges. The symbol should feel both natural (water) and technological (AI). Simple enough to work at small sizes as a favicon. Style: modern brand mark, geometric yet organic.
```

**参数**:
- 尺寸: 512x512 (正方形)
- 背景: 透明 PNG
- 色调: 深海蓝 #1E40AF
- 使用方式: 32px~48px 显示在 header，24px 在 footer

---

## 3. 章节分隔装饰 (section-divider-wave.png)

**用途**: 章节之间的装饰性波浪分隔线（装饰模式下使用）

**提示词**:
```
A very subtle, thin horizontal wave pattern divider line. Single flowing curve like a gentle water ripple, rendered in pale blue-grey (#94A3B8) on transparent background. Minimalist, elegant, suitable as a section separator in editorial design. The wave should be very gentle - almost straight with just a slight undulation. Width much greater than height (aspect ratio approximately 20:1). No text, no other elements. Style: clean editorial design element.
```

**参数**:
- 尺寸: 1200x60 (极宽横向)
- 背景: 透明 PNG
- 色调: 淡蓝灰
- 使用方式: 章节间分隔装饰

---

## 4. 卡片纹理背景 (card-bg-water-texture.png)

**用途**: 名词解释卡片和案例卡片的微妙背景纹理

**提示词**:
```
Extremely subtle water texture pattern for use as a card background. Very faint, almost invisible ripple patterns in pale blue-grey on white background. The texture should be so subtle that it's barely noticeable - just adding a hint of depth and water-themed atmosphere. Seamless tileable pattern. No distinct shapes or objects, just a whisper of water surface texture. Style: minimal, clean, suitable for text overlay with high readability.
```

**参数**:
- 尺寸: 800x800 (正方形，可平铺)
- 背景: 近白色
- 色调: 极淡蓝灰纹理
- 使用方式: 卡片背景，极低透明度

---

## 通用生图策略

### 设计原则
1. **所有图片都是辅助性的** — 不抢夺文字的注意力
2. **色调统一** — 蓝灰色系，与深海蓝 #1E40AF 品牌色协调
3. **透明度使用** — 大部分图片以 4%~8% 透明度叠加，保持页面纯净
4. **尺寸考虑** — Hero 图横向大尺寸，Logo 正方形小尺寸

### 复用建议
当为新项目生成图片时：
1. 根据文章主题确定核心视觉比喻（本项目是"水"）
2. 生成 Hero 背景：抽象、极淡、大尺寸横向
3. 生成品牌 Logo：简洁符号、透明背景、深色
4. 生成装饰元素：分隔线、纹理等辅助图形
5. 所有图片保持同一色系和风格语言
