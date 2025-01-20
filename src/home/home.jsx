import React from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveCard from "@/components/ui/InteractiveCardMod_Sim.jsx";
import ModeToggle from '@/components/ui/shadcncomponents/ModeToggle.jsx';
import { motion } from 'framer-motion';

// Reusable Navigation Link
const NavLink = ({ href, label }) => (
    <a
        href={href}
        className="text-white text-3xl font-medium hover:text-first-color"
    >
        {label}
    </a>
);


// Main Home Component
const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        <header
            className="fixed w-full top-0 left-0 h-20 bg-black-color z-50 shadow-md border-b border-green-500 transition-colors">
            <nav className="h-full flex justify-between items-center px-6 max-w-7xl mx-auto">
                <a href="#" className="flex items-center text-white font-bold text-3xl">
                    <i className="ri-bar-chart-line text-first-color mr-3"></i> Market Wise
                </a>
                <ModeToggle/>
                <div className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li><NavLink href="#home" label="Home"/></li>
                        <li><NavLink href="#modules" label="Modules"/></li>
                        <li><NavLink href="#simulations" label="Simulations"/></li>
                    </ul>
                </div>
            </nav>
        </header>

        <main className="pt-16">
            {/* Home Section */}
            <section className="home-section py-20 flex items-center justify-center min-h-screen" id="home">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl font-bold mb-6 uppercase text-black dark:text-white">
                        Interactive Learning For<br/>
                        <span className="block mt-2 text-green-600 dark:text-first-color">
                              Market Fundamentals
                             </span>
                    </h1>


                    <p className="text-base md:text-2xl mb-8 text-black dark:text-white">
                        Learn the foundational principles of supply, demand, and equilibrium, and use them as a lens to
                        understand what the stock market is and how it operates. Dive into hands-on simulations and
                        relatable examples to explore how markets work and gain a better understanding of the stock
                        market's accessibility.
                    </p>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                const section = document.getElementById('modules');
                                section?.scrollIntoView({behavior: 'smooth'});
                            }}
                            className="bg-first-color text-white font-bold py-3 px-7 rounded-full inline-flex items-center gap-2 hover:bg-first-color-alt transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            Jump to Modules
                        </button>
                    </div>
                </div>
            </section>


            {/* Modules Section */
            }
            <section className="modules-section py-20 bg-container-color" id="modules">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="text-center md:text-left">
                        <motion.div
                            className="text-center mb-12 p-6 bg-gradient-to-r from-gray-800 to-green-700 rounded-lg shadow-xl"
                            initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-3xl font-bold text-title-color mb-4">Modules</h2>
                </motion.div>
                <p className="py-2">
                    Explore two foundational modules designed to provide a clear lens for understanding the stock market
                    and its underlying principles.
                </p>
                <p className="py-2">
                    <strong>Module 1: Understanding Markets</strong>:
                    Learn the fundamental concepts that drive market behavior, including supply, demand, and equilibrium.
                    This module explores how these principles interact to influence prices and shape market dynamics.
                    Through engaging simulations and relatable scenarios such as farmers representing sellers, chefs as
                    buyers, and apples as the traded good, users can see how individual decisions and external factors,
                    such as trends or economic shifts, impact the broader market.
                </p>
                <p className="py-2">
                    <strong>Module 2: Understanding the Stock Market</strong>: Build on the fundamentals by exploring what
                    the stock market is, how it operates, and the basic cycle of the market. Learn about key concepts such
                    as stocks, shares, and IPOs, and understand how market dynamics influence trading and investing.
                    Through interactive drag and drop activities this module connects foundational principles to real-world
                    scenarios, helping users understand the stock market’s accessibility and its role in modern economies.
                </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <InteractiveCard
                                title="Module 1: Understanding Markets"
                                buttonText="Start Now"
                                onClick={() => navigate('/module1')}
                            />
                            <InteractiveCard
                                title="Module 2: Understanding the Stock Market"
                                buttonText="Start Now"
                                onClick={() => navigate('/module2')}
                            />
                        </div>
                    </div>
                </section>
            {/* Disclaimer Section */}
            <section className="disclaimer-section py-20 bg-gray-100 dark:bg-gray-800" id="disclaimer">
                <div className="max-w-screen-xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold text-title-color mb-6 dark:text-white">Disclaimer</h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        This platform is designed for educational purposes only and is not a substitute for professional financial advice.
                        The content is based on publicly available resources and personal insights, and while every effort has been made
                        to ensure accuracy, interpretations of financial markets may vary. Users are encouraged to think critically and
                        consult expert resources for a deeper understanding.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Advanced trading topics, such as options and derivatives, are intentionally excluded to avoid promoting strategies
                        that may cause financial harm without proper understanding. The focus is on foundational concepts such as supply,
                        demand, and equilibrium to provide users with a starting point for exploring market dynamics.
                    </p>
                </div>
            </section>

                {/* Simulations Section */}
                <section className="simulations-section py-20" id="simulations">
                    <h2 className="text-3xl font-bold text-title-color text-center mb-10">Interactive Simulations</h2>
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                        <InteractiveCard
                            title="Interactive Buyer-Seller Price Simulator"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulations')}
                        />
                        <InteractiveCard
                            title="Market Equilibrium Matcher"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulation/market-equilibrium')}
                        />
                        <InteractiveCard
                            title="Investor Indices Matcher"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulation/investor-indices')}
                        />
                        <InteractiveCard
                            title="Stocks and Shares Matcher"
                            buttonText="Start Now"
                            onClick={() => navigate('/simulation/stocks-and-shares')}
                        />

                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
