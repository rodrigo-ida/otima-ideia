import StyledProjects from './styledProjects'
import TitleGenerator from '../../util/titleGenerator'
import CarouselArrow from "../../assets/carousel-arrow"; 


const Projects = () => {

    return(
        <StyledProjects >
            <TitleGenerator title="Projects" backgroundLetters="Projects"/>
          <div className="carousel-wrapper">

            <div className="btn-wrapper">
        <button className="left-arrow btn">
          <CarouselArrow />
        </button>
      </div>
      <div className="main-content-wrapper">
        <div className="text-wrapper">
            
          <div className="paragraph-wrapper">
            <ul>
                <li> <h1 className="benefits-title"> What will be our achievements by participating in this course?</h1></li>
                <li className="benefits"><span className="checked-icon">&#10004;</span> Learn the requirements of a product designer from experienced professionals in the field.</li>
                <li className="benefits"><span className="checked-icon">&#10004;</span> Experience in-team work and product designer interactions within the real product team.</li>
                <li className="benefits"><span className="checked-icon">&#10004;</span> Experience working on projects with information and feature lists and real user recognition.</li>
                <li className="benefits"><span className="checked-icon">&#10004;</span> Possibility to take Adobe exams upon completion of course and upon registration. </li>

            </ul>
          </div>
        </div>
        <div className="cta-div">
            <ul>
                <li className="cta-item">4,000,000 Toman</li>
                <li className="cta-item">2,300,000 Toman</li>
                <li className="cta-item conditions">Possibility to pay periodic installment fee.</li>
                <li className="cta-item">
          <button className="cta-btn">Start Register</button>

                </li>
            </ul>

        </div>
      </div>
      <div className="btn-wrapper">
        <button className="right-arrow btn">
          <CarouselArrow />
        </button>
      </div>
      </div>

        </StyledProjects>
    )
}

export default Projects