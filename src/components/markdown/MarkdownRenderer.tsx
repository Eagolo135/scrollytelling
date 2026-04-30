import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ContextualLink } from "@/components/ui/ContextualLink";
import { CodeSample } from "@/components/visualization/CodeSample";
import { Mermaid } from "@/components/visualization/Mermaid";
import { ProgressBar } from "@/components/visualization/ProgressBar";
import { ScrollDemo } from "@/components/visualization/ScrollDemo";
import { StatGrid } from "@/components/visualization/StatGrid";
import { Timeline } from "@/components/visualization/Timeline";
import styles from "./MarkdownRenderer.module.css";

function renderMarkdownLine(line: string): ReactNode {
  const parts = line.split(/(\[[^\]]+\]\([^\)]+\))/g).filter(Boolean);
  const inline = parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (linkMatch) {
      return (
        <ContextualLink key={index} href={linkMatch[2]}>
          {linkMatch[1]}
        </ContextualLink>
      );
    }
    return <span key={index}>{part}</span>;
  });

  if (line.startsWith("# ")) return <h1 className={styles.h1}>{line.slice(2)}</h1>;
  if (line.startsWith("## ")) return <h2 className={styles.h2}>{line.slice(3)}</h2>;
  if (line.startsWith("### ")) return <h3 className={styles.h3}>{line.slice(4)}</h3>;
  if (line.startsWith("- ")) return <li className={styles.listItem}>{inline.slice(0)}</li>;
  return <p className={styles.paragraph}>{inline}</p>;
}

function renderViz(lang: string | undefined, source: string, key: number): ReactNode {
  switch (lang) {
    case "stat-grid":
      return <StatGrid key={key} source={source} />;
    case "scroll-demo":
      return <ScrollDemo key={key} source={source} />;
    case "timeline":
      return <Timeline key={key} source={source} />;
    case "progress-bar":
      return <ProgressBar key={key} source={source} />;
    case "mermaid":
      return <Mermaid key={key} source={source} />;
    case "code-sample":
      return <CodeSample key={key} source={source} />;
    default:
      return <code key={key} className={`${styles.inlineCode} language-${lang ?? ""}`.trim()}>{source}</code>;
  }
}

export function MarkdownRenderer({ children }: { children: string | ReactNode }) {
  if (typeof children !== "string") {
    return <div className={styles.root}>{children}</div>;
  }

  const blocks = children.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
  const output: ReactNode[] = [];

  blocks.forEach((block, index) => {
    const fenceMatch = block.match(/^```([\w-]+)\n([\s\S]*?)\n```$/);
    if (fenceMatch) {
      output.push(<Reveal key={index}>{renderViz(fenceMatch[1], fenceMatch[2], index)}</Reveal>);
      return;
    }

    if (block.includes("\n")) {
      const lines = block.split("\n");
      if (lines[0].startsWith("- ")) {
        output.push(
          <Reveal key={index}>
            <ul className={styles.list}>
              {lines.map((line, lineIndex) => <li key={lineIndex} className={styles.listItem}>{line.slice(2)}</li>)}
            </ul>
          </Reveal>,
        );
        return;
      }
    }

    output.push(<Reveal key={index}><div>{renderMarkdownLine(block)}</div></Reveal>);
  });

  return <div className={styles.root}>{output}</div>;
}
