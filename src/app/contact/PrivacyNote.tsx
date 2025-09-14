import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const PrivacyNote = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                            <Shield size={32} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Your Privacy Matters
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center">
                                <Lock size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Strict Confidentiality</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    All personal details and reports are kept strictly confidential. Your information is never shared without your explicit consent.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                                <Eye size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Anonymous Reporting</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our QR-code reporting system allows you to report suspicious activities completely anonymously when needed.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 text-center">
                        <p className="text-gray-700 font-medium mb-2">
                            We understand the sensitivity of this issue.
                        </p>
                        <p className="text-gray-600 text-sm">
                            Your safety and privacy are our top priorities. We use industry-standard security measures to protect all communications and data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyNote;
