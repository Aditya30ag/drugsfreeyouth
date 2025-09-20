import Header from '../../components/Header';
import EnhancedFooter from '@/components/EnhancedFooter';
import privacyData from '@/data/privacyContent.json';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background mb-2">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 sm:px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm border p-8 md:p-12">
            
            {/* Header Info */}
            <div className="mb-12 pb-8 border-b border-border">
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <p><strong className="text-foreground">Effective date:</strong> [Insert date]</p>
                  <p><strong className="text-foreground">Organization:</strong> Drugs Free Youth (operated by [Legal Entity Name], registered at [Address], Karnataka, India)</p>
                </div>
                <div>
                  <p><strong className="text-foreground">Contact:</strong></p>
                  <div className="space-y-1 mt-2">
                    <p>support@makeachangefoundation.in</p>
                    <p>phone: +91 9901415505</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="space-y-2">
                  {privacyData.sections.slice(0, Math.ceil(privacyData.sections.length / 2)).map((section) => (
                    <a 
                      key={section.id}
                      href={`#${section.id}`} 
                      className="block text-primary hover:text-primary/80 transition-colors"
                    >
                      {section.number && `${section.number}. `}{section.title}
                    </a>
                  ))}
                </div>
                <div className="space-y-2">
                  {privacyData.sections.slice(Math.ceil(privacyData.sections.length / 2)).map((section) => (
                    <a 
                      key={section.id}
                      href={`#${section.id}`} 
                      className="block text-primary hover:text-primary/80 transition-colors"
                    >
                      {section.number && `${section.number}. `}{section.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {privacyData.sections.map((section) => {
                const getColorClasses = (color: string) => {
                  const colorMap: Record<string, string> = {
                    blue: "bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
                    amber: "bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200",
                    green: "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
                    red: "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
                    purple: "bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200",
                    indigo: "bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200",
                    teal: "bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200",
                    orange: "bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200",
                    cyan: "bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-200",
                    emerald: "bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200",
                    rose: "bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200",
                    gray: "bg-gray-50 dark:bg-gray-900/50"
                  };
                  return colorMap[color] || "bg-gray-50 dark:bg-gray-900/50";
                };

                return (
                  <section key={section.id} id={section.id} className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {section.number && `${section.number}. `}{section.title}
                    </h2>
                    
                    {section.summary && (
                      <div className={`${getColorClasses(section.color)} rounded-lg p-4 mb-4`}>
                        <p className="font-medium">
                          {section.summary}
                        </p>
                      </div>
                    )}

                    <div className="space-y-4 text-muted-foreground">
                      {(() => {
                        // Handle plain-summary section with special styling
                        if (section.id === 'plain-summary') {
                          return (
                            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                              {section.content.map((paragraph, index) => {
                                const formattedParagraph = paragraph
                                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
                                
                                return (
                                  <p 
                                    key={index} 
                                    className="text-blue-800 dark:text-blue-200 font-medium"
                                    dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                                  />
                                );
                              })}
                            </div>
                          );
                        }

                        // Handle contact section with special formatting
                        if (section.id === 'contact') {
                          return (
                            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                              {section.content.map((paragraph, index) => {
                                const formattedParagraph = paragraph
                                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
                                
                                return (
                                  <p 
                                    key={index} 
                                    className={`text-muted-foreground ${index === 0 ? 'mb-4' : index < 3 ? 'mb-2' : 'mb-1'}`}
                                    dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                                  />
                                );
                              })}
                            </div>
                          );
                        }

                        // Handle sections with bullet points in content
                        const bulletPoints = section.content.filter(p => p.startsWith('•'));
                        const regularContent = section.content.filter(p => !p.startsWith('•'));

                        return (
                          <>
                            {regularContent.map((paragraph, index) => {
                              const formattedParagraph = paragraph
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
                              
                              return (
                                <p 
                                  key={`regular-${index}`} 
                                  className="text-muted-foreground"
                                  dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                                />
                              );
                            })}
                            
                            {bulletPoints.length > 0 && (
                              <ul className="list-disc list-inside space-y-2 ml-4">
                                {bulletPoints.map((item, itemIndex) => (
                                  <li key={`bullet-${itemIndex}`} className="text-muted-foreground">
                                    {item.substring(2)}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Last updated: [Insert date] | For questions about this privacy policy, contact support@makeachangefoundation.in
              </p>
            </div>

          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
