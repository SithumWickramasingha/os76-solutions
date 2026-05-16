import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Car, Clock, FileText, Calendar, Users, ArrowRight, CheckCircle, Shield, 
  Zap, Database, Bell, UsersIcon, FileCheck2, UserRoundCheck, Quote, 
  ArrowLeft, Star, ChevronDown, BookOpen, Globe, Award, 
  ArrowUpRight, MessageSquare, BadgeCheck, Layers, Activity,
  Bot, ArrowUpDown, MessageCircle, MapPin,
  BookUp,
  Package,
  Code,
  Smartphone,
  Globe2,
  CloudAlertIcon,
  Headphones,
  Briefcase,
  UserCheck,
  TrendingUp,
  Cpu,
  Smile} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import TechStackSection from "../components/TechStackSection.js";
import TypingAnimation from "../components/TypingAnimation.js";

// Animated Background Component
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

const mobileFeatures = [
  {
    icon: <Car />,
    title: "Vehicle Tracking",
    description: "Stay Updated on Vehicle Status and Location",
  },
  {
    icon: <Clock />,
    title: "Booking Appointments",
    description: "Schedule Service Appointments at Partnered Service Centers",
  },
  {
    icon: <FileText />,
    title: "Document Management",
    description: "Upload & Manage Vehicle Related Documents",
  },
  {
    icon: <Bell />,
    title: "Instant Reminders",
    description: "Get Notified on Upcoming Services and Updates",
  },
  {
    icon: <FileCheck2 />,
    title: "Service History",
    description: "Access Detailed Service History and Reports",
  },
  {
    icon: <UsersIcon />,
    title: "Community Form",
    description: "Connect with Other Vehicle Owners for Insights and Discussions",
  },
];

const testimonials = [
  {
    name: "Sihath Senarath",
    role: "Web Developer",
    company: "TechNova",
    content: "BlynQ is more than just a platform, It's our vision for smarter, more efficient vehicle management.",
    rating: 5,
    tag: "Early Adopter",
    image: "https://ui-avatars.com/api/?name=Sihath+yapa&background=ec4899&color=fff" // Update with actual high-res image
  },
  {
    name: "Amina Haja Meyan",
    role: "Mobile App Developer",
    company: "AppSphere",
    content: "Every feature in BlynQ is crafted with precision ensuring to get the most efficient user friendly experience.",
    rating: 5,
    tag: "Power User",
    image: "https://ui-avatars.com/api/?name=Amina+Haja&background=ec4899&color=fff" // Update with actual high-res image
  },
  {
    name: "Gaindu Amarasinghe",
    role: "Mobile App Developer",
    company: "InnoTech",
    content: "Innovation drives us. With BlynQ, we're reshaping vehicle management to be more accessible and intuitive.",
    rating: 5,
    tag: "Long-term User",
    image: "https://ui-avatars.com/api/?name=Gaindu+Amarasinghe&background=ec4899&color=fff"
  },
  {
    name: "Sithum Duleka",
    role: "Web Developer",
    company: "CodeCraft",
    content: "We believe technology should make vehicle management stress-free and smarter than ever before.",
    rating: 5,
    tag: "Brand Ambassador",
    image: "https://ui-avatars.com/api/?name=Sithum+Duleka&background=14b8a6&color=fff"
  },
];

const webFeatures = [
  {
    icon: <Shield />,
    title: "Secure Data Handling",
    description: "Keep custormer data safe and secure",
  },
  {
    icon: <UserRoundCheck />,
    title: "Customer Interaction",
    description: "Notify customers on service updates",
  },
  {
    icon: <FileText />,
    title: "Report Management",
    description: "Efficiently Genaerate Reports for Analysis",
  },
  {
    icon: <Users />,
    title: "Employee Management",
    description: "Manage Employees for efficient workflow",
  },
];



