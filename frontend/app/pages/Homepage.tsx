import Footer from "~/components/Footer"
import Header from "~/components/Header"
import Hero from "~/components/Hero"
import Navbar from "~/components/Navbar"
import Pricing from "~/components/Pricing"
import Testimonials from "~/components/Testimonials"


const Homepage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Homepage
