import {React, useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getData, getFav, getSearch } from '../utils/data';

export default function Followed() {

const [items, setItems] = useState([]);
useEffect(() => {
    getFav()
    .then((data) => {
    setItems(data)
    })

},[]);


return (
    <Container fluid="md">
    {items
    .filter(item => item.fav.includes(game))
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