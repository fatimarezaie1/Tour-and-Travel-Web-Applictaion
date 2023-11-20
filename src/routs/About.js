import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

export default function About(){
    return (
        <div>
           <Hero CName= "hero-mid" heroImg={'images/9.jpg'} title='About'
            btnClass = 'hide'
           />
           <AboutUs />
        </div>

    )
}