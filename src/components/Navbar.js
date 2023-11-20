import './Navbar.css'
import React from 'react';
import { MenuItem } from './MenuItem';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
export default function Navbar(){
    const [isShowing , setIsShowing] = React.useState(false);
    function handleNav(){
        setIsShowing(prev => !prev)
    }
    return(
        <nav className='NavbarItem'>
            <h1 className="navbar-Logo">Tripppy</h1>
            <div onClick={handleNav} className='menu-icons'>{isShowing ?  <IoMdClose  className='icons'/>: <FaBars className='icons'/>}</div>
            <ul className={isShowing ? "nav-menu active" : "nav-menu"}>
            {
                MenuItem.map((item, index) =>{
                    return(
                        <li key={index}>
                            <Link className={item.CName} to={item.url}><i>{item.icon}</i>{item.title}</Link>
                        </li>
                        )
                })
            }
                <button>Sign Up</button>
            </ul>
        </nav>
        )
       
}