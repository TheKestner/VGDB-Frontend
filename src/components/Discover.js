import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from '../utils/data';
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Discover() {
  const [items, setItems] = useState([]);
  const [games, setGames] = useState([]);
  useEffect(() => {
      getData()
      .then((data) => {
        setItems(data)
        setGames(data)
      })
  
  },[]);


  let rendergames = games
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

  const allGames = () => {
    setGames(items);
  };

  const getPc = () => {
    setGames(items
    .filter(item => item.platforms.includes("PC")));
  };

  const getMac = () => {
    setGames(items
    .filter(item => item.platforms.includes("Mac")));
  };

  const getLinux = () => {
    setGames(items
    .filter(item => item.platforms.includes("Linux")));
  };

  const getPS5 = () => {
    setGames(items
    .filter(item => item.platforms.includes("PlayStation 5")));
  };

  const getNin = () => {
    setGames(items
    .filter(item => item.platforms.includes("Nintendo Switch")));
  };

  const getXone = () => {
    setGames(items
    .filter(item => item.platforms.includes("Xbox One")));
  };

  const getPS4 = () => {
    setGames(items
    .filter(item => item.platforms.includes("PlayStation 4")));
  };

      return (
        <div>
          <h2> </h2>
          <div>
          <Button onClick={allGames} variant="outline-info" size="sm">All Platforms</Button>{' '}
          <Button onClick={getPc} variant="outline-info" size="sm">PC</Button>{' '}
          <Button onClick={getMac} variant="outline-info" size="sm">Mac</Button>{' '}
          <Button onClick={getLinux} variant="outline-info" size="sm">Linux</Button>{' '}
          <Button onClick={getPS5} variant="outline-info" size="sm">Playstation 5</Button>{' '}
          <Button onClick={getNin} variant="outline-info" size="sm">Nintendo Switch</Button>{' '}
          <Button onClick={getXone} variant="outline-info" size="sm">Xbox One</Button>{' '}
          <Button onClick={getPS4}variant="outline-info" size="sm">Playstation 4</Button>{' '}
          </div>
          {rendergames}
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