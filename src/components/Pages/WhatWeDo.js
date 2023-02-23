import React from "react";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhatWeDo = () => {
  return (
    <div>
      <div className="what">
        <h1 className="what1 hover:font-bold hover:underline"> What We Do</h1>
        <br />
        <p className="what2 hover:text-rose-900">
          We have curated the right combination of support services <br /> that
          allows us to provide you value for your money and time
        </p>
      </div>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="STL.jpeg"
                  alt="group2.jpeg"
                />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Product Design
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  We support organisations develop and test new products and
                  services for the region. Using our vast networks to acquire
                  insightful customer feedback to ensure products and services
                  are developed which are fit for the market.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="woman2.jpeg"
                  alt="group2.jpeg"
                />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Market Entry
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  We support organisations entering West African markets by
                  providing market expertise, support through business
                  incorporation, building partnership and sales pipelines and
                  introductions to key connections in the market to ensure your
                  venture is a success.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="doctor.jpeg"
                  alt="group2.jpeg"
                />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Business Strategy Support
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  As a management partner, we come in to help build an internal
                  structure and strategy that assures business growth. Our local
                  team is built up to re-engineer key areas in your business and
                  co-create the winning strategy for your market.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={12}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="startup_woman-scaled.jpeg"
                  alt="group2.jpeg"
                />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Management Services
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Our team helps organisations develop and deliver
                  entrepreneurship projects which have real impact across
                  Sub-Saharan Africa. We support NGOs, government and private
                  companies to deliver high impact entrepreneurship focused
                  projects which have real sustainable effects for the region.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatWeDo;
