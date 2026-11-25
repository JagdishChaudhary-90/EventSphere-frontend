import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route } from "react-router"
import { Routes } from "react-router"
import NotFound from "./pages/NotFound"
import { House } from "lucide-react"
function App() {
 

  return (
  <div>
    <House/>
   <Navbar/>
   <Routes>
     <Route path="/" element={<h1>home</h1> }></Route>
     <Route path="*" element={<NotFound/> }></Route>
   </Routes>
   <Footer/>
  </div>
  )
}

export default App
