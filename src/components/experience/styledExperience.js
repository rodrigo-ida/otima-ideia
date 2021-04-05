import styled from "styled-components";

const StyledExperience = styled.div`
  margin-top: 123px;
  padding: 12vh 7%;

  background-color: white;

  height: 92.4vh;

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
      svg {
        width: 17vw;
        height: 26vh;
      }
    }
    .description-wrapper {
      width: 67%;

      .description {
        line-height: 2em;
        padding-left: 15px;

        @media (min-width: 1900px) {
          line-height: 2.3em;
          font-size: 1.2rem;
          padding-left: 80px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    margin-top: 65px;
    padding: 12vh 0%;
    background-color: white;
    height: auto;

    .modality-btn-wrapper {

      padding: 15px 0;

      .btn {
        width: 25vw;

      }

      .left-btn {
      }
      .right-btn {
      }

      .checked {
      }
    }

    .description-logo-wrapper {

      padding: 0 5vw;

      .logo-wrapper {
        display: none;

        svg {
        }
      }
      .description-wrapper {
        width: 100%;

        .description {
        }
      }
    }
  }
`;

export default StyledExperience;
