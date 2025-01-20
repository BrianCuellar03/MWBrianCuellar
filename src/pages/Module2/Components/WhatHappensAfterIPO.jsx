import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";

const terms = [
    { id: "term-1", content: "Primary Market" },
    { id: "term-2", content: "Secondary Market" },
    { id: "term-3", content: "Price Fluctuation" },
];

const definitions = [
    { id: "def-1", content: "The phase where a company sells its shares to investors for the first time." },
    { id: "def-2", content: "The market where shares are traded between investors after the IPO." },
    { id: "def-3", content: "Changes in stock prices caused by market trends, news, and investor behavior." },
];

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

const WhatHappensAfterIPO = () => {
    return (
        <SectionWrapperModule2 className="what-happens-after-ipo">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">What Happens After the IPO?</h2>

                {/* Primary Market Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-medium mb-4">The Primary Market</h3>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        After a company completes its IPO, it transitions from private to public ownership, making its shares available for investors to buy.
                        In this first stage, called the primary market, companies raise funds directly by selling shares to investors.
                        Think of it as a bakery's grand opening, where customers can purchase special packages to support its growth.
                    </p>
                    <HoverCardForModuleInfo title="What is the Primary Market?">
                        The primary market is where companies sell shares directly to investors for the first time, raising funds for growth and expansion.
                    </HoverCardForModuleInfo>
                </div>

                {/* Secondary Market Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-medium mb-4">The Secondary Market</h3>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        After the primary market phase, shares enter the secondary market. Here, investors trade shares among themselves, without the company's direct involvement.
                        It’s like customers of the bakery exchanging recipes or tips after the grand opening. This is where the stock market truly comes alive.
                    </p>
                    <HoverCardForModuleInfo title="What is the Secondary Market?">
                        The secondary market is where shares are traded among investors after the IPO. Prices here are shaped by market forces such as demand, investor sentiment, and broader trends.
                    </HoverCardForModuleInfo>
                </div>

                {/* Stock Price Fluctuations Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-medium mb-4">Stock Price Fluctuations</h3>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        In the secondary market, stock prices fluctuate based on various factors. Company performance, market trends, and investor behavior all contribute to price changes.
                        For instance, strong earnings might increase demand and drive up prices, while broader economic uncertainty could have the opposite effect.
                    </p>
                    <HoverCardForModuleInfo title="Factors That Influence Stock Prices">
                        Stock prices are influenced by company performance, economic indicators, market trends, and investor sentiment. These dynamics reflect how the market values a company over time.
                    </HoverCardForModuleInfo>
                </div>

                {/* Conclusion Section */}
                <div className="mb-10">
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        Understanding what happens after an IPO illustrates how the stock market evolves beyond a company raising funds.
                        It shows how investors collectively shape the perception and value of companies, turning the market into a constantly shifting reflection of economic forces.
                    </p>
                </div>

                {/* Matching Game Section */}
                <h3 className="text-2xl font-medium mb-4">Interactive Activity</h3>
                <MatchingGame
                    title="Post-IPO Concepts Matcher"
                    description="Match the terms related to the post-IPO phase with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </SectionWrapperModule2>
    );
};

export default WhatHappensAfterIPO;
