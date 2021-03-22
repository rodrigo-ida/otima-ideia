import StyledSessions from "./styledSessions";
import TitleGenerator from "../../util/titleGenerator";
import sessionData from "../../assets/sessions/sessionData";


import StyledArticle from './article/article'



const allsessions = sessionData.map(e => {

  return(
    <StyledArticle sessionNumber={e.sessionNumber} profilePhoto={e.profilePhoto} description={e.description} />

  )
})

const Sessions = () => {
  return (
    <StyledSessions>
      <TitleGenerator title="Sessions" backgroundLetters="Sessions" />
      <section className="schedule">
        {allsessions}
        
      </section>
    </StyledSessions>
  );
};

export default Sessions;
