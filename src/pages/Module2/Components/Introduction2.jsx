import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";

const Introduction2 = () => {
    return (
        <SectionWrapperModule2 className="introduction-to-stock-market">
            <div className="w-full">
                <h2 className="text-4xl font-semibold mb-6 text-center">Introduction to the Stock Market</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    In Module 1, we explored the foundational principles of supply and demand and how they shape prices in a marketplace.
                    The stock market operates on similar mechanisms, but with more complexity. For example, when demand for a company’s shares
                    is high and supply is limited, prices tend to rise. Conversely, an oversupply of shares can drive prices down.
                </p>
                <h3 className="text-2xl font-medium mb-4">A Simplified Starting Point</h3>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    While this explanation simplifies the stock market, it provides a starting point. In reality, prices are influenced by
                    factors like investor psychology, company performance, industry trends, and global events. Government policies,
                    technological advancements, and social movements can all ripple through the market, impacting stock prices and how
                    resources flow across sectors.
                </p>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Simplifying these concepts helps you build a foundation for understanding the market. It’s like learning basic road
                    signs before navigating a city—it equips you with the essentials before diving into the more intricate details.
                </p>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
                    <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-100">Looking Beyond Stock Prices</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        The stock market is more than just share prices. It’s a system that allows individuals and institutions to invest in ideas,
                        support innovation, and participate in business growth. It reflects collective beliefs about the future, with stock prices
                        representing millions of decisions about risks, opportunities, and uncertainties.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Beyond numbers, the market offers insights into broader questions: What drives growth? How do companies adapt to change?
                        What role do investors play in shaping the future? The stock market is not just about prices—it’s a window into how resources
                        are allocated and how collective decisions influence our world.
                    </p>
                </div>
            </div>
        </SectionWrapperModule2>
    );
};

export default Introduction2;
