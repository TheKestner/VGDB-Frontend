import {React, useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getSearch } from '../utils/data';

export default function Search() {

const [items, setItems] = useState([]);
useEffect(() => {
    getSearch()
    .then((data) => {
    setItems(data)
    })

},[]);



let { title } = useParams();

return (
    <Container fluid="md">
      <h2>
        Search Results:
      </h2>
    {items
    .filter(item => item.title.includes(title))
    .map((item) => <Detail key={item.id} item={item} />)}
    {items
    .filter(item => item.genre.includes(title))
    .map((item) => <Detail key={item.id} item={item} />)}
    {items
    .filter(item => item.platforms.includes(title))
    .map((item) => <Detail key={item.id} item={item} />)}
    </Container>
);
}


const Detail = ({ item }) => {
return (
<Container fluid="md">
  
<Row>
  <Col lg={1}>
    <img className="art" src={item.coverart} alt="coverart"></img>
  </Col>
  <Col className="dCol" lg={6}>
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