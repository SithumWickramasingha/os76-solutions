import { motion } from "framer-motion";
import { LucideIcon, Check } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, features, index }: ServiceCardProps) => {
  // Generate a unique gradient based on the index to create visual variety
  const gradients = [
    "from-blue-500 to-indigo-600",
    "from-indigo-500 to-purple-600",
    "from-blue-500 to-cyan-600",
    "from-teal-500 to-blue-600",
    "from-blue-600 to-indigo-500",
    "from-purple-500 to-indigo-600"
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col relative group"
    >
      {/* Enhanced header with gradient background */}
      <div className={`bg-gradient-to-r ${gradient} p-6 flex items-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,25 C75,50 75,50 50,75 C25,100 25,100 0,100 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="z-10 flex items-center">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg mr-4 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      {/* Content area with subtle enhancements */}
      <div className="p-6 flex-grow relative">
        {/* Subtle decoration in the background */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-50 rounded-full opacity-20 blur-xl group-hover:scale-125 transition-transform duration-700"></div>
        
        <p className="text-gray-600 mb-8 relative">{description}</p>
        
        <div className="space-y-4 relative">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            >
              <div className={`p-1.5 bg-gradient-to-r ${gradient} rounded-full mr-3 flex-shrink-0`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      
    </motion.div>
  );
};
