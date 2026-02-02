export function Process() {
  const steps = [
    {
      title: "Диагностика",
      detail: "Бриф, контекст и цели проекта — фиксируем рамки.",
    },
    {
      title: "Концепт",
      detail: "Редакторская структура, визуальная система, прототип.",
    },
    {
      title: "Сборка",
      detail: "Тексты, дизайн, анимации и техническая реализация.",
    },
    {
      title: "Запуск",
      detail: "Подготовка к релизу, передача и сопровождение.",
    },
  ];

  return (
    <section id="process" className="py-24">
      <div className="container space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Процесс работы
          </p>
          <h2 className="section-title font-semibold">Четыре шага к финальному кадру</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="scene-panel p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Шаг {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
