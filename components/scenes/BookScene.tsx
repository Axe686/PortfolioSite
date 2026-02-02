"use client";

import { useCallback, useRef } from "react";

import type { ScrollSceneTimelineBuilder } from "@/lib/animations/useScrollScene";
import { useScrollScene } from "@/lib/animations/useScrollScene";

export function BookScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const buildTimeline = useCallback<ScrollSceneTimelineBuilder>((timeline) => {
    timeline
      .fromTo(
        ".cover",
        { rotateY: 0 },
        { rotateY: -25, duration: 1 }
      )
      .fromTo(
        ".spread-one",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".spread-two",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(
        ".final-spread",
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      );
  }, []);

  useScrollScene(containerRef, buildTimeline, { end: "+=220%" });

  return (
    <div
      ref={containerRef}
      className="scene-panel relative overflow-hidden p-6 md:p-8"
    >
      <div className="flex items-center justify-between gap-6">
        <div className="perspective-[1200px]">
          <div className="cover h-48 w-40 origin-left rounded-xl border border-line bg-bg-2/80 shadow-lg md:h-56 md:w-44" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="spread-one rounded-xl border border-line bg-card p-4">
            <div className="grid gap-2">
              <div className="h-2 w-2/3 rounded-full bg-line" />
              <div className="h-2 w-4/5 rounded-full bg-line" />
              <div className="h-20 rounded-lg border border-line bg-bg-2/60" />
            </div>
          </div>
          <div className="spread-two rounded-xl border border-line bg-card p-4">
            <div className="grid gap-2">
              <div className="h-2 w-3/5 rounded-full bg-line" />
              <div className="h-2 w-4/5 rounded-full bg-line" />
              <div className="h-16 rounded-lg border border-line bg-bg-2/60" />
            </div>
          </div>
        </div>
      </div>
      <div className="final-spread mt-6 rounded-2xl border border-line bg-card p-4 text-sm text-muted">
        Финальный разворот: готово к печати и PDF.
      </div>
    </div>
  );
}
