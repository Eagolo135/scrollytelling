import { z } from "zod";

export const PageFrontmatterSchema = z.object({
  title: z.string().min(1),
  layout: z.enum(["standard", "presentation", "archive"]),
  heroImage: z.string().optional(),
  summary: z.string().optional(),
  order: z.number().int().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  category: z.string().optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      openGraphImage: z.string().optional(),
    })
    .optional(),
});

export type PageFrontmatter = z.infer<typeof PageFrontmatterSchema>;
