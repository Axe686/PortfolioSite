import { Header } from "@/components/Header";
import { ServiceSection } from "@/components/ServiceSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { WebsiteBuildScene } from "@/components/scenes/WebsiteBuildScene";

/**
 * Страница направления «Сайты»: анимация сборки интерфейса по скроллу.
 */
export default function SitesPage() {
  const service = services.find((s) => s.id === "sites");
  if (!service) return null;
  return (
    <div className="bg-bg text-text">
      <Header />
      <main>
        <ServiceSection service={service} scene={<WebsiteBuildScene />} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}