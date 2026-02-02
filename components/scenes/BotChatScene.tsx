"use client";

import { useCallback, useRef } from "react";

import { useScrollScene } from "@/lib/animations/useScrollScene";

export function BotChatScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const buildTimeline = useCallback((timeline) => {
    timeline.fromTo(
      ".message",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 }
    );
  }, []);

  useScrollScene(containerRef, buildTimeline, { end: "+=160%" });

  return (
    <div ref={containerRef} className="scene-panel p-6 md:p-8">
      <div className="mx-auto w-full max-w-xs rounded-3xl border border-line bg-card p-4">
        <div className="space-y-3">
          <div className="message w-4/5 rounded-2xl border border-line bg-bg-2/60 px-3 py-2 text-xs text-muted">
            Привет! Что автоматизируем сегодня?
          </div>
          <div className="message ml-auto w-3/5 rounded-2xl bg-accent/20 px-3 py-2 text-xs text-text">
            Запуск заявок и ответы на FAQ.
          </div>
          <div className="message w-4/5 rounded-2xl border border-line bg-bg-2/60 px-3 py-2 text-xs text-muted">
            Готов сценарий и быстрые ответы.
          </div>
        </div>
        <div className="mt-4 grid gap-2 text-xs text-muted">
          <div className="message rounded-full border border-line bg-card px-3 py-2">
            Быстрый бриф
          </div>
          <div className="message rounded-full border border-line bg-card px-3 py-2">
            FAQ + оператор
          </div>
        </div>
      </div>
    </div>
  );
}
