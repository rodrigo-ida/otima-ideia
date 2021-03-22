import styled from "styled-components";

const StyledSchedule = styled.section`
  padding: 9vw 12vw;

  .schedule-content-wrapper {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .time-path {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10%;
    }

    .date-wrapper {
      padding-top: 40px;

      display: flex;
      justify-content: space-between;
      .start,
      .end {
        background-color: white;
        padding: 2.4rem 0;
        width: 46%;
        box-shadow: 40px 40px 99px #acacac29;
        text-align: center;

        border-radius: 26px;

        p {
          font-size: 2rem;
          font-weight: bolder;
          letter-spacing: 0.8rem;
        }
      }
    }

    .cta-div {

        padding: 5rem 0 0 11rem;
    width: 100%;
    justify-content: space-around;
    display: flex;
    text-align: center;



      .countdown {
        background-color: black;
    color: white;
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
      }
      .description {
        font-size: 2rem;
    font-weight: bolder;
      }
      .cta-btn {
        background: #F46632 0% 0% no-repeat padding-box;
    border-radius: 16px;
    width: 38%;
    color: white;
    border: none;
    font-size: 1.5rem;    
    padding: 0.7rem 0;


 }
    }
  }
`;

export default StyledSchedule;
