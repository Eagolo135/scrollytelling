import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { ScrollParallax } from "@/components/motion/ScrollParallax";

// Mock framer-motion
vi.mock("framer-motion", async () => {
  const react = await import("react");
  return {
    motion: {
      div: (props: Record<string, unknown>) => {
        const { children, className, ...restProps } = props as {
          children: react.ReactNode;
          className?: string;
          [key: string]: unknown;
        };
        return react.createElement(
          "div",
          { className, "data-testid": "motion-div", ...restProps },
          children
        );
      },
    },
  };
});

describe("ScrollFade Component", () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = class IntersectionObserverClass {
      callback: (entries: Array<{ isIntersecting: boolean; target: Element }>) => void;

      constructor(
        callback: (entries: Array<{ isIntersecting: boolean; target: Element }>) => void
      ) {
        this.callback = callback;
      }

      observe() {
        this.callback([{ isIntersecting: true, target: {} as Element }]);
      }

      unobserve() {
        // noop
      }

      disconnect() {
        // noop
      }
    } as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render children", () => {
    render(
      <ScrollFade>
        <div>Test Content</div>
      </ScrollFade>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should accept custom className", () => {
    render(
      <ScrollFade className="custom-class">
        <div>Test Content</div>
      </ScrollFade>
    );
    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toHaveClass("custom-class");
  });

  it("should initialize with opacity fade effect", () => {
    const { container } = render(
      <ScrollFade>
        <div>Test Content</div>
      </ScrollFade>
    );
    expect(container.querySelector("[data-testid='motion-div']")).toBeInTheDocument();
  });
});

describe("ScrollParallax Component", () => {
  it("should render children", () => {
    render(
      <ScrollParallax>
        <div>Test Content</div>
      </ScrollParallax>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should accept custom className", () => {
    render(
      <ScrollParallax className="parallax-class">
        <div>Test Content</div>
      </ScrollParallax>
    );
    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toHaveClass("parallax-class");
  });

  it("should support vertical direction", () => {
    const { container } = render(
      <ScrollParallax direction="up" offset={20}>
        <div>Test Content</div>
      </ScrollParallax>
    );
    expect(container.querySelector("[data-testid='motion-div']")).toBeInTheDocument();
  });

  it("should support horizontal direction", () => {
    const { container } = render(
      <ScrollParallax direction="left" offset={20}>
        <div>Test Content</div>
      </ScrollParallax>
    );
    expect(container.querySelector("[data-testid='motion-div']")).toBeInTheDocument();
  });
});
