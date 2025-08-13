import AboutSection from "@/components/root/home/AboutSection";
import ContactSection from "@/components/root/home/ContactSection";
import EventsSection from "@/components/root/home/EventsSection";
import GallerySection from "@/components/root/home/GallerySection";
import HeroSection from "@/components/root/home/HeroSection";
import ReservationSection from "@/components/root/home/ReservationSection";
import { getDailyMenu } from "@/lib/dailyMenuapi";
import MenuSection from "@/components/root/home/menu/MenuSection";

export const revalidate = false;

export default async function Home() {
  const dailyMenu = await getDailyMenu();
  return (
    <>
      <HeroSection />
      <DividerDiamond />
      <AboutSection />
      <DividerDiamond />
      {dailyMenu && <MenuSection menu={dailyMenu} isLoading={false} />}
      <DividerLine />
      <EventsSection />
      <DividerDiamond />
      <GallerySection />
      <DividerDiamond />
      <ReservationSection />
      <DividerLine />
      <ContactSection />
    </>
  );
}

// Componente para dividir seccciones
const DividerDiamond = () => {
  return (
    <div className="relative my-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="px-4 bg-[#0a0f1a] text-cyan-400/80 text-lg">✦</div>
      </div>
    </div>
  );
};

const DividerLine = () => {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent my-8"></div>
  );
};
