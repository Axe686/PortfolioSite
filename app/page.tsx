import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-bg text-text">
      {/* глобальная шапка */}
      <Header />
      <main>
        {/* вводный герой-блок с оффером */}
        <Hero />
        {/* превью всех направлений услуг */}
        <section className="py-20">
          <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="scene-panel p-6 space-y-4">
                <h2 className="text-xl font-semibold">{service.navLabel}</h2>
                <p className="text-sm text-muted">{service.tagline}</p>
                <Button asChild>
                  <Link href={`/${service.id}`}>Подробнее</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
        {/* общие блоки: процесс, пакеты, FAQ, контакты */}
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}