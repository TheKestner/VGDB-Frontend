import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from '../utils/data';
import { Container, Row, Col } from "react-bootstrap";

export default function Discover() {
  const [items, setItems] = useState([]);
  useEffect(() => {
      getData()
      .then((data) => {
      setItems(data)
      })
  
  },[]);

  // hook returns an object with a mapping between the URL parameter and its value.
  let { title } = useParams();

    return (
      <div>
        <h2> </h2>
        {items
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
    )
  }