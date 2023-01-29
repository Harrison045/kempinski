import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Spa = () => {
  return (
    <div className="head">
      <Container>
        <Row>
          <Col className="word">
            <h1 className="spa">Resense Spa</h1>
            <br />
            <p className="word">
              The Resense Spa spans three floors of blissful healing for mind,
              body and spirit. Each floor is equipped with facilities for
              pampering spa treatments, dedicated to beauty, fitness and serene
              wellness.
            </p>
          </Col>
          <Col>
            <img src="pot.jpeg" alt="pot" className="pots" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Spa;
