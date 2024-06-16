import { Fragment } from "react";
import { Hero } from "../components/home";
import SpanColors from "../components/spanColors";
import PerksSection from "../components/PerksSection";
import PhotoSection from "../components/PhotoSection";
import Rental from "../components/Rental";
import CreditsSection from "../components/CreditsSection";

export default function Home() {
  return (
    <Fragment>
      <main className=" overflow-x-hidden">
        <Hero />
        <SpanColors />
        <PerksSection />
        <PhotoSection />
        <SpanColors />
        <Rental />
        <CreditsSection />
      </main>
    </Fragment>
  );
}
