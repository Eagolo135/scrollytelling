import type { PageData } from "@/lib/content/repository";
import type { ParsedSlide } from "@/lib/content/parser";
import { splitMarkdownIntoSlides } from "@/lib/content/parser";
import { PresentationSlide } from "@/components/motion/PresentationSlide";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { SiteHeader } from "@/components/ui/SiteHeader";
import styles from "./PresentationLayout.module.css";

export function PresentationLayout({ page }: { page: PageData }) {
  const slides = splitMarkdownIntoSlides(page.content);

  return (
    <>
      <SiteHeader />
      <main className={styles.root}>
      {slides.map((slide, index) => (
        <PresentationSlide
          key={index}
          index={index}
          hasBackground={slide.kind === "bg"}
        >
          <SlideStage slide={slide} isFirst={index === 0} />
        </PresentationSlide>
      ))}
      </main>
    </>
  );
}

function SlideStage({ slide, isFirst }: { slide: ParsedSlide; isFirst: boolean }) {
  const hasBg = slide.kind === "bg" && slide.imageUrl;
  const isSplit = slide.kind === "split" || slide.kind === "split-reverse";

  if (hasBg) {
    return (
      <div className={styles.bgSlide}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.imageUrl}
          alt=""
          aria-hidden="true"
          className={styles.bgImage}
          style={{ objectPosition: slide.objectPosition ?? "50% 50%" }}
        />
        <div className={styles.bgOverlay} />
        <div className={styles.contentShell}>
          {isFirst && (
            <p className={styles.eyebrow}>
              Portfolio
            </p>
          )}
          <MarkdownRenderer>{slide.markdown}</MarkdownRenderer>
        </div>
      </div>
    );
  }

  if (isSplit) {
    const reverse = slide.kind === "split-reverse";

    return (
      <div className={styles.split}>
        <div className={`${styles.splitText} ${reverse ? styles.splitTextReverse : ""}`.trim()}>
          <div className={styles.splitTextInner}>
            <MarkdownRenderer>{slide.markdown}</MarkdownRenderer>
          </div>
        </div>
        <div className={`${styles.splitMedia} ${reverse ? styles.splitMediaReverse : ""}`.trim()}>
          {slide.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.imageUrl}
              alt=""
              className={styles.splitImage}
            />
          ) : null}
        </div>
      </div>
    );
  }

  // plain slide
  return (
    <div className={styles.plain}>
      <div className={styles.contentShell}>
        {isFirst && (
          <p className={styles.eyebrow}>
            Portfolio
          </p>
        )}
        <MarkdownRenderer>{slide.markdown}</MarkdownRenderer>
      </div>
    </div>
  );
}