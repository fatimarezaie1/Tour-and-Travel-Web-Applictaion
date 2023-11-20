import { FaHome } from "react-icons/fa";
import { MdHomeRepairService ,MdContactPhone} from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
export const MenuItem = [
    {
        title: "Home",
        url: "/home",
        CName: "nav-links",
        icon : <FaHome />
    },
    {
        title: "About",
        url: "/about",
        CName: "nav-links",
        icon : <FaCircleInfo />
    },
    {
        title: "Service",
        url: "/service",
        CName: "nav-links",
        icon : <MdHomeRepairService />
    },
    {
        title: "Contact",
        url: "/contact",
        CName: "nav-links",
        icon : <MdContactPhone />
    },
    {
        title: "Sign Up",
        url: "/signup",
        CName: "nav-links-mobile",
    },
    
]