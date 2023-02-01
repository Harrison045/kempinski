import React, { useState } from "react";
import { Col, ModalBody } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import EditGuestForm from "./EditGuestForm";

const Guest = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteGuest(props.guestInfo.id);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalBody>
            <EditGuestForm
               guestInfo={props.guestInfo}
              editGuest={props.editGuest}
              closeModal={handleClose}
            />
          </ModalBody>
        </Modal.Body>
      </Modal>

      <Col md="5">
        <Card style={{ marginTop: "2rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Kempinski Guests
            </Card.Subtitle>
            <Card.Title>{props.guestInfo.name}</Card.Title>
            <Card.Text>
              <p>Day/s of Stay:{props.guestInfo.days}</p>
              <p>Phone Number:{props.guestInfo.number}</p>
            </Card.Text>
            <Card.Link href="#" onClick={handleShow}>
              Edit
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Guest;
