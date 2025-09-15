import React from 'react';

const PrivacyPolicyPage = () => (
  <div className="bg-slate-900/50">
    <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-slate-300">
        <h2 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy for Astraeus Next Gen</h2>
        <p className="text-sm text-slate-500 mb-8">Last Updated: September 14, 2025</p>
        
        <div className="space-y-6">
          <p>Welcome to Astraeus Next Gen ("we," "us," or "our"). We are committed to protecting the privacy and security of our users' information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our algorithmic trading software API and related services (collectively, the "Services").</p>
          <p>Please read this Privacy Policy carefully. By using our Services, you agree to the collection and use of information in accordance with this policy.</p>
          
          <div>
            <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">1. Information We Collect</h3>
            <p>We may collect information about you in a variety of ways. The information we may collect via the Services includes:</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2 text-sky-300">a) Personal Data:</h4>
            <p>While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to: Full Name, Email Address, Billing Information, Contact Number, and Company Name (if applicable).</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2 text-sky-300">b) Financial and Trading Data:</h4>
            <p>To use our Services, you will be required to provide API keys and/or other credentials for your brokerage or exchange accounts. We may also collect: information about the trading algorithms you deploy, trade history, order data, account balance information, and configuration settings for your strategies.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2 text-sky-300">c) Usage Data:</h4>
            <p>We may automatically collect information about how the Services are accessed and used. This Usage Data may include your IP address, browser type, pages visited, API call logs, and other diagnostic data.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">2. How We Use Your Information</h3>
            <p>We may use your information to create and manage your account, provide our Services, process transactions, send technical notices, provide customer support, monitor usage and trends, and comply with legal obligations.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">3. Security of Your Information</h3>
            <p>We use administrative, technical, and physical security measures to protect your information. All API keys and sensitive credentials are encrypted both in transit and at rest. Please be aware that despite our efforts, no security measures are perfect.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mt-8 mb-4 gradient-text">4. Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>By Email: <a href="mailto:info@astraeusnextgen.com" className="text-sky-400 hover:underline">info@astraeusnextgen.com</a></li>
              <li>By Mail: [Your Company's Physical Address]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;