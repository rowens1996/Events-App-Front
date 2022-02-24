import React, { useState, useEffect } from "react";
import { Container, Card, Button, CardImg } from "react-bootstrap";
import Add from "./Add";

function Dashboard(props) {
  const [events, cEvents] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getAllEvents().then((response) => cEvents(response.data));
  };

  const removeEvent = (id) => {
    props.client.removeEvent(id).then(() => refreshList());
  };

  const updateEvent = (event) => {
    cCurrent(event);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return events.map((current) => {
      return (
        <div key={current.id}>
      <Card className="otherCard" style={{ width: "18rem" }}>
        <Card.Header as="h5">
          <Card.Title>
            {current.name}
          </Card.Title>
          <Card.Subtitle className="text-muted">
            {current.date} {current.location} £{current.price}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text className="mb-1">
          {current.info}
          </Card.Text>
          <Button onClick={() => removeEvent(current._id)} variant="primary">Delete</Button>
          <Button onClick={() => updateEvent(current)} variant="primary">Update</Button>
        </Card.Body>
      </Card>
    </div>
      );
    });
  };

  return (
    <>
      Dashboard
      <Container>
        {buildrows()}
        </Container> 
  
      <br />
      <br />
      <Add
        client={props.client}
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
