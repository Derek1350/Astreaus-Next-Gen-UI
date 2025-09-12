import React from 'react';

const Header = () => (
    <header className="fixed w-full top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tighter">Astraeus<span className="gradient-text">NextGen</span></h1>
            <nav className="hidden md:flex space-x-8">
                <a href="#tyche" className="text-slate-300 hover:text-sky-400 transition-colors">Tyche Allocator</a>
                <a href="#security" className="text-slate-300 hover:text-sky-400 transition-colors">AI Security</a>
                <a href="#entity" className="text-slate-300 hover:text-sky-400 transition-colors">The Entity</a>
            </nav>
            <a href="#contact" className="bg-sky-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-sky-600 transition-all shadow-md shadow-sky-500/20">Contact Us</a>
        </div>
    </header>
);

export default Header;
