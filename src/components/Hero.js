import { Link } from 'react-router-dom';
import './Hero.css';
export default function Hero(props){
    return(
        <div className={props.CName}>
            <img src={props.heroImg} className='img' />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
            </div>
            
        </div>
    )
}