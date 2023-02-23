import { Col, Container, Row } from "react-bootstrap";

const Info1 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} sm={6}>
            <p>
              Start.Up Lounge Africa is the go-to management partner for SMEs
              across Africa. We are a consultancy based in Ghana with deep
              ecosystem knowledge and connections in the West Africa region.
            </p>{" "}
            <p>
              We utilize our vast network and expertise to support organizations
              to design products fit for market, enter the market and grow their
              market share.
            </p>
            <p>
              We ensure the best customer experience through our team of
              experienced professionals whose knowledge and practical
              understanding of the region allows us to deliver excellence for
              our clients.
            </p>
            <br />
            <br />
            <br />
            <br />
            <p>
              To build strong B2B communities that enable businesses to work
              collaboratively, creating an Africa full of opportunity for
              everyone
            </p>
          </Col>
          <Col md={6} sm={6}>
            <img src="Africa.jpeg" alt="Africa img"/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info1;
