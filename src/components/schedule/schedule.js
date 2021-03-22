import StyledSchedule from './styledSchedule'
import TitleGenerator from '../../util/titleGenerator';
import timePath from '../../assets/schedule/time-path.png'


const Schedule = () => {

    return(
        <StyledSchedule >
            <TitleGenerator title="Schedule" backgroundLetters="Schedule" />
            <div className="schedule-content-wrapper">
                <div className="time-path">
                    <div className="start"><p>Start of course</p></div>
                    <div className="img-path"><img src={timePath} alt="time path"/></div>
                    <div className="end"><p>End of the course</p></div>
                </div>
                <div className="date-wrapper">
                    <div className="start"><p>2019 / 11 / 11</p></div>
                    <div className="end"><p>2019 / 08 / 11</p></div>
                </div>
                <div className="cta-div">
                    <p className="countdown">11</p>
                    <p className="description">Days left to sign up</p>
                    <button className="cta-btn">Register</button>
                </div>
            </div>
        </StyledSchedule>
    )
}

export default Schedule