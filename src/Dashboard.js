import React, { useState, useEffect } from "react";
import { FiTrash2 } from 'react-icons/fi';
import { Container, Card, Button, CardImg } from "react-bootstrap";
import "./App.css";
import Add from "./Add";

function Dashboard(props) {
  const [events, cEvents] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const [show, SetShow] = useState(false);

  const handleShow = () => SetShow(true);
  const handleClose = () => SetShow(false);

  const refreshList = () => {
    props.client.getAllEvents().then((response) => cEvents(response.data));
  };

  const removeEvent = (id) => {
    props.client.removeEvent(id).then(() => refreshList());
  };

  const updateEvent = (event) => {
    cCurrent(event);
    handleShow();
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return events.map((current) => {
      return (
        <div key={current.id}>

      <Card className="otherCard" style={{ width: "100%" }}>
        <Card.Header as="h5" className="card-header">
          <Card.Title>
            {current.name}
              <span className="float-right">{current.date}<br/>
              Price: <span className="bold">£{current.price}</span>
              </span>
          </Card.Title>
          <Card.Subtitle className="text-muted">
          {current.location}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text className="mb-1">
          {current.info}
          </Card.Text>
          <span className="card-trash">
            <Button onClick={() => updateEvent(current)} variant="primary">Update</Button>
              &nbsp;&nbsp;
            <Button onClick={() => removeEvent(current._id)} variant="danger"><FiTrash2 /></Button>
          </span>
        </Card.Body>
      </Card>
      <br/>
    </div>
      );
    });
  };

  return (
    <>
    <br/>
    <Container>
    <Card className="otherCard" style={{ width: "100%" }}>
        <Card.Header as="h5" className="card-header">
          <Card.Title>
            Add Your Event Here
              <span className="float-right">When is it?<br/>
              Price: <span className="bold">£</span>
              </span>
          </Card.Title>
          <Card.Subtitle className="text-muted">
          Where is it?
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text className="mb-1">
          Tells us more about your event... 
          </Card.Text>
          <span className="card-trash">
            <Button onClick={() => handleShow()} variant="primary">Add Event</Button>
          </span>
        </Card.Body>

      </Card></Container>
      <br/>
      <Container>{buildrows()}</Container>
      <br />
      <Add
        client={props.client}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentEvent={current}
      />
    </>
  );
}

export default Dashboard;
