import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight,Calendar,User,Tag } from "lucide-react";
import BlogTypingAnimation from "./blogTypingAnimation";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  image: string;
  category: string;
}


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


// Expanded FAQ with categories
// const faqs = [
// 	{
// 		question: "What is BlynQ and how does it work?",
// 		answer: "BlynQ is a comprehensive vehicle management platform designed to simplify service booking, vehicle tracking, document storage, and maintenance reminders. It connects vehicle owners with service centers through an intuitive interface, creating a seamless experience for both parties. Vehicle owners can easily manage their vehicles, while service centers can streamline their operations.",
// 		category: "General",
// 	},
// 	{
// 		question: "Is BlynQ available on mobile devices?",
// 		answer: "Yes! BlynQ is available as both a web application and mobile app for iOS and Android devices. You can access all features across all your devices with real-time synchronization.",
// 		category: "General",
// 	},
// 	{
// 		question: "How can I book a service appointment?",
// 		answer: "You can easily book an appointment through the BlynQ app by selecting your preferred service center, choosing a service type, and scheduling a time that works best for you. You'll receive instant confirmation and reminders as your appointment approaches.",
// 		category: "Vehicle Owners",
// 	},
// 	{
// 		question: "Is BlynQ available for all types of vehicles?",
// 		answer: "Yes! BlynQ supports cars, motorcycles, trucks, and other vehicle types, providing a unified platform for all vehicle owners regardless of what you drive.",
// 		category: "Vehicle Owners",
// 	},
// 	{
// 		question: "Can I manage multiple vehicles on BlynQ?",
// 		answer: "Absolutely! You can add and manage multiple vehicles under one account, keeping all service records, maintenance schedules, and documents organized separately for each vehicle.",
// 		category: "Vehicle Owners",
// 	},
// 	{
// 		question: "Is my vehicle data safe with BlynQ?",
// 		answer: "We take security extremely seriously. All data is encrypted both in transit and at rest, and we follow industry-best security practices. Our cloud-based storage with end-to-end encryption protects all your data, ensuring privacy and security at all times.",
// 		category: "Security",
// 	},
// 	{
// 		question: "How do service reminders work?",
// 		answer: "BlynQ tracks your vehicle's service history and manufacturers' recommended maintenance schedules to send you timely reminders when your vehicle needs attention. You can customize these notifications to your preference.",
// 		category: "Vehicle Owners",
// 	},
// 	{
// 		question: "How can service centers benefit from BlynQ?",
// 		answer: "Service centers can manage appointments, track customer history, handle inventory, generate invoices, and get valuable business insights—all from a single, easy-to-use dashboard. The platform helps increase efficiency, improve customer satisfaction, and boost revenue.",
// 		category: "Service Centers",
// 	},
// 	{
// 		question: "How does the service center onboarding process work?",
// 		answer: "Service centers can sign up on our platform and complete a simple verification process. Once approved, they can customize their profile, add services, set pricing, and start accepting bookings immediately.",
// 		category: "Service Centers",
// 	},
// 	{
// 		question: "Are there different subscription plans available?",
// 		answer: "Yes, we offer flexible subscription plans for both vehicle owners and service centers. Vehicle owners can choose between a free basic plan and premium options with advanced features. Service centers have tiered plans based on business size and requirements.",
// 		category: "General",
// 	},
// 	{
// 		question: "What payment methods do you support?",
// 		answer: "BlynQ supports all major credit and debit cards, digital wallets, and direct bank transfers. All payment processing is handled securely through industry-leading payment gateways.",
// 		category: "General",
// 	},
// 	{
// 		question: "How can I get technical support?",
// 		answer: "Technical support is available 24/7 through our in-app chat, email support, or phone support during business hours. Premium subscribers receive priority support with dedicated assistance.",
// 		category: "General",
// 	},
// ];



