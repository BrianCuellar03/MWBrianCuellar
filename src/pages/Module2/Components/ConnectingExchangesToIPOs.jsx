import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";

// Define terms and definitions for the Matching Game
const terms = [
    { id: "term-1", content: "Decision to Go Public" },
    { id: "term-2", content: "Valuation by Underwriters" },
    { id: "term-3", content: "Listing Shares on an Exchange" },
];

const definitions = [
    { id: "def-1", content: "The company’s leadership decides it needs to raise capital by offering shares to the public." },
    { id: "def-2", content: "Financial experts assess the company’s value and determine the price per share." },
    { id: "def-3", content: "The shares are listed on a stock exchange, making them available for trading by investors." },
];

// Define the checkAnswers function specific to Connecting Exchanges to IPOs
const checkAnswers = (matches) => {
    const correctMatches = {
        "term-1": "def-1",
        "term-2": "def-2",
        "term-3": "def-3",
    };

    const feedback = {};
    Object.keys(correctMatches).forEach((termId) => {
        feedback[termId] = matches[termId] === correctMatches[termId];
    });

    return feedback;
};

const ConnectingExchangesToIPOs = () => {
    return (
        <SectionWrapperModule2 className="connecting-exchanges-to-ipos">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Connecting Exchanges to IPOs</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Before a company’s shares can be traded on a stock exchange, it must go through an Initial Public Offering (IPO).
                    This process transforms a private company into a public one, allowing everyday investors to purchase ownership
                    stakes. The IPO is where supply and demand principles—introduced in Module 1—first come into play, as companies
                    and investors work together to establish the initial value of shares. It serves as a critical step in connecting
                    companies to the broader stock market.
                </p>

                <h3 className="text-2xl font-medium mb-4">What Happens During an IPO?</h3>
                <HoverCardForModuleInfo>
                    An IPO involves key stages that prepare a company for public trading. First, the company decides to “go public,”
                    often to raise capital for growth. Underwriters, typically financial experts, then evaluate the company’s value
                    and determine an initial share price. Finally, shares are listed on a stock exchange, making them available for
                    trading by investors.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">How Does It Relate to Supply and Demand?</h3>
                <HoverCardForModuleInfo>
                    The IPO process demonstrates the interaction of supply and demand. A company’s decision on the number of shares
                    to issue represents the initial supply, while investor interest reflects demand. High demand can drive up initial
                    prices, while low demand might require the company to lower the offering price. These dynamics mirror the marketplace
                    principles covered in Module 1.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Why Do IPOs Matter?</h3>
                <HoverCardForModuleInfo>
                    IPOs are transformative for companies, providing access to capital for innovation and growth. For investors, IPOs
                    present opportunities to invest early in businesses with growth potential. However, IPOs also carry risks, as post-listing
                    prices can be affected by market sentiment and economic conditions.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Building on Module 1</h3>
                <HoverCardForModuleInfo>
                    Module 1 emphasized supply and demand’s role in pricing goods. The IPO process applies these principles to shares,
                    setting the groundwork for a stock’s value before it begins trading. By understanding IPOs, you can see how these
                    foundational dynamics shape the stock market.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Connecting to Market Dynamics</h3>
                <HoverCardForModuleInfo>
                    IPOs bridge theoretical concepts like supply and demand with real-world stock market operations, offering a deeper
                    understanding of how shares are introduced, valued, and traded. This connection reinforces how markets allocate resources
                    and influence business growth.
                </HoverCardForModuleInfo>

                <MatchingGame
                    title="IPO Process Terms Matcher"
                    description="Match the terms related to the IPO process with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </SectionWrapperModule2>
    );
};

export default ConnectingExchangesToIPOs;
