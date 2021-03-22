import styled from "styled-components";

const StyledExperience = styled.div`
  margin-top: 123px;
  padding: 9vh 7%;

  background-color: white;

  /* height: 77.4vh; */
  height: 89.4vh;


  background: #ffffff;
  box-shadow: 50px 50px 99px #2929290f;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  
  .modality-btn-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 25px;

    .btn {
      height: 60px;
      width: 17vw;
      background-color: transparent;

      border: 1px solid #000000;
    }

    .left-btn {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }
    .right-btn {
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    .checked {
      background-color: black;
      color: white;
    }
  }

  .description-logo-wrapper {

    display: flex;
    justify-content: center;


    .logo-wrapper {

        svg{
    width: 17vw;
    height: 26vh;
        }

    }
    .description-wrapper {
      width: 67%;


      .description {
        line-height: 2em;


      }
    }
  }
`;

export default StyledExperience;
