import type { PageData } from "@/lib/content/repository";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { SiteHeader } from "@/components/ui/SiteHeader";
import styles from "./StandardLayout.module.css";

export function StandardLayout({ page }: { page: PageData }) {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            {page.frontmatter.layout}
          </p>
          <h1 className={styles.title}>{page.frontmatter.title}</h1>
          {page.frontmatter.summary ? (
            <p className={styles.summary}>{page.frontmatter.summary}</p>
          ) : null}
        </header>
        <MarkdownRenderer>{page.content}</MarkdownRenderer>
      </article>
    </main>
    </>
  );
}