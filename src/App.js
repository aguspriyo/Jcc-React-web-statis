import { Routes, Route } from "react-router-dom"
import Contact from "./components/detailcomponent/contact"
import Keranjang from "./components/detailcomponent/keranjang"
import Login from "./components/detailcomponent/login"
import Register from "./components/detailcomponent/register"
import Detail from "./components/menupage/detailmenu"
import Main from "./components/menupage/main"
import Home from "./home/home"


function App(){
  return(
    <>
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/menu" element={<Main/>}/>
<Route path="/detail" element={<Detail/>}/>
<Route path="/keranjang" element={<Keranjang/>}/>

</Routes>
    </>
  )
}
export default App
