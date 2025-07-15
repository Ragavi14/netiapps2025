import React from "react";
import Navigation from "../components/Navigation/nav";

import InnerBanner from "../components/InnerBanner/innerBanner";

import FooterBlock from "../components/FooterBlock/footerBlock";
import CareerBlock from "../components/careerBlock/careerBlock";
import CareerDetails from "../components/careerDetails/careerDetails";
import RelatedSolutions from "../components/RelatedSolutions/relatedSolutions";



export default function Home() {
    return(
        <div>
            <Navigation/>
            <InnerBanner/>
            <div className={`cover-bg`}>
                <CareerDetails/>
                <RelatedSolutions/>
            </div>
            <FooterBlock/>
        </div>
    )
}
