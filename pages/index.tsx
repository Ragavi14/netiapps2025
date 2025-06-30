import React from "react";
import Navigation from "../components/Navigation/nav";
import HeroBanner from "../components/HeroBanner/heroBanner"
import Clients from "../components/Clients/clients";
import SolutionSection from "../components/SolutionSection/solutionSection";
import CaseStudy from "../components/Casestudy/caseStudy";
import ClientSpeakSection from "../components/Clientspeak/clientSpeakSection";
import InsightSection from "../components/InsightBlock/insightSection";



export default function Home() {
    return(
        <div>
            <Navigation/>
            <HeroBanner/>
            <Clients/>
            <SolutionSection/>
            <CaseStudy/>
            <ClientSpeakSection/>
            <InsightSection/>
        </div>
    )
}