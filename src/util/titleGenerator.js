import styled from "styled-components";

const StyledTitle = styled.div`
  .title-wrapper {
    justify-content: center;
    align-items: center;
    display: flex;

    .title {
      font-size: 1.6vw;
      font-weight: bolder;
    }
    .background-letters {
      font-size: 6.25vw;
      opacity: 0.12;
      font-weight: bolder;
      position: absolute;
    }
  }

  @media (max-width: 900px) {
    .title-wrapper {
    .title {
      font-size: calc(1vw + 1rem);
      font-weight: bolder;
    }
    .background-letters {
      font-size: calc(10vw + 1rem);
      opacity: 0.12;
      font-weight: bolder;
      position: absolute;
    }
  }
  }
`;

const TitleGenerator = (props) => {
  return (
    <StyledTitle>
      <div className="title-wrapper">
        <h1 className="background-letters">{props.backgroundLetters}</h1>
        <h3 className="title">{props.title}</h3>
      </div>
    </StyledTitle>
  );
};

export default TitleGenerator;
