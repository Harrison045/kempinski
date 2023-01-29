import React from "react";
import Carousel from "react-bootstrap/Carousel";


const RoomsSlides = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-dark"
            src="inside.jpeg"
            alt="First slide"
          />
          <button className="discover">Discover More</button>
          <h3 className="room">Rooms</h3>
          <p className="room-text">
            Feel right at home in elegant modern rooms with stylish African{" "}
            <br />
            touch
          </p>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className="cat">
          <img
            className="d-block w-100"
            src="inside2.jpeg"
            alt="Second slide"
          />
          <button className="discover">Discover More</button>
          <h3 className="room">Suites</h3>
          <p className="room-text">
            Enjoy the abundant space of a fully equipped residential-style suite{" "}
            <br /> with a seperate living area
          </p>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
// };

export default RoomsSlides;
