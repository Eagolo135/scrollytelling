"use client";

import { useMemo } from "react";
import styles from "./ScrollDemo.module.css";

export function ScrollDemo({ source }: { source: string }) {
  const text = useMemo(() => source.trim(), [source]);
  return (
    <div className={styles.frame}>
      <pre className={styles.pre}>{text || "ScrollDemo parse error"}</pre>
    </div>
  );
}
