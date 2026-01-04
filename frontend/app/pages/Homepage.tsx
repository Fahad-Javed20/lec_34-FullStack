import FooterComponent from "~/components/Footer"
import HeaderComponent from "~/components/Header"
import HeroComponent from "~/components/Hero"
import NavComponent from "~/components/Navbar"
import PricingComponent from "~/components/Pricing"
import TestimonialsComponent from "~/components/Testimonials"


const Homepage = () => {
  return (
    <div>
      <HeaderComponent/>
      <NavComponent/>
      <HeroComponent/>
      <PricingComponent/>
      <TestimonialsComponent/>
      <FooterComponent/>
    </div>
  )
}

export default Homepage
