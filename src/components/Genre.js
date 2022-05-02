import React, { useState, useEffect } from "react";
import { getData } from "../utils/data";
import "@splidejs/react-splide/css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams} from "react-router-dom";

export default function Genre() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setItems(data);
    });
  }, []);

  let { genre } = useParams();

    return (
        <div>
        {items
        .filter(item => item.title === genre)
        .map((item) => <Detail key={item.id} item={item} />)}
        </div>
    );
  }

const Detail = ({ item }) => {
  return (
    <Container fluid="md">
    <Row>
      <Col className="gameArt">
        <img src={item.coverart}></img>
      </Col>
      <Col>
      <Row>
      <Link to={`/game/${item.title}`}>
      <div>{item.title}</div>
      </Link>
      <div>{item.release_date}</div>

      </Row>
        <div className="platform"> Platforms: {item.platforms.join(" / ")} </div>
      </Col>
    </Row>
  </Container>
  );
};