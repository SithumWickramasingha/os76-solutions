import { useState } from "react";
import { motion } from "framer-motion";
import { Car, ChevronRight, CheckCircle, Lock, Shield, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        role: "",
        message: "",
    });
    
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // Clear error when user starts typing again
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        // EmailJS configuration with updated service ID
        const serviceId = "service_bnigua7"; 
        const templateId = "template_vrvml95"; 
        const publicKey = "80NRBScFV9Pv8TFz3"; 

        try {
            // Send the email using EmailJS
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    company: form.company,
                    role: form.role,
                    message: form.message,
                    subject: "Beta Registration Request"
                },
                publicKey
            );
            
            if (response.status === 200) {
                setSubmitted(true);
                // Reset the form
                setForm({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    role: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to send email");
            }
        } catch (err) {
            console.error("EmailJS Error:", err);
            setError("There was a problem submitting your registration. Please try again or contact us directly.");
        } finally {
            setIsLoading(false);
        }
    };

    const benefitItems = [
        {
            icon: <Car className="w-5 h-5" />,
            title: "Early Access",
            description: "Be among the first to experience BlynQ and shape its future."
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: "Free Premium Features",
            description: "Get complimentary access to premium features during the beta period."
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Priority Support",
            description: "Receive dedicated support and faster response times."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                {submitted ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center max-w-2xl mx-auto"
                    >
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Thank you for registering for the BlynQ beta program. We've received your information and will be in touch soon with next steps.
                        </p>
                        <div className="bg-blue-50 rounded-xl p-6 mb-8">
                            <p className="text-blue-800 font-medium">
                                Keep an eye on your inbox for an exclusive invitation to join our beta testers community.
                            </p>
                        </div>
                        <motion.a 
                            href="/"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/25 transition-all"
                        >
                            Return to Homepage
                        </motion.a>
                    </motion.div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
                        >
                            <div className="mb-8">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Beta Program</h2>
                                <p className="text-gray-600">
                                    Be among the first to experience BlynQ and help shape the future of vehicle management.
                                </p>
                            </div>
                            
                            {/* Display error message if there is one */}
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <div className="text-red-700 text-sm">{error}</div>
                                </motion.div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                            placeholder="+94 71 234 5678"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company/Organization
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                            placeholder="Company name (if applicable)"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                                        I am a: *
                                    </label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={form.role}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                    >
                                        <option value="">Please select</option>
                                        <option value="vehicle_owner">Vehicle Owner</option>
                                        <option value="service_center">Service Center Owner/Manager</option>
                                        <option value="business">Business Fleet Manager</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Why are you interested in BlynQ? *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                        placeholder="Tell us why you're interested in joining our beta program..."
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading}
                                    className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium flex items-center justify-center transition-all hover:shadow-lg hover:shadow-blue-500/25 ${isLoading ? 'opacity-90 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            Register for Beta Testing
                                            <ChevronRight className="ml-2 w-5 h-5" />
                                        </div>
                                    )}
                                </motion.button>
                                
                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                </p>
                            </form>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="bg-blue-900 rounded-3xl shadow-xl p-8 md:p-10 text-white mb-8">
                                <h3 className="text-2xl font-bold mb-6">Beta Tester Benefits</h3>
                                <div className="space-y-6">
                                    {benefitItems.map((item, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + (index * 0.1) }}
                                            className="flex items-start"
                                        >
                                            <div className="flex-shrink-0 p-2 bg-blue-800 rounded-lg mr-4">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                                                <p className="text-blue-200">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-blue-900 mb-6">What to Expect</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Exclusive access to BlynQ before the public launch",
                                        "Opportunity to provide feedback directly to our development team",
                                        "Special incentives and lifetime benefits for your valuable contributions",
                                        "Regular updates on new features and improvements",
                                        "Be part of a community shaping the future of vehicle management"
                                    ].map((item, index) => (
                                        <motion.li 
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + (index * 0.1) }}
                                            className="flex items-start"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;