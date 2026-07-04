# Design Specification

## Design Movement

**Swiss International Style + Editorial Long-form** — Grid order from Swiss design + breathing rhythm from digital editorial. Reference: OpenAI article pages.

## Core Principles

1. **Content Supremacy** — All design decisions serve reading experience
2. **Breathing Whitespace** — Generous paragraph, section, and page margins
3. **Clear Hierarchy** — Font size, weight, and spacing create information levels
4. **Restrained Elegance** — Minimal decoration, each element carefully designed

## Color Philosophy

| Role | Value | Usage |
|---|---|---|
| Background | `#FFFFFF` | Main page background |
| Body text | `#374151` | Paragraph text |
| Headings | `#0d0d0d` | H1, H2, strong text |
| Secondary | `#666666` | Meta info, dates, labels |
| Muted | `#999999` | Captions, timestamps |
| Brand accent | `#1E40AF` | Links, active states, editorial highlights |
| Card bg | `#f7f7f8` | Definition and case cards |
| Card border | `#ececed` | Card borders |
| Divider | `#e5e5e5` | Toolbar borders, section separators |
| Widescreen bg | `#1a1a1a` | Dark mode background |
| Widescreen text | `rgba(255,255,255,0.85)` | Dark mode body text |

**Adaptation rule**: Replace `#1E40AF` with a color that matches the document's core theme.

## Typography System

### Fonts (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap" rel="stylesheet" />
```

### Scale

| Element | Size | Weight | Line-height | Font |
|---|---|---|---|---|
| H1 (page title) | 2.5rem → 4rem | 900 (black) | 1.15 | Sans (default) or Serif |
| H2 (section) | 1.5rem | 700 | 1.35 | Inherits mode |
| Body | 16px | 400 | 1.75 | Sans default |
| Body (serif) | 17px | 400 | 1.9 | Noto Serif SC |
| Body (editorial) | 18px | 400 | 1.85 | Noto Serif SC |
| Body (widescreen) | 20px | 400 | 1.9 | Inherits |
| Quote | 15px | 400 | 1.8 | Italic |
| Card text | 15px | 400 | 1.75 | Sans |
| Meta/caption | 14px | 400 | — | Sans |
| Card label | 12px | 600 | — | Sans, uppercase, tracking-wider |

## Layout Paradigm

```
┌─────────────────────────────────────────────┐
│  Header: Logo + Category + Title (centered) │
│  max-w: 680px (openai) / 780px (editorial)  │
├─────────────────────────────────────────────┤
│  Toolbar: mode buttons | font | widescreen  │
│  border-t border-b, same max-w as header    │
├──────────┬──────────────────────────────────┤
│  TOC     │  Article body                    │
│  220px   │  max-w: 680px                    │
│  sticky  │  (900px in widescreen)           │
│  top:16  │                                  │
├──────────┴──────────────────────────────────┤
│  Footer: logo + title + date                │
└─────────────────────────────────────────────┘

Container: max-w-[1080px] (default) / max-w-[1120px] (editorial)
```

### Mobile

- TOC hidden, replaced by floating bottom-right button
- Opens as overlay panel with backdrop blur
- Widescreen mode hides mobile TOC button

## Signature Elements

1. **Reading progress bar** — 2px fixed top, tracks scroll percentage
2. **Scroll-triggered fade-in** — Sections animate in with `opacity 0→1, translateY 20→0`
3. **Active TOC highlight** — Background color change on current section
4. **Toolbar separator** — Thin border-t/border-b line between header and content

## Animation Guidelines

```
Section entrance:  opacity 0→1, y 20→0, duration 600ms, ease [0.23, 1, 0.32, 1]
                   triggered once when section enters viewport (margin: -40px)

Progress bar:      width transition 75ms linear, real-time scroll tracking

TOC highlight:     transition-all 200ms

Mode switch:       transition-colors 300ms on container background

Page scroll:       html { scroll-behavior: smooth }
```

All animations use `useInView` with `once: true` — they fire only on first scroll-in.

## ideas.md Template

When creating `ideas.md` for a new project, follow this structure:

```markdown
# [Document Title] — 网页设计方案

## 三种设计方向

### 方向一：[Name]
[1-2 sentences]
**概率**: 0.0X

### 方向二：[Name]  
[1-2 sentences]
**概率**: 0.0X

### 方向三：[Name]
[1-2 sentences]
**概率**: 0.0X

---

## 选定方向：[Chosen Name]

### Design Movement
[Reference aesthetic]

### Core Principles
1. ...
2. ...
3. ...
4. ...

### Color Philosophy
- 主背景: ...
- 正文色: ...
- 强调色: [theme-appropriate brand color]
...

### Typography System
[Font pairings and hierarchy]

### Brand Essence
[One-line positioning + 3 personality adjectives]

### Brand Voice
[How copy sounds + 2 example lines]

### Signature Brand Color
[One ownable color with rationale]
```
