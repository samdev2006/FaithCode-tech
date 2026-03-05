import { useState } from "react";
import  Logo  from "./common/Logo.jsx"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItemStyles = `
    relative hover:text-faith-blue font-black
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
    
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md text-faith-dark border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Logo size={35} />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={navItemStyles}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white px-4 py-4 space-y-4 border-t border-gray-100
          overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
        `}
      >
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`transform transition-all duration-300 ease-out font-bold
                ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              <a href={`#${item.id}`} className="block hover:text-faith-blue">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;