import styled from "styled-components";

const StyledNavbar = styled.nav`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-link {
    width: 10%;

    .logo {
        fill: white;
      width: 100%;
    }
  }

  .links-list {
    
    display: flex;
    width: 100%;
    justify-content: space-around;


    li {
      a {
        color: #ffffff;
        font-size: 1.1875em;
        text-decoration: none;
        font-family: Dana;
      }
    }
  }

  .register-btn {
    margin-left: 50px;
    width: 116px;
    height: 40px;
    background: rgba(255,255,255, .1);
    border-radius: 31px;
    border: none;
    color: white;
  }
`;

export default StyledNavbar;
