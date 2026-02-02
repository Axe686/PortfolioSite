import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Pricing() {
  const plans = [
    {
      title: "Старт",
      price: "от 120 000 ₽",
      detail: "Тексты или дизайн одной сцены с быстрым запуском.",
    },
    {
      title: "Редакция",
      price: "от 240 000 ₽",
      detail: "Полная разработка направления с анимацией и кейсами.",
    },
    {
      title: "Коллекция",
      price: "от 420 000 ₽",
      detail: "Пять направлений + запуск сайта-визитки под ключ.",
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Пакеты
          </p>
          <h2 className="section-title font-semibold">Стоимость и формат</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.title} className="flex h-full flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <CardDescription className="text-2xl font-semibold text-accent">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm text-muted">{plan.detail}</p>
                <Button className="mt-auto" variant="outline">
                  Запросить смету
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
