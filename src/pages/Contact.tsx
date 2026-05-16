import { motion, AnimatePresence,useScroll } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Loader2, ArrowRight, Instagram, Linkedin, MessageSquare, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactTypingAnimation from "../components/ContactTypingAnimation";
import { useRef } from "react";



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







export const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });

  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll function with offset

  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formProgress, setFormProgress] = useState(0);
  const [fieldTouched, setFieldTouched] = useState<Record<string, boolean>>({});

  // Track form completion progress
  useEffect(() => {
    const requiredFields = ['name', 'email', 'message'];
    const filledFields = requiredFields.filter(field => formData[field as keyof typeof formData]?.trim());
    const progress = Math.round((filledFields.length / requiredFields.length) * 100);
    setFormProgress(progress);
  }, [formData]);

  // Enhanced validation with immediate feedback
  const validateField = (field: string, value: string) => {
    const errors: Record<string, string> = { ...formErrors };
    
    switch (field) {
      case 'name':
        if (!value.trim()) errors.name = "Name is required";
        else delete errors.name;
        break;
      case 'email':
        if (!value.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) errors.email = "Email is invalid";
        else delete errors.email;
        break;
      case 'message':
        if (!value.trim()) errors.message = "Message is required";
        else delete errors.message;
        break;
      default:
        break;
    }
    
    setFormErrors(errors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    
    // Live validation as user types
    if (fieldTouched[id]) {
      validateField(id, value);
    }
  };


  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    
    // Mark all fields as touched when submitting
    const allTouched = Object.keys(formData).reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, {} as Record<string, boolean>);
    
    setFieldTouched(allTouched);
    
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSending(true);
    setFormStatus("idle");

    const serviceId = "service_5siucnv"; 
    const templateId = "template_n9nzv2g"; 
    const publicKey = "apLh9o9gwAqTJ0K4i"; 

    try {
      const response = await emailjs.send(serviceId, templateId, formData, publicKey);
      if (response.status === 200) {
        setFormStatus("success");
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          company: "", 
          role: "", 
          message: "" 
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
    }

    setIsSending(false);
  };

  return (
    <div className="w-full">
      {/* Enhanced Hero Section with Dynamic Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative text-white py-40 px-4 overflow-hidden"
      >

        <AnimatedBackground/>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ContactTypingAnimation/>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Let's <span className="bg-gradient-to-r from-[#00c3e6] to-indigo-200 bg-clip-text text-transparent">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Have a project in mind or need expert advice? Get in touch with our team—we’d love to help you build the right solution.
          </motion.p>
          

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            {/* <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#00c3e6] to-[#000000] text-white border border-white px-8 py-3 rounded-full flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </motion.button> */}


            <motion.button
            
            onClick={() => {
              const formSection = document.getElementById('contact-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            animate={{ y: [0, 10, 0] }}
            whileHover={{ 
              scale: 1.2,
              y: 0,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
              y: { duration: 1.5, repeat: Infinity },
              scale: { duration: 0.2 },
              backgroundColor: { duration: 0.2 }
            }}
            className="left-1/2 transform-translate-x-1/2 z-10 rounded-full hover:bg-[#7E78D2]/25 transition-all cursor-pointer group"
            aria-label="Scroll to next section"
          >
            <ArrowRight className="absolute top-20 w-6 h-6 text-white transform rotate-90 group-hover:text-blue-200 transition-colors" />
          </motion.button>

            
          </motion.div>



        </div>
        
        {/* Wave separator
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-20">
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-20 text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.9C65.68,118.6,131.1,99.56,192.45,86.69,250.62,74.43,282.7,65.23,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div> */}
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
      </motion.section>

      {/* Enhanced Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Improved Contact Form with Enhanced User Experience */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 border border-blue-50 relative overflow-hidden"
          >
            {/* Success message overlay */}
            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center mb-8">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative">
              <h2 className="text-4xl font-extrabold mb-2 text-[#000000]">Send Us a <span className="text-[#00c3e6]">Message</span></h2>
              <p className="text-gray-600 mb-4">Fill out the form below and we'll get back to you soon.</p>
              
              {/* Progress indicator */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Form completion</span>
                  <span>{formProgress}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#000000] to-[#00c3e6] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${formProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#00c3e6] focus:border-[#00c3e6] outline-none text-black"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.name && fieldTouched.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Address field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#00c3e6] focus:border-[#00c3e6] outline-none text-black"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.email && fieldTouched.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number field */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#00c3e6] focus:border-[#00c3e6] outline-none text-black"
                      placeholder="+94 71 234 5678"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Company field */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#00c3e6] focus:border-[#00c3e6] outline-none text-black"
                      placeholder="Company name (if applicable)"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* I am a: dropdown */}
                {/* <div className="relative">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    I am a: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Please select</option>
                      <option value="vehicle_owner">Vehicle Owner</option>
                      <option value="service_center">Service Center Owner/Manager</option>
                      <option value="business">Business Fleet Manager</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {formErrors.role && fieldTouched.role && (
                    <p className="mt-1 text-sm text-red-500">
                      Please select an option
                    </p>
                  )}
                </div> */}
                
                {/* Why are you interested in BlynQ? */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Why are you interested in Os76-Solutions? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#00c3e6] focus:border-[#00c3e6] outline-none text-black"
                    placeholder="Tell us you're requirements.."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {formErrors.message && fieldTouched.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                
                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSending}
                  className="w-full px-6 py-4 bg-gradient-to-br from-[#00C3E6] to-[#7E78D2]  text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
              
              {/* Enhanced error message */}
              <AnimatePresence>
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Failed to send message</p>
                      <p className="text-sm text-red-600">Please try again or contact us directly at seventysixos@gmail.com</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            className="space-y-10"
          >
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-extrabold mb-6 text-[#000000] relative inline-block"
              >
                Contact Info
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00c3e6] to-[#000000] rounded-full"
                />
              </motion.h3>
              
              <div className="grid gap-6">
                {[
                  { 
                    icon: Mail, 
                    label: "Email", 
                    info: "seventysixos@gmail.com",
                    action: "mailto:seventysixos@gmail.com",
                    color: "bg-[#00c3e6]/20 text-black" 
                  },
                  { 
                    icon: Phone, 
                    label: "Phone", 
                    info: "+94 718959193",
                    action: "tel:+94718959193",
                    color: "bg-[#00c3e6]/20 text-black" 
                  },
                  { 
                    icon: MapPin, 
                    label: "Address", 
                    info: "123 Main Street, Colombo 03, Sri Lanka",
                    action: "https://maps.google.com/?q=Colombo,Sri+Lanka",
                    color: "bg-[#00c3e6]/20 text-black" 
                  },
                  { 
                    icon: Clock, 
                    label: "Business Hours", 
                    info: "Mon - Fri: 9:00 AM - 6:00 PM",
                    action: null,
                    color: "bg-[#00c3e6]/20 text-black" 
                  },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.action || undefined}
                    target={item.action ? "_blank" : undefined}
                    rel={item.action ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`flex items-center bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${item.action ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#00c3e6]">{item.label}</p>
                      <p className="text-gray-700">{item.info}</p>
                    </div>
                    {item.action && (
                      <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Enhanced Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#00C3E6] to-[#7E78D2] rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="mb-5 text-blue-100">Reach out to us through your preferred platform</p>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { 
                    name: 'Instagram', 
                    icon: Instagram, 
                    url: "https://www.instagram.com/blynq.app?igsh=aHEybmYydXRsZDIz&utm_source=qr", 
                    color: 'from-pink-500 to-purple-500' 
                  },
                  { 
                    name: 'LinkedIn', 
                    icon: Linkedin, 
                    url: "https://www.linkedin.com/company/blynqapp/", 
                    color: 'from-blue-600 to-blue-700' 
                  },
                  { 
                    name: 'WhatsApp', 
                    icon: MessageSquare, 
                    url: 'https://wa.me/94718959193', 
                    color: 'from-green-500 to-green-600' 
                  },
                  { 
                    name: 'Call Us', 
                    icon: PhoneCall, 
                    url: 'tel:+94718959193', 
                    color: 'from-indigo-500 to-indigo-600' 
                  }
                ].map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${platform.color} p-4 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-lg gap-2 transition-all`}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">{platform.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
