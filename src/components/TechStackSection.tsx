
import { motion } from "framer-motion";

/**
 * TechStackSection
 * - Animated, seamless marquee of tech logos.
 * - Use `variant="hero"` for a compact version that fits under a hero title.
 * - Props:
 *    - variant: "hero" | "default"
 *    - speed: number (seconds per loop)
 */
const TechStackSection = ({ variant = "hero", speed = 30 }) => {
  const isHero = variant === "hero";

  const technologies = [
    { name: "Laravel", icon: "/icons/Laravel.png" },
    { name: "PHP", icon: "/icons/PHP.png" },
    { name: "React", icon: "/icons/React.png" },
    { name: "Javascript", icon: "/icons/JavaScript.png" },
    { name: "Java", icon: "/icons/Java.png" },
    { name: "Flutter", icon: "/icons/Flutter.png" },
    { name: "MySQL", icon: "/icons/MySQL.png" },
  ];

  // Duplicate array 3x for a seamless loop
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section
      aria-label="Technology stack"
      className={[
        isHero ? "py-6" : "py-16",
        "bg-transparent w-screen flex justify-center", // 🔥 Always full-width
      ].join("  ")}
    >
      {/* ❌ Removed max-w to allow full width */}
      <div className="relative">
        <div className="w-full">
          <div className="flex overflow-hidden">
            <motion.div
              className={isHero ? "flex gap-10 md:gap-44" : "flex gap-12 md:gap-16"}
              animate={{ x: ["30%", "-33.333%"] }} // move left by 1/3 of content to loop
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: speed,
                  ease: "linear",
                },
              }}
            > 
              {duplicatedTechs.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center"
                >
                  <div
                    className={[
                      "rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110",
                      isHero
                        ? "w-14 h-14 md:w-16 md:h-16"
                        : "w-16 h-16 md:w-20 md:h-20",
                    ].join(" ")}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={
                        isHero
                          ? "w-12 h-12 md:w-14 md:h-14 object-contain"
                          : "w-14 h-14 md:w-16 md:h-16 object-contain"
                      }
                      loading="lazy"
                      decoding="async"
                    /> 
                  </div>
                  {!isHero && (
                    <p className="mt-3 text-sm md:text-base font-semibold text-gray-700">
                      {tech.name}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Edge fades (for non-hero variant, optional) */}
          {!isHero && (
            <>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
