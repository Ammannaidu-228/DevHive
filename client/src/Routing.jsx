import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Signin from "./pages/Signin"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Signup from "./pages/Signup"
import Error from "./pages/Error"

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Landing/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default Routing
