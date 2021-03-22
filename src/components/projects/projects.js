import StyledProjects from "./styledProjects";
import TitleGenerator from "../../util/titleGenerator";
import CarouselArrow from "../../assets/carousel-arrow";

const Projects = () => {
  return (
    <StyledProjects>
      <TitleGenerator title="Projects" backgroundLetters="Projects" />

      <div className="main-content-wrapper">
        <div className="text-wrapper">
          <div className="paragraph-wrapper">
            <h1 className="benefits-title">
              <span className="bullet"></span>Design To Do List app
            </h1>
            <p className="description">
              The previous student design project was the To Do List application
              product factory, The counter examples are the result of the
              efforts of the students and their teamwork in the first course.
            </p>
            <ul>
              <li className="benefits">
                <span className="checked-icon">&#10004;</span> Experience
                in-team work and product designer interactions within the real
                product team.
              </li>
              <li className="benefits">
                <span className="checked-icon">&#10004;</span> Survey real users
                and needs assessment and find the most suitable solution to
                their problems.
              </li>
              <li className="benefits">
                <span className="checked-icon">&#10004;</span> Design experience
                from notebooks to user interface design software.
              </li>
            </ul>
          </div>
          <div className="carousel-counter">
            <p>4 / 15 </p>
          </div>
        </div>
        <div className="carousel-wrapper">
          <div className="btn-wrapper btn-wrapper-left">
            <button className="left-arrow btn">
              <CarouselArrow />
            </button>
          </div>
          <div className="carousel-content-wrapper">
            <div className="carousel-content"></div>
          </div>

          <div className="btn-wrapper btn-wrapper-right">
            <button className="right-arrow btn ">
              <CarouselArrow />
            </button>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
};

export default Projects;
