import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from '../utils/data';
import { Container, Row, Col } from "react-bootstrap";

export default function Game() {
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
        .filter(item => item.title === title)
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
          <h2 className="gamedetail">{item.title}</h2>
          <h3 className="gamedetail">{item.release_date}</h3>
          <h4 className="gamedetail">{item.company}</h4>
          </Row>
          Genre:
          <Link to={`/genre/${item.genre}`}>
          <div className="genre"> {item.genre.join(", ")}</div>
          </Link>
            <div className="platform"> Platforms: {item.platforms.join(", ")} </div>
            <div className="mode"> Game Modes: {item.mode.join(", ")}</div>
            <>
            Player Perspective:
            <Link to={`/perspective/${item.perspective}`}>
            <div className="perspective">{item.perspective}</div>
            </Link>
            </>
            <div className="about"> {item.about}</div>
            <div className="franchise"> {item.franchise}</div>
          </Col>
        </Row>
      </Container>
    )
  }

  // {items
  //   .filter(item => item.title === 'Hatoful Boyfriend')
  //   .map((item) => <Detail key={item.id} item={item} />)}
  