// Frontend/src/components/sections/ContactSection.jsx

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    // --- State to manage form inputs and submission status ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Inquiry about Tyche Allocator',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // Can be: idle, sending, success, error

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // --- Replace these with your actual IDs from your EmailJS dashboard ---
        const serviceID = 'service_kk3pxev';
        const templateID = 'template_cvtwm8g';
        const publicKey = 'sAgBEUXdKLbkk6VaR';

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(() => {
                setStatus('success');
                // Reset form and status after a few seconds
                setTimeout(() => {
                    setFormData({ name: '', email: '', subject: 'Inquiry about Tyche Allocator', message: '' });
                    setStatus('idle');
                }, 3000);
            })
            .catch((err) => {
                console.error('FAILED TO SEND EMAIL...', err);
                setStatus('error');
            });
    };

    // --- Dynamic button text based on submission status ---
    const getButtonText = () => {
        if (status === 'sending') return 'Sending...';
        return 'Send Message';
    };

    return (
        <section id="contact" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Let's Build the <span className="gradient-text">Future Together</span></h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        Whether you're looking to revolutionize your trading strategy or secure your digital frontier, we're here to help. Reach out to discuss your project.
                    </p>
                </div>

                <div className="max-w-xl mx-auto card-border p-8 rounded-2xl">
                    {status === 'success' ? (
                        <div className="text-center p-4 bg-sky-900/50 border border-sky-700 rounded-lg">
                            <h3 className="font-bold text-lg text-sky-300">Thank You!</h3>
                            <p className="text-slate-300">Your message has been sent. We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {status === 'error' && (
                                <p className="text-center p-2 mb-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
                                    Something went wrong. Please try again later.
                                </p>
                            )}
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Full Name</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="John Doe" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Email Address</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-300">Subject</label>
                                <select id="subject" value={formData.subject} onChange={handleChange} className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                                    <option>Inquiry about Tyche Allocator</option>
                                    <option>Consultation for The Entity</option>
                                    <option>AI Security Solutions</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Your Message</label>
                                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="Please provide details about your inquiry..."></textarea>
                            </div>
                            <button type="submit" disabled={status === 'sending'} className="w-full text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:opacity-50 disabled:cursor-not-allowed">
                                {getButtonText()}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;