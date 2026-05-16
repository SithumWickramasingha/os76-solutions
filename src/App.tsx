import { useEffect } from "react";
import { MemoryRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { PageTransition } from "./components/PageTransition";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import Register from "./pages/Register";
import { Footer } from "./components/Footer";
import { FAQSection } from "./components/FAQSection";
function AppContent() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <div className="min-h-screen bg-white">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition>
                <Home />
              </PageTransition>} />
          <Route path="/about" element={<PageTransition>
                <About />
              </PageTransition>} />
          <Route path="/services" element={<PageTransition>
                <Services />
                
              </PageTransition>} />
          <Route path="/contact" element={<PageTransition>
                <Contact />
              </PageTransition>} />

          <Route path="/faq" element={<PageTransition>
                <FAQSection/>
              </PageTransition>} />
          <Route path="/register" element={<PageTransition>
                <Register />
              </PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>;
}
export function App() {
  return <Router>
      <Navigation />
      <AppContent />
    </Router>;
}