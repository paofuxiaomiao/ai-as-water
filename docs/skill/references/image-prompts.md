# Image Generation Prompts

Generate 4 images at project start. Adapt the `[THEME]` placeholder to the document's core visual metaphor.

## 1. Hero Background

**Purpose**: Subtle decorative background in header area (used at 4-8% opacity)

**Prompt template**:
```
Abstract minimalist artwork representing the concept of "[THEME]" - [visual description of the theme as flowing/ethereal/geometric patterns] rendered in very pale [theme-color]-grey tones on pure white background. Subtle watercolor-like washes suggesting [movement type]. Extremely delicate, almost invisible brushstrokes. No text, no objects, just pure abstract [pattern type]. High resolution, clean edges, suitable as a subtle background texture. Style: contemporary digital art meets [cultural reference if appropriate].
```

**Parameters**: 1920x1080, horizontal, pale/ethereal

**Example** (water theme):
```
Abstract minimalist artwork representing the concept of "AI as water" - flowing, ethereal digital streams rendered in very pale blue-grey tones on pure white background. Subtle watercolor-like washes suggesting fluid movement and data flow. Extremely delicate, almost invisible brushstrokes creating a sense of gentle current. No text, no objects, just pure abstract flow patterns. High resolution, clean edges, suitable as a subtle background texture. Style: contemporary digital art meets traditional Chinese ink wash painting aesthetics.
```

## 2. Brand Logo/Symbol

**Purpose**: Header brand mark, favicon, footer (displayed at 32-48px)

**Prompt template**:
```
A bold graphic symbol representing [THEME CONCEPT], minimalist logo design. Abstract [shape description] formed by [geometric/organic lines] suggesting [metaphor]. [Brand color hex] on transparent background. No text whatsoever. Clean vector-style rendering with smooth edges. The symbol should feel both [quality 1] and [quality 2]. Simple enough to work at small sizes as a favicon. Style: modern brand mark, geometric yet organic.
```

**Parameters**: 512x512, square, transparent PNG, brand color

**Example** (water theme):
```
A bold graphic symbol representing flowing water and artificial intelligence, minimalist logo design. Abstract water droplet shape formed by two elegant curved lines suggesting a river current or data stream. Deep navy blue color (#1E40AF) on transparent background. No text whatsoever. Clean vector-style rendering with smooth edges. The symbol should feel both natural (water) and technological (AI). Simple enough to work at small sizes as a favicon. Style: modern brand mark, geometric yet organic.
```

## 3. Section Divider

**Purpose**: Decorative separator between chapters (in decorated mode)

**Prompt template**:
```
A very subtle, thin horizontal [pattern] divider line. Single [shape description] like a gentle [metaphor], rendered in pale [color] (#94A3B8) on transparent background. Minimalist, elegant, suitable as a section separator in editorial design. Width much greater than height (aspect ratio approximately 20:1). No text, no other elements. Style: clean editorial design element.
```

**Parameters**: 1200x60, very wide horizontal, transparent PNG

## 4. Card Texture

**Purpose**: Subtle background for definition/case cards (barely visible)

**Prompt template**:
```
Extremely subtle [theme] texture pattern for use as a card background. Very faint, almost invisible [pattern type] in pale [color] on white background. The texture should be so subtle that it's barely noticeable - just adding a hint of depth and [theme]-themed atmosphere. Seamless tileable pattern. No distinct shapes or objects, just a whisper of [texture metaphor]. Style: minimal, clean, suitable for text overlay with high readability.
```

**Parameters**: 800x800, square, tileable, near-white

## Adaptation Strategy

1. Identify the document's **core visual metaphor** (e.g., water, light, growth, network, mountain)
2. Choose a **brand color** that represents the theme emotionally
3. Replace `[THEME]` placeholders with specific descriptions
4. Keep all images **extremely subtle** — they support text, never compete with it
5. Maintain **consistent color family** across all 4 assets
