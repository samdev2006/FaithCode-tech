import { useState } from "react";
import Logo from "./common/Logo.jsx"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItemStyles = `
    relative inline-block hover:text-faith-blue font-bold text-sm tracking-wide transition-colors duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:bg-faith-blue after:scale-x-0 after:origin-left 
    after:transition-transform after:duration-300 hover:after:scale-x-100
  `;

  const menuItems = [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#080519]/80 backdrop-blur-md text-gray-300 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <Logo size={35} />
            <span className="text-xl font-black tracking-tighter uppercase">
              <span className="text-white">Faith</span>
              <span className="bg-gradient-to-r from-[#D471B2] to-[#8294FF] bg-clip-text text-transparent ml-1">
                Code Tech
              </span>
            </span>
          </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollTo(item.id)} 
                className={navItemStyles}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-white hover:text-faith-blue transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#080519] px-6 py-6 border-t border-white/10
          overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
        `}
      >
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`transform transition-all duration-300 ease-out
                ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button 
                onClick={() => scrollTo(item.id)} 
                className="block text-lg font-semibold hover:text-faith-blue w-full text-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;