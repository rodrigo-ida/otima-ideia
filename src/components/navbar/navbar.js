import StyledNavbar from "./styledNavbar";
import {useState, useEffect} from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/logo';


const allLinks = [
  "Projects",
  "Partners",
  "FAQ",
  "Masters",
  "Classes",
  "Course Experience",
  "About us",
];
const links = allLinks.map((element, index) => (
  <li key={element + index}>
    <NavLink to="#">{element}</NavLink>
  </li>
));

const Navbar = () => {


  const [showLinks, setShowLinks] = useState(false)


  
  useEffect(()=>{

    if(window.screen.availWidth > 900){ setShowLinks(prev => prev = true)}
    else{
setShowLinks(prev => prev = false)

    }


  },[])


  return (
    <StyledNavbar showLinks={showLinks}>
        <Link to='#' className="logo-link">
            <Logo className="logo" />
            </Link>
      <ul className="links-list" >{links}</ul>
      <button className="register-btn">Register</button>
      <button className="burger-btn" onClick={() => setShowLinks(!showLinks)}>
        <div className="burger-stripes"></div>
        <div className="burger-stripes"></div>
        <div className="burger-stripes"></div>
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
