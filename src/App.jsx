import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import UseCases from "./components/UseCases"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Trust from "./components/Trust"
import Download from "./components/Download"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Trust />
      <Download />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
