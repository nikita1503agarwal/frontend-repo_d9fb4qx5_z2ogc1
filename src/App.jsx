import Hero from './components/Hero'
import Features from './components/Features'
import Performance from './components/Performance'
import Pricing from './components/Pricing'
import Comparison from './components/Comparison'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <Performance />
      <Pricing />
      <Comparison />
      <Why />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <footer className="border-t border-gray-200 bg-white py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ZYNTR Hosting. All rights reserved.
      </footer>
    </div>
  )
}

export default App
