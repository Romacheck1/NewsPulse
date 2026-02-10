import { HeroSection } from "../components/hero/HeroSection";
import { ContentGrid } from "../components/content/ContentGrid";
import { SavedSection } from "../components/saved/SavedSection";
import { DisclaimerBanner } from "../components/ui/DisclaimerBanner";

export default function Home() {
  return (
    <>
      <DisclaimerBanner />
      <HeroSection />
      <ContentGrid />
      <SavedSection />
    </>
  );
}
