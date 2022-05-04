import React, { useState, useEffect } from "react";
import { getData } from "../utils/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useParams } from "react-router-dom";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

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
      <Gallery>
        <Item key={item}
      original={item}
      thumbnail={item}
      width="1024"
      height="600"
      >
        {({ ref, open }) =>
      <SplideSlide key={item}>
        <img ref={ref} onClick={open} className="screenshot" src={item} />
      </SplideSlide>
        }
        </Item>
      </Gallery>
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