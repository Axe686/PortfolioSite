import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceSection } from "@/components/ServiceSection";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TextScene } from "@/components/scenes/TextScene";
import { BookScene } from "@/components/scenes/BookScene";
import { CoverAssembleScene } from "@/components/scenes/CoverAssembleScene";
import { WebsiteBuildScene } from "@/components/scenes/WebsiteBuildScene";
import { BotChatScene } from "@/components/scenes/BotChatScene";
import { services } from "@/data/services";

const scenes = [
  <TextScene key="texts" />,
  <BookScene key="editions" />,
  <CoverAssembleScene key="covers" />,
  <WebsiteBuildScene key="sites" />,
  <BotChatScene key="bots" />,
];

export default function Home() {
  return (
    <div className="bg-bg text-text">
      <Header />
      <main>
        <Hero />
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            scene={scenes[index]}
          />
        ))}
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
