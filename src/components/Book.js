import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddGuestForm from "./AddGuestForm";
// import GuestDetails from './GuestDetails';
import Guests from "./Guests";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [
      
          
        
       
      ],
    };
  }
  addNewGuest = (guest) => {
    guest.id = Math.random().toString;
    this.setState({
      guests: [...this.state.guests, guest],
    });
  };
  deleteGuest = (id) => {
    let unDeletedGuest = this.state.guests.filter((guest) => guest.id !== id);
    this.setState({
      guests: unDeletedGuest,
    });
  };
  editGuest = (id, updatedGuest) => {
    this.setState({
      guests: this.state.guests.map(guest => guest.id === id ? updatedGuest : guest),
    });
  };
  render() {
    return (
      <div className="book">
        <Container fluid>
          <Row>
            <Col md="4" style={{ marginTop: "2rem" }}>
              <AddGuestForm addGuest={this.addNewGuest} />
            </Col>
            <Col>
              <Guests
                guestData={this.state.guests}
                deleteGuest={this.deleteGuest}
                editGuest={this.editGuest}
              />
            </Col>
          </Row>
        </Container>
        {/* <GuestDetails/> */}
      </div>
    );
  }
}

export default Book;
