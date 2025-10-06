import { useState, useEffect } from "react";

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer 
      id="footer"
      className={`py-8 mt-10 transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#6D94C5", color: "#F5EFE6" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div 
          className="text-lg font-bold transition-transform duration-300 hover:scale-105"
          style={{ color: "#F5EFE6" }}
        >
          AnyDesk
        </div>
        <p className="mt-4 md:mt-0 transition-transform duration-300 hover:scale-105">
          © {new Date().getFullYear()} AnyDesk Clone. All rights reserved.
        </p>
      </div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
