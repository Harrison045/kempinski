import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Info1 = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="kem">KEMPINSKI HOTEL GOLD COAST CITY ACCRA</h1>
          <br />
          <p className="text1">
            Step into our luxury business and lifestyle destination in the heart
            of Accra, conveniently located in the downtown business district and
            minutes away from Accra's national centre for culture and art.
          </p>
          <br />
          <button className="button" variant="light">
            <strong>HOTEL DETAILS</strong>
          </button>
        </Col>
        <Col className="col1">
          <img src="HARRI.PNG" alt="Harri" className="imag" />
          <br />
          <div>
            <img src="mail.png" alt="mail" className="mail" />
            <p className="text-center reservation">Reservations.accra@kempinski.com</p>
          </div>
          <div>
            <img src="phone.jfif" alt="phone" className="phone" />
            <p className="text-center call">+233 242 436000</p>
          </div>
          <div>
            <img src="location.jfif" alt="location" className="location" />
            <p className="text-center place">Accra, Ghana</p>
          </div>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      
    </Container>
  );
};

export default Info1;
