import React from "react";
import { motion } from "framer-motion";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhatWeDo = () => {
  return (
    <div>
      <div className="what">
        <motion.h1
          className="what1"
          initial={{ x: -1000 }}
          animate={{ x: [0, 1400, 0] }}
          transition={{
            duration: 3,
            delay: 0.2,
          }}
          // whileHover={{scale:0.9, opacity:0.2}}
        >
          What We Do
        </motion.h1>
        <motion.p
          className="what2"
          initial={{ x: -900 }}
          animate={{ x: [0, 1000, 0] }}
          transition={{
            duration: 3,
            delay: 0.2,
          }}
        >
          We have curated the right combination of support services <br /> that
          allows us to provide you value for your money and time
        </motion.p> 
      </div>
      <br/>
      <br/>
      <br/>
      <Container>
         <Row>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Img src="group2.jpeg" />
              <Card.Body>
                <Card.Title>Product Design</Card.Title>
                <Card.Text>
                  We support organisations develop and test new products and
                  services for the region. Using our vast networks to acquire
                  insightful customer feedback to ensure products and services
                  are developed which are fit for the market.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="woman2.jpeg" />
              <Card.Body className="card1">
                <Card.Title>Market Entry</Card.Title>
                <Card.Text>
                  We support organisations entering West African markets by
                  providing market expertise, support through business
                  incorporation, building partnership and sales pipelines and
                  introductions to key connections in the market to ensure your
                  venture is a success.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="doctor.jpeg" />
              <Card.Body>
                <Card.Title>Business Strategy Support</Card.Title>
                <Card.Text>
                  As a management partner, we come in to help build an internal
                  structure and strategy that assures business growth. Our local
                  team is built up to re-engineer key areas in your business and
                  co-create the winning strategy for your market.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="startup_woman-scaled.jpeg" />
              <Card.Body className="card-body">
                <Card.Title>Project Management Services</Card.Title>
                <Card.Text>
                  Our team helps organisations develop and deliver
                  entrepreneurship projects which have real impact across
                  Sub-Saharan Africa. We support NGOs, government and private
                  companies to deliver high impact entrepreneurship focused
                  projects which have real sustainable effects for the region.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
       
      
    </div>
  );
};

export default WhatWeDo;
