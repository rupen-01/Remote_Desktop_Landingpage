import { useState, useEffect } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Personal use", "Cross-platform", "Basic remote access"],
    highlight: false
  },
  {
    name: "Lite",
    price: "$9.99/mo",
    features: ["Commercial use", "Unlimited devices", "File transfer"],
    highlight: true
  },
  {
    name: "Professional",
    price: "$19.99/mo",
    features: ["Advanced security", "Session recording", "Priority support"],
    highlight: false
  }
];

function Pricing() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = plans.map((_, i) => {
        const element = document.getElementById(`plan-${i}`);
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
      id="pricing"
      className="py-20"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#232323" }}>
          Flexible Pricing for Everyone
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto mb-12"
          style={{ color: "#6D6D6D" }}
        >
          Choose a plan that fits your needs. Start free and upgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              id={`plan-${i}`}
              key={i}
              className={`p-8 rounded-xl shadow-lg transform transition-all duration-500 ${
                plan.highlight ? "scale-105 shadow-2xl" : "shadow"
              } ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                backgroundColor: plan.highlight ? "#CBDCEB" : "#E8DFCA",
                border: plan.highlight ? "2px solid #6D94C5" : "1px solid #DDD",
                transitionProperty: "transform, opacity, background-color, box-shadow"
              }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#232323" }}>
                {plan.name}
              </h3>
              <p className="text-3xl font-bold mb-4" style={{ color: "#6D94C5" }}>
                {plan.price}
              </p>
              <ul className="mb-6 space-y-2" style={{ color: "#444" }}>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <a
                href="#download"
                className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: "#6D94C5", color: "#F5EFE6" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#232323";
                  e.currentTarget.style.color = "#F5EFE6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#6D94C5";
                  e.currentTarget.style.color = "#F5EFE6";
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
