"use client";

import { useCallback, useRef } from "react";

import { useScrollScene } from "@/lib/animations/useScrollScene";

export function CoverAssembleScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const buildTimeline = useCallback((timeline) => {
    timeline
      .fromTo(
        ".layer",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 }
      )
      .fromTo(
        ".cover-final",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      );
  }, []);

  useScrollScene(containerRef, buildTimeline, { end: "+=200%" });

  return (
    <div ref={containerRef} className="scene-panel p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
        <div className="relative h-60 rounded-2xl border border-line bg-bg-2/60">
          <div className="layer absolute inset-4 rounded-xl border border-line bg-card" />
          <div className="layer absolute inset-8 rounded-xl border border-line bg-bg" />
          <div className="layer absolute inset-12 rounded-xl border border-line bg-accent/20" />
          <div className="layer absolute inset-16 rounded-xl border border-line bg-accent-2/20" />
        </div>
        <div className="cover-final space-y-3 rounded-2xl border border-line bg-card p-4">
          <p className="text-sm font-semibold">Финальная обложка</p>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-20 rounded-lg border border-line bg-bg-2/60"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
