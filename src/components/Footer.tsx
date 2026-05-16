import { Instagram, Mail, Phone, Linkedin, MessageSquare, Send, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your API
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 text-white pt-20 pb-12 overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-gray-700/50">
          {/* Brand column */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                <img src="/logo/os76white.png" alt="os76-logo" className="h-[150px] w-auto"  />
              </span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-6"
            >
              Dense In Ideas.<br/>
              Solid In Code.
            </motion.p>
            
            {/* Social icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-4"
            >
              {[
                { icon: Instagram, href: "https://www.instagram.com/blynq.app?igsh=aHEybmYydXRsZDIz&utm_source=qr", color: "hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/blynqapp/", color: "hover:bg-blue-600" },
                { icon: Mail, href: "mailto:info.blynq@gmail.com", color: "hover:bg-red-500" },
                { icon: MessageSquare, href: "https://wa.me/94718959193", color: "hover:bg-green-500" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 ${item.color} hover:text-white hover:shadow-lg`}
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Blog"].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6 text-white"
            >
              Stay Updated
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-4"
            >
              Subscribe to receive updates and news about our services.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubscribe}
              className="relative"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </motion.form>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex items-center space-x-4"
            >
              <Phone size={18} className="text-gray-400" />
              <a
                href="tel:+94718959193"
                className="text-gray-400 hover:text-white transition-colors"
              >
                +94 718959193
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} <span className="text-blue-300">Os76 Solutions</span>. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            {["Support", "FAQ", "Contact"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};