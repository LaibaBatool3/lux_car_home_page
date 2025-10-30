import './App.css'
import { Header } from './components/Header'
import { TopCategories } from './components/TopCategories'
import { BidCarSection } from './components/BidCar'
import { LocalOffersSection } from './components/LocalOffers'
import { BuyNowSection } from './components/BuyNow'
import { DestinationsSection } from './components/Destinations'
import { TestimonialsSection } from './components/Testimonials'
import { PopularMakesSection } from './components/PopularMakes'
import { RegisterSection } from './components/Register'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <TopCategories />
      <BidCarSection />
      <LocalOffersSection />
      <BuyNowSection />
      <DestinationsSection />
      <TestimonialsSection />
      <PopularMakesSection />
      <RegisterSection />
      <Footer />
    </div>
  )
}

export default App
