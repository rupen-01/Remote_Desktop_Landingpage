import { useState, useEffect } from "react";

function Testimonials() {
  const reviews = [
    { name: "Alice", text: "Amazing remote control experience!" },
    { name: "Bob", text: "Fast, reliable, secure." },
    { name: "Charlie", text: "Best tool for remote support." }
  ];

  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = reviews.map((_, i) => {
        const element = document.getElementById(`review-${i}`);
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
      className="py-20 text-center"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-10"
        style={{ color: "#232323" }}
      >
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div
            id={`review-${i}`}
            key={i}
            className={`p-6 rounded-xl shadow-lg transform transition-all duration-500 ${
              visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105 hover:shadow-2xl`}
            style={{
              backgroundColor: "#E8DFCA",
              border: "1px solid #CBDCEB",
              transitionProperty: "transform, opacity, background-color, box-shadow"
            }}
          >
            <p
              className="italic mb-3"
              style={{ color: "#444" }}
            >
              “{r.text}”
            </p>
            <h4
              className="font-semibold"
              style={{ color: "#6D94C5" }}
            >
              {r.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
