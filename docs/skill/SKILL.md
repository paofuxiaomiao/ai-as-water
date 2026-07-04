---
name: article-showcase
description: Generate a polished, multi-mode article showcase webpage from any uploaded document (PDF, Word, Markdown, plain text). Produces an OpenAI-style editorial page with left TOC, reading progress bar, multiple visual modes (minimal/decorated/editorial/widescreen), font toggle, and animated sections. Use when user uploads a document and wants it turned into a beautiful reading webpage, showcase page, or article display.
---

# Article Showcase

Transform any uploaded document into a premium editorial showcase webpage inspired by OpenAI's article page design.

## Workflow

1. **Extract content** from the uploaded document (use pdftotext for PDF, or read directly)
2. **Analyze structure** — identify title, subtitle, author, date, sections/chapters, key quotes, definitions, examples
3. **Generate design document** — create `ideas.md` using `references/design-spec.md` as template
4. **Generate visual assets** — use prompts from `references/image-prompts.md`, adapted to the document's theme
5. **Build the webpage** — use `templates/Home.tsx` as component architecture reference, `templates/index.css` for styles
6. **Verify all 5 modes work** — minimal, decorated, editorial, font toggle, widescreen

## Content Classification

Parse the document and map content blocks to components:

| Block Type | Identification Pattern | Component |
|---|---|---|
| Section heading | Major topic change, numbered chapters | `<h2 id="..." className="article-h2">` |
| Body paragraph | Normal prose | `<p>` |
| Key quote / thesis | Indented, italic, or marked as important | `<blockquote className="article-quote">` |
| Definition / term | Glossary, "名词解释", definition pattern | `<DefinitionCard>` |
| Example / case | "案例", "示例", "example" | `<CaseCard>` |
| Code / prompt | Code blocks, prompt templates | `<PromptCard>` |
| Comparison / framework | Tables, side-by-side items | `<FrameworkCard>` |
| Emphasis | Bold thesis, key argument | `<strong>` within `<p>` |

## Multi-Mode System

Every generated page MUST include these 5 toggles in the toolbar:

1. **极简 (Minimal)** — Pure black/white, no decorative images, sans-serif
2. **装饰 (Decorated)** — With hero background image and logo, sans-serif (default)
3. **编辑 (Editorial)** — Serif font, brand accent color, section borders, larger type
4. **衬线体/无衬线体 (Font toggle)** — Independent serif/sans-serif switch
5. **大屏 (Widescreen)** — Dark background (#1a1a1a), white text, hidden sidebar, larger font

## Adaptation for New Documents

1. **Title & metadata**: Replace title, subtitle, date, category tag from the document
2. **Sections array**: Build `sections` const from actual chapter headings
3. **Content blocks**: Map extracted content to appropriate components
4. **Brand color**: Choose a signature color matching the document's theme (default: `#1E40AF`)
5. **Image prompts**: Adapt the visual metaphor — replace "water" with the document's core concept
6. **Logo concept**: Design a simple symbol representing the document's theme (no text, transparent bg)

## Technical Setup

- Framework: React 19 + Tailwind CSS 4 + Framer Motion
- Fonts: Google Fonts — Noto Sans SC + Noto Serif SC + Source Serif 4
- Static site (no backend required)
- All images uploaded via `manus-upload-file --webdev`

## References

- **Design system**: Read `references/design-spec.md` for colors, typography, layout, animation
- **Image prompts**: Read `references/image-prompts.md` for asset generation templates

## Templates

- **Page component**: `templates/Home.tsx` — full component architecture with all modes
- **Styles**: `templates/index.css` — complete CSS with mode variants
- **HTML**: `templates/index.html` — font loading and meta setup

## Quality Checklist

- [ ] All sections from the original document are represented
- [ ] TOC navigation works and highlights active section on scroll
- [ ] Reading progress bar tracks scroll position
- [ ] All 5 mode toggles function correctly
- [ ] Mobile responsive with floating TOC button
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Text contrast passes WCAG AA in all modes