const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Briefcase />,
      title: "Years of Experience",
      description: "Proven expertise delivering high-quality software solutions.",
    },
    {
      icon: <Users />,
      title: "Skilled Team",
      description: "A dedicated team of engineers, designers, and strategists.",
    },
    {
      icon: <Headphones />,
      title: "24/7 Support",
      description: "Round-the-clock assistance to keep your business running.",
    },
    {
      icon: <Activity />,
      title: "Agile Development",
      description: "Flexible, efficient, and iterative project delivery approach."
    },
  ];


  return (
    <motion.section
      className="bg-gray-50 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <h2 className="text-3xl sm:text-5xl font-extrabold  text-[#000000]">Why Choose 
                  </h2>
                  <span><img src="/logo/transparentbg.png" alt="os76-logo" className="h-[120px] w-auto"  /></span>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-[#000000] w-12 h-12 mx-auto mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState<HTMLDivElement | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 100) {
      nextSlide(); // Swipe left
    } else if (touchEndX.current - touchStartX.current > 100) {
      prevSlide(); // Swipe right
    }
  };

  useEffect(() => {
    // Auto play with interval
    const interval = setInterval(nextSlide, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide(); 
    };

    if (sliderRef) {
      sliderRef.addEventListener('touchstart', handleTouchStart as EventListener);
      sliderRef.addEventListener('touchmove', handleTouchMove as EventListener);
      sliderRef.addEventListener('touchend', handleTouchEnd as EventListener);
    }

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      if (sliderRef) {
        sliderRef.removeEventListener('touchstart', handleTouchStart);
        sliderRef.removeEventListener('touchmove', handleTouchMove);
        sliderRef.removeEventListener('touchend', handleTouchEnd);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sliderRef]);

  interface RenderStarsProps {
    rating: number;
  }

  const renderStars = (rating: RenderStarsProps['rating']): JSX.Element[] => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div 
      ref={setSliderRef}
      className="relative max-w-6xl mx-auto overflow-hidden my-8"
      aria-live="polite"
    >
      {/* Main Slider */}
      <motion.div
        animate={{ x: `-${currentSlide * 100}%` }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="flex w-full"
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 p-4 md:p-6"
            aria-hidden={index !== currentSlide}
          >
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl overflow-hidden transition-all hover:shadow-2xl border border-blue-100">
              <div className="p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
                {/* Profile Section */}
                <div className="text-center md:text-left md:w-2/5">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto md:mx-0 mb-6 group">
                    {/* Tag Badge - Now positioned in front of image */}
                    <motion.div 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
                    >
                      {testimonial.tag}
                    </motion.div>
                    
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/30 to-indigo-300/30 animate-pulse"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full object-cover w-full h-full z-10 relative border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Animated Decorative Elements */}
                    <motion.div 
                      animate={{ 
                        rotate: [0, 360],
                        opacity: [0.6, 0.8, 0.6]
                      }} 
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                      className="absolute -z-10 w-full h-full rounded-full border-4 border-dashed border-blue-200 top-0 left-0"
                    />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                    <p className="text-lg text-gray-600 mb-3">
                      {testimonial.role} at <span className="text-blue-600 font-medium">{testimonial.company}</span>
                    </p>
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                  </motion.div>
                </div>
                
                {/* Quote Section */}
                <motion.div 
                  className="relative md:w-3/5 bg-white rounded-2xl p-8 shadow-sm border border-blue-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Quote className="absolute -top-3 -left-3 w-10 h-10 text-blue-100 fill-blue-50" />
                  <Quote className="absolute -bottom-3 -right-3 w-10 h-10 text-blue-100 fill-blue-50 rotate-180" />
                  <p className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all ml-6 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-100"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-6 h-6 text-blue-700" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all mr-6 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-100"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-6 h-6 text-blue-700" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2 pb-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all focus:outline-none ${
              index === currentSlide 
                ? "w-12 bg-blue-600" 
                : "w-3 bg-blue-200 hover:bg-blue-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </div>
  );
};

// Feature3DCard component 
interface Feature3DCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const Feature3DCard = ({ icon: Icon, title, description, delay, color }: Feature3DCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      <div className="p-8 flex-grow flex flex-col">
        <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
          <Icon className="text-white w-7 h-7" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex-grow"></div>
      </div>
      
      <div className="h-2 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 mt-auto"></div>
    </motion.div>
  );
};

// Component for "How It Works" section
const HowItWorks = () => {
  const steps = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Software built for your unique needs..",
      color: "from-[#00c3e6] to-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Engaging apps for iOS & Android.",
      color: "from-indigo-300 to-[#00c3e6]"
    },
    {
      icon: Globe,
      title: "SEO Web Development",
      description: "Fast, secure, and scalable websites.",
      color: "from-[#00c3e6] to-blue-400"
    },
    {
      icon: CloudAlertIcon,
      title: "Cloud Solutions & DevOps",
      description: "Smarter cloud and automation services.",
      color: "from-indigo-300 to-[#00c3e6]"
    },
    {
      icon: Headphones,
      title: "IT Consulting",
      description: "Expert tech advice and support within 24/7.",
      color: "from-[#00c3e6] to-blue-400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#00c3e6] to-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            opacity: [0.1, 0.2, 0.1]
          }} 
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full border-[40px] border-blue-100 opacity-10"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            opacity: [0.1, 0.2, 0.1]
          }} 
          transition={{ 
            duration: 40, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full border-[60px] border-indigo-100 opacity-20"
        />
      </div>

<div className="max-w-7xl mx-auto px-4 relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl font-bold text-white mb-4">
      Our Services at a Glance
    </h2>
    <p className="text-xl text-white max-w-3xl mx-auto opacity-50">
     From mobile apps to enterprise software, we deliver cutting-edge solutions tailored to your business needs.
    </p>
  </motion.div>

        <div className="relative">
          {/* Connecting line */}
          {/* <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2 rounded-full"></div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number bubble */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} text-black text-2xl font-bold shadow-lg relative z-10`}
                >
                  <step.icon size={30} />
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center px-6 py-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// New Partner Logos Section
// Stats Section Component
const StatsSection = () => {
  const stats = [
    { value: "10+", label: "Successfull Projects", icon: Briefcase },
    { value: "5+", label: "Customers", icon: Users },
    { value: "3+", label: "Creative Team", icon: UserCheck },
    { value: "24/7", label: "Availability", icon: Clock }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Driven by Results, Trusted by Many
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           We’re proud of the work we’ve done and the relationships we’ve built. Here’s a quick look at what we’ve achieved so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 rounded-2xl p-6 text-center hover:shadow-lg hover:border-2 transition-all"
            >
              <div className="w-12 h-12 bg-[#06d8fd] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerLogos = () => {
  const partners = [
    { 
      name: "Toyota", 
      logo: "/placeholder-logo.png", 
      description: "Official service tracking integration" 
    },
    { 
      name: "Honda", 
      logo: "/placeholder-logo.png", 
      description: "Authorized service provider" 
    },
    { 
      name: "Suzuki", 
      logo: "/placeholder-logo.png", 
      description: "Maintenance record integration" 
    },
    { 
      name: "Mitsubishi", 
      logo: "/placeholder-logo.png", 
      description: "Smart service alerts" 
    },
    { 
      name: "Nissan", 
      logo: "/placeholder-logo.png", 
      description: "Fleet management solutions" 
    },
    { 
      name: "Chevrolet", 
      logo: "/placeholder-logo.png", 
      description: "Digital service booklet" 
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50"></div>
      
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"] 
        }}
        transition={{ 
          duration: 50, 
          repeat: Infinity, 
          repeatType: "mirror" 
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 8%), radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 8%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium mb-4">
            Trusted Partners
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6">
            Industry Leaders Trust BlynQ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the top automotive brands to provide seamless integrations and premium services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center transition-all duration-300"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
                {/* Replace with actual logo or keep as is */}
                <div className="text-2xl font-bold text-blue-800">{partner.name}</div>
                
                {/* Shimmering effect */}
                <motion.div
                  animate={{ 
                    x: ['-100%', '100%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-center">{partner.description}</p>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '30%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="h-1 bg-blue-500/20 rounded-full mt-4"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced CTA Section
const EnhancedCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00c3e6] to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path fill="rgba(255, 255, 255, 0.05)" d="M0,100 C40,60 60,60 100,100 C140,140 160,140 200,100 C240,60 260,60 300,100 C340,140 360,140 400,100" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform your business with powerful software solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join dozens of growing businesses who trust us to deliver innovative, scalable, and secure software that drives success.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Book a Demo
                <Calendar className="w-5 h-5" />
              </motion.button>
            </div> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: "Delivering faster, more efficient software solutions." },
                  { icon: Shield, text: "Industry-standard security for peace of mind." },
                  { icon: UserRoundCheck, text: "Work with skilled engineers & consultants." },
                  { icon: Zap, text: "Software built to grow with your business." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-start p-4 bg-white/5 rounded-xl"
                  >
                    <div className="bg-black/50 p-2 rounded-lg mr-3">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 bg-white/5 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Rated 4.9/5</h4>
                    <p className="text-blue-100 text-sm">Based on 1,000+ reviews</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Floating Action Button Component
const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // optional: close menu when scrolling back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 w-64"
              >
                <div className="flex flex-col gap-3">
                  {[
                    { icon: MessageSquare, label: "Chat Support", color: "bg-blue-100 text-blue-600" },
                    { icon: Calendar, label: "Schedule Demo", color: "bg-purple-100 text-purple-600" },
                    { icon: Globe, label: "Find Service Centers", color: "bg-green-100 text-green-600" }
                  ].map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: "#f9fafb" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-left w-full"
                    >
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        <item.icon size={18} />
                      </div>
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-gradient-to-r from-[#00c3e6] to-indigo-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl text-black"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 45, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <MessageSquare size={24} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };


  // Animation references for scroll-triggered effects
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <>

      <FloatingActionButton />
      <div className="w-full overflow-hidden" ref={scrollRef}>
        {/* Enhanced Hero Section - without car animation */}
        <motion.section 
          className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatedBackground />
          
          <div className="max-w-7xl mx-auto px-4 py-24 relative">
            {/* Full-width hero content */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8 }} 
              className="hero-content max-w-5xl mx-auto text-center"
            >
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full mb-8 backdrop-blur-sm border border-white/10"
              >
                <span className="text-sm font-medium flex items-center justify-center">
                  <Award className="w-4 h-4 mr-2" />
                  #1 Software Solution Platform in Sri Lanka
                </span>
              </motion.div> */}

              {/* animation text */}
              <TypingAnimation/>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full text-4xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                Your Partner for <br />
                Smart, Scalable, and Simple{" "}
                <span className="relative">
                  <span className="relative z-0 text-transparent bg-clip-text bg-gradient-to-r from-[#00c3e6] to-white">Business Solutions.</span>
                  {/* <motion.span 
                    className="absolute bottom-2 left-0 right-0 h-4 bg-blue-500/20 z-0 rounded-lg"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}/> */}
                </span>
              </motion.h1>


              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-blue-100 mb-10 max-w-1xl mx-auto leading-relaxed"
              >
                
              </motion.p>

              {/* ✅ Tech logos marquee directly under the headline */}
              <div className="mt-2 w-full h-full mb-20">
                <TechStackSection variant="hero" speed={28} />
              </div>

        
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00c3e6] to-[#000000] rounded-full font-semibold text-lg shadow-lg transition-all flex items-center gap-2 group border border-white"
                >
                  Get Started Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </motion.button>
                
                
              </motion.div>

            </motion.div>

      
              {/* Scroll down indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              >
                <span className="text-blue-200 text-sm mb-2">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-6 h-6 text-blue-200" />
                </motion.div>
              </motion.div>
            
          </div>
          
        </motion.section>

        

        {/* Stats Section */}
        <StatsSection />

        {/* How It Works Section */}
        <HowItWorks />


        {/* Enhanced Features Section */}
        <section className="py-24 relative overflow-hidden">
          {/* ...existing code... */}
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="inline-block px-4 py-2 bg-[#5ce6ff] text-black rounded-full font-medium mb-4"
              >
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5" />
                  <span>Company Highlights</span>
                </div>
              </motion.div>
              
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#000000] via-[#00c3e6] to-black bg-clip-text text-transparent mb-6">
                Driving Innovation Through Technology
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a software company dedicated to building scalable, secure, and future-ready solutions that empower businesses to grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Feature3DCard 
                icon={Briefcase} 
                title="Years of Experience"
                description="Proven track record delivering high-quality software worldwide."
                delay={0.1}
                color="bg-blue-600"
              />
              
              <Feature3DCard 
                icon={Users} 
                title="Skilled Team"
                description="A passionate team of engineers, designers, and consultants."
                delay={0.2}
                color="bg-indigo-600"
              />
              
              <Feature3DCard 
                icon={Headphones} 
                title="24/7 Support"
                description="Always available to assist and keep your business running."
                delay={0.3}
                color="bg-purple-600"
              />
              
              <Feature3DCard 
                icon={Activity} 
                title="Agile Development"
                description="Flexible, efficient, and iterative project delivery process."
                delay={0.4}
                color="bg-pink-600"
              />
              
              <Feature3DCard 
                icon={Shield} 
                title="Enterprise Security"
                description="Robust data protection with enterprise-grade security practices."
                delay={0.5}
                color="bg-cyan-600"
              />
              
              <Feature3DCard 
                icon={TrendingUp} 
                title="Scalable Solutions"
                description="Software built to adapt and grow with your business."
                delay={0.6}
                color="bg-green-600"
              />
              
              {/* New Premium Features */}
              <Feature3DCard 
                icon={Cpu} 
                title="Cutting-Edge Tech"
                description="Using the latest technologies to keep you ahead of the curve."
                delay={0.7}
                color="bg-violet-600"
              />
              
              <Feature3DCard 
                icon={Globe} 
                title="Global Clients"
                description="Trusted by businesses and startups worldwide."
                delay={0.8}
                color="bg-amber-600"
              />
              
              <Feature3DCard 
                icon={Smile} 
                title="Happy Clients"
                description="Building long-term relationships through exceptional service."
                delay={0.9}
                color="bg-teal-600"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Enhanced CTA Section */}
        <EnhancedCTA />

        {/* <TestimonialSlider /> */}

       
      </div>
    </>
  );
};
export default Home;