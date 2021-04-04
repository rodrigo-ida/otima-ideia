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
    background: rgba(255, 255, 255, 0.1);
    border-radius: 31px;
    border: none;
    color: white;
  }

  .burger-btn {
    display: none;
  }

  @media (max-width: 900px) {
    .logo-link {
      .logo {
        min-width: 60px;

      }
    }

    .links-list {
    display: ${props => props.showLinks ? 'flex' : 'none' };
    position: absolute;
    top: 88px;
    right: 0%;
    z-index: 10;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
    background: black;
    height: 80%;


      li {
        padding: 10px;
        a {
    color: white;
        }
      }
    }

    .register-btn {
      display: none;
    }

    .burger-btn {
      display: flex;
      flex-wrap: wrap;
      height: 20px;
      width: 30px;
      flex-direction: column;
      justify-content: space-between;
      background-color: transparent;
      border: none;

      .burger-stripes {
        width: 100%;
        height: 2px;
        background-color: white;
      }
    }
  }
`;

export default StyledNavbar;
