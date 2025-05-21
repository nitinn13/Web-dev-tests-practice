import { useState } from "react";
import { motion } from "framer-motion";

const SmileyBall = () => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
        onMouseMove={(e) => {
          const { clientX, clientY } = e;
          setHoverPos({ x: clientX, y: clientY });
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scaleX: isHovered ? 1.4 : 1,
          scaleY: isHovered ? 0.8 : 1,
          x: isHovered ? (hoverPos.x - window.innerWidth / 2) * 0.05 : 0,
          y: isHovered ? (hoverPos.y - window.innerHeight / 2) * 0.05 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Eyes */}
          <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-black rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-black rounded-full"></div>

          {/* Smile */}
          <motion.div
            className="absolute bottom-5 w-12 h-6 border-b-4 border-black rounded-full"
            animate={{
              rotate: isHovered ? 15 : 0,
              scaleX: isHovered ? 1.2 : 1,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyBall;
