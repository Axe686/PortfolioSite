import { Header } from "@/components/Header";
import { ServiceSection } from "@/components/ServiceSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { BookScene } from "@/components/scenes/BookScene";

/**
 * Страница направления «Издания»: раскрывающаяся книга и развороты.
 */
export default function EditionsPage() {
  const service = services.find((s) => s.id === "editions");
  if (!service) return null;
  return (
    <div className="bg-bg text-text">
      <Header />
      <main>
        <ServiceSection service={service} scene={<BookScene />} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}