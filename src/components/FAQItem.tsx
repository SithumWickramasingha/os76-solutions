import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  category?: string;
}

export const FAQItem = ({ question, answer, isOpen, onToggle, category }: FAQItemProps) => {
  return (
    <motion.div 
      layout
      className={`border rounded-xl mb-6 shadow-md transition-all duration-500 overflow-hidden backdrop-blur-sm ${
        isOpen 
          ? "border-blue-300 shadow-xl shadow-blue-100/50 bg-white" 
          : "border-blue-100 hover:border-blue-200 hover:shadow-lg bg-white/90"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        scale: isOpen ? 1 : 1.02,
        translateY: isOpen ? 0 : -4,
        boxShadow: isOpen ? "" : "0 8px 30px rgba(0, 0, 0, 0.08)"
      }}
    >
      <button 
        className={`w-full py-5 flex justify-between items-center text-left px-6 transition-all duration-300 group relative overflow-hidden ${
          isOpen ? "bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50" : "bg-white"
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* Enhanced decorative elements */}
        {isOpen && (
          <motion.div 
            className="absolute inset-0 pointer-events-none" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            
            {/* Animated glow dots */}
            <motion.div 
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Subtle sparkle effect */}
            <motion.div
              className="absolute right-12 top-1/3 text-blue-400/50"
              animate={{ 
                scale: [0.8, 1.2, 0.8], 
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Sparkles size={12} />
            </motion.div>
          </motion.div>
        )}

        <div className="flex-1 relative z-10">
          {category && (
            <motion.span 
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 mb-2 shadow-sm"
              animate={{ 
                scale: isOpen ? 1.05 : 1,
                y: isOpen ? -2 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {category}
            </motion.span>
          )}
          <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-200 pr-4">
            {question}
          </h3>
        </div>
        
        <motion.div 
          className={`flex-shrink-0 rounded-full p-2.5 transition-all duration-300 ${
            isOpen 
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-200" 
              : "text-blue-400 group-hover:bg-blue-50"
          }`}
          animate={{ 
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { duration: 0.4 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { 
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
          >
            <div className="px-6 py-6 bg-gradient-to-r from-blue-50/80 to-indigo-50/60 border-t border-blue-100/50">
              <motion.div 
                className="prose prose-blue max-w-none text-blue-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ lineHeight: 1.7 }}
              >
                {answer}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};