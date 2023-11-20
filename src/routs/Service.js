import React from "react";
import Hero from "../components/Hero";
import Trip from '../components/Trip'
export default function Service(){
    return (
        <div>
           <Hero CName= "hero-mid" heroImg={'images/7.jpg'} title='Service'
            btnClass = 'hide'
           />
           <Trip />
        </div>

    )
}