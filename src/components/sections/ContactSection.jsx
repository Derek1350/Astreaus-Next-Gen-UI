import React, { useState } from 'react';

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form submitted');
        setTimeout(() => {
            e.target.reset();
            setSubmitted(false);
        }, 3000);
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

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto card-border p-8 rounded-2xl">
                    {submitted ? (
                        <div className="text-center p-4 bg-sky-900/50 border border-sky-700 rounded-lg">
                           <h3 className="font-bold text-lg text-sky-300">Thank You!</h3>
                           <p className="text-slate-300">Your message has been sent. We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Full Name</label>
                                <input type="text" id="name" className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="John Doe" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Email Address</label>
                                <input type="email" id="email" className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-300">Subject</label>
                                <select id="subject" className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                                    <option>Inquiry about Tyche Allocator</option>
                                    <option>Consultation for The Entity</option>
                                    <option>AI Security Solutions</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Your Message</label>
                                <textarea id="message" rows="4" className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="Please provide details about your inquiry. For 'The Entity', include your organization and use case."></textarea>
                            </div>
                            <button type="submit" className="w-full text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-3 text-center">Send Message</button>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
