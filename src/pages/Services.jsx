import { motion } from "framer-motion";
import { Globe, Smartphone, Megaphone, Lightbulb, Wrench, GraduationCap, Palette } from "lucide-react"

const services = [
  {
    "title": "Création de sites web",
    "desc": "Vous avez un projet ? On le met en ligne. Sites vitrines, e-commerce et plateformes sur mesure, modernes et optimisés. Contactez-nous pour un devis gratuit.",
    "color": "",
    "icon": <Globe size={60} color="#D264FF" />
  },
  {
    "title": "Applications mobiles",
    "desc": "Votre business mérite sa propre app. On développe des applications iOS & Android intuitives et performantes, adaptées à vos besoins. Parlons de votre projet.",
    "color": "",
    "icon": <Smartphone size={60} color="#D264FF" />
  },
  {
    "title": "Marketing digital",
    "desc": "Plus de visibilité, plus de clients. Stratégie social media, campagnes publicitaires et création de contenus engageants pour booster votre présence en ligne.",
    "color": "",
    "icon": <Megaphone size={60} color="#D264FF" />
  },
  {
    "title": "Conseil & stratégie digitale",
    "desc": "Pas sûr par où commencer votre transformation digitale ? On vous accompagne de l'audit à la mise en œuvre. Prenez rendez-vous pour une consultation gratuite.",
    "color": "#DC32FF",
    "icon": <Lightbulb size={60} color="#D264FF" />
  },
  {
    "title": "Maintenance & support",
    "desc": "Votre site ou app tombe en panne ? On intervient rapidement. Surveillance, mises à jour, sécurité et support technique réactif. Votre tranquillité, notre priorité.",
    "color": "#F032E8",
    "icon": <Wrench size={60} color="#D264FF"/>
  },
  {
    "title": "Formation digitale",
    "desc": "Formez vos équipes aux outils du numérique. Ateliers pratiques et sur mesure pour maîtriser les technologies d'aujourd'hui. Investissez dans les compétences de demain.",
    "color": "#FF32C8",
    "icon": <GraduationCap size={60} color="#D264FF"/>
  },
  {
    "title": "Design graphique",
    "desc": "Une belle image, ça change tout. Logo, charte graphique, visuels réseaux sociaux et supports de communication professionnels. Faites briller votre marque.",
    "icon": <Palette size={60} color="#D264FF"/>
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-transparent ">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
            initial={{opacity: 0, y:20}}
            animate={{opacity: 1, y:0}}
            whileInView={{ opacity: 0.7, x: 0 }}
            transition={{duration: 0.8}}
         className="text-4xl font-black text-faith-pink mb-16"
         >Nos Services Expertise</motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#110e26] border border-white/10 p-6 rounded-2xl hover:border-faith-blue transition-all shadow-[0_0_20px_rgba(130,148,255,0.05)] "
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-faith-light  mb-3">{s.title}</h3>
              <p className="text-gray-600 text-1.5xl leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;