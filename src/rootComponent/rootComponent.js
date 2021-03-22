import { BrowserRouter } from "react-router-dom";
import StyledRootComponent from "./styledRootComponent";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Main from "../components/main/main";
import Carousel from "../components/carousel/carousel";
import About from "../components/about/about";
import Experience from "../components/experience/experience";
import Sessions from "../components/sessions/sessions";
import Masters from "../components/masters/masters";
import Faq from "../components/faq/faq";
import CourseFee from "../components/courseFee/courseFee";
import EmailSignIn from "../components/emailSignIn/emailSignIn";
import Projects from "../components/projects/projects";

const RootComponent = () => {
  return (
    <BrowserRouter>
      <StyledRootComponent>
        <div className="content-wrapper">
          <Header>
            <Navbar />
          </Header>
          <Main>
            <section className="first-group-wrapper">
              <section className="carousel">
                <Carousel />
              </section>
              <section className="about-us">
                <About />
              </section>
              <section className="experience">
                <Experience />
              </section>
            </section>
            <section className="second-group-wrapper">
              <section className="sessions-wrapper">
                <Sessions />
              </section>
              <section className="masters">
                <Masters />
              </section>
            </section>
            <section className="third-group-wrapper">
              <section className="faq-wrapper">
                <Faq />
              </section>
              <section className="course-fee-wrapper">
                <CourseFee />
              </section>
            </section>
            <section className="fourth-group-wrapper">
              <EmailSignIn />
            </section>
            <section className="fifth-group-wrapper">
              <Projects />
            </section>
          </Main>
        </div>
      </StyledRootComponent>
    </BrowserRouter>
  );
};

export default RootComponent;
