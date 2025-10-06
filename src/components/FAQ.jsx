import { useState, useEffect } from "react";

const faqs = [
  { q: "Is AnyDesk free?", a: "Yes, AnyDesk is free for personal use. Businesses need a paid plan." },
  { q: "Which platforms are supported?", a: "AnyDesk works on Windows, macOS, Linux, Android, and iOS." },
  { q: "Is my connection secure?", a: "Yes, AnyDesk uses TLS 1.2 and RSA 2048-bit key encryption." }
];

function FAQ() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = faqs.map((_, i) => {
        const element = document.getElementById(`faq-${i}`);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.85;
      });
      setVisible(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="faq" 
      className="py-20"
      style={{ backgroundColor: "#E8DFCA" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fadeIn"
          style={{ color: "#6D94C5" }}
        >
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div
              id={`faq-${i}`}
              key={i}
              className={`p-6 rounded-xl shadow-lg transform transition-all duration-500 ${
                visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:scale-105`}
              style={{ backgroundColor: "#F5EFE6", transitionProperty: "transform, opacity, background-color" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#CBDCEB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F5EFE6";
              }}
            >
              <h3 
                className="font-semibold text-lg cursor-pointer"
                style={{ color: "#6D94C5" }}
              >
                {f.q}
              </h3>
              <p 
                className="mt-2 text-[#232323]"
              >
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  )
}

export default FAQ;
