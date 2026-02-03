import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/button";

interface ServiceSectionProps {
  service: Service;
  scene: React.ReactNode;
}

/**
 * Универсальный блок для страницы услуги. Включает описание,
 * bullets, список того, что входит, анимационную сцену и кейсы.
 * Ссылки ведут на общую форму обратной связи на главной странице и на
 * внутренний якорь с кейсами.
 */
export function ServiceSection({ service, scene }: ServiceSectionProps) {
  return (
    <section className="py-24">
      <div className="container space-y-12">
        {/* Основной блок с описанием */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              {service.navLabel}
            </p>
            <h2 className="section-title font-semibold">{service.title}</h2>
            <p className="text-lg text-muted">{service.description}</p>
            <div className="grid gap-3">
              {service.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-card px-4 py-3 text-sm text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Что входит
              </p>
              <ul className="grid gap-2 text-sm text-muted">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/#contact">Обсудить проект</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#cases">Посмотреть кейсы</Link>
              </Button>
            </div>
          </div>
          <div>{scene}</div>
        </div>
        {/* Блок с кейсами и результатом */}
        <div id="cases" className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-3">
            {service.cases.map((item) => (
              <article key={item.title} className="scene-panel p-5">
                <div className="relative mb-4 overflow-hidden rounded-xl border border-line">
                  <Image
                    src="/brand/services-mood.svg"
                    alt={item.title}
                    width={420}
                    height={240}
                    className="h-40 w-full object-cover"
                    style={{ objectPosition: service.imagePosition }}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="scene-panel grid gap-3 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-xl font-semibold">{service.resultTitle}</h3>
              <p className="text-sm text-muted">{service.resultDescription}</p>
            </div>
              <Button asChild>
              <Link href="/#contact">Обсудить проект</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}