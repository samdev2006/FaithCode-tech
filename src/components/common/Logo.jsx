import { motion } from "framer-motion";

const Logo = ( {size= 40 } ) => {
  return (
    <div className={`flex items-center gap-3 `}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C52" />
            <stop offset="50%" stopColor="#8294FF" />
            <stop offset="100%" stopColor="#D471B2" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 L50 5 Z"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        
        <text
          x="50"
          y="65"
          textAnchor="middle"
          fill="#FF8C52"
          fontSize="45"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          F
        </text>
      </svg>

     
      <div className="flex flex-col leading-none">
        <h1 className="text-2xl font-black tracking-tighter">
          <span className="text-faith-dark">FAITH</span>
          <span className="text-faith-orange">CODE</span>
          <span className="text-faith-blue">TECH</span>
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          Construisons le digital autrement
        </p>
      </div>
    </div>
  );
};

export default Logo;