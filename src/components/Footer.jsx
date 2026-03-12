import React from 'react';
import Logo from './common/Logo';
import { Facebook, FacebookIcon, Instagram, InstagramIcon } from 'lucide-react';

const Footer = () => {
  // Fonction de scroll fluide (copiée de ta Navbar ou passée en props)
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id='footer' className='bg-[#080519] border-t border-white/10 pt-16 pb-8'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
          
          {/* Colonne 1 : Identité */}
          <div className='md:col-span-2'>
            <div className="flex items-center gap-3 mb-4">
                <Logo size={35} />
                <span className="text-xl font-black tracking-tighter uppercase text-white">
                  Faith<span className="bg-gradient-to-r from-[#D471B2] to-[#8294FF] bg-clip-text text-transparent">Code Tech</span>
                </span>
            </div>
            <p className='text-gray-400 mt-4 max-w-sm'>
                Transformer vos visions en réalités numériques. Expertise en développement web, mobile et solutions tech innovantes.
            </p>
          </div>
          <div>
            <h4 className='text-white font-bold mb-6 uppercase text-sm tracking-widest'>Navigation</h4>
            <ul className='flex flex-col gap-3 text-gray-400'>
              {['home', 'about', 'services', 'contact'].map((id) => (
                <li key={id}>
                  <button 
                    onClick={() => scrollTo(id)} 
                    className="hover:text-faith-blue  transition-colors capitalize"
                  >
                    {id === 'home' ? 'Accueil' : id === 'about' ? 'À propos' : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='text-white font-bold mb-6 uppercase text-sm tracking-widest'>Contact</h4>
            <ul className='text-gray-400 space-y-4'>
              <li className="text-sm">dieudonne.adouko23@gmail.com</li>
              <li className="text-sm">+225 07 20 46 58 69</li>
              <div className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/share/17r3c2rNmP/?mibextid=wwXIfr" target="_blank" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-faith-blue transition-all"> <FacebookIcon /> </a>
                <a href="https://www.instagram.com/faithcodetech?igsh=MXc0c3p0YzNra21sYw%3D%3D&utm_source=qr" target="_blank" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-faith-pink transition-all"><InstagramIcon /></a>
              </div>
            </ul>
          </div>

        </div>

        {/* Ligne de Copyright */}
        <div className='border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs'>
          <p>© {new Date().getFullYear()} FaithCode Tech. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;