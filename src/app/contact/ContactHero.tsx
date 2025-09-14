import React from 'react';

const ContactHero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Contact
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6">
                    We&apos;re Here to Listen. We&apos;re Here to Act.
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
                    Whether you&apos;re a parent seeking guidance, a student looking for help, an institution wanting to partner, or a citizen ready to report — this is where you reach us.
                </p>
                <p className="text-lg text-gray-600 font-medium">
                    No message is too small. Every voice matters in building a drug-free future.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
