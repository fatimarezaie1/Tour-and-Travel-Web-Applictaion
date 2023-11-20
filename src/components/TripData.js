import './Trip.css'

export default function TripData({image, heading, text}){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={image} alt="" />
            </div>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    )
}