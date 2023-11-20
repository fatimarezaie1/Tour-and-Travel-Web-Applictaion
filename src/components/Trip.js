import './Trip.css';
import TripData from './TripData';
export default function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                    image={'images/3.jpg'}
                    heading='Trip in Indonesia'
                    text= "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your."
                    
                />
                <TripData 
                    image={'images/6.jpg'}
                    heading='Trip in Malaysia'
                    text= "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your."
                
                />
                <TripData 
                    image={'images/5.jpg'}
                    heading='Trip in French'
                    text= "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your."
                
                 />
            </div>
        </div>
    )
}