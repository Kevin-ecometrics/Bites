import { Hero } from '../src/pages/Hero'
import { Information } from '../src/pages/Information'
import  Navbar  from '../src/components/Navbar'
import Mision from './pages/Mision'
function Bites() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Information />
      <Mision />
    </div>
  )
}

export default Bites