import StyledFooter from "./styledFooter";
import {ReactComponent as FacebookLogo} from '../../assets/icons/facebook.svg'
import {ReactComponent as InstagramLogo} from '../../assets/icons/instagram.svg'
import {ReactComponent as TwitterLogo} from '../../assets/icons/twitter.svg'
import Logo from '../../assets/logo'


const Footer = () => {
  return (
    <StyledFooter>
      <div className="icons-wrapper">
          <FacebookLogo />
          <InstagramLogo />
          <TwitterLogo />
      </div>
      <div className="logo-wrapper">
      <Logo />
      </div>
      <div className="contact-wrapper">
          <p> Contact Number: 0912-1234567</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
