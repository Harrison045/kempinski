import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddGuestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      days: "",
      number: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  console.log(this.state)
};
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addGuest(this.state)
    this.setState({
        name:"",
        days:"",
        number:"",
    })
    
    
    console.log("form submitted", this.state);
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-group"
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

export default AddGuestForm;
