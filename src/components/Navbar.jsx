import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Only ProtoMart (editable) RGB.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md bg-[#F5EFE6] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="ProtoMart Logo" 
            className="w-10 h-10 transform transition-transform duration-500 hover:scale-110"
          />
          <span className="text-2xl font-bold text-[#6D94C5] animate-fadeIn">
            ProtoMart
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Features", "Use Cases", "Pricing", "Download", "FAQ"].map((item, index) => (
            <li key={index} className="relative group">
              <a 
                href={`#${item.toLowerCase().replace(" ", "")}`} 
                className="transition-colors hover:text-[#6D94C5] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#6D94C5] after:transition-all group-hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#download"
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-[#CBDCEB] hover:text-[#232323]"
            style={{ backgroundColor: "#6D94C5", color: "#F5EFE6" }}
          >
            Download Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#6D94C5]" onClick={() => setOpen(!open)}>
          {open ? <X size={28} className="transition-transform duration-300 transform rotate-180"/> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${open ? "max-h-96" : "max-h-0"}`}
        style={{ backgroundColor: "#F5EFE6" }}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
          {["Features", "Use Cases", "Pricing", "Download", "FAQ"].map((item, index) => (
            <li key={index} className="opacity-0 animate-slideIn animation-delay-[${index*100}ms]">
              <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-[#6D94C5] transition-colors duration-300">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#download"
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-[#CBDCEB] hover:text-[#232323]"
              style={{ backgroundColor: "#6D94C5", color: "#F5EFE6" }}
            >
              Download Now
            </a>
          </li>
        </ul>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }

          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-slideIn {
            animation: slideIn 0.4s ease forwards;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
