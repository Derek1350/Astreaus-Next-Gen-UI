import React, { useState } from 'react';

const AegisSecuritySection = () => {
    const [notified, setNotified] = useState(false);
    return (
        <section id="security" className="text-center max-w-4xl mx-auto mb-24 py-20 px-6">
            <h3 className="text-4xl font-bold mb-4">Aegis AI: The Future of <span className="gradient-text">System Security</span></h3>
            <p className="text-slate-400 mb-8 text-lg">
                The proliferation of AI introduces unprecedented vulnerabilities. Our proprietary security model is the guardian of your digital intelligence, designed to secure AI systems and complex software infrastructure from the inside out.
            </p>
            <div className="card-border p-8 rounded-2xl inline-block">
                <h4 className="text-2xl font-bold text-sky-300">Coming Soon</h4>
                <p className="text-slate-400 mt-2">Our advanced AI security model is currently in final development. <br />Join our waitlist to be notified on launch.</p>
                <button
                    onClick={() => setNotified(true)}
                    disabled={notified}
                    className="mt-4 bg-slate-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {notified ? "You're on the list!" : "Get Notified"}
                </button>
            </div>
        </section>
    );
};

export default AegisSecuritySection;
