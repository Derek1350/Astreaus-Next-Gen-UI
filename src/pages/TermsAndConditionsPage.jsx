import React from 'react';

const TermsAndConditionsPage = () => (
  <div className="bg-slate-900/50">
    <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-slate-300">
        <h2 className="text-4xl font-bold mb-4 gradient-text">Terms and Conditions for Astraeus Next Gen</h2>
        <p className="text-sm text-slate-500 mb-8">Last Updated: September 14, 2025</p>

        <div className="space-y-6">
            <p>Please read these Terms and Conditions carefully before using the Astraeus Next Gen API and related services (the "Service"). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms.</p>
            
            <div>
                <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">1. Description of Service</h3>
                <p>Astraeus Next Gen provides an API that allows users to develop, test, and deploy automated trading strategies. The Service provides tools and infrastructure but does not provide trading accounts or act as a broker.</p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">2. API License and Restrictions</h3>
                <p>We grant you a limited, non-exclusive, non-transferable license to use the API. You agree not to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                    <li>Reverse engineer or decompile the Service.</li>
                    <li>Use the Service for any illegal purpose, such as market manipulation.</li>
                    <li>Attempt to gain unauthorized access to our systems.</li>
                    <li>Exceed the API rate limits.</li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">3. Disclaimers and Acknowledgement of Risk</h3>
                <h4 className="text-lg font-semibold mt-4 mb-2 text-sky-300">a) No Financial Advice</h4>
                <p>We are a technology provider, not a financial advisor. The Service is not intended to provide financial advice.</p>
                <h4 className="text-lg font-semibold mt-4 mb-2 text-sky-300">b) High-Risk Activity</h4>
                <p>You acknowledge that algorithmic trading is a high-risk activity and can result in substantial financial losses. You are solely responsible for your trading decisions.</p>
                <h4 className="text-lg font-semibold mt-4 mb-2 text-sky-300">c) "AS IS" Basis</h4>
                <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.</p>
            </div>
            
            <div>
                <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">4. Limitation of Liability</h3>
                <p className="font-mono text-sm bg-slate-800 p-4 rounded-lg">IN NO EVENT SHALL ASTRAEUS NEXT GEN BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR DATA, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THIS SERVICE.</p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">5. Contact Us</h3>
                <p>If you have any questions about these Terms, please contact us:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>By Email: <a href="mailto:info@astraeusnextgen.com" className="text-sky-400 hover:underline">legal@astraeusnextgen.com</a></li>
                    <li>By Mail: [Your Company's Physical Address]</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default TermsAndConditionsPage;