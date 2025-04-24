import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");
    const image = document.getElementById("hello-img");

    if (input && input !== "." && isNaN(Number(input)) === true) {
      greeting.innerText = "Hello, " + input + "!";
      image.style.display = "block";
    } else {
      greeting.innerText = "Hello, there!";
      image.style.display = "none";
    }
  };

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Form
        className="mb-4 w-100 text-center"
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px" }}
      >
        <Form.Label>Write your first name here:</Form.Label>
        <Form.Control type="text" id="nameInput" placeholder="Your name" />
        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Card style={{ width: "22rem", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        <h4 id="greeting"></h4>
        <img
          id="hello-img"
          src="https://lh3.googleusercontent.com/proxy/XjebavhBPlwTwKSl4TUs7GBzfv-OQx-8goNcpRgD5lhiEofhWq1nmGXic9y3jQWybUyfD2JCpk7cZAANaKYTVToSiWBdWKJpsl-R"
          alt="Hello"
          style={{ width: "150px", marginTop: "10px", display: "none" }}
        />
      </div>
    </Container>
  );
}

export default App;
