import React from 'react';
import { Shield } from 'lucide-react';
import QRCodeGenerator from '../../components/QRCodeGenerator';

const ReportingSection = () => {
    return (
        <section id="report" className="py-16 bg-muted scroll-mt-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6">
                        <Shield size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Report Suspicious Activity
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        If you want to report drug peddling or suspicious activity, use our anonymous QR-code system linked with the Mangaluru & Udupi Police for immediate action.
                    </p>
                </div>
                
                <div className="bg-card rounded-2xl shadow-lg p-8 text-center">
                    <div className="mb-8">
                        <p className="text-muted-foreground font-medium mb-6">
                            👉 Scan QR codes to report anonymously
                        </p>
                        
                        {/* QR Codes Side by Side */}
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
                            {/* Mangalore QR Code */}
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Mangalore</h3>
                                <a 
                                    href="https://tally.so/r/3jXOJx" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="w-40 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-border p-3 hover:shadow-xl transition-shadow duration-300">
                                        <QRCodeGenerator 
                                            text="https://tally.so/r/3jXOJx" 
                                            size={140}
                                            className="w-full h-full"
                                        />
                                    </div>
                                </a>
                                <a 
                                    href="https://tally.so/r/3jXOJx" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:underline mt-3 inline-block font-medium"
                                >
                                    Click Here to Report
                                </a>
                            </div>
                            
                            {/* Udupi QR Code */}
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Udupi</h3>
                                <a 
                                    href="https://tally.so/r/nWVA5k" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="w-40 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-border p-3 hover:shadow-xl transition-shadow duration-300">
                                        <QRCodeGenerator 
                                            text="https://tally.so/r/nWVA5k" 
                                            size={140}
                                            className="w-full h-full"
                                        />
                                    </div>
                                </a>
                                <a 
                                    href="https://tally.so/r/nWVA5k" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:underline mt-3 inline-block font-medium"
                                >
                                    Click Here to Report
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Anonymous</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Secure</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Immediate Action</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportingSection;
