import React, { useState, useEffect } from "react";
import { getData } from "../utils/data";
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
        <Container fluid="md">
          <h2 className="genreT">
            {genre}
          </h2>
        {items
        .filter(item => item.genre.includes(genre))
        .map((item) => <Detail key={item.id} item={item} />)}
        </Container>
    );
  }

const Detail = ({ item }) => {
  return (
    <Container fluid="md">
    <Row>
      <Col>
        <img className="art" src={item.coverart}></img>
      </Col>
      <Col className="dCol">
      <Row className="dRow">
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