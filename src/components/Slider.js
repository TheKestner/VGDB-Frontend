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

// .filter((item, idx) => idx <= 9)
  let games = items
  .slice(1,10)
  .map((item) => {
    return (
      <SplideSlide key={item.id}>
        <Card style={{ margin: "auto" }}>
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
      <Splide
        default
        options={{
          gap: "20px",
          pagination: false,
          type: "loop",
          perPage: 5,
          perMove: 1,
          breakpoints: {
            1200: {
                perPage: 4,
            },
            990: {
                perPage: 3,
            },
            768: {
                perpage: 2,
            }
          },
        }}
        aria-label="Popular Game Images"
      >
        {games}
      </Splide>
  );
}
