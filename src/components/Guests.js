import React from "react";
import { Container, Row } from "react-bootstrap";
import Guest from "./Guest";

const Guests = (props) => {
  return (
    <Container>
      <Row>
        {props.guestData.map((guest) => {
          return (
            <Guest
              guestInfo={guest}
              key={guest.id}
              deleteGuest={props.deleteGuest}
              editGuest={props.editGuest}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Guests;
