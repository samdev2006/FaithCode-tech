import { motion } from "framer-motion";

const services = [
  {
    title: "Web Apps & Écosystèmes Digitaux",
    desc: "Nous bâtissons des sites et applications web ultra-rapides, optimisés pour le SEO et le taux de conversion. Grâce à des technologies comme React et Tailwind, nous garantissons une expérience fluide qui transforme vos visiteurs en clients fidèles.",
    color: "border-faith-orange",
    icon: ""
  },
  {
    title: "Applications Natives & Hybrides",
    desc: "Donnez une place de choix à votre entreprise sur le smartphone de vos clients. Nous développons des applications iOS et Android performantes, misant sur une ergonomie parfaite et des fonctionnalités sur-mesure pour un engagement maximal.",
    color: "border-faith-blue",
    icon: ""
  },
  {
    title: "Conception d'Interfaces Intuitive (UI/UX)",
    desc: "Nous transformons vos idées en maquettes interactives haute fidélité. Notre approche combine esthétique moderne et ergonomie utilisateur pour garantir que votre produit soit aussi beau qu'agréable à utiliser.",
    color: "border-faith-pink",
    icon: ""
  },
    {
    title: "Identité Visuelle & Branding Digital",
    desc: "Créez une marque forte qui marque les esprits. Du logotype à la charte graphique complète, nous concevons un univers visuel cohérent qui reflète les valeurs de votre entreprise et vous distingue de la concurrenc",
    color: "border-faith-dark",
    icon: ""
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-faith-dark mb-16">Nos Services Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-16 bg-white rounded-2xl shadow-sm border-b-4 ${s.color} text-left transition-all`}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-faith-dark mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;