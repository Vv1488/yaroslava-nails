import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
