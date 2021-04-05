import styled from "styled-components";

const StyledAbout = styled.div`
  margin-top: 290px;
  width: 100%;
  height: 508px;
  padding: 30px 7%;
  background: white;
  box-shadow: 50px 50px 99px #4141410f;

  border-radius: 30px;
  opacity: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .video-title-icons-wrapper {
    height: 40%;

    display: flex;
    justify-content: space-between;

    .video-wrapper {
      width: 52%;
      position: relative;
      top: -100%;

      .video {
        width: 100%;
        height: 336px;
        background: #101010;
        border-radius: 30px;
        position: relative;

        .logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          position: absolute;

          svg {
            fill: white;
          }
        }

        .play-button-wrapper {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
          padding: 50px;
        }
      }
    }

    .title-icons-wrapper {
      width: 40%;
      display: flex;
      justify-content: space-between;

      .title-wrapper {
        text-align: center;
      }

      .title {
        font-size: 2em;
        position: relative;
        z-index: 2;
        top: 40%;
      }
      .background-letters {
        font-size: 6.5em;
        font-weight: bolder;
        position: relative;
        z-index: 1;
        color: rgba(50%, 50%, 50%, 0.3);
      }

      .icons-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px 0;
      }
    }
  }

  .description-wrapper {
    height: 44%;

    .paragraph {
      font-size: 1.1875em;
      line-height: 2em;
    }
  }

  @media (max-width: 900px) {

    margin-top: 65px;

    height: auto;

    .video-title-icons-wrapper {
      height: 40%;

      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .video-wrapper {
        width: 100%;
        position: static;
        padding: 20px 0;


        .video {
          width: 100%;
          height: 230px;
          background: #101010;
          border-radius: 30px;
          position: relative;

          .logo-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            position: absolute;

          }

          .play-button-wrapper {
            padding: 30px;


          }
        }
      }

      .title-icons-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      order: -1;

      .title-wrapper {
        text-align: center;
      }

      .title {
        font-size: 2em;
        position: relative;
        z-index: 2;
        top: 58%;

      }
      .background-letters {
        font-size: 6rem;
        
        font-weight: bolder;
        position: relative;
        z-index: 1;
        color: rgba(50%, 50%, 50%, 0.3);
      }
      .icons-wrapper {
        display: none;

      }
      }
    }
  }
`;

export default StyledAbout;
