import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function Hero() {
  return (
    <section id="top" className="pt-20">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Редакционный премиум
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Сильные тексты и дизайн, собранные как идеальный номер журнала.
          </h1>
          <p className="text-lg text-muted">
            Помогаем брендам говорить ясно, выглядеть дорого и вести пользователя через
            историю — от первого скролла до финального кадра.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#contact">Обсудить проект</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#process">Смотреть процесс</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Сильный редакционный язык",
              "Сцены со скролл-динамикой",
              "Готовность к релизу и печати",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line bg-card px-4 py-3 text-sm text-muted"
              >
                {item}
              </div>
            ))}
          </div>
          <Tabs defaultValue="strategy" className="w-full">
            <TabsList>
              <TabsTrigger value="strategy">Стратегия</TabsTrigger>
              <TabsTrigger value="design">Дизайн</TabsTrigger>
              <TabsTrigger value="delivery">Запуск</TabsTrigger>
            </TabsList>
            <TabsContent value="strategy" className="text-sm text-muted">
              Формируем смысловую рамку и тональность, чтобы история бренда звучала уверенно.
            </TabsContent>
            <TabsContent value="design" className="text-sm text-muted">
              Собираем визуальные сцены, которые работают в прокрутке и остаются чистыми.
            </TabsContent>
            <TabsContent value="delivery" className="text-sm text-muted">
              Подготавливаем материалы к печати и цифровым каналам без лишней суеты.
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-4">
          <div className="scene-panel relative overflow-hidden">
            <Image
              src="/brand/services-mood.svg"
              alt="Панорама направлений студии"
              width={1400}
              height={700}
              className="h-[300px] w-full object-cover md:h-[360px]"
              priority
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Пять направлений как единая история",
              "Текст + визуал + код",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line bg-card px-4 py-3 text-sm text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
