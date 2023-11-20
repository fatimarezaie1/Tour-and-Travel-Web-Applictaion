import './Destinations.css'
import DestinationData from '../components/DestinationData'
export default function Destination(){
    return(
       <div className="destination">
            <h1>Populer Dsetinations</h1>
            <p>Tours give you the opportunity a lot, wihtin a time frame</p>

            <DestinationData
                className='first-des'
                title='Taal Volcano, Batangas' 
                text={`  Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online 
                for the video that best fits your document Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online 
                for the video that best fits your `}
                img1 ={'images/1.jpg'}
                img2={'images/2.jpg'}
            />
            <DestinationData
            className='first-des-reverse'
            title='Mt. Daguldul, Batangas' 
            text={`  Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online 
            for the video that best fits your document Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online 
            for the video that best fits your  `}
            img1 ={'images/3.jpg'}
            img2={'images/4.jpg'}
        />
           
        </div> 
    )
}