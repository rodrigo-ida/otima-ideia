import styled from "styled-components";

const StyledCourseFee = styled.section`
  width: 100%;
  /* height: 100vh; */
  padding: 10vh 10px;
  margin-top: 100px;

  background-color: white;
  border-radius: 30px;
  box-shadow: 50px 50px 99px #2222220f;

  .carousel-wrapper {
    display: flex;
    padding: 6rem 0 2rem 0;


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
      justify-content: space-between;
      width: 100%;
      /* padding-bottom: 44px;
    border-bottom: 1px solid gray; */

      .text-wrapper {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .paragraph-wrapper {
          .benefits-title {
            font-weight: bolder;
            font-size: 1.1rem;
          }

          .benefits {
            padding-top: 40px;
            font-size: 0.8rem;

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
      }

      .cta-div {
        background-color: black;
        color: white;
        border-radius: 25px;
        padding: 40px;
        width: 44%;

        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .conditions {
            font-size: 0.8rem;
          }

          .cta-item {
            text-align: center;
            padding: 10px;

            .cta-btn {
              width: 10vw;
              height: 7vh;
              background: #f46632;
              border-radius: 16px;
              color: white;
              border: none;
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  hr {
    width: 90%;
  }

  footer {
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    padding-top: 30px;
  }

  @media (max-width: 900px){

   

  .carousel-wrapper {
   


    .btn-wrapper {
     

      display: none;

      .right-arrow {
      
      }

      .btn {
       
        svg {
         
        }
      }
    }

    .main-content-wrapper {
      
      flex-direction: column;
      padding: 0 10px;
    line-height: 1.4rem;
     
      .text-wrapper {
      
        width: 100%;
        padding-bottom: 15px;



        
      }

      .cta-div {
       
        width: 100%;

        ul {
        



          .cta-item {

            .cta-btn {
             
              min-width: 150px;

            }
          }
        }
      }
    }
  }


  }
`;

export default StyledCourseFee;
