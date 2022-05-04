import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Slider";
import Indielist from "./Indielist";
import Friendlist from "./Friendslist";


export default function Home() {
  return (
    <Container>
    <h2 className="popular">Popular Games</h2>
    <Slider />
    <Row>
      <Col className="list">
        <h3 className="word">Indie Games</h3>
        <Indielist />
      </Col>
      <Col className="list">
        <h3>Play With Friends</h3>
        <Friendlist />
      </Col>
    </Row>
    </Container>
  );
}