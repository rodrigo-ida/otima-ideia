import styled from "styled-components";
import Img from '../../assets/emailSignIn/mail.svg'


const StyledEmailSignIn = styled.section`
  .content-wrapper {
    display: flex;

    .form-wrapper {
      padding: 80px 0 0 12vw;
      color: white;

      h1 {
        font-size: 2rem;
        font-weight: bolder;
      }

      form {
        padding-top: 30px;

        label {
          display: block;
          width: 75%;
          line-height: 1.8rem;
          padding-bottom: 33px;
        }

        input {
          width: 70%;
          padding: 16px;
          border: none;

          background: #ffffff26;
          border-radius: 16px;
        }

        .message {
          padding-top: 50px;
          opacity: 80%;
          text-align: left;
          font-size: 0.9rem;


          .checked-icon {
            background-color: #29d089;
            border-radius: 65px;
            padding: 4px 6px;
            margin-right: 10px;
          }
        }
      }
    }

    .image-wrapper {

      height: 100%;
      width: 47%;

        position: relative;
      .bigger-img {
        position: absolute;
        width:100%;
        height: 100%;
    opacity: .1;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size:cover;


      }
      .smaller-img {
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;


      }
    }
  }

  @media (max-width: 900px){



    .content-wrapper {

.form-wrapper {

  form {

    .message {
      line-height:1.2rem;
    }
  }
}
      .image-wrapper {

        display: none;

      }
      }

    
  }
`;

export default StyledEmailSignIn;
