import React from "react";
import { Button } from "~/components/ui/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
  backgroundClass?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref = "#",
  secondaryButtonHref = "#",
  primaryButtonOnClick,
  secondaryButtonOnClick,
  backgroundClass = "bg-gray-100 dark:bg-gray-800",
}) => {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-gray-100 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={primaryButtonOnClick}
            >
              {primaryButtonText}
            </Button>
            {secondaryButtonText && (
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                onClick={secondaryButtonOnClick}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;