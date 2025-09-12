import React from 'react';

const Footer = () => (
    <footer className="bg-black">
        <div className="container mx-auto px-6 py-6 text-center text-slate-500">
            <p>&copy; 2025 Astraeus Next Gen. All rights reserved.</p>
            <div className="mt-2 text-sm">
                <a href="#" className="hover:text-sky-400">Privacy Policy</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-sky-400">Terms of Service</a>
            </div>
        </div>
    </footer>
);

export default Footer;
