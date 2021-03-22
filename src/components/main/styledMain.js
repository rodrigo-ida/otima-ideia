import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  height: auto;

  .first-group-wrapper {
    padding: 50px 12vw;
    background-color: #fafafa;
    height: 231vh;

    .carousel {
      margin-top: -51vh;
    }

    .about-us {
      width: 100%;
      height: auto;
    }
  }

  .second-group-wrapper {
    margin-top: 62vh;
    padding: 0px 12vw;
    position: relative;
    z-index: 3;

    height: 461vh;
    .sessions-wrapper {
      margin-top: 13vh;
    }
  }

  .third-group-wrapper {
    background-color: #fafafa;
    padding: 50vh 12vw 100px 12vw;
    position: relative;
    z-index: 1;

    .faq-wrapper{

    margin-top: 13vh;
    }

  }

  .fourth-group-wrapper{
    background-color: black;
    height: 55vh;

  }

  .fifth-group-wrapper{
    
  }
`;

export default StyledMain;
