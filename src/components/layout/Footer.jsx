// Frontend/src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-black">
        <div className="container mx-auto px-6 py-6 text-center text-slate-500">
            <p>&copy; 2025 Astraeus Next Gen. All rights reserved.</p>
            <div className="mt-2 text-sm">
                <Link to="/privacy" className="hover:text-sky-400">Privacy Policy</Link>
                <span className="mx-2">|</span>
                <Link to="/terms" className="hover:text-sky-400">Terms of Service</Link>
            </div>
        </div>
    </footer>
);

export default Footer;