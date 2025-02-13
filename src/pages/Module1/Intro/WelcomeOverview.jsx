import React from 'react';
import { motion } from 'framer-motion';

const WelcomeOverview = () => {
    return (
        <motion.section
            className="welcome-overview relative flex flex-col items-center justify-center py-16 px-8 bg-[hsl(92,43%,39%)]/90 shadow-lg rounded-xl border border-[hsl(94,66%,22%)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-96 h-96 bg-[hsl(94,66%,22%)] opacity-40 rounded-full blur-3xl top-10 left-1/4 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-[hsl(93,93%,33%)] opacity-50 rounded-full blur-2xl bottom-10 right-1/4 animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-xl">
                <h1 className="text-white md:text-4xl font-extrabold tracking-tight mb-6">
                    Welcome to Module 1
                </h1>
                <h2 className="text-white md:text-3xl font-semibold mb-8">
                    Introduction to Markets
                </h2>
                <p className="text-white md:text-2xl leading-relaxed">
                    Dive into the foundational principles of markets where concepts like supply, demand, and market
                    equilibrium are made tangible through dynamic simulations and interactive games. Explore how these
                    forces interact to shape prices and influence market behavior. Use engaging tools like the Supply
                    Demonstration and Demand Demonstration to manipulate variables, observe real-time changes,
                    and bridge the gap between theory and practice. Wrap up with a hands-on drag-and-drop activity
                    to uncover how markets achieve balance, making complex economic concepts both accessible and fun!
                </p>

            </div>
        </motion.section>
    );
};

export default WelcomeOverview;
