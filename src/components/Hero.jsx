// import { motion } from "framer-motion"

// function Hero() {
//   return (
//     <section
//       className="pt-28 md:pt-36 pb-16 text-center"
//       style={{ backgroundColor: "#F5EFE6" }}
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-6xl font-bold"
//         style={{ color: "#6D94C5" }}
//       >
//         Fast & Secure Remote Desktop Software
//       </motion.h1>

//       <p
//         className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
//         style={{ color: "#232323" }}
//       >
//         Connect to a computer remotely, be it from the other end of the office or
//         halfway around the world. AnyDesk ensures secure and reliable remote
//         desktop connections.
//       </p>

//       <div className="mt-8 flex justify-center space-x-4">
//         {/* Primary CTA */}
//         <a
//           href="#download"
//           className="px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
//           style={{
//             backgroundColor: "#6D94C5",
//             color: "#F5EFE6",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = "#CBDCEB"
//             e.currentTarget.style.color = "#232323"
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = "#6D94C5"
//             e.currentTarget.style.color = "#F5EFE6"
//           }}
//         >
//           Download Now
//         </a>

//         {/* Secondary CTA */}
//         <a
//           href="#features"
//           className="px-6 py-3 rounded-lg text-lg font-semibold transition-colors border-2"
//           style={{
//             borderColor: "#E8DFCA",
//             color: "#6D94C5",
//             backgroundColor: "#ffffff",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = "#E8DFCA"
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = "#ffffff"
//           }}
//         >
//           Learn More
//         </a>
//       </div>

//       {/* Hero Image */}
//       <motion.img
//         src="https://assets.anydesk.com/_static/img/hero-illustration.svg"
//         alt="Remote Desktop"
//         className="mt-10 w-full max-w-3xl mx-auto"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       />
//     </section>
//   )
// }

// export default Hero

import { motion } from "framer-motion";
import heroIllustration from "../assets/image03.jpg";

function Hero() {
  // ✅ FORCE DOWNLOAD FUNCTION
  const handleDownload = () => {
    window.location.href =
      "https://github.com/priyanshmalakar/remotedesktop2.0/releases/download/2.0.3/MyRemoteAppSetup.Setup.2.0.3.exe";
  };

  return (
    <section
      className="pt-28 md:pt-36 pb-16 text-center relative overflow-hidden"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
        style={{ color: "#6D94C5" }}
      >
        Fast & Secure Remote Desktop Software
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
        style={{ color: "#232323" }}
      >
        Connect to a computer remotely, be it from the other end of the office or
        halfway around the world. AnyDesk ensures secure and reliable remote
        desktop connections.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 flex justify-center space-x-4"
      >
        {/* 🔥 DOWNLOAD BUTTON (FIXED) */}
        <button
          onClick={handleDownload}
          className="px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          style={{
            backgroundColor: "#6D94C5",
            color: "#F5EFE6",
            cursor: "pointer",
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
        </button>

        {/* Secondary CTA */}
        <a
          href="#features"
          className="px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2"
          style={{
            borderColor: "#E8DFCA",
            color: "#6D94C5",
            backgroundColor: "#ffffff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E8DFCA";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
          }}
        >
          Learn More
        </a>
      </motion.div>

      {/* Hero Image */}
      <motion.img
        src={heroIllustration}
        alt="Remote Desktop"
        className="mt-10 w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      {/* Floating Blur */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#CBDCEB] rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}

export default Hero;
