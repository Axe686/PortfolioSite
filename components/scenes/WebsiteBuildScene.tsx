"use client";

import { useCallback, useRef } from "react";

import type { ScrollSceneTimelineBuilder } from "@/lib/animations/useScrollScene";
import { useScrollScene } from "@/lib/animations/useScrollScene";

export function WebsiteBuildScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const buildTimeline = useCallback<ScrollSceneTimelineBuilder>((timeline) => {
    timeline
      .fromTo(
        ".frame",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8 }
      )
      .fromTo(
        ".wire",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0.1 }
      )
      .fromTo(
        ".ui",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );
  }, []);

  useScrollScene(containerRef, buildTimeline, { end: "+=200%" });

  return (
    <div ref={containerRef} className="scene-panel p-6 md:p-8">
      <div className="frame rounded-2xl border border-line bg-card p-4">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-accent" />
          <span className="h-3 w-3 rounded-full bg-accent-2" />
          <span className="h-3 w-3 rounded-full bg-line" />
        </div>
        <div className="grid gap-3">
          <div className="wire h-24 rounded-xl border border-line bg-bg-2/60" />
          <div className="ui grid gap-2 rounded-xl border border-line bg-bg-2/60 p-3">
            <div className="h-3 w-2/3 rounded-full bg-line" />
            <div className="h-3 w-4/5 rounded-full bg-line" />
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-12 rounded-lg border border-line bg-card"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
