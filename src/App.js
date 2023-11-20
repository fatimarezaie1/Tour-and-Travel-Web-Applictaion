import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService ,MdRoundaboutRight ,MdContactPhone} from "react-icons/md";
import Home from "./routs/Home";
import About from "./routs/About";
import Contact from "./routs/Contact";
import Service from "./routs/Service";
import Footer from "./components/Footer";
export default function App(){

  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path='/home'  element={<Home />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/service'  element={<Service />}/>
        <Route path='/contact'  element={<Contact />}/>
      </Routes>
      <Footer />
    </main>
  )
}