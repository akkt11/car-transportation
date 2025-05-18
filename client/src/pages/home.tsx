import { AboutUsSection } from "../components/about-us-section";
import { Brands } from "../components/brands";
import { HeroSection } from "../components/hero-section";
import { HowItWorkSection } from "../components/how-it-work-section";
import { PopularDealsSection } from "../components/popular-deals-section";
import { WhyUsSection } from "../components/why-us-section";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorkSection />
      <Brands />
      <WhyUsSection />
      <PopularDealsSection />
      <AboutUsSection />
    </>
  );
};
