import { Header } from "@/components/Header";
import { ServiceSection } from "@/components/ServiceSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { CoverAssembleScene } from "@/components/scenes/CoverAssembleScene";

/**
 * Страница направления «Обложки и дизайн»: анимация сборки обложки из слоёв.
 */
export default function CoversPage() {
  const service = services.find((s) => s.id === "covers");
  if (!service) return null;
  return (
    <div className="bg-bg text-text">
      <Header />
      <main>
        <ServiceSection service={service} scene={<CoverAssembleScene />} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}