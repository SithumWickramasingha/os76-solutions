import { motion } from "framer-motion";
import {
  FileText,
  MapPlus,
  CarFront,
  HeartPulse,
  UsersRound,
  FileCheck2,
  MapPinned,
  ChartNoAxesCombined,
  BadgeDollarSign,
  UserRoundCog,
  BellRing,
  CalendarCheck,
  ArrowRight,
  Check,
  ChevronDown,
  Award,
} from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Service Typing Animation Component
const ServiceTypingAnimation = () => {
  const fullText = "DIGITAL SOLUTIONS. ENDLESS POSSIBILITIES.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // pause at the end before restarting
          setTimeout(() => {
            setIsTyping(false);
          }, 2000); // wait 2 seconds at the end
        }
      } else {
        setDisplayText("");
        setCurrentIndex(0);
        setIsTyping(true);
      }
    }, isTyping ? 100 : 0); // 100ms delay between characters

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, fullText]);

  return (
    <div
      className="inline-block px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white/10"
      style={{
        opacity: 1,
        transform: 'scale(1)',
        animation: 'slideIn 0.6s ease-out 0.2s both'
      }}
    >
      <span className="text-xs font-medium flex items-center justify-center text-blue-200">
        <Award className="w-4 h-4 mr-2" />
        {displayText}
        <span className="animate-pulse ml-1">|</span>
      </span>

      <style jsx>
        {`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}
      </style>
    </div>
  );
};

// Animated Background Component (same as Home page)
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-100"></div>
      
      {/* Animated elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          opacity: [1, 2, 1]
        }}
        transition={{ 
          duration: 40,
          repeat: Infinity,
          repeatType: "loop" 
        }}
        className="absolute top-[-50%] left-[-10%] w-[100%] h-[100%] rounded-full border-[40px] border-blue-700/10"
      />
      
      <motion.div 
        animate={{ 
          rotate: -360,
          opacity: [1, 2, 1]
        }} 
        transition={{ 
          duration: 50, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
        className="absolute bottom-[-30%] right-[-10%] w-[80%] h-[80%] rounded-full border-[30px] border-indigo-600/10"
      />
      
      {/* Particle effect */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full shadow-lg shadow-blue-400/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [1, 1, 1],
            scale: [0, 1, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Light streaks */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent top-1/4 transform -rotate-12"></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent top-3/4 transform rotate-12"></div>
      </motion.div>
    </div>
  );
};

export const Services = () => {
  const navigate = useNavigate();
  const vehicleServices = [
    {
      icon: CalendarCheck,
      title: "Appointment Management",
      description:
        "Efficiently manage customer bookings with ease.",
      features: [
        "Automated scheduling",
        "Real-time updates",
        "Reschedule & cancel options",
      ],
    },
    {
      icon: UsersRound,
      title: "Customer Relationship Management",
      description:
        "Enhance customer experience with seamless communication",
      features: ["Customer profiles & history", "Automated service reminders", "Direct messaging & notifications"],
    },
    {
      icon: FileText,
      title: "Service Record Management",
      description:
        "Keep track of all service histories in one place.",
      features: ["Digital record-keeping", "Quick access to past services", "Secure cloud storage"],
    },
    {
      icon: ChartNoAxesCombined,
      title: "Business Insights & Analytics",
      description:
        "Gain valuable insights to grow your service center.",
      features: ["Performance reports", "Customer trends analysis", "Data-driven decision-making"],
    },
    {
      icon: UserRoundCog,
      title: "Employee Management",
      description:
        "Optimize workflow with efficient staff management.",
      features: ["Assign tasks to technicians", "Track work progress", "Track work progress"],
    },
    {
      icon: BadgeDollarSign,
      title: "Marketing & Promotions",
      description:
        "Boost customer engagement with targeted promotions.",
      features: ["Special offers & discounts", "Loyalty programs", "Automated promotional campaigns"],
    },
  ];
  const userServices = [
    {
      icon: FileCheck2,
      title: " Website Development",
      description:
        "Build modern, responsive, and SEO-friendly websites that strengthen your brand identity and attract more customers.",
      features: ["Bespoke designs aligned with your brand identity", "Mobile-first, responsive layouts", "SEO & performance optimization"],
    },
    {
      icon: MapPinned,
      title: "Mobile App Development",
      description:
        "We create robust Android and iOS applications that enhance accessibility, customer engagement, and long-term loyalty.",
      features: ["Cross-platform development (iOS & Android)", "Intuitive UI/UX tailored for end users", "Secure integrations and data protection"],
    },
    {
      icon: MapPlus,
      title: "Business Process Automation",
      description:
        "Transform the way your business operates with our custom automation solutions. We help reduce manual effort, improve efficiency, and minimize errors by digitizing core workflows.",
      features: ["Online booking & scheduling systems", "Automated billing and payment solutions", "Integration with existing business systems"],
    },
    {
      icon: CarFront,
      title: "E-Commerce Solutions",
      description:
        "Expand your business into the digital marketplace with secure and scalable e-commerce platforms. From startups to enterprises, we design solutions that make selling simple, smart, and sustainable.",
      features: ["Full-featured product catalog & cart management", "Multi-gateway secure payment processing", "Order tracking and automated invoicing"],
    },
    {
      icon: BellRing,
      title: "Custom Dashboards & Analytics",
      description:
        "Leverage data to make informed decisions with our custom dashboard and reporting solutions. We turn complex business data into clear, actionable insights that fuel growth.",
      features: ["Real-time data visualization", "Advanced sales and customer analytics", "Centralized performance monitoring"],
    },
    {
      icon: HeartPulse,
      title: "Ongoing Support & Maintenance",
      description:
        "We ensure your digital solutions remain secure, reliable, and optimized through continuous monitoring, updates, and dedicated support.",
      features: ["Regular updates and security patches", "Performance optimization and bug fixing", "24/7 technical support and assistance"],
    },
  ];
  return (
    <div className="w-full min-h-screen bg-white relative">
      

      {/* Modern Hero Section with Interactive Service Cards */}
      <section className="relative min-h-[70vh] pt-16 pb-12 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        {/* Animated Background */}
        <AnimatedBackground />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center pt-12">
          {/* Header content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Service Typing Animation */}
            <ServiceTypingAnimation />
            
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-none">
              Our Digital
              <span className="block mt-2 bg-gradient-to-b from-[#00C3E6] to-[#7E78D2] bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-20">
              We provide website and mobile application services that drive digital transformation, boost efficiency, and enhance customer experiences across industries.
            </p>
            
            {/* Navigation buttons with 3D effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-10"
            >
              <motion.div
                whileHover={{ translateY: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <button
                  onClick={() => document.getElementById('user-services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative bg-gray-900 rounded-lg px-8 py-4 flex items-center gap-2 text-white font-medium"
                >
                  For Businesses
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ translateY: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <button
                  onClick={() => {
                    const element = document.getElementById('customers-heading');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                      });
                    }
                  }}
                  className="relative bg-gray-900 rounded-lg px-8 py-4 flex items-center gap-2 text-white font-medium"
                >
                  For Customers
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Curved separator */}
        <div className="absolute -bottom-1 left-0 right-0 overflow-hidden">
          <svg 
            className="relative block w-full h-[80px] text-white"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
              className="fill-white"
            />
          </svg>
        </div>
      </section>
      
      <div className="relative" style={{ zIndex: 1 }}>
        {/* For Business Section */}
        <section id="user-services" className="pt-20 pb-10 px-4 bg-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#00c3e6]/10 rounded-full blur-xl opacity-50" />
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-900">
                For <span className="text-[#00c3e6]"> Businesses </span>
              </h2>
              
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
                We provide businesses with scalable, reliable, and user-focused digital solutions that simplify operations and create new opportunities for growth. From startups to enterprises, we design technology that adapts to your unique needs.
              </p>
              
              <div className="w-20 h-1 bg-gradient-to-r from-[#00c3e6] to-black mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {userServices.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="service-centers" className="pb-24 px-4 bg-white">  
          
          {/* For Service Centers Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#00c3e6]/10 rounded-full blur-xl opacity-50" />
              
              
              <h2 id="customers-heading" className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-900 scroll-mt-24">
                For <span className="text-[#00c3e6]">Customers</span>
              </h2>
              
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
                Streamline your operations, increase customer satisfaction, and grow your business with our comprehensive suite of tools designed for modern service centers.
              </p>
              
              <div className="w-20 h-1 bg-gradient-to-r from-[#00c3e6] to-black mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {vehicleServices.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-[#00c3e6] via-black to-black relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#7E78D2]/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2], 
                opacity: [0.1, 0.3, 0.1],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-white/20"
            >
              <motion.div className="mb-10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="w-32 h-1 bg-gradient-to-r from-[#7E78D2] to-white mx-auto mb-8"
                />
                
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold mb-8 text-white"
                >
                  Ready to Transform Your 
                  <span className="text-[#00c3e6]"> Business?</span>
                </motion.h2>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/90 text-xl mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                  Join hundreds of satisfied businesses who have streamlined their operations 
                  with our comprehensive digital solutions. Get started today and see the difference.
                </motion.p>
              </motion.div>
              
              {/* Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-6 mb-12"
              >
                {["Scalable Solutions", "Expert Support", "Secure & Reliable", "Proven Results"].map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-5 h-5 text-[#00c3e6] mr-2" />
                    <span className="text-white font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px -12px rgba(0, 195, 230, 0.5)",
                    backgroundColor: "#00c3e6"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-white text-black px-10 py-5 rounded-xl text-lg font-bold shadow-xl flex items-center gap-3 transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};