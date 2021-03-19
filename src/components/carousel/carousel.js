import StyledCarousel from "./styledCarousel";
import carouselImg from "../../assets/carousel-img.png";
import CarouselArrow from "../../assets/carousel-arrow";

const Carousel = () => {
  return (
    <StyledCarousel>
      <div className="btn-wrapper">
        <button className="left-arrow btn">
          <CarouselArrow />
        </button>
      </div>
      <div className="main-content-wrapper">
        <div className="text-wrapper">
          <div className="title-wrapper">
            <h1 className="title">Product Design Course</h1>
            <h2 className="subtitle">Product Factory</h2>
            <h1 className="faded-background-letters">UI/ UX</h1>
          </div>
          <div className="paragraph-wrapper">
            <p>
              Learn how design thinking, user research, business vision and
              marketing, and finally designing and creating real digital
              products for real users
            </p>
          </div>
          <button className="cta-btn">Start Register</button>
        </div>
        <img
          src={carouselImg}
          className="carousel-img"
          alt="a production factory where apples are transform in ideas"
        />
      </div>
      <div className="btn-wrapper">
        <button className="right-arrow btn">
          <CarouselArrow />
        </button>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
