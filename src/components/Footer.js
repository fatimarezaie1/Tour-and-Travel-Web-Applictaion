import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebook ,FaInstagram,FaBehance,FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your favorite destination.</p>
                </div>
                <div>
                    <Link> <i> <FaFacebook/> </i> </Link>
                    <Link> <i> <FaInstagram/> </i></Link>
                    <Link> <i> <FaBehance/></i> </Link>
                    <Link>  <i><FaTwitter/></i> </Link>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <Link to='/'>ChangeLog</Link>
                    <Link to='/'>Status</Link>
                    <Link to='/'>License</Link>
                    <Link to='/'>All Versions</Link>
                </div>
                <div>
                    <h4>Community</h4>
                    <Link to='/'>GitHub</Link>
                    <Link to='/'>Issues</Link>
                    <Link to='/'>Project</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                <div>
                    <h4>Help</h4>
                    <Link to='/'>Support</Link>
                    <Link to='/'>TrobleShooting</Link>
                    <Link to='/'>License</Link>
                    <Link to='/'>Contact US</Link>
                </div>
                <div>
                    <h4>Others</h4>
                    <Link to='/'>Term of Service</Link>
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>License</Link>
                </div>
            </div>
        </div>
    )
}