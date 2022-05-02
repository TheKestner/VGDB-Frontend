import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from '../utils/data';
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Discover() {
  const [items, setItems] = useState([]);
  useEffect(() => {
      getData()
      .then((data) => {
      setItems(data)
      })
  
  },[]);


  let games = items
  .map((item) => {
    return (
      <Container key={item.id} fluid="md">
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
  });

  const getPc = () => {
    games
    .filter(item => item.platforms === "PC")
    return (
      games
    );
  };

      return (
        <div>
          <h2> </h2>
          <div>
          <Button onClick={getPc} variant="outline-info" size="sm">PC</Button>{' '}
          <Button variant="outline-info" size="sm">Mac</Button>{' '}
          <Button variant="outline-info" size="sm">Linux</Button>{' '}
          <Button variant="outline-info" size="sm">Playstation 5</Button>{' '}
          <Button variant="outline-info" size="sm">Nintendo Switch</Button>{' '}
          <Button variant="outline-info" size="sm">Xbox One</Button>{' '}
          <Button variant="outline-info" size="sm">Playstation 4</Button>{' '}
          </div>
          {games}
        </div>
      );
  }

  







  // const Detail = ({ item }) => {
  //   return (
  //     <Container fluid="md">
  //       <Row>
  //         <Col className="gameArt">
  //           <img src={item.coverart}></img>
  //         </Col>
  //         <Col>
  //         <Row>
  //         <Link to={`/game/${item.title}`}>
  //         <div>{item.title}</div>
  //         </Link>
  //         <div>{item.release_date}</div>

  //         </Row>
  //           <div className="platform"> Platforms: {item.platforms.join(" / ")} </div>
  //         </Col>
  //       </Row>
  //     </Container>
  //   )
  // }


  // const Platform = () => {
  //     items
  //     .filter(item => item.title === "Hades")
  //     .map((item) => <Detail key={item.id} item={item} />)
  //   };