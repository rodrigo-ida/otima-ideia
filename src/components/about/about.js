import StyledAbout from "./styledAbout";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as PlayButton } from "../../assets/icons/play-button.svg";
import Logo from "../../assets/logo";

const About = () => {
  return (
    <StyledAbout>
      <div className="video-title-icons-wrapper">
        <div className="video-wrapper">
          <div className="video">
            <div className="logo-wrapper">
              <Logo />
            </div>
            <div className="play-button-wrapper">

            <PlayButton />
            </div>
          </div>
        </div>
        <div className="title-icons-wrapper">
          <div className="title-wrapper">
            <h3 className="title">About Us</h3>
            <h1 className="background-letters">About</h1>
          </div>
          <div className="icons-wrapper">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="description-wrapper">
        <p className="paragraph">
          Today, given the economic and labor market conditions, the best and
          least risky way to invest is to invest in personal assets and skills.
          UI / UX Product Design Course covers all aspects of product design
          from product thinking and design to user-centric research and product
          research and business vision and digital marketing to product
          designers and creators, designing the end-user experience and
          interface of the product and how to deliver it. Includes.
        </p>
      </div>
    </StyledAbout>
  );
};

export default About;
