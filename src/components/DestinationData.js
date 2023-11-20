
import { Component } from 'react'
import './Destinations.css';

export default function DestinationData({title, text, img1, img2 , className}) {
    
        return (
            <div className={className}>
                <div className="des-text">
                    <h2>{title}</h2>
                    <p>{text} </p>
                </div>
                <div className="image">
                    <img src={img1} alt="image" />
                    <img src={img2} alt="image" />
                </div>
            </div>
        )
    
}
