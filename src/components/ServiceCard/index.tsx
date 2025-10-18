import React from "react";
import { motion } from "framer-motion";

export interface ServiceCardProps {
  title: string;
  description: string;
  capabilities: string[];
  index: number;
}

const ServiceCard = ({
  title,
  description,
  capabilities,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-accent/20"
    >
      <div className="mb-4">
        <div className="flex items-center mb-3">
          <span className="text-2xl font-bold text-accent mr-3">
            {index + 1}.
          </span>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Capabilities:</h4>
        <ul className="space-y-2">
          {capabilities.map((capability, capIndex) => (
            <li key={capIndex} className="flex items-start">
              <span className="text-accent mr-2 mt-1">•</span>
              <span className="text-gray-600 text-sm">{capability}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
