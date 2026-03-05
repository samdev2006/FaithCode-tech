import { motion } from "framer-motion";
import herobg from "../assets/herobg.jpg"

const Home = () => {
  return (
    <main className='min-h-screen '>
      {/* Section Hero */}
      <section 
      className='
      relative
      min-h-screen 
      mb-4  
      flex 
      items-center 
      w-full 
      overflow-hidden 
      bg-cover 
      bg-center 
      '
      style={{ backgroundImage: `url(${herobg})` }}
     
       >
        <div className="relative z-10 container mx-auto px-6 text-center">
           <motion.h1
           initial={{opacity: 0, y:20}}
           animate={{opacity: 1, y:0}}
           transition={{duration: 0.8}}
          className="text-4xl d md:text-7xl font-black text-faith-blue  tracking-tighter"
           >
           Le Code comme Fondement de<br/>
            <span className="bg-gradient-to-r from-faith-orange via-faith-blue to-faith-pink bg-clip-text text-transparent ">
              L'innovation
            </span>
           </motion.h1>
           <motion.p
           initial={{opacity: 0, x:30}}
           animate={{opacity: 2, x:0}}
           transition={{delay:0.5 ,duration: 1}}
           className="mt-6 text-lg md:text-xl text-gray-400 max-w-4xl mx-auto font-light "
           >
            Simplicité. Performance. Élégance.<br /> <span className="font-bold text-2xl text-faith-dark">FaithCode Tech</span> : l'art de bâtir le digital autrement. 
            
           </motion.p>
           <motion.div
           initial={{opacity: Object, x:-30}}
           animate={{opacity:3, x:0}}
           transition={{delay:1, duration: 1.5}}
           className="mt-10"
           >
              <button className="group relative px-8 py-5 rounded-full bg-gradient-to-r from-faith-blue to-faith-orange text-white font-bold overflow-hidden transition-all ">
                <span className="relative z-10">Commencez </span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all">
                  →
                </span>
              </button>
           </motion.div>
        </div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
      >
        <div className="w-1 h-2 bg-white rounded-full"></div>
      </motion.div>
      </section>
    </main>
  )
}

export default Home
