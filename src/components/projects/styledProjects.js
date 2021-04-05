import styled from "styled-components";

const StyledProjects = styled.section`
  width: 100%;
  padding: 10vh 12vw;
  margin-top: 150px;

  background-color: white;
  box-shadow: 50px 50px 99px #2222220f;

  .main-content-wrapper {
    display: flex;
    width: 100%;
    padding: 60px 0;

    @media (min-height: 1000px) {
      padding: 100px 0 27px 0;
    }

    .text-wrapper {
      width: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .paragraph-wrapper {
        .benefits-title {
          font-weight: bolder;
          font-size: 2.3rem;
          padding: 2rem 0;

          .bullet {
            display: inline-block;
            width: 30px;
            height: 30px;
            background-color: black;
            border-radius: 40px;
          }
        }

        .description {
          line-height: 3rem;
          font-size: 1.1rem;
        }

        .benefits {
          padding-top: 40px;
          font-size: 0.8rem;

          @media (min-width: 1900px) {
            font-size: 1.1rem;
            padding-top: 4rem;
          }

          .checked-icon {
            background-color: #29d089;
            border-radius: 65px;
            padding: 7px 10px;
          }

          p {
            line-height: 1.7em;
            font-size: 1.5vw;
            margin-top: 5vh;
          }
        }
      }
      .carousel-counter {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100px;
        height: 50px;
        border-radius: 10px;
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .carousel-wrapper {
      display: flex;
      padding: 2rem 0;
      width: 44%;

      @media (min-height: 1000px) {
        height: 32vw;
      }

      .carousel-content-wrapper {
        padding: 86px;
        height: 100%;
        width: 100%;

        background: #f5f5f5;
        border-radius: 30px;

        .carousel-content {
          width: 100%;
          height: 100%;
          background-color: white;
        }
      }

      .btn-wrapper-left {
        transform: translateX(50px);
      }
      .btn-wrapper-right {
        transform: translateX(-50px);
      }

      .btn-wrapper {
        display: flex;
        align-items: flex-end;
        padding-bottom: 50px;

        .right-arrow {
          transform: rotateY(180deg);
        }

        .btn {
          width: 50px;
          height: 50px;
          background-color: transparent;
          border: 2px solid #000000;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px;

          svg {
            transform: scale(0.2);
            width: 100px;
            height: 120px;
          }
        }
      }
    }
  }

  @media (max-width: 900px){


  padding: 10vh 5vw;
  margin-top: 150px;

  background-color: white;
  box-shadow: 50px 50px 99px #2222220f;

  .main-content-wrapper {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 60px 0 0 0 ;


    .text-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .paragraph-wrapper {
        .benefits-title {
          font-weight: bolder;
          font-size: 2.3rem;
          padding: 2rem 0;

          .bullet {
            display: inline-block;
            width: 30px;
            height: 30px;
            background-color: black;
            border-radius: 40px;
          }
        }

        .description {
          line-height: 3rem;
          font-size: 1.1rem;
        }

        .benefits {
          padding-top: 40px;
          font-size: 1rem;
          line-height: 1.4rem;



          .checked-icon {
            background-color: #29d089;
            border-radius: 65px;
            padding: 7px 10px;
          }

          p {
            line-height: 1.7em;
            font-size: 1.5vw;
            margin-top: 5vh;
          }
        }
      }
      .carousel-counter {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100px;
        height: 50px;
        border-radius: 10px;
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .carousel-wrapper {
      display: flex;
      padding: 2rem 0;
      width: 100%;
    height: 400px;



      .carousel-content-wrapper {
        padding: 86px;
        height: 100%;
        width: 100%;

        background: #f5f5f5;
        border-radius: 30px;

        .carousel-content {
          width: 100%;
          height: 100%;
          background-color: white;
        }
      }

      .btn-wrapper-left {
        transform: translateX(50px);
      }
      .btn-wrapper-right {
        transform: translateX(-50px);
      }

      .btn-wrapper {
        display: flex;
        align-items: flex-end;
        padding-bottom: 50px;

        .right-arrow {
          transform: rotateY(180deg);
        }

        .btn {
          width: 50px;
          height: 50px;
          background-color: transparent;
          border: 2px solid #000000;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px;

          svg {
            transform: scale(0.2);
            width: 100px;
            height: 120px;
          }
        }
      }
    }
  }

  }
`;

export default StyledProjects;
