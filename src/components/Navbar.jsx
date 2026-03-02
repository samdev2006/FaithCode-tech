import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./common/Logo.jsx"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-faith-dark">
      <div className="container mx-auto flex justify-between items-center p-4">
      <Logo  />
       
<ul className="hidden md:flex gap-6 font-black text-faith-dark">
  <li>
    <Link 
     className="
      relative
      hover:text-faith-blue
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-full
      after:bg-faith-blue
      after:scale-x-0
      after:origin-left
      after:transition-transform
      after:duration-300
      hover:after:scale-x-100

    "
     to="/">
    Accueil
    </Link>
  </li>
  <li>
    <Link 
     className="
      relative
      hover:text-faith-blue
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-full
      after:bg-faith-blue
      after:scale-x-0
      after:origin-left
      after:transition-transform
      after:duration-300
      hover:after:scale-x-100

    "
        to="/about"
        >A propos
    </Link>
  </li>
  <li>
    <Link 
         className="
      relative
      hover:text-faith-blue
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-full
      after:bg-faith-blue
      after:scale-x-0
      after:origin-left
      after:transition-transform
      after:duration-300
      hover:after:scale-x-100
 
    "
     to="/services"
     >Services
    </Link>
     </li>
     <li>
    <Link      
    className="
      relative
      hover:text-faith-blue
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-full
      after:bg-faith-blue
      after:scale-x-0
      after:origin-left
      after:transition-transform
      after:duration-300
      hover:after:scale-x-100

    " to="/contact">Contact</Link></li>
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
<nav
  className={`md:hidden bg-white px-4 py-2 space-y-3
    overflow-hidden transition-all duration-300 ease-out
    ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
  `}
>
  <ul>
    {
      [
        { label: "Accueil", path:"/" },
        { label: "À propos", path:"/about" },
        { label: "Services", path:"/services" },
        { label: "Contact", path:"/contact" },
      ].map((item, index) => (
        <li
          key={item.path}
          className={`transform transition-all duration-300 ease-out hover:cursor-pointer  
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
          `}
          style={{ transitionDelay: `${index * 120}ms` }}
          onClick={() => setIsOpen(false)}
        >
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))
    }
  </ul>
</nav>


</nav>
  );
};

export default Navbar;
