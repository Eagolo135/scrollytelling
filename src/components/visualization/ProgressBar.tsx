import styles from "./ProgressBar.module.css";

export function ProgressBar({ source }: { source: string }) {
  const value = Math.max(0, Math.min(100, Number(source.trim()) || 0));
  return (
    <div className={styles.track}>
      <div className={styles.fill} style={{ width: `${value}%` }} />
    </div>
  );
}
