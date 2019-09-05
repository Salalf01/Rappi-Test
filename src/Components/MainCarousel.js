import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import soda from '../Assets/img/soda.jpg';
import wine from '../Assets/img/wine.jpg';
import breakfast from '../Assets/img/breakfast.jpg';
import almuerzo from '../Assets/img/almuerzo.jpg';
const MainCarousel = () => {
  return (
    <MDBContainer className="carousel-container">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner className="carousel-container">
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="carousel-img"
                src={soda}
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Bebidas</h3>
              <p>Encuentra tus bebidas favoritas</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="carousel-img"
                src={wine}
                alt="Second slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Vinos</h3>
              <p>Los Mejores Vinos</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="carousel-img"
                src={breakfast}
                alt="Third slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Desayunos</h3>
              <p>Lo Mejor para tus desayunos</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="carousel-img"
                src={almuerzo}
                alt="Third slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Almuerzos</h3>
              <p>Las Mejores cosas para Almorzar</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default MainCarousel;