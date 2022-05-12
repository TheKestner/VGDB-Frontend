import React, { useState, useEffect } from "react";
import { getData } from "../utils/data";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams} from "react-router-dom";

export default function Perspective() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setItems(data);
    });
  }, []);

  let { perspective } = useParams();

    return (
        <Container fluid="md">
          <h2 className="genreT">
            {perspective}
          </h2>
        {items
        .filter(item => item.perspective.includes(perspective))
        .map((item) => <Detail key={item.id} item={item} />)}
        </Container>
    );
  }

const Detail = ({ item }) => {
  return (
    <Container fluid="md">
    <Row>
      <Col sm={1}>
        <img className="art" src={item.coverart}></img>
      </Col>
      <Col lg={7}>
      <Row className="dRow">
      <Link to={`/game/${item.title}`}>
      <div>{item.title}</div>
      </Link>
      <div>{item.release_date}</div>

      </Row>
      <div className="platform">{item.platforms.join(" / ")} </div>
      </Col>
    </Row>
  </Container>
  );
};