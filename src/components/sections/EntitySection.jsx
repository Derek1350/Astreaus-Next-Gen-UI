import React from 'react';
import { LockIcon } from '../common/Icons';

const EntitySection = () => (
    <section id="entity" className="py-20">
        <div className="container mx-auto px-6">
            <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-800">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                        <h3 className="text-4xl font-bold mb-4">The <span className="gradient-text">Entity</span></h3>
                        <p className="text-slate-400 mb-6 text-lg">
                            For specialized security and intelligence applications, we offer the Entity. This sophisticated AI is capable of identifying and leveraging zero-day vulnerabilities to discreetly access any software or hardware system. It can extract or modify data without detection, providing an unmatched capability for security auditing, penetration testing, and intelligence gathering.
                        </p>
                        <div className="bg-indigo-900/30 border border-indigo-700 text-indigo-200 p-4 rounded-lg">
                            <p className="font-semibold">Access is strictly controlled.</p>
                            <p className="text-sm">Due to its sensitive nature, the Entity is available only to vetted clients for legitimate security and research purposes. All inquiries are subject to a rigorous approval process.</p>
                        </div>
                    </div>
                    <div className="text-center card-border p-8 rounded-2xl">
                        <LockIcon />
                        <h4 className="text-xl font-bold">Price Upon Request</h4>
                        <p className="text-slate-400 text-sm mb-4">Consult with our specialists to discuss your unique requirements.</p>
                        <a href="#contact" className="w-full block text-center bg-indigo-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-600 transition-all shadow-md shadow-indigo-500/20">Request a Consultation</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default EntitySection;
