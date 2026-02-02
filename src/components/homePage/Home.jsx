import React from "react";
import HeroSection from "./Hero";
import BrowseBusinesses from "./BrowseBusinesses";
import PromoSection from "./PromoSection";
import RentWithConfidence from "./RentWithConfidence";
import SuccessStories from "./SuccessStories";
import ElectronicsSection from "./ElectronicsSection";
import OtherProductsSection from "./OtherProducts";
import Testimonial from "./Testimonial";

export default function Home() {
    return (
        <>
            {<HeroSection />}
            {<BrowseBusinesses />}
            {<PromoSection />}
            {<RentWithConfidence />}
            {<SuccessStories />}
            {<ElectronicsSection />}
            {<OtherProductsSection />}
            {<Testimonial />}
        </>
    )
}