import Link from "next/link";
import styles from "./SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/projects/", label: "Projects" },
  { href: "/research/", label: "Research" },
  { href: "/credentials/", label: "Credentials" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        NE Portfolio
      </Link>
      <nav aria-label="Site navigation" className={styles.nav}>
        <ul className={styles.list}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
