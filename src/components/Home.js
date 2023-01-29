import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 carousel"
              src="Carousel.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 carousel"
              src="carousel2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src="carousel3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src="carousel4.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Carousel.Caption className="cap">
        <h1 className="Text">THE ART OF AFRO-EUROPEAN HOSPITALITY</h1>
      </Carousel.Caption>
      <br />
      <br />
      <br />

      {/* Container */}

      <Container>
        <Row>
          <Col>
            <h1 className="kem">KEMPINSKI HOTEL GOLD COAST CITY ACCRA</h1>
            <br />
            <p className="text1">
              Step into our luxury business and lifestyle destination in the
              heart of Accra, conveniently located in the downtown business
              district and minutes away from Accra's national centre for culture
              and art.
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
              <p className="text-center reservation">
                Reservations.accra@kempinski.com
              </p>
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
        <br />
        <br />
        <br />
      </Container>

      {/* Carousel */}

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-dark"
            src="inside.jpg"
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
        <Carousel.Item className="cat">
          <img className="d-block w-100" src="inside2.jpg" alt="Second slide" />
          <button className="discover">Discover More</button>
          <h3 className="room">Suites</h3>
          <p className="room-text">
            Enjoy the abundant space of a fully equipped residential-style suite{" "}
            <br /> with a seperate living area
          </p>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* RoomsSlides */}

      <Container>
        <Row>
          <Col className="words ">
            <img src="resturant.jpeg" alt="resturants" className="word2" />
          </Col>
          <Col className="words">
            <h1>Restaurants & Bars</h1>
            <br/>
            <p className="word1">
              Experience Mediterranean, European, and popular Oriental classics.
              Indulge in our local interpretations of Ghanaian regional
              favourites, amidst artwork that reflects the soul of Accra.
            </p>
            <br/>
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

      {/* Spa */}

      <div className="head">
        <Container>
          <Row>
            <Col className="word">
              <h1 className="spa">Resense Spa</h1>
              <br />
              <p className="word">
                The Resense Spa spans three floors of blissful<br/> healing for mind,
                body and spirit. Each floor is <br/> equipped with facilities for
                pampering spa <br/> treatments, dedicated to beauty, fitness and
                serene <br/> wellness.
              </p>
              <button className="readmore">READ MORE</button>
            </Col>
            <Col>
              <img src="pot.jpeg" alt="pot" className="pots" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* MeetingsEvents */}

      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col className="meeting">
            <h1>Meetings & Events</h1>
            <p>
              With top-of-the-range facilities complimented by breathtaking
              views and decor, we have the perfect venue for elegant and
              unforgettable events in Accra.
            </p>
            <button className="read">READ MORE</button>
          </Col>

          <Col className="caros">
            <Carousel fade className="caro">
              <Carousel.Item>
                <div className="containers">
                  <img
                    className="d-block w-100"
                    src="first-carousel.jpg"
                    alt="First slide"
                  />
                  <div className="overlay">
                    <div className="text">
                      <p className="event1">
                        We offer elegant and flexible space for you to host your next meeting, wedding or conference.
                         With over 13 meeting spaces, dedicated events and culinary specialist every 
                         Kempinski Accra events is has unique has the story behind it.
                      </p>
                      <hr />
                      <p> ✉️ meetings.accra@kempinski.com</p>
                      <p> 📱+233 242 436000</p>
                    </div>
                  </div>
                </div>

                <Carousel.Caption>
                  <h3 className="carousel-info">Venues</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="containers">
                  <img
                    className="d-block w-100"
                    src="second-carousel.jpg"
                    alt="Second slide"
                  />
                  <div className="overlay">
                    <div className="text">
                      <p className="event2">
                        For amazing offers on the best event and meeting places
                        in Accra, look no further
                      </p>
                      <hr />
                      <p> ✉️ meetings.accra@kempinski.com</p>
                      <p> 📱+233 242 436000</p>
                    </div>
                  </div>
                </div>

                <Carousel.Caption>
                  <h3 className="carousel-info">Inspiring Offers</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="containers">
                  <img
                    className="d-block w-100"
                    src="third-carousel.jpg"
                    alt="Third slide"
                  />
                  <div className="overlay">
                    <div className="text">
                      <p className="event3">
                        Our uniques spaces are designed to the ideal meets and events experiences in Accra,
                         to fit you personalised requirement
                      </p>
                      <hr />
                      <p> ✉️ meetings.accra@kempinski.com</p>
                      <p> 📱+233 242 436000</p>
                    </div>
                  </div>
                </div>
                <Carousel.Caption>
                  <h3 className="carousel-info">Coporate Event</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <div className="show">
        <h1>Show us your @Kempinski</h1>
        <br />
        <p>
          Our guests always travel the world in style. Share your own
          experiences using the username @Kempinski.
        </p>
      </div>
      <br />
      <br />

      <div className="footer">
        <div>
          <Container className="footer-container">
            <Row>
              <Col>
                <div className="footer-info text-left">
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Kempinski Loyalty</p>
                </div>
              </Col>
              <Col>
                <div className="footer-info2">
                  <p>Best Rate Guarantee</p>
                  <p>Modify or cancel your booking</p>
                </div>
              </Col>
              <Col>
                <div className="footer-info3">
                  <p>Sign up for offers, news and travel inspiration</p>
                  <br />
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="input"
                  />
                  {/* <img src="arrow.png" alt="arrow" className="arrow"/> */}
                  <br />

                  <div>
                    <Container>
                      <Row xs="auto">
                        <Col>
                          <button className="social-media">
                            <img
                              src="facebook.png"
                              alt="facebook"
                              className="facebook"
                            />
                          </button>
                        </Col>
                        <Col>
                          <a href="https://web.facebook.com/KempinskiAccra/">
                            <button className="social-media">
                              <img
                                src="twitter.png"
                                alt="twitter"
                                className="twitter"
                              />
                            </button>
                          </a>
                        </Col>
                        <Col>
                          <button className="social-media">
                            <img
                              src="instagram.png"
                              alt="instagram"
                              className="instagram"
                            />
                          </button>
                        </Col>
                        <Col>
                          <button className="social-media">
                            <img src="sino.png" alt="sino" className="sino" />
                          </button>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div></div>
        <br />
        <br />
        <div>
          <Container className="footer-2-container">
            <Row xs="auto">
              <Col>Legal</Col>
              <Col>Privacy Policy</Col>
              <Col>Imprint</Col>
              <Col>Sitemap</Col>
              <Col className="copyright">&copy; 2023 Kempinski Hotels</Col>
              <Col className="global-col">
                <img src="global.png" alt="global logo" className="global" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
