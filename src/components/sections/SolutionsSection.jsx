import React, { useState } from 'react';
import { CheckIcon } from '../common/Icons.jsx';
import ApiDocsDialog from '../docs/ApiDocsDialog.jsx';

const SolutionsSection = () => {
    const [openDocs, setOpenDocs] = useState(false);

    const handleOpenDocs = () => {
        setOpenDocs(true);
    };

    const handleCloseDocs = () => {
        setOpenDocs(false);
    };

    return (
        <>
            <section id="tyche" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-4xl font-bold mb-4">Tyche Dynamic <span className="gradient-text">Asset Allocator</span></h3>
                            <p className="text-slate-400 mb-6 text-lg">
                                Meet Tyche, our flagship trading algorithm. As a fully dynamic asset allocator, it operates seamlessly across all asset classes—from equities and bonds to crypto and commodities. Tyche adapts to market volatility in real-time, optimizing your portfolio to maximize returns while diligently managing risk.
                            </p>
                            <ul className="space-y-4 text-slate-300 mb-8">
                                <li className="flex items-center gap-3"><CheckIcon /> <span>Applicable across all asset classes</span></li>
                                <li className="flex items-center gap-3"><CheckIcon /> <span>Real-time portfolio optimization</span></li>
                                <li className="flex items-center gap-3"><CheckIcon /> <span>Advanced risk management protocols</span></li>
                            </ul>
                            <button
                                onClick={handleOpenDocs}
                                className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition-all shadow-md shadow-sky-500/20 transform hover:scale-105"
                            >
                                View API Documentation
                            </button>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="card-border p-8 rounded-2xl">
                                <img src="https://placehold.co/600x400/0a0a0a/38bdf8?text=Tyche+Interface" alt="Tyche Dynamic Asset Allocator UI" className="rounded-lg shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <ApiDocsDialog open={openDocs} handleClose={handleCloseDocs} />
        </>
    );
};

export default SolutionsSection;

