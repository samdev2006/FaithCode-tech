import { motion } from "framer-motion";
import Dev from "../assets/Dev.jpg";

const Home = () => {
  const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth'
    });
  }
};
  return (
    <main className="min-h-screen bg-[#080519]">
      {/* Section Hero */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110"
          style={{ 
            backgroundImage: `url(${Dev})`,
            filter: 'brightness(0.2) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#080519]/50 to-[#080519]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight"
          >
            Le Code comme Fondement de<br/>
            <span className="bg-gradient-to-r from-faith-magenta via-faith-pink to-[#8294FF] bg-clip-text text-transparent">
              L'innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Simplicité. Performance. Élégance.<br /> 
            <span className="font-bold text-2xl text-white">FaithCode Tech</span> : l'art de bâtir le digital autrement. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10"
          >
            <button onClick={() => scrollTo('contact')} className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-faith-magenta via-faith-pink to-faith-violet text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(212,113,178,0.4)] hover:scale-105 active:scale-95">
              <span className="relative z-10">Commencez l'aventure</span>
            </button>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-10 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </motion.div>

      </section>
    </main>
  );
};

export default Home;