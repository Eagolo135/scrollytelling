import styles from "./StatGrid.module.css";

export function StatGrid({ source }: { source: string }) {
  const rows = source
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^[-|\s]+$/.test(line))
    .map((line) => line.split("|").map((cell) => cell.trim()));

  if (!rows.length || rows.some((row) => row.length < 2)) {
    return <div className={styles.error}>StatGrid parse error</div>;
  }

  return (
    <ul className={styles.grid}>
      {rows.map(([value, label], index) => (
        <li key={index} className={styles.card}>
          <div className={styles.value}>{value}</div>
          <div className={styles.label}>{label}</div>
        </li>
      ))}
    </ul>
  );
}
