// import { useState, useEffect } from "react";

// function Footer() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const footer = document.getElementById("footer");
//       if (footer) {
//         const rect = footer.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.9) {
//           setVisible(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <footer 
//       id="footer"
//       className={`py-8 mt-10 transition-all duration-1000 ease-out transform ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//       style={{ backgroundColor: "#6D94C5", color: "#F5EFE6" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//         <div 
//           className="text-lg font-bold transition-transform duration-300 hover:scale-105"
//           style={{ color: "#F5EFE6" }}
//         >
//           AnyDesk
//         </div>
//         <p className="mt-4 md:mt-0 transition-transform duration-300 hover:scale-105">
//           © {new Date().getFullYear()} AnyDesk Clone. All rights reserved.
//         </p>
//       </div>

//       {/* Tailwind Keyframes */}
//       <style>
//         {`
//           @keyframes fadeUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </footer>
//   );
// }

// export default Footer;




import { useEffect, useState } from "react";
import ProtoMart from "../../public/Only ProtoMart (editable) RGB.png"

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      id="footer"
      className={`transition-all duration-1000 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ backgroundColor: "#1E1E1E", color: "#E5E5E5" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
<div>
  <div className="flex items-center gap-3">
    <img
      src={ProtoMart}
      alt="ProtoMart Logo"
      className="h-9 w-auto"
    />
    <h2 className="text-2xl font-bold text-[#6D94C5]">
      ProtoMart
    </h2>
  </div>

  <p className="mt-3 text-sm text-gray-400">
    Secure and fast remote desktop software for IT professionals and teams worldwide.
  </p>
</div>


        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Download</li>
            <li className="hover:text-white cursor-pointer">Security</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Remot Desktop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
