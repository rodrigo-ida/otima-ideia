import StyledArticle from "./styledArticle";
import {ReactComponent as ClockIcon} from "../../../assets/sessions/icons/clock.svg"
import {ReactComponent as CalendarIcon} from "../../../assets/sessions/icons/calendar.svg"
import {ReactComponent as PlayBtnIcon} from "../../../assets/sessions/icons/play-btn.svg"

const Article = (props) => {

  const photo = props.profilePhoto.map( (e, i) => (
    <img src={props.profilePhoto[i]} key={i + 'profilePhoto'} alt="teacher" />
  ))
  
  return(
  <StyledArticle>
    <header>
      <div className="header-content-wrapper">
        <h1 className="title">{props.sessionNumber} Section</h1>
        <div className="duration-wrapper">

          <ClockIcon />
          <p className="duration">Duration: 6 hours</p>
        </div>
        <div className="date-wrapper">
          <CalendarIcon />
          <p className="date">Date: November 5</p>
        </div>
        <div className="view-wrapper">
          <PlayBtnIcon />
          <p className="view">View Video</p>
        </div>
      </div>
    </header>
    <div className="profile-photo">
      {photo}
      
    </div>
    <div className="description-wrapper">
      <p className="description">
        {props.description}
      </p>
    </div>
  </StyledArticle>
)};

export default Article;