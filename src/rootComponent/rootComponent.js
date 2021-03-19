import { BrowserRouter } from "react-router-dom";
import StyledRootComponent from "./styledRootComponent";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Main from "../components/main/main";
import Carousel from '../components/carousel/carousel'

const RootComponent = () => {
  return (
    <BrowserRouter>
      <StyledRootComponent>
        <div className="content-wrapper">
          <Header>
            <Navbar />
          </Header>
          <Main>
            <section className="carousel">
              <Carousel />
            </section>
          </Main>
        </div>
      </StyledRootComponent>
    </BrowserRouter>
  );
};

export default RootComponent;
