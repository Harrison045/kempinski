import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class GuestDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [
        {
          name: "Mark",
          days: 13,
          number: "0243469959",
        },
        {
          name: "wank",
          days: 16,
          number: "566433564666676",
        },
      ],
      name: "",
      days: "",
      number: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });

  };
  handleSubmit=(e)=>{
    e.preventDefault();
    const newGuest ={
        name: this.state.name,
        days: this.state.days,
        number: this.state.number,
    }
    this.setState({
        guests:[...this.state.guests, newGuest],
        name:"",
        days:"",
        number:""
    })
  }
  render() {
    return (
      <section style={{ margin: "2rem" }}>
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

        {this.state.guests.map((item, index) => {
          return (
            <div key={index}>
              <h3>Name:{item.name}</h3>
              <p>{item.days}</p>
              <p>{item.number}</p>
              <hr />
            </div>
          );
        })}
      </section>
    );
  }
}

export default GuestDetails;
