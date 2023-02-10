import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurClients = () => {
  return (
    <div>
      <h1 className="text-center font-bold font-xlg">Our Clients</h1>
      <div>
        <Container>
          <Row>
            <Col>
              <button className="payhippo-btn">
                <img src="payhippo-logo.svg" alt="payhippo" className="mx-auto" />
              </button>
            </Col>
            <Col>
              <button className="business-btn">
                <img src="OK_New_Business.png" alt="business" />
              </button>
            </Col>
            <Col>
              <button className="enterprise2-btn">
                <img src="enterprise2.png" alt="enterprise2" />
              </button>
            </Col>
            <Col>
            <button className="gayo-btn">
                <img src="gayo.png" alt="gayo" className="mx-auto"/>
            </button>
            </Col>
            <Col>
            <button className="isc-btn">
                <img src="isc.png" alt="isc" className="mx-auto"/>
            </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurClients;
