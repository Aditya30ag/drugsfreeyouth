import React from 'react';
import { QrCode, Shield } from 'lucide-react';

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
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                            <QrCode size={80} className="text-muted-foreground" />
                        </div>
                        <div className="space-y-4">
                            <p className="text-muted-foreground font-medium">
                                👉 Scan this QR code to report anonymously
                            </p>
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2">
                                <QrCode size={20} />
                                <span>Scan & Report Now</span>
                            </button>
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
