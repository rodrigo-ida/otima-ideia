import StyledNavbar from "./styledNavbar";
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
  return (
    <StyledNavbar>
        <Link to='#' className="logo-link">
            <Logo className="logo" />
            </Link>
      <ul className="links-list">{links}</ul>
      <button className="register-btn">Register</button>
    </StyledNavbar>
  );
};

export default Navbar;
