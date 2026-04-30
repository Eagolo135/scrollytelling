import type { PageData } from "@/lib/content/repository";
import { PresentationLayout } from "./PresentationLayout";
import { StandardLayout } from "./StandardLayout";
import { ArchiveLayout } from "./ArchiveLayout";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";

export function PageLayoutFactory({ page }: { page: PageData }) {
  if (page.frontmatter.layout === "presentation") {
    return <PresentationLayout page={page} />;
  }

  if (page.frontmatter.layout === "archive") {
    return (
      <ArchiveLayout
        title={page.frontmatter.title}
        description={page.frontmatter.description}
      >
        <MarkdownRenderer>{page.content}</MarkdownRenderer>
      </ArchiveLayout>
    );
  }

  return <StandardLayout page={page} />;
}
