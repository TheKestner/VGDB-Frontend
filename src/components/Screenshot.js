import React, { useState, useEffect } from "react";
import { getData } from "../utils/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Screenshot() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setItems(data);
    });
  }, []);

  let { title } = useParams();

  let games = items
  .filter(item => item.title === title)
  .map((item) => {
    return (
        item.screenshot.map((item) =>
      <SplideSlide key={item}>
        <img className="screenshot" src={item} />
      </SplideSlide>
      )
    );
  });

  return (
      <Splide
        default
        options={{
            gap         : 10,
            rewind      : true,
            pagination  : false,
            isNavigation: true,
            perPage: 3,
        }}
        aria-label="Popular Game Images"
      >
        {games}
      </Splide>
  );
}