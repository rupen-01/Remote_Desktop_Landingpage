import { useState, useEffect } from "react";
import { Monitor, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <Monitor className="w-10 h-10 text-[#6D94C5]" />,
    title: "Cross-Platform Access",
    desc: "ProtoMart Easy Access works across Windows, macOS, Linux, iOS, and Android. Connect instantly from any device."
  },
  {
    icon: <Shield className="w-10 h-10 text-[#6D94C5]" />,
    title: "Bank-Level Security",
    desc: "Secure remote connections with TLS 1.2 encryption and RSA 2048 key exchange."
  },
  {
    icon: <Zap className="w-10 h-10 text-[#6D94C5]" />,
    title: "Lightning-Fast Performance",
    desc: "Experience smooth remote sessions with minimal latency, even on low-bandwidth connections."
  },
  {
    icon: <Globe className="w-10 h-10 text-[#6D94C5]" />,
    title: "Global Connectivity",
    desc: "Work seamlessly with teams and clients anywhere in the world."
  }
];

function Features() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = features.map((_, i) => {
        const element = document.getElementById(`feature-${i}`);
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
      id="features" 
      className="py-20"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn"
          style={{ color: "#6D94C5" }}
        >
          Powerful Features for Seamless Remote Access
        </h2>
        <p 
          className="mt-4 max-w-2xl mx-auto animate-fadeIn animation-delay-200"
          style={{ color: "#232323" }}
        >
          Everything you need to connect, collaborate, and control devices from anywhere.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              id={`feature-${i}`}
              key={i} 
              className={`p-6 rounded-xl shadow-lg transform transition-all duration-500 ${
                visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:scale-105 hover:shadow-2xl`}
              style={{ 
                backgroundColor: "#E8DFCA", 
                border: "2px solid #CBDCEB",
                transitionProperty: "transform, opacity, background-color, box-shadow"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#CBDCEB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#E8DFCA";
              }}
            >
              <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">{f.icon}</div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: "#6D94C5" }}
              >
                {f.title}
              </h3>
              <p style={{ color: "#232323" }}>{f.desc}</p>
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
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
}

export default Features;
