import { Fragment } from "react";
import { Hero } from "../components/home";
import SpanColors from "../components/spanColors";
// import PerksSection from "../components/PerksSection";
import PhotoSection from "../components/PhotoSection";
import Rental from "../components/Rental";
import CreditsSection from "../components/CreditsSection";
import Faqs from "../components/Faqs";
import RateCard from "../components/RateCard";
import AboutAlone from "@/components/AboutAlone";

export default function Home() {
  return (
    <Fragment>
      <main className=" overflow-x-hidden">
        <Hero />
        <AboutAlone />
        {/* <SpanColors /> */}
        {/* <PerksSection /> */}
        <PhotoSection />
        <SpanColors />
        <Rental />
        <CreditsSection />
        <Faqs />
        <RateCard />
      </main>
    </Fragment>
  );
}
