import React from "react";
import HoverCardForModuleInfo from "@/components/ui/SectionWrapper_HoverCard/hovercard-for-module.jsx";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";

const StartingWithStockExchanges = () => {
    return (
        <SectionWrapperModule2 className="starting-with-stock-exchanges">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Starting with Stock Exchanges</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Stock exchanges are essential to the stock market. They connect companies raising capital with investors seeking
                    opportunities to grow their wealth. These platforms ensure trades are conducted efficiently, fairly, and transparently,
                    providing confidence to participants. Beyond facilitating transactions, exchanges play a vital role in price discovery,
                    where supply, demand, and investor sentiment determine a company’s share value.
                </p>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg mb-6">
                    <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-100">Interactive Prompt</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Imagine a marketplace where buyers and sellers trade goods. A stock exchange functions similarly but digitally,
                        dealing with company shares instead of physical products. It ensures trades are efficient and fair, enabling
                        informed investment decisions and helping companies access funds to grow.
                    </p>
                </div>
                <h3 className="text-2xl font-medium mb-4">What is a Stock Exchange?</h3>
                <HoverCardForModuleInfo title="Definition">
                    A stock exchange is a marketplace where shares are traded. Companies use exchanges to raise funds by issuing shares,
                    while investors buy, sell, and hold these shares. Exchanges ensure trades are fair, efficient, and transparent, providing
                    information that helps both companies and investors make decisions.
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Why Are Exchanges Important?</h3>
                <HoverCardForModuleInfo title="Importance">
                    <p className="mb-4">
                        Exchanges enable the efficient buying and selling of shares in a regulated and transparent environment. They also
                        facilitate price discovery by reflecting supply and demand dynamics in stock prices.
                    </p>
                    <p className="mb-4">
                        When a company lists its shares, their value is determined by investor demand and seller supply. High demand with
                        limited shares raises prices, while oversupply lowers them. This process reflects investor sentiment and the
                        company’s perceived value.
                    </p>
                    <p className="mb-4">
                        As explored in Module 1, supply and demand shape prices in a marketplace. Stock exchanges apply these principles
                        to shares, offering insights into market dynamics and how investors and companies interact.
                    </p>
                </HoverCardForModuleInfo>

                <h3 className="text-2xl font-medium mb-4">Examples of Stock Exchanges</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <HoverCardForModuleInfo title="New York Stock Exchange (NYSE)">
                        The world’s largest stock exchange by market capitalization, founded in 1792 and a hub for global trading.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="NASDAQ">
                        Known for its electronic trading platform, it hosts major tech companies like Apple, Microsoft, and Amazon.
                    </HoverCardForModuleInfo>
                    <HoverCardForModuleInfo title="Tokyo Stock Exchange">
                        A leading exchange in Asia, providing a platform for Japanese and global investors.
                    </HoverCardForModuleInfo>
                </div>
            </div>
        </SectionWrapperModule2>
    );
};

export default StartingWithStockExchanges;
