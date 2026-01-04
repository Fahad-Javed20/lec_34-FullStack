import FooterComponent from "~/components/FooterComponent"
import HeaderComponent from "~/components/HeaderComponent"
import HeroComponent from "~/components/HeroComponent"
import NavComponent from "~/components/NavComponents"
import PricingComponent from "~/components/PricingComponent"
import TestimonialsComponent from "~/components/TestimonialsComponent"


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
