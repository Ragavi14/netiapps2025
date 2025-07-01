import React from "react";
import Navigation from "../components/Navigation/nav";
import SoftwareDevelopment from "../components/SoftwareDevelopment/SoftwareDevelopment";
import Text from "../components/Text/Text";
import TwoText from "../components/Text/TwoText";
import InnerBanner from "../components/InnerBanner/innerBanner";
import InsightSection from "../components/InsightBlock/insightSection";
import FooterBlock from "../components/FooterBlock/footerBlock";


export default function Home() {
    return(
        <div>
            <Navigation/>
            <InnerBanner/>
            <div className={`cover-bg`}>
                <Text/>
                <SoftwareDevelopment/>
            </div>

            <InsightSection/>
            <FooterBlock/>
        </div>
    )
}