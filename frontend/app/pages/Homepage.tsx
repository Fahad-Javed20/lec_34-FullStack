import Footer from "~/components/Footer"
import Header from "~/components/Header"
import Hero from "~/components/Hero"
import Navbar from "~/components/Navbar"
import Pricing from "~/components/Pricing"
import Testimonial from "~/components/Testimonial"
import Users from "~/components/Users"


const Homepage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Homepage
