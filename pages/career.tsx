import React from "react";
import Navigation from "../components/Navigation/nav";

import InnerBanner from "../components/InnerBanner/innerBanner";

import FooterBlock from "../components/FooterBlock/footerBlock";
import CareerBlock from "../components/careerBlock/careerBlock";



export default function Home() {
    return(
        <div>
            <Navigation/>
            <InnerBanner/>
            <div className={`cover-bg`}>
                <CareerBlock/>
            </div>
            <FooterBlock/>
        </div>
    )
}
