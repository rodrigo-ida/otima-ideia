import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 100%;
  height: 78vh;
  padding: 10vh 10px;
  


  background-color: white;
  border-radius: 30px;
  display: flex;
  box-shadow: 50px 50px 99px #2222220f;

  .btn-wrapper {
    display: flex;
    align-items: center;

    .right-arrow {
      transform: rotateY(180deg);
    }

    .btn {
      width: 50px;
      height: 100px;
      background-color: transparent;
      border: none;

      svg {
        transform: scale(0.6);
        width: 100%;
        height: 100%;
      }
    }
  }

  .main-content-wrapper {
    display: flex;
    justify-content: space-around;

    .text-wrapper {
      width: 52%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title-wrapper {
        position: relative;

        .title {
          font-size: 3vw;

          font-weight: bold;
          padding-bottom: 15px;
        }
        .subtitle {
          font-size: 2.2vw;

          color: #8d8d8d;
        }
        .faded-background-letters {
          position: absolute;
          top: 2vw;
          background: linear-gradient(
            177deg,
            transparent 36%,
            rgba(5, 5, 5, 0.1) 100%
          );
          font-size: 8.8vw;
          letter-spacing: 0.12em;
          font-weight: bolder;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .paragraph-wrapper {
        p {
          line-height: 1.7em;
          font-size: 1.5vw;
          margin-top: 5vh;
        }
      }

      .cta-btn {
        width: 253px;
        height: 52px;
        background: #f46632;
        border-radius: 16px;
        color: white;
        border: none;
        font-weight: 700;
        font-size: 1.1em;
      }
    }
    .carousel-img {
      width: 38%;
      height: 100%;

    }
  }

  @media (max-width: 900px){


    .main-content-wrapper {

    .text-wrapper {

      width: 90%;
      

      .title-wrapper {

        .title {
          
        }
        .subtitle {


         
        }
        .faded-background-letters {
        
        }
      }

      .paragraph-wrapper {
        p {
              font-size: 1.1rem;

        }
      }

      .cta-btn {
       
      }
    }
    .carousel-img {
     
     display: none;

    }
  }


  }

`;

export default StyledCarousel;
