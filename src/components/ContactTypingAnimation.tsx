import { useEffect, useState } from "react";

const ContactTypingAnimation = () => {
  const fullText = "Reach out for support, inquiries, or just to say hello!";
  const [displayText, setDisplayText]  = useState("");
  const [currentIndex,setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(() => {
      if(isTyping){
        if(currentIndex < fullText.length){
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }else{
          // pause at the end before restarting
          setTimeout(() => {
            setIsTyping(false);
          },2000); //wait 2 seconds at the end
        }
      }else{
        setDisplayText("");
        setCurrentIndex(0);
        setIsTyping(true);
      }
    },isTyping ? 100: 0); // 100ms delay between seconds

    return () => clearTimeout(timer);
  },[currentIndex,isTyping,fullText]);

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




export default ContactTypingAnimation;