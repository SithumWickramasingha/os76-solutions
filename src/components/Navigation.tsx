import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Home, Info, Settings, MessageCircle, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/services", label: "Services", icon: Settings },
    { path: "/FAQ", label: "Blogs", icon: MessageCircle },
    
  ];
  const shouldBeTransparent = isHomePage && !scrolled && !isOpen;
  return <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          shouldBeTransparent 
            ? "bg-transparent" 
            : "bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced logo with animation */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
              className="relative"
              >
              <span className={`text-2xl font-bold transition-colors duration-400 relative`}>
                {shouldBeTransparent ? (
                <span>
                  <img src="/logo/os76white.png" alt="os76-logo" className="h-[120px] w-auto"  />
                </span>
                ) : (
                <span className="bg-gradient-to-r from-[#00c3e6] to-[#00c3e6] bg-clip-text text-transparent">
                  <img src="/logo/transparentbg.png" alt="os76-logo" className="h-[120px] w-auto"  />
                </span>
                )}
              </span>
                
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute -inset-1 bg-blue-600/20 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    scale: [0.8, 1.2, 0.8], 
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }}
                />
                
                {/* Lightning icon on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 10 }}
                  whileHover={{ opacity: 1, scale: 1, x: 0 }}
                  className="absolute -right-4 -top-1 text-blue-500"
                >
                  <Zap size={14} />
                </motion.div>
              </motion.div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
                    shouldBeTransparent ? "text-white hover:text-white/90" : "text-gray-700 hover:text-[#00c3e6]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <link.icon className={`w-4 h-4 transition-all duration-300 ${
                      location.pathname === link.path ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                    }`} />
                    {link.label}
                  </span>
                  
                  {/* Enhanced hover background effect */}
                  <motion.span 
                    className="absolute inset-0 bg-white/10 opacity-0 rounded-lg transition-all duration-300"
                    initial={false}
                    animate={location.pathname === link.path ? { opacity: 0.2 } : { opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  />
                  
                  {/* Enhanced active indicator with animation */}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="navbar-indicator" 
                      className={`absolute bottom-0 left-2 right-2 h-0.5 ${
                        shouldBeTransparent 
                          ? "bg-white" 
                          : "bg-gradient-to-r from-[#00c3e6] to-[#00c3e6]"
                      }`}
                      initial={false} 
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Enhanced CTA Button */}
              <Link 
                to="/contact" 
                className="ml-5 px-6 py-2.5 bg-gradient-to-r from-[#00c3e6] to-[#7E78D2] text-white rounded-full font-medium 
                  flex items-center space-x-2 transition-all hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden group"
              >
                <span className="relative z-10 mr-1.5">Get In Touch</span>
                <motion.div
                  className="relative z-10 bg-white/20 rounded-full p-0.5"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
                
                {/* Enhanced button shine effect */}
                <motion.div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-30 -translate-x-full"
                  animate={{
                    translateX: ["200%", "-200%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                />
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                shouldBeTransparent 
                  ? "text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm" 
                  : "text-[#00c3e6] bg-blue-50 hover:bg-blue-100 shadow-md hover:shadow-lg"
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: isOpen ? -45 : 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 45 : -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with better animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="grid gap-3">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link 
                        to={link.path} 
                        className={`flex items-center px-5 py-3.5 rounded-xl transition-all duration-300 ${
                          location.pathname === link.path 
                            ? "bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 text-[#00c3e6] shadow-sm" 
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <link.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          location.pathname === link.path ? "text-blue-500" : "text-gray-500"
                        }`} />
                        <span className="font-medium">{link.label}</span>
                        {location.pathname === link.path && (
                          <motion.div 
                            layoutId="mobile-nav-indicator"
                            className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-[#00c3e6] to-indigo-500 shadow-sm"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link 
                      to="/contact" 
                      className="block w-full py-4 bg-gradient-to-r from-[#00c3e6] to-black text-white rounded-xl font-medium shadow-lg hover:shadow-xl active:scale-98 text-center relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get In Touch
                        <motion.div 
                          animate={{ 
                            x: [0, 4, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </span>
                      
                      {/* Enhanced button shine effect */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-30 -translate-x-full"
                        animate={{
                          translateX: ["200%", "-200%"]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          repeatDelay: 1
                        }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enhanced backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>;
};