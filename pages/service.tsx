import React from "react";
import Navigation from "../components/Navigation/nav";
import HeroBanner from "../components/HeroBanner/heroBanner";
import SoftwareDevelopment from "../components/SoftwareDevelopment/SoftwareDevelopment";
import Text from "../components/Text/Text";
import TwoText from "../components/Text/TwoText";


export default function Home() {
    return(
        <div>
            <Navigation/>
            <HeroBanner/>
            <Text/>
            <SoftwareDevelopment/>
            <TwoText/>
        </div>
    )
}