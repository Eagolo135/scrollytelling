# Nuclear Engineering Archive Images

This directory contains nuclear engineering photography assets and visual documentation for the archive/history storytelling section.

## Structure

- `reactors/` - Nuclear reactor facility images
- `equipment/` - Engineering equipment and apparatus photographs
- `historical/` - Historical reference imagery

## Asset Guidelines

- All images should be optimized for web (compressed, reasonable dimensions)
- Include descriptive filenames (e.g., `pwr-containment-structure.jpg`)
- Maintain attribution and licensing metadata where applicable
- Ensure basePath compatibility (use relative paths or next/image component)

## Example Usage in Content

```markdown
![Reactor Description](/images/nuclear-archive/reactors/image.jpg)

Or with Next.js Image component:
<Image src="/images/nuclear-archive/reactors/image.jpg" alt="..." width={800} height={600} />
```
