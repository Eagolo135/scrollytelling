"use client";

import styles from "./Mermaid.module.css";

export function Mermaid({ source }: { source: string }) {
  return (
    <pre className={styles.pre}>
      {source}
    </pre>
  );
}
