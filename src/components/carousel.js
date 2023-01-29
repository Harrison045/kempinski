import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousels = () => {
  return (
    <div>
      
      <div>


        <Carousel className="cat">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 carousel"
              src="Kem.jfif"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 carousel"
              src="kem2.jfif"
              alt="Second slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src="R.jfif"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
        <Carousel.Caption className="cap">
          <h1 className="Text">THE ART OF AFRO-EUROPEAN HOSPITALITY</h1>
        </Carousel.Caption>
        <br/>
        <br/>
        <br/>
    </div>
  );
};

export default Carousels;
