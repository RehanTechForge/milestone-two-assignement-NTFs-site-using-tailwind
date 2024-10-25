
import CategoriesSection from "@/components/Pages/HomePage/CategoriesSection/CategoriesSection";
import CollectionSection from "@/components/Pages/HomePage/CollectionSection/CollectionSection";
import CreatorSection from "@/components/Pages/HomePage/CreatorSection/CreatorSection";
import DiscoverSection from "@/components/Pages/HomePage/DiscoverSection/DiscoverSection";
import ExplainSection from "@/components/Pages/HomePage/ExplainSection/ExplainSection";
import MainSection from "@/components/Pages/HomePage/MainSection/MainSection";
import NewsLetter from "@/components/Pages/HomePage/NewsLetter/NewsLetter";
import ParallexBackground from "@/components/Pages/HomePage/ParallexBackground/ParallexBackground";

export default function Home() {
  return (
    <>
      <MainSection />
      <CollectionSection />
      <CreatorSection />
      <CategoriesSection />
      <DiscoverSection />
      <ParallexBackground />
      <ExplainSection />
      <NewsLetter />
    </>
  );
}
