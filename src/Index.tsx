import { Hero } from '../src/pages/Hero'
import { Information } from '../src/pages/Information'
import  Navbar  from '../src/components/Navbar'
import Mision from './pages/Mision'
import Task from './pages/Task'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Map from './pages/Map'
import Service from './pages/Service'
import Footer from './pages/Footer'
function Bites() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Information />
      <Mision />
      <Task /> */}
      <Contact />
      <Booking />
      <Map />
      {/* <Service /> */}
      <Footer />
    </div>
  )
}

export default Bites