import { motion } from "framer-motion";
import ImageTech from "../assets/imagetech.jpg"
const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
        <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{delay: 1, duration: 0.5}}
        >
          <div className="md:w-1/2 ">
            <h2 
              // initial={{ opacity: 0, x: -20 }}
              // whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl font-black text-faith-dark mb-6"
            >
              L'Alliance de la <span className="text-faith-blue">Vision</span> et de l'Excellence.
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6 ">
              Chez <span className="font-bold text-faith-dark">FaithCode Tech</span>, nous croyons que chaque ligne de code est une promesse tenue. Nous ne nous contentons pas de développer ; nous architecturons l'avenir de votre entreprise.
            </p>

            
            <div className="space-y-4">
              {[
                { t: "Expertise Moderne", d: "Stacks  de dernière génération." },
                { t: "Rigueur & Foi", d: "Un engagement total dans chaque projet." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-faith-orange/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-faith-orange"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-faith-dark text-xl">{item.t}</h4>
                    <p className="text-xl text-gray-500 text-xl">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-faith-blue/10 to-faith-pink/10 rounded-3xl p-3 border border-gray-100 overflow-hidden shadow-inner"
           >
   
            <img 
              src={ImageTech} 
              alt="FaithCode Tech en Equipe" 
              className="w-full h-full object-cover rounded-xl select-none"
            />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;