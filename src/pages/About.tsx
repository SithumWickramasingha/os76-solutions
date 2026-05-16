import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Target, Award, ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import AboutTypingAnimation from "../components/AboutTypingAnimation";

export const About = () => {
  const containerRef = useRef(null);
  const missionSectionRef = useRef<HTMLElement | null>(null);

  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(useScroll().scrollY, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  // Smooth scroll function with offset
  const scrollToNextSection = () => {
    if (missionSectionRef.current) {
      const targetPosition = missionSectionRef.current ? missionSectionRef.current.offsetTop - 80 : 0;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const team = [
    {
      name: "Sithum Wickramasinghe",
      role: "Co-Founder & Tech Lead",
      image: "/sithum.jpeg", 
      bio: "A passionate undergraduate at the Informatic Institute of Technology, exploring the world of software development with a keen interest in full-stack technologies.",
      social: {
        linkedin: "https://www.linkedin.com/in/sithum-wickramasingha-147989294",
        github: "https://github.com/SithumWickramasingha",
        email: "mailto:wickramasinghesithum96@gmail.com",
      },
    },
    {
      name: "Amina Haja Meyan",
      role: "Co-Founder & Project Manager",
      image: "/amina.jpeg", 
      bio: "Enthusiastic about coding and problem-solving, currently honing skills in web and mobile development as an undergraduate at IIT",
      social: {
        linkedin: "https://www.linkedin.com/in/aminahajameyan",
        github: "https://github.com/AminaHajaMeyan",
        email: "mailto:aminahajameyan123@gmail.com",
      },
    },
    {
      name: "Gaindu Amarasinghe",
      role: "Co-Founder & full-stack Developer",
      image: "/gaindu.jpeg", 
      bio: "An aspiring software engineer eager to learn and innovate, diving into backend development and database management at IIT",
      social: {
        linkedin: "https://www.linkedin.com/in/gainduamarasinghe",
        github: "https://github.com/gainduamarasinghe",
        email: "mailto:gaindu2k03@gmail.com",
      },
    }
  ];

  return (
    <div className="w-full" ref={containerRef}>
      {/* Hero Section with Image Background and Animated Text */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center px-6">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/about_bg.jpg"
            alt="About Hero Background"
            className="absolute w-full h-full object-cover object-center" 
            style={{ filter: "brightness(0.3)", transform: 'scale(1.01)' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 max-w-4xl"
        >
          {/* <div className="inline-block px-6 py-2 bg-[#7E78D2]/25 backdrop-blur-md rounded-full mb-12">
            <span className="text-sm font-medium text-blue-200">Dense in Ideas. Solid in Code.</span>
          </div> */}

          <AboutTypingAnimation/>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 flex items-center justify-center gap-3">
            About 
            <img 
              src="/logo/os76white.png" 
              alt="Os76" 
              className="h-36 md:h-40 lg:h-44 object-contain inline-block"
            />
          </h1>

          
          <p className="text-base md:text-lg max-w-3xl mx-auto text-white mb-8 leading-relaxed">
            Os76 empowers businesses with custom websites and mobile apps that streamline operations, i
            mprove customer experiences, and boost growth. We focus on affordable, innovative solutions that help
             organizations modernize and thrive.
          </p>
        </motion.div>

        <motion.button
          onClick={scrollToNextSection}
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
          className="absolute bottom-10 left-1/1 transform -translate-x-1/2 z-10 p-3 rounded-full hover:bg-[#7E78D2]/25 transition-all cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <ArrowRight className="w-6 h-6 text-white transform rotate-90 group-hover:text-blue-200 transition-colors" />
        </motion.button>
      </div>

      {/* Mission & Vision with Parallax */}
      <motion.section 
        ref={missionSectionRef}
        style={{ y: smoothY }} 
        className="relative py-56 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="absolute inset-0 opacity-100">
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-100"></div>
          {/* White blinking lights */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5 + Math.random() * 2.5,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* Additional smaller white dots for more sparkle effect */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8 + Math.random() * 1.2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative p-8 rounded-2xl bg-[#7E78D2]/20 backdrop-blur-md"
            >
              <div className="absolute -top-6 -left-6 p-4 bg-gradient-to-br from-[#00C3E6] to-[#7E78D2] rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses and communities by delivering innovative, scalable, and secure software solutions that drive growth, simplify processes, and create lasting impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative p-8 rounded-2xl  bg-[#7E78D2]/20 backdrop-blur-md transparent-100"
            >
              <div className="absolute -top-6 -left-6 p-4 bg-gradient-to-br from-[#00C3E6] to-[#7E78D2] rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be a global leader in technology innovation, building a future where businesses of all sizes thrive with smart, sustainable, and human-centered software.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section - Centered 3 Members */}
      <section className="pt-18 pb-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-900">
              Meet Our <span className="text-[#00C3E6]">Team</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A dedicated group of professionals passionate about innovation and excellence.
            </p>
          </motion.div>
          
          {/* Updated grid to center 3 team members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full max-w-sm"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-[#00C3E6] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-black hover:text-[#00C3E6] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-black hover:text-[#00C3E6] transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={member.social.email} className="text-black hover:text-[#00C3E6] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Professional 3D Effect */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle professional gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-white" />
        
        {/* Professional accent elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle accent lines */}
          <div className="absolute w-full h-px top-1/3 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
          <div className="absolute w-full h-px top-2/3 bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-30"></div>
          
          {/* Corporate geometric elements */}
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 -right-20 w-96 h-96 bg-indigo-100/10 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-900">
              Our Strategic <span className="text-[#00C3E6]">Journey</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto relative">
              Charting our evolution from concept to market-ready solution, each milestone representing our commitment to innovation and excellence.
            </p>
          </motion.div>
          
          {/* Professional timeline implementation */}
          <div className="relative pb-20">
            {/* Center line - more subtle and professional */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-200 via-blue-300 to-indigo-300 z-0" />
            
            {/* Left line for mobile */}
            <div className="md:hidden absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-blue-200 via-blue-300 to-indigo-300 z-0" />

            <div className="space-y-32 relative">
              {[
                {
                  year: "2025",
                  title: "Foundation",
                  description: "Our journey began with a simple vision to bridge the gap between client ideas and impactful digital solutions. With a passion for innovation and problem-solving, the company was founded to transform requirements into meaningful products.",
                  image: "/idea.jpeg",
                  status: "completed",
                  icon: "/icons/research-icon.svg", 
                  color: "border-[#00C3E6]"
                },
                {
                  year: "2025",
                  title: "Expanding Services",
                  description: "We aim to broaden our services, offering clients a complete end-to-end experience from requirement analysis and design to development, testing, and deployment. Our goal is to not just deliver solutions, but to craft seamless digital experiences.",
                  image: "/services.jpg",
                  status: "completed",
                  icon: "/icons/design-icon.svg",
                  color: "border-[#00C3E6]"
                },
                {
                  year: "2025",
                  title: "Building Strong Partnerships",
                  description: "We look forward to collaborating with startups, enterprises, and organizations across industries. By forming strong partnerships, we will help businesses grow while continuously sharpening our expertise and delivering reliable, scalable solutions",
                  image: "/partner.jpg",
                  status: "completed",
                  icon: "/icons/design-icon.svg",
                  color: "border-[#00C3E6]"
                },
                {
                  year: "2025",
                  title: "Recognition & Growth",
                  description: "Our vision is to be recognized as a trusted technology partner known for high-quality, impactful solutions. By this stage, we aim to expand our portfolio with larger, more complex projects, reflecting our growth and industry reputation.",
                  image: "/growth.jpg",
                  status: "in-progress",
                  icon: "/icons/design-icon.svg",
                  color: "border-[#00C3E6]"
                },
                {
                  year: "2025",
                  title: "Future – Innovating Ahead",
                  description: "Our vision is to be recognized as a trusted technology partner known for high-quality, impactful solutions. By this stage, we aim to expand our portfolio with larger, more complex projects, reflecting our growth and industry reputation.",
                  image: "/soon.jpeg",
                  status: "",
                  icon: "/icons/design-icon.svg",
                  color: "border-[#00C3E6]"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Professional timeline node */}
                  <div className="absolute md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md ${item.color} border-4 relative`}
                      whileHover={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
                    >
                      {/* Status indicators */}
                      {item.status === 'completed' && <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>}
                      {item.status === 'in-progress' && <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border-2 border-white"></div>}
                      
                      <span className="text-gray-800 text-lg font-medium">{index + 1}</span>
                    </motion.div>
                  </div>
                  
                  <div className={`md:grid md:grid-cols-2 md:gap-12 items-center pl-20 md:pl-0 
                    ${index % 2 === 0 ? "md:grid-flow-row" : "md:grid-flow-row-dense"}`}
                  >
                    {/* Professional card design */}
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                      className={`relative rounded-xl overflow-hidden shadow-lg mb-8 md:mb-0 transition-all duration-300
                        ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                    >
                      <div className={`h-1 w-full ${item.status === 'completed' ? 'bg-[#7E78D2]' : 
                                              item.status === 'in-progress' ? 'bg-[#00C3E6]' : 
                                              'bg-gray-300'}`}>
                      </div>
                      <div className="bg-white">
                        <div className="relative overflow-hidden h-64">
                          <motion.img 
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.4 }}
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                          
                          {/* Date overlay */}
                          <div className="absolute bottom-0 left-0 p-6">
                            <span className="text-white text-sm tracking-wider uppercase opacity-80">Timeline</span>
                            <h4 className="text-white text-3xl font-bold">{item.year}</h4>
                            
                            <div className="mt-2">
                              <span className={`inline-block px-3 py-1 rounded-md text-xs font-medium uppercase tracking-wider
                                ${item.status === 'completed' ? 'bg-[#7E78D2] text-white' : 
                                  item.status === 'in-progress' ? 'bg-[#00C3E6] text-white' : 
                                  'bg-gray-200 text-gray-700'}`}
                              >
                                {item.status === 'completed' ? 'Completed' : 
                                  item.status === 'in-progress' ? 'In Progress' : 
                                  'Planned'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Professional content section */}
                    <div className={`space-y-4 ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}>
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-gray-900"
                      >
                        {item.title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Professional call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-32 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Become Part of 
                Our <span className="text-[#00C3E6]">Success Story</span></h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Join our growing network of partners and clients as we help businesses transform with innovative websites and mobile applications.
              </p>
              <motion.button
                whileHover={{ y: -3, boxShadow: "0 12px 20px -5px rgba(59, 130, 246, 0.3)" }}
                className="px-8 py-4 bg-gradient-to-bl from-[#00C3E6] to-[#7E78D2] text-white rounded-lg font-medium shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                CONTACT US NOW
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};