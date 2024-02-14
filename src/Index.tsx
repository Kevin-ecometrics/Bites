import { Hero } from './pages/index/Hero'
// import { Information } from '../src/pages/Information'
import  Navbar  from '../src/components/Navbar'
// import Mision from './pages/Mision'
// import Task from './pages/Task'
import Contact from './pages/index/Contact'
import Booking from './pages/index/Booking'
import Map from './pages/index/Map'
// import Service from './pages/Service'
import Footer from './pages/index/Footer'
import FooterText from './components/FooterText'
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
      <FooterText className='bg-[#FE81BD]' hoverColor='hover:text-blue-400' />
    </div>
  )
}

export default Bites