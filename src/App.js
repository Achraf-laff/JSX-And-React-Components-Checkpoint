import React, { useState } from "react";
import { Card, Container, Alert, Form } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidName = (name) => {
    const trimmed = name.trim();
    return trimmed !== "" && trimmed !== ".";
  };

  const handleNameSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSubmitted(true);
    }
  };

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      {/* Alert with name input */}
      <Alert variant="info" className="w-100 text-center">
        <p className="mb-2">Write your first name here:</p>
        <Form.Control
          type="text"
          placeholder="Your name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onKeyDown={handleNameSubmit}
          style={{ maxWidth: "300px", margin: "0 auto" }}
        />
      </Alert>

      {/* Card with product info */}
      <Card style={{ width: "22rem", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      {/* Greeting and Image */}
      <div className="mt-4 text-center">
        {submitted && (
          <>
            <h4>
              {isValidName(firstName)
                ? `Hello, ${firstName.trim()}!`
                : "Hello, there!"}
            </h4>
            {isValidName(firstName) && (
              <img
                src="https://lh3.googleusercontent.com/proxy/XjebavhBPlwTwKSl4TUs7GBzfv-OQx-8goNcpRgD5lhiEofhWq1nmGXic9y3jQWybUyfD2JCpk7cZAANaKYTVToSiWBdWKJpsl-R"
                alt="Hello"
                style={{ width: "300px", marginTop: "10px" }}
              />
            )}
          </>
        )}
      </div>
    </Container>
  );
}

export default App;
