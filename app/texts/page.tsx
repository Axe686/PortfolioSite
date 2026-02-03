import { Header } from "@/components/Header";
import { ServiceSection } from "@/components/ServiceSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { TextScene } from "@/components/scenes/TextScene";

/**
 * Страница направления «Тексты»: отдельная страница с анимацией печатной машинки.
 */
export default function TextsPage() {
  const service = services.find((s) => s.id === "texts");
  if (!service) return null;
  return (
    <div className="bg-bg text-text">
      <Header />
      <main>
        <ServiceSection service={service} scene={<TextScene />} />
        {/* общая форма обратной связи */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}