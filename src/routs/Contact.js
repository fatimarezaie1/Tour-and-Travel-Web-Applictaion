import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

export default function Contact(){
    return (
        <div>
           <Hero CName= "hero-mid" heroImg={'images/10.jpg'} title='Contact'
            btnClass = 'hide'
           />
           <ContactForm />
        </div>

    )
}