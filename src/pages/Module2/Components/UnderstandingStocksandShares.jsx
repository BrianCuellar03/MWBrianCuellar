import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import MatchingGame from "@/components/ui/drag-and-drop/MatchingGame.jsx";

const terms = [
    { id: "term-1", content: "Stock" },
    { id: "term-2", content: "Share" },
    { id: "term-3", content: "Equity" },
    { id: "term-4", content: "Dividend" },
];

const definitions = [
    { id: "def-1", content: "A type of security that represents partial ownership in a company." },
    { id: "def-2", content: "The unit of ownership in a stock, representing a claim on part of the company’s assets and earnings." },
    { id: "def-3", content: "Ownership value in an asset or a business, represented by stocks or shares." },
    { id: "def-4", content: "A distribution of a portion of a company's earnings to its shareholders." },
];

const checkAnswers = (matches) => {
    const correctMatches = {
        "term-1": "def-1",
        "term-2": "def-2",
        "term-3": "def-3",
        "term-4": "def-4",
    };

    const feedback = {};
    Object.keys(correctMatches).forEach((termId) => {
        feedback[termId] = matches[termId] === correctMatches[termId];
    });

    return feedback;
};

const UnderstandingStocksAndShares = () => {
    return (
        <SectionWrapperModule2 className="understanding-stocks-and-shares">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Understanding Stocks and Shares</h2>

                {/* Stocks Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-medium mb-4">What Are Stocks?</h3>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        When you buy a stock, you’re purchasing partial ownership in a company. Think of it as owning a small piece of a
                        larger pie. Stocks represent a claim on a company’s assets and profits, offering individuals a way to invest in a business's growth.
                    </p>
                    <HoverCardForModuleInfo title="Stocks">
                        Stocks represent partial ownership in a company. When you own a stock, you’re essentially a co-owner of the business,
                        entitled to its growth and potential profits.
                    </HoverCardForModuleInfo>
                </div>

                {/* Shares Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-medium mb-4">What Are Shares?</h3>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        Shares are the units that make up a stock. Companies issue shares to raise money, and investors purchase them with
                        the goal of earning returns through price increases or dividends.
                    </p>
                    <HoverCardForModuleInfo title="Shares">
                        Shares are the individual units of stock that investors can buy. They represent ownership in a company and often come
                        with rights, such as voting in shareholder meetings or receiving dividends.
                    </HoverCardForModuleInfo>
                </div>

                {/* Dividends Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-medium mb-4">What Are Dividends?</h3>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        Dividends are payments some companies make to their shareholders, offering a portion of their earnings as a reward for
                        investment. While not all companies pay dividends, those that do provide an additional incentive for owning shares.
                    </p>
                    <HoverCardForModuleInfo title="Dividends">
                        Dividends are payments made by a company to its shareholders, often as a portion of profits. They provide an additional
                        benefit for owning shares.
                    </HoverCardForModuleInfo>
                </div>

                {/* Stock Prices Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-medium mb-4">Why Do Stock Prices Change?</h3>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        Stock prices fluctuate based on factors such as supply and demand, company performance, and market trends. For example,
                        strong earnings might drive demand and increase prices, while market uncertainty could lower them.
                    </p>
                    <HoverCardForModuleInfo title="Stock Price Fluctuations">
                        Stock prices change due to factors like supply and demand, company performance, economic indicators, and investor
                        sentiment. These fluctuations reflect how the market values a company at a given moment.
                    </HoverCardForModuleInfo>
                </div>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    By understanding these foundational concepts, you’re better equipped to explore how stocks and shares contribute to the
                    broader market and why they matter to both companies and investors.
                </p>

                <h3 className="text-2xl font-medium mb-4">Key Terms</h3>
                <MatchingGame
                    description="Match the terms with their correct definitions."
                    terms={terms}
                    definitions={definitions}
                    checkAnswers={checkAnswers}
                />
            </div>
        </SectionWrapperModule2>
    );
};

export default UnderstandingStocksAndShares;
