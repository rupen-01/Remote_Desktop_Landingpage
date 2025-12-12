import { BrowserRouter, Routes, Route } from "react-router-dom";

// Website components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import Trust from "./components/Trust";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Admin page
import AdsTable from "./components/AdsTable";

function Website() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <Testimonials />
      <Trust />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Normal Website */}
        <Route path="/" element={<Website />} />

        {/* ✅ Completely Separate Admin Page */}
        <Route path="/admin" element={<AdsTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
