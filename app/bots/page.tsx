import { Header } from "@/components/Header";
import { ServiceSection } from "@/components/ServiceSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { BotChatScene } from "@/components/scenes/BotChatScene";

/**
 * Страница направления «Боты»: демонстрация сценария в чате по скроллу.
 */
export default function BotsPage() {
  const service = services.find((s) => s.id === "bots");
  if (!service) return null;
  return (
    <div className="bg-bg text-text">
      <Header />
      <main>
        <ServiceSection service={service} scene={<BotChatScene />} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}