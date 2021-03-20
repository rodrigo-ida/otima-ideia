import StyledExperience from "./styledExperience";
import {ReactComponent as Logo} from '../../assets/icons/experience-section/logo.svg'

const Experience = () => {
  return (
    <StyledExperience>
      <div className="title-wrapper">
        <h1 className="background-letters">Experience</h1>
        <h3 className="title">Course Experience</h3>
      </div>
      <div className="modality-btn-wrapper">
        <button className="btn left-btn">After attending the course</button>
        <button className="btn middle-btn">During the Period</button>
        <button className="btn right-btn checked">
          Before attending the course
        </button>
      </div>
      <div className="description-logo-wrapper">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <div className="description-wrapper">
          <p className="description">
            This course has been attempted by zero people who are eager to learn
            product design, especially user experience and user interface, so it
            is not a prerequisite, but due to the limited capacity of the
            priority course with early enrolled people, others can participate
            in future courses. .  Obviously, the ability to use tools like Adobe
            Photoshop and Adobe Illustrator as well as Microsoft Word, Excel
            tools, and of course a lot of enthusiasm and energy,
          </p>
        </div>
      </div>
    </StyledExperience>
  );
};

export default Experience;
