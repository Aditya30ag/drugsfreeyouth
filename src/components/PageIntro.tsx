import React, { ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Highlight = {
  icon: ReactElement<React.SVGProps<SVGSVGElement>>;
  label: string;
};

interface PageIntroProps {
  title: ReactNode;
  description?: ReactNode;
  highlights?: Highlight[];
  eyebrow?: string;
  backgroundClassName?: string;
  children?: ReactNode;
}

const PageIntro: React.FC<PageIntroProps> = ({
  title,
  description,
  highlights = [],
  eyebrow,
  backgroundClassName = 'bg-muted',
  children,
}) => {
  const hasHighlights = highlights.length > 0;

  return (
    <section className={cn('pt-28 pb-20 sm:pt-32 sm:pb-28', backgroundClassName)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {eyebrow && (
            <div className="inline-block bg-muted-foreground/10 text-foreground px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
              {eyebrow}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
          )}

          {hasHighlights && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {highlights.map((highlight, index) => {
                if (!React.isValidElement(highlight.icon)) {
                  return null;
                }

                const iconElement = React.cloneElement(highlight.icon, {
                  className: cn('w-6 h-6', highlight.icon.props.className),
                });

                return (
                  <div key={index} className="flex items-center text-muted-foreground">
                    <span className="mr-2 text-primary">
                      {iconElement}
                    </span>
                    <span className="font-semibold">{highlight.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
