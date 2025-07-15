import React from "react";
import Navigation from "../components/Navigation/nav";
import SoftwareDevelopment from "../components/SoftwareDevelopment/SoftwareDevelopment";
import Text from "../components/Text/Text";
import TwoText from "../components/Text/TwoText";
import InnerBanner from "../components/InnerBanner/innerBanner";
import InsightSection from "../components/InsightBlock/insightSection";
import FooterBlock from "../components/FooterBlock/footerBlock";
import TechnologyUsed from "../components/TechnologyUsed/technologyUsed";
import RelatedSolutions from "../components/RelatedSolutions/relatedSolutions";
import ContactAddress from "../components/ContactAddress/contactAddress";
import ContactForm from "../components/ContactForm/contactForm";


export default function Home() {
    return(
        <div>
            <Navigation/>
            <InnerBanner/>
            <div className={`cover-bg`}>
                <ContactAddress/>
                <ContactForm/>
            </div>

            <FooterBlock/>
        </div>
    )
}
