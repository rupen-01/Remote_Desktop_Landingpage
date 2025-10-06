import { useEffect, useState } from "react";

function Download() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("download");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="download"
      className="py-20 text-center transition-all duration-1000 ease-out"
      style={{
        backgroundColor: "#F5EFE6",
        color: "#6D94C5",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideIn">
        Download AnyDesk Today
      </h2>
      <p className="mt-4 text-lg text-[#232323] animate-slideIn animation-delay-200">
        Fast, secure, and free for personal use.
      </p>
      <a
        href="#"
        className="mt-6 inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        style={{
          backgroundColor: "#6D94C5",
          color: "#F5EFE6",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#CBDCEB";
          e.currentTarget.style.color = "#232323";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#6D94C5";
          e.currentTarget.style.color = "#F5EFE6";
        }}
      >
        Download Now
      </a>

      {/* Tailwind Keyframe Animations */}
      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-slideIn {
            animation: slideIn 0.6s ease forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
}

export default Download;