const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Development",
    description: "Learn the fundamentals of React development and how to build your first component from scratch. This comprehensive guide will take you through the basics...",
    date: "2023-10-15",
    author: "Wickramasinghe",
    keywords: ["Mobile Development", "React Native", "Scalability", "Business"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    category: "Mobile Development"
  },
  {
    id: 2,
    title: "The Art of Writing Clean Code",
    description: "Discover the principles of writing clean, maintainable code. We'll explore best practices, common patterns, and techniques used by professional developers...",
    date: "2023-10-12",
    author: "G Amarasinghe",
    keywords: ["Web Development", "Trends", "AI", "PWA"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Custom Software Solutions: When Off-the-Shelf Isn't Enough",
    description: "Learn when your business needs custom software development and how tailored solutions can provide competitive advantages over generic alternatives.",
    date: "2025-08-18",
    author: "Amina Haja",
    keywords: ["Custom Software", "Business Solutions", "Development"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Software Solutions"
  },
  {
    id: 4,
    title: "UI/UX Design Principles That Drive Business Success",
    description: "Understand how thoughtful design principles can transform your digital products and create meaningful connections with your users.",
    date: "2025-08-15",
    author: "G Amarasinghe",
    keywords: ["UI/UX", "Design", "User Experience", "Business Growth"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
    category: "Design"
  },
  {
    id: 5,
    title: "Cloud Integration Strategies for Small to Medium Businesses",
    description: "A comprehensive guide to implementing cloud solutions that enhance productivity, reduce costs, and improve collaboration for SMBs.",
    date: "2025-08-12",
    author: "Wickramaisnghe",
    keywords: ["Cloud Computing", "SMB", "Integration", "Productivity"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "Cloud Solutions"
  },
  {
    id: 6,
    title: "Agile Development: Delivering Software Faster and Better",
    description: "How our agile development methodology helps businesses launch products faster while maintaining high quality and adaptability.",
    date: "2025-08-10",
    author: "Amina Haja",
    keywords: ["Agile", "Development", "Project Management", "Quality"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    category: "Development Process"
  }
];

const categories = ["All", "Mobile Development", "Web Development", "Software Solutions", "Design", "Cloud Solutions", "Development Process"];


// All possible categories
// const categories = [
// 	"All",
// 	"General",
// 	"Vehicle Owners",
// 	"Service Centers",
// 	"Security",
// ];

export const FAQSection = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


	// Filter FAQs based on search term and category
	// useEffect(() => {
	// 	let filtered = faqs;

	// 	// Apply category filter
	// 	if (selectedCategory !== "All") {
	// 		filtered = filtered.filter(
	// 			(faq) => faq.category === selectedCategory
	// 		);
	// 	}

	// 	// Apply search filter
	// 	if (searchTerm) {
	// 		const term = searchTerm.toLowerCase();
	// 		filtered = filtered.filter(
	// 			(faq) =>
	// 				faq.question.toLowerCase().includes(term) ||
	// 				faq.answer.toLowerCase().includes(term)
	// 		);
	// 	}

	// 	setFilteredFaqs(filtered);
	// 	setOpenIndex(null); // Close all FAQs when filtering
	// }, [searchTerm, selectedCategory]);


	return (
		<div className="w-full py-8 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white">
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl transform translate-x-1/2"></div>
				<div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl transform -translate-x-1/2"></div>
				<div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
			</div>


			      {/* Enhanced Hero Section with Dynamic Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative text-white py-24 px-4 overflow-hidden"
      >

        <AnimatedBackground/>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* typing animation */}
					<BlogTypingAnimation/>


          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-5xl font-extrabold mb-6"
          >
            Insights, Innovation & Ideas That Drive Success
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Explore expert tips, industry trends, and software solutions designed to help businesses grow smarter and scale faster.
          </motion.p>
          

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="py-10 flex justify-center"
          >



						<motion.button
            onClick={() => {
              const formSection = document.getElementById('blog-section');
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

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="max-w-6xl mx-auto px-6 py-24 sm:px-8 sm:py-32 relative z-10"
				id="blog-section"
			>
				{/* <div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6"
					>
						Support Center
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 bg-clip-text text-transparent"
					>
						Insights, Innovation & Ideas That Drive Success
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="mt-6 text-gray-600 text-xl max-w-2xl mx-auto"
					>
						Explore expert tips, industry trends, and software solutions designed to help businesses grow smarter and scale faster.
					</motion.p>
				</div> */}


				

				{/* Search and filter section */}


    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-[#00c3e6] text-white shadow-lg shadow-[#00c3e6]/30"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00c3e6] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date and Author */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#00c3e6] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      <Tag className="w-3 h-3" />
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 text-[#00c3e6] font-medium hover:gap-3 transition-all duration-300 group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                  <div className="text-sm text-gray-400">
                    5 min read
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
						{/* <button className="bg-gradient-to-r from-[#00c3e6] to-cyan-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00c3e6]/30 transition-all duration-300 hover:scale-105">
							Load More Posts
						</button> */}
        </motion.div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-16 rounded-xl">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Latest <span className="text-[#00c3e6]">Insights</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest software development trends and business insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00c3e6]"
              />
              <button className="bg-[#00c3e6] hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
				
			</motion.div>
		</div>
	);
};