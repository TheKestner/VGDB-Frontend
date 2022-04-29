import React, { useState, useEffect } from "react";
import { getData } from "../utils/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Slider() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setItems(data);
    });
  }, []);


  let games = items.map((item) => {
    return (
      <SplideSlide key={item.id}>
        <Card style={{ width: "15rem", margin: "auto" }}>
          <Link to={`game/${item.title}`}>
            <Card.Img variant="top" src={item.coverart} alt="Image 1" />
          </Link>
          <Card.Body>
            <Card.Title> {item.title} </Card.Title>
            <Card.Text>{item.genre[0]}</Card.Text>
          </Card.Body>
        </Card>
      </SplideSlide>
    );
  });

  return (
    <Container>
      <Splide
        default
        options={{
          pagination: false,
          type: "loop",
          perPage: 4,
          perMove: 1,
          breakpoints: {
            640: {
              perPage: 2,
            },
          },
        }}
        aria-label="Popular Game Images"
      >
        {games}
      </Splide>
    </Container>
  );
}
