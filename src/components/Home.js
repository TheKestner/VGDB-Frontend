import React from "react";
import { Container } from "react-bootstrap";
import Slider from "./Slider";

export default function Home() {
  return (
    <Container>
    <h2 clasName="popular">Popular Games</h2>
    <Slider />
    </Container>
  );
}