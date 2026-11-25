import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route } from "react-router"
import { Routes } from "react-router"
import NotFound from "./pages/NotFound"
import { House } from "lucide-react"
import HomePage from "./pages/HomePage"
function App() {
 

  return (
  <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
    
   <Navbar/>
   <div className="flex-1">
    <Routes>
     <Route path="/" element={<HomePage/> }></Route>
     <Route path="*" element={<NotFound/> }></Route>
    </Routes>
   </div>
   <Footer/>
  </div>
  )
}

export default App
