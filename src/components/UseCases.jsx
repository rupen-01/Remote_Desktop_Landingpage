// const useCases = [
//   {
//     title: "Remote Support",
//     desc: "Assist clients or colleagues remotely with secure connections.",
//     img: "https://assets.anydesk.com/_static/img/use-case-support.svg"
//   },
//   {
//     title: "Remote Work",
//     desc: "Access your office PC from home or on the go with ease.",
//     img: "https://assets.anydesk.com/_static/img/use-case-work.svg"
//   },
//   {
//     title: "Remote Access",
//     desc: "Manage files and applications from any location, anytime.",
//     img: "https://assets.anydesk.com/_static/img/use-case-access.svg"
//   }
// ]

// function UseCases() {
//   return (
//     <section
//       id="usecases"
//       className="py-20"
//       style={{ backgroundColor: "#F5EFE6" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2
//           className="text-3xl md:text-4xl font-bold"
//           style={{ color: "#6D94C5" }}
//         >
//           Designed for Every Use Case
//         </h2>
//         <p
//           className="mt-4 max-w-2xl mx-auto"
//           style={{ color: "#232323" }}
//         >
//           Whether you're working from home, providing IT support, or managing servers — AnyDesk has you covered.
//         </p>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {useCases.map((u, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-xl shadow transition hover:shadow-lg"
//               style={{
//                 backgroundColor: "#E8DFCA",
//                 border: "1px solid #CBDCEB"
//               }}
//             >
//               <img
//                 src={u.img}
//                 alt={u.title}
//                 className="w-24 h-24 mx-auto mb-6"
//               />
//               <h3
//                 className="text-xl font-semibold mb-2"
//                 style={{ color: "#6D94C5" }}
//               >
//                 {u.title}
//               </h3>
//               <p style={{ color: "#232323" }}>{u.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default UseCases




// import { useState, useEffect } from "react";
// import supportImg from "../assets/photo_01.jpg";
// import workImg from "../assets/image03.jpg";
// import accessImg from "../assets/img_01.png";

// const useCases = [
//   {
//     title: "Remote Support",
//     desc: "Assist clients or colleagues remotely with secure connections.",
//     img: supportImg,
//   },
//   {
//     title: "Remote Work",
//     desc: "Access your office PC from home or on the go with ease.",
//     img: workImg,
//   },
//   {
//     title: "Remote Access",
//     desc: "Manage files and applications from any location, anytime.",
//     img: accessImg,
//   },
// ];

// function UseCases() {
//   const [visible, setVisible] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const newVisible = useCases.map((_, i) => {
//         const element = document.getElementById(`usecase-${i}`);
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
//       id="usecases"
//       className="py-20"
//       style={{ backgroundColor: "#F5EFE6" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2
//           className="text-3xl md:text-4xl font-bold"
//           style={{ color: "#6D94C5" }}
//         >
//           Designed for Every Use Case
//         </h2>
//         <p
//           className="mt-4 max-w-2xl mx-auto"
//           style={{ color: "#232323" }}
//         >
//           Whether you're working from home, providing IT support, or managing servers — AnyDesk has you covered.
//         </p>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {useCases.map((u, i) => (
//             <div
//               id={`usecase-${i}`}
//               key={i}
//               className={`p-6 rounded-xl shadow-lg transform transition-all duration-500 ${
//                 visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               } hover:scale-105 hover:shadow-2xl`}
//               style={{
//                 backgroundColor: "#E8DFCA",
//                 border: "1px solid #CBDCEB",
//                 transitionProperty: "transform, opacity, box-shadow"
//               }}
//             >
//               <img
//                 src={u.img}
//                 alt={u.title}
//                 className="w-30 h-30 mx-auto mb-6"
//               />
//               <h3
//                 className="text-xl font-semibold mb-2"
//                 style={{ color: "#6D94C5" }}
//               >
//                 {u.title}
//               </h3>
//               <p style={{ color: "#232323" }}>{u.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UseCases;


import { useState, useEffect } from "react";
import supportImg from "../assets/photo_01.jpg";
import workImg from "../assets/image03.jpg";
import accessImg from "../assets/img_01.png";

const useCases = [
  {
    title: "Remote Support",
    desc: "Assist clients or colleagues remotely with secure connections.",
    img: supportImg,
  },
  {
    title: "Remote Work",
    desc: "Access your office PC from home or on the go with ease.",
    img: workImg,
  },
  {
    title: "Remote Access",
    desc: "Manage files and applications from any location, anytime.",
    img: accessImg,
  },
];

function UseCases() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = useCases.map((_, i) => {
        const element = document.getElementById(`usecase-${i}`);
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
      id="usecases"
      className="py-20"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "#6D94C5" }}
        >
          Designed for Every Use Case
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: "#232323" }}
        >
          Whether you're working from home, providing IT support, or managing servers — AnyDesk has you covered.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((u, i) => (
            <div
              id={`usecase-${i}`}
              key={i}
              className={`p-6 rounded-xl shadow-lg transform transition-all duration-500 ${
                visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } hover:scale-105 hover:shadow-2xl`}
              style={{
                backgroundColor: "#E8DFCA",
                transitionProperty: "transform, opacity, box-shadow",
                overflow: "hidden", // ensure image does not overflow
              }}
            >
              {/* Image without border and rounded to match box */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={u.img}
                  alt={u.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <h3
                className="text-xl font-semibold mt-4 mb-2"
                style={{ color: "#6D94C5" }}
              >
                {u.title}
              </h3>
              <p style={{ color: "#232323" }}>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
