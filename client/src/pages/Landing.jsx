import AboutOver from "../components/AboutOver"
import Hero from "../components/Hero"
import PortfolioOver from "../components/PortfolioOver"
import ServicesOver from "../components/ServicesOver"

function Landing() {
  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div>
        <ServicesOver/>
      </div>
      <div>
        <PortfolioOver/>
      </div>
      <div>
        <AboutOver/>
      </div>
    </div>
  )
}

export default Landing
