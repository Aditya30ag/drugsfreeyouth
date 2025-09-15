import React from 'react';
import { Accordion } from '../../components/ui/accordion';

const FAQAccordion = () => {
    const faqItems = [
        {
            question: "Can I report anonymously?",
            answer: "Yes. Our QR-code reporting is anonymous and routed to the police for action. If you prefer, you can also call our helpline for immediate help."
        },
        {
            question: "What happens after I report?",
            answer: "Reports are triaged by the local police partner. If an immediate threat is present, police will investigate; otherwise cases are logged for follow-up and community action. We aim to balance confidentiality with safety."
        },
        {
            question: "Will my child be arrested if we ask for help?",
            answer: "Our first approach is health-first. Police partners involved in this campaign support family-first interventions. Always discuss confidentiality and legal implications with the care provider."
        },
        {
            question: "How do I find a reputable rehab center?",
            answer: "Use the vetted directory on this page and call the center to confirm credentials. Look for medical staff, documented treatment plans, and documented aftercare."
        },
        {
            question: "What if the person denies there is a problem?",
            answer: "Keep lines open, avoid confrontation, and seek professional help. A counselor can advise on next steps without immediate legal involvement."
        },
        {
            question: "What are common signs of use?",
            answer: "Sudden changes in mood or appetite, withdrawal from family activities, declining grades, unexplained money loss, bloodshot eyes, or unusual odors."
        },
        {
            question: "Is rehab covered by insurance?",
            answer: "Some plans cover parts of treatment. Check with your insurer and the rehab center; many centers also offer sliding-scale fees or government support programs."
        },
        {
            question: "How do I talk to my child about drugs?",
            answer: "Use calm, factual language; avoid shaming; focus on safety and choices. Use this guide's sample scripts."
        },
        {
            question: "Can schools discipline students who use drugs?",
            answer: "School policies vary. Many schools are moving to supportive, referral-based models instead of immediate punitive measures. Check your school's policy."
        },
        {
            question: "How long does recovery take?",
            answer: "Recovery timelines differ. Some need weeks of supervised treatment, while others need long-term therapy and aftercare. Recovery is often months to years and includes relapse prevention."
        },
        {
            question: "Who can volunteer?",
            answer: "Anyone over 18 who completes basic training and a background check where applicable. Students 16+ may volunteer with parental consent and supervision."
        },
        {
            question: "Do you work with law enforcement?",
            answer: "Yes — we operate with police partners to ensure reporting results in safe and accountable action."
        },
        {
            question: "What should I do in case of overdose?",
            answer: "Call emergency services immediately and follow dispatcher instructions. If naloxone is available and you are trained to use it, administer it per guidance."
        },
        {
            question: "How do you ensure privacy?",
            answer: "Our platforms record minimal information. Anonymous reports do not capture identifying user data. We publish a privacy policy detailing data handling."
        }
    ];

    return (
        <section className="py-16 bg-muted">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Accordion items={faqItems.slice(0, Math.ceil(faqItems.length / 2))} />
                    <Accordion items={faqItems.slice(Math.ceil(faqItems.length / 2))} />
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
