import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Form, Modal, ModalTitle } from "react-bootstrap/";

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const submitHandler = (e) => {
    e.preventDefault();
    e.persist();
    console.log(e.target.date.value);
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
      );
    } else {
      result = props.client.addEvent(
        e.target.name.value,
        e.target.location.value,
        e.target.date.value,
        e.target.price.value,
        e.target.info.value
      );
    }
    result
      .then(() => {
        cDisabled(false);
        e.target.reset();
        props.refreshList();
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  };

  return (
    <Modal size="xl" show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <ModalTitle>{props.formTitle} Event</ModalTitle>
      </Modal.Header>
      <Form onSubmit={(e) => submitHandler(e)} id="addForm">
        <Modal.Body>
          <Container id="formContainer">
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
                  name="location"
                  disabled={disabled}
                />
              </Form.Group>

              <Form.Group controlId="eventDate">
                <Form.Label>Date</Form.Label>
                <DatePicker
                  name="date"
                  placeholderText="Click to select a date"
                  dateFormat="dd-MM-yyyy"
                  closeOnScroll={true}
                  selected={startDate}
                  showPopperArrow={false}
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Group>

              <Form.Group controlId="eventPrice">
                <Form.Label>Ticket Price (£)</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={props.currentEvent?.price}
                  name="price"
                  disabled={disabled}
                />
              </Form.Group>

              <Form.Group controlId="textInput">
                <Form.Label>Info</Form.Label>
                <Form.Control
                  name="info"
                  as="textarea"
                  rows={5}
                  defaultValue={props.currentEvent?.info}
                  disabled={disabled}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={props.handleClose}
              >
                Submit
              </Button>
           
          </Container>
        </Modal.Body>
      </Form>
    </Modal>
  );
}

export default Add;
