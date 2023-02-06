import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const LittleInfo = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1 className="lil">
            Through our programs, events, projects and webinar series we have
            reached…
          </h1>
        </Col>
        <Col>more text</Col>
      </Row>
    </Container>
  );
};

export default LittleInfo;
