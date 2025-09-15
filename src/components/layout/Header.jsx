import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // --- Add this import ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#tyche', text: 'Tyche Allocator' },
        { href: '#security', text: 'AI Security' },
        { href: '#entity', text: 'The Entity' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    
                    <Link to="/" className="text-2xl font-bold tracking-tighter">
                        Astraeus<span className="gradient-text">NextGen</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors">{link.text}</a>
                        ))}
                    </nav>

                    <a href="#contact" className="hidden md:inline-block bg-sky-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-sky-600 transition-all shadow-md shadow-sky-500/20">Contact Us</a>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8">
                    <nav className="flex flex-col items-center space-y-6">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-2xl text-slate-300 hover:text-sky-400 transition-colors">{link.text}</a>
                        ))}
                    </nav>
                    <a href="#contact" onClick={handleLinkClick} className="bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-600 transition-all shadow-md shadow-sky-500/20 text-lg">Contact Us</a>
                </div>
            )}
        </>
    );
};

export default Header;