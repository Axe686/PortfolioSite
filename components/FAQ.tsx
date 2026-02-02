"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const items = [
    {
      question: "Сколько времени занимает проект?",
      answer:
        "Сайт-визитка с пятью сценами обычно занимает 4–6 недель, в зависимости от объёма материалов.",
    },
    {
      question: "Вы работаете только с готовыми текстами?",
      answer:
        "Нет, мы можем взять на себя редактуру, копирайтинг и финальные тексты для всех блоков.",
    },
    {
      question: "Можно ли подключить CMS позже?",
      answer:
        "Да, архитектура позволяет подключить CMS или экспортировать контент в удобном формате.",
    },
    {
      question: "Как происходит коммуникация?",
      answer:
        "Мы фиксируем этапы, показываем прогресс и согласуем ключевые решения на контрольных точках.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            FAQ
          </p>
          <h2 className="section-title font-semibold">Частые вопросы</h2>
          <p className="text-muted">
            Ответы на самые популярные вопросы о процессе, сроках и коммуникации.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
