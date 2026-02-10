import { HeroSection } from "../components/hero/HeroSection";
import { ContentGrid } from "../components/content/ContentGrid";
import { SavedSection } from "../components/saved/SavedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentGrid />
      <SavedSection />
    </>
  );
}
