// src/Module2/Module2.jsx
import React from 'react';
import WelcomeOverview from './Components/WelcomeOverview.jsx';
import Introduction2 from './Components/Introduction2.jsx';
import StartingWithStockExchanges from "./Components/StartingWithStockExchanges.jsx";
import ConnectingExchangesToIPOs from "./Components/ConnectingExchangesToIPOs.jsx";
import KeyConcepts from './Components/KeyConcepts.jsx';
import WhatHappensAfterIPO from "./Components/WhatHappensAfterIPO.jsx";
import UnderstandingStocksAndShares from "./Components/UnderstandingStocksandShares.jsx";
import WhatAreIndicesAndInvestors from "./Components/WhatAreIndicesAndInvestors.jsx";
import BringingItAllTogether from "./Components/BringingitAllTogether.jsx";

const Module2 = () => {
    return (
        <div className="module2-container p-8 bg-background dark:bg-black-color text-foreground transition-colors duration-300 space-y-12">
            <WelcomeOverview />
            <Introduction2/>
            <StartingWithStockExchanges/>
            <ConnectingExchangesToIPOs/>
            <WhatHappensAfterIPO/>
            <UnderstandingStocksAndShares/>
            <WhatAreIndicesAndInvestors/>
            <BringingItAllTogether/>
            <KeyConcepts/>
        </div>
    );
};

export default Module2;
