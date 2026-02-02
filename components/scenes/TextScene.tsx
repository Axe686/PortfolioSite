"use client";

import { useCallback, useRef } from "react";

import { useScrollScene } from "@/lib/animations/useScrollScene";

export function TextScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const buildTimeline = useCallback((timeline) => {
    timeline
      .fromTo(
        ".type-line",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, stagger: 0.2, duration: 0.8 }
      )
      .fromTo(
        ".offer-block",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        ">-0.2"
      );
  }, []);

  useScrollScene(containerRef, buildTimeline, { end: "+=180%" });

  return (
    <div ref={containerRef} className="scene-panel p-6 md:p-8">
      <div className="flex items-center gap-6">
        <div className="hidden h-24 w-24 rounded-2xl border border-line bg-bg-2/70 md:flex" />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Печатная машинка
          </p>
          <div className="mt-4 space-y-3">
            {["Редакция как сервис", "Смысловой монтаж", "Чёткий тон"]
              .map((line) => (
                <div
                  key={line}
                  className="type-line origin-left overflow-hidden rounded-md border border-line bg-bg-2/70 px-3 py-2 text-sm text-text"
                >
                  {line}
                </div>
              ))}
          </div>
          <div className="offer-block mt-6 rounded-2xl border border-line bg-card p-4">
            <p className="text-sm font-semibold">Готовый блок текста</p>
            <p className="text-xs text-muted">
              Структура, подача и тональность уже выверены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
