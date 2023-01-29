import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResturantsBars = () => {
  return (
    <Container>
      <Row>
        <Col className="words ">
          <img src="resturant.jpeg" alt="resturants" className="word2" />
        </Col>
        <Col className="words">
          <h1>Restaurants & Bars</h1>
          <p>
            Experience Mediterranean, European, and popular Oriental classics.
            Indulge in our local interpretations of Ghanaian regional
            favourites, amidst artwork that reflects the soul of Accra.
          </p>
          <h1>Papillon Restaurant</h1>
          <br />
          <h1>The Gallery Bar</h1>
          <br />
          <h1>Cedar Garden</h1>
          <br />
          <h1>Papillon Pool Lounge</h1>
          <br />
          <h1>Spa Cafe</h1>
          <br />
          <button className="read">READ MORE</button>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default ResturantsBars;
