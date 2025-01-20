import React from "react";
import SectionWrapperModule2 from "@/components/ui/SectionWrapper_HoverCard/SectionWrapperModule2.jsx";

const BringingItAllTogether = () => {
    return (
        <SectionWrapperModule2 className="bringing-it-all-together bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mt-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Bringing It All Together</h2>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    You’ve explored how supply and demand drive markets (Module 1), how IPOs transition companies to public ownership, and how stock exchanges and indices facilitate trading and reflect economic trends. Together, these elements form a system where investment fuels growth and innovation.
                </p>
                <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    The stock market is more than numbers—it’s a dynamic ecosystem shaped by investor decisions, market conditions, and global events. Each trade and index movement reflects the interaction of individuals, businesses, and economic forces.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    With these foundational concepts, you’re equipped to view the stock market as an interconnected system, understanding how its parts work together to drive the global economy. This perspective is your starting point for exploring market behavior and making informed decisions.
                </p>
            </div>
        </SectionWrapperModule2>
    );
};

export default BringingItAllTogether;
