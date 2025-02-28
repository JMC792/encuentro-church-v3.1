import {Fragment} from "react";
//Components
import Hero from "@components/hero/Hero";
import SimpleCentered from "@components/testimonials/SimpleCentered";

//Components
import OffsetList from "@components/features/OffsetList.js";
import Stat from "@components/stats/Stat.js";
import CTA from "@components/CTA/CTA1.js";
import FAQ1 from "@components/FAQ/FAQ1.js";

// Images
import ProductScreenshot from "@components/features/ProductScreenshot";

export default function Page() {
  return (
        <Fragment>
            <Hero/>
            <Stat/>
            <OffsetList/>

            {/* About Us */}
            <ProductScreenshot/>

            {/* Testimonial */}
            <SimpleCentered/>
            <CTA/>
            <FAQ1/>
        </Fragment>
  );
}
