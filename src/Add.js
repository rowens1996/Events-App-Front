import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentEvent) {
      result = props.client.updateEvent(
        props.currentEvent._id,
        e.target.name.value,
        e.target.location.value,
        e.target.date.value,
        e.target.price.value,
        e.target.info.value
      )
      result = props.client.addEvent(
        e.target.name.value,
        e.target.location.value,
        e.target.date.value,
        e.target.price.value,
        e.target.info.value
      );
    }
    result.then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  };

  return (
    <Container>
      <h2>{props.currentEvent ? "Update" : "Add"}</h2>
      <br />
      <Container id="formContainer">
        <Form onSubmit={(e) => submitHandler(e)} id="addForm">
          <Form.Group controlId="eventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.currentEvent?.name}
              name="name"
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group controlId="eventLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.currentEvent?.location}
              name="name"
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group controlId="eventDate">
            <Form.Label>Location</Form.Label>
            <DatePicker
              placeholderText="Click to select a date"
              dateFormat="dd-MM-yyyy"
              closeOnScroll={true}
              selected={startDate}
              showPopperArrow = {false}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>

          <Form.Group controlId="eventPrice">
            <Form.Label>Ticket Price (£)</Form.Label>
            <Form.Control
              type="text"
              defaultValue={props.currentEvent?.price}
              name="name"
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group controlId="textInput">
            <Form.Label>Info</Form.Label>
            <Form.Control
              name="post"
              as="textarea"
              rows={5}
              defaultValue={props.currentEvent?.info}
              disabled={disabled}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
    // <>
    //   {props.currentEvent ? "Update" : "Add"}
    //   <br />

    //   <form onSubmit={(e) => submitHandler(e)} id="addForm">
    //     Name: <br />
    //     <input
    //       type="text"
    //       defaultValue={props.currentEvent?.name}
    //       name="name"
    //       disabled={disabled}
    //     />
    //     <br />
    //     Location: <br />
    //     <input
    //       type="text"
    //       defaultValue={props.currentEvent?.location}
    //       name="location"
    //       disabled={disabled}
    //     />
    //     <br />
    //     Date: <br />
    //     <input
    //       type="text"
    //       defaultValue={props.currentEvent?.date}
    //       name="date"
    //       disabled={disabled}
    //     />
    //     <br />
    //     Price:
    //     <br />
    //     <input
    //       type="text"
    //       defaultValue={props.currentEvent?.price}
    //       name="price"
    //       disabled={disabled}
    //     />
    //     <br />
    //     Info:
    //     <br />
    //     <input
    //       type="text"
    //       defaultValue={props.currentEvent?.info}
    //       name="info"
    //       disabled={disabled}
    //     />
    //     <br />
    //     <button type="submit" disabled={disabled}>
    //       {" "}
    //       Submit{" "}
    //     </button>
    //   </form> 
    //   </>
  );
}

export default Add;
