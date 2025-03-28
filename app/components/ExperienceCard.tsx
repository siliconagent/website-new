import React from "react";
import { FiClock, FiTrendingUp, FiShield, FiCode } from "react-icons/fi";
import { Card } from "~/components/ui/Card";

const ExperienceCard = ({ 
  icon, 
  title, 
  description, 
  metricValue, 
  metricLabel 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  metricValue: string; 
  metricLabel: string;
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-start">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {description}
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{metricValue}</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">{metricLabel}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;