// function Trust() {
//   const logos = [
//     "/images/logo1.png",
//     "/images/logo2.png",
//     "/images/logo3.png",
//     "/images/logo4.png"
//   ]

//   return (
//     <section
//       className="py-16 text-center"
//       style={{ backgroundColor: "#F5EFE6" }}
//     >
//       <h3
//         className="text-xl font-semibold mb-8"
//         style={{ color: "#6D94C5" }}
//       >
//         Trusted by
//       </h3>

//       <div className="flex flex-wrap justify-center gap-10 items-center px-6">
//         {logos.map((logo, i) => (
//           <div
//             key={i}
//             className="p-4 rounded-lg transition hover:shadow-lg"
//             style={{
//               backgroundColor: "#E8DFCA",
//               border: "1px solid #CBDCEB"
//             }}
//           >
//             <img
//               src={logo}
//               alt={`logo-${i}`}
//               className="h-12 opacity-80 hover:opacity-100 transition"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Trust



// import { useState, useEffect } from "react";
// import logo1 from "../assets/download (1).jpeg";
// import logo2 from "../assets/download (4).jpeg";
// import logo3 from "../assets/img_01.png";
// import logo4 from "../assets/image02.jpg";

// function Trust() {
//   const logos = [logo1, logo2, logo3, logo4];
//   const [visible, setVisible] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const newVisible = logos.map((_, i) => {
//         const element = document.getElementById(`logo-${i}`);
//         if (!element) return false;
//         const rect = element.getBoundingClientRect();
//         return rect.top < window.innerHeight * 0.85;
//       });
//       setVisible(newVisible);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       className="py-16 text-center"
//       style={{ backgroundColor: "#F5EFE6" }}
//     >
//       <h3
//         className="text-xl font-semibold mb-8"
//         style={{ color: "#6D94C5" }}
//       >
//         Trusted by
//       </h3>

//       <div className="flex flex-wrap justify-center gap-10 items-center px-6">
//         {logos.map((logo, i) => (
//           <div
//             id={`logo-${i}`}
//             key={i}
//             className={`p-4 rounded-lg transform transition-all duration-500 ${
//               visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             } hover:scale-110 hover:shadow-lg`}
//             style={{
//               backgroundColor: "#E8DFCA",
//               border: "1px solid #CBDCEB",
//               transitionProperty: "transform, opacity, box-shadow"
//             }}
//           >
//             <img
//               src={logo}
//               alt={`logo-${i}`}
//               className="h-12 opacity-80 hover:opacity-100 transition duration-300"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Trust;


import { useState, useEffect } from "react";
import logo1 from "../assets/download (1).jpeg";
import logo2 from "../assets/download (4).jpeg";
import logo3 from "../assets/img_01.png";
import logo4 from "../assets/image02.jpg";

function Trust() {
  const logos = [logo1, logo2, logo3, logo4];
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = logos.map((_, i) => {
        const element = document.getElementById(`logo-${i}`);
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
      className="py-16 text-center"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      <h1
        className="text-xl font-bold mb-8"
        style={{ color: "#6D94C5" }}
      >
        Trusted by
      </h1>

      <div className="flex flex-wrap justify-center gap-10 items-center px-6">
        {logos.map((logo, i) => (
          <div
            id={`logo-${i}`}
            key={i}
            className={`transform transition-all duration-700 ${
              visible[i] 
                ? "opacity-100 translate-y-0 scale-110" 
                : "opacity-0 translate-y-10 scale-90"
            } hover:scale-125`}
            style={{
              transitionProperty: "transform, opacity",
              transitionTimingFunction: "ease-out",
            }}
          >
            <img
              src={logo}
              alt={`logo-${i}`}
              className="h-20 opacity-90 hover:opacity-100 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trust;
