import React from "react";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { ScrollParallax } from "@/components/motion/ScrollParallax";
import styles from "./ArchiveLayout.module.css";

export interface ArchiveLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

/**
 * ArchiveLayout: Specialized layout for archive/history content
 * Integrates scroll-driven effects (fade, parallax) throughout the narrative
 */
export const ArchiveLayout: React.FC<ArchiveLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <article className={styles.archiveContainer}>
      {title && (
        <ScrollFade threshold={0.3}>
          <section className={styles.heroSection}>
            <h1 className={styles.title}>{title}</h1>
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </section>
        </ScrollFade>
      )}

      <ScrollParallax direction="up" strength={0.3} offset={15}>
        <div className={styles.content}>{children}</div>
      </ScrollParallax>
    </article>
  );
};
