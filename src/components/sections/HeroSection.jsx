import React from 'react';

const HeroSection = () => (
    <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-6 z-10">
            <div className="max-w-4xl mx-auto">
                <div className="inline-block bg-slate-800 text-sky-300 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Pioneering the Future of Digital Intelligence
                </div>
                <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 hero-glow rounded-full p-4">
                    Algorithmic Trading & <span className="gradient-text">AI Security</span> Redefined
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                    Harness sophisticated AI to navigate financial markets with precision and secure your most critical digital assets against emerging threats.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#tyche" className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105">Explore Our Solutions</a>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
