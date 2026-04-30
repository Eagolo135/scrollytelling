import styles from "./CodeSample.module.css";

export function CodeSample({ source }: { source: string }) {
  return (
    <pre className={styles.pre}>
      <code className={styles.code}>{source}</code>
    </pre>
  );
}
