import { useEffect, useState } from "react";

const BlogTypingAnimation = () => {
  const texts = [
    "Software Development Insights",
    "Business Growth Strategies",
    "Mobile & Web App Innovations",
    "AI & Automation Updates",
    "Expert Engineering Advice",
    "Startup & Product Development Guides",
    "UI/UX Best Practices",
    "Your Go-To Tech Blog",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // letter index
  const [textIndex, setTextIndex] = useState(0); // phrase index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Pause at the end of the word
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Move to next word
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 60); // Faster deleting speed

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts]);

  return (
    <div
      className="inline-block px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white/10"
      style={{
        opacity: 1,
        transform: "scale(1)",
        animation: "slideIn 0.6s ease-out 0.2s both",
      }}
    >
      <span className="text-base font-medium flex items-center justify-center text-blue-200">
        {displayText}
        <span className="animate-pulse ml-1">|</span>
      </span>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default BlogTypingAnimation;
