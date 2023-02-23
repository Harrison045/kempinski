import { Col, Container, Row } from "react-bootstrap";

const Info2 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <img src="Drinking.jpeg" alt="female" className="info2-img" />
          </Col>
          <Col md={6} sm={12} className="py-20 px-5">
            <p>
              Throughout our interactions with entrepreneurs/founders from
              Ghana, Nigeria, and other African countries, we have come to
              observe the striking similarities in the challenges they are faced
              with; inadequate support systems and infrastructure that
              facilitate sustainable growth. We aim to build a support community
              that provides value for startups and SMEs across Africa by
              building valuable collaborations.{" "}
            </p>
            <br/>
            <p>
              This is why we are building a community that provides value for
              startups and SMEs across Africa by creating strategic
              collaborations.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info2;
