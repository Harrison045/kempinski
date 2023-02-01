import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EditGuestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.guestInfo.name,
      days: props.guestInfo.days,
      number: props.guestInfo.number,
      id: props.guestInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editGuest(this.state.id, this.state);
    this.setState({
      name: "",
      days: "",
      number: "",
      id:"",
    });
    this.props.closeModal()
}

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Days of Stay</Form.Label>
          <Form.Control
            type="number text"
            name="days"
            placeholder="Enter days to stay"
            value={this.state.days}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="number"
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default EditGuestForm;
