import React, { useState, useEffect } from "react";
import { FiTrash2 } from 'react-icons/fi';
import { Container, Card, Button, CardImg } from "react-bootstrap";
import "./App.css";
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
          <a className="card-trash">
          <Button onClick={() => updateEvent(current)} variant="primary">Update</Button>&nbsp;&nbsp;
          <Button onClick={() => removeEvent(current._id)} variant="danger"><FiTrash2 /></Button>
          </a>
        </Card.Body>
      </Card>
      <br/>
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
