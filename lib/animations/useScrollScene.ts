"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

import { gsap } from "./gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface ScrollSceneOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export function useScrollScene(
  container: RefObject<HTMLDivElement | null>,
  buildTimeline: (timeline: gsap.core.Timeline) => void,
  options: ScrollSceneOptions = {}
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const element = container.current;
    if (!element) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: options.start ?? "top top",
          end: options.end ?? "+=200%",
          scrub: options.scrub ?? 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      buildTimeline(timeline);
    }, element);

    return () => {
      context.revert();
    };
  }, [buildTimeline, container, options.end, options.scrub, options.start, prefersReducedMotion]);
}
