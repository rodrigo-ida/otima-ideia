import styled from 'styled-components'

const StyledTitle = styled.div`

    text-align: center;
    position: relative;

    .title {
      font-size: 1.6vw;
      position: relative;
      top: -44px;
      font-weight: bolder;
    }
    .background-letters {
      font-size: 6.25vw;
      opacity: 0.12;
      font-weight: bolder;
    }
  


`

const TitleGenerator = (props)=>{

    return(

        <StyledTitle>
            <div className="title-wrapper">
        <h1 className="background-letters">{props.backgroundLetters}</h1>
        <h3 className="title">{props.title}</h3>
      </div>
        </StyledTitle>
    )
}

export default TitleGenerator