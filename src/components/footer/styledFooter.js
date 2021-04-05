import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 10vh 0;
  align-items: center;

  .icons-wrapper {
    width: 10vw;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 900px){

    flex-direction: column;
    align-items: center;

    padding: 20px 0;
    height: 40%;


    .icons-wrapper {

        width: 50%;
        /* padding-bottom: 20px; */



    }


  }
`;

export default StyledFooter;
