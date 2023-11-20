import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from '../components/Footer'
export default function Home(){
    return (
        <div>
           <Hero CName= "hero" heroImg={'images/4.jpg'} title='Your Journy Your Story'
            description='Choose Your Favorite Destination'  buttonText='Travel Plan'
            url='/'
            btnClass = 'show'
           />
           <Destination />
           <Trip />
           
        </div>

    )
}