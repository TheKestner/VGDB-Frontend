import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from '../utils/data';
import { Container, Row, Col, Button, Tab, Tabs} from "react-bootstrap";

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
          <Col lg={1}>
            <img className="gameArt" src={item.coverart}></img>
          </Col>
          <Col lg={7}>
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

  const getShooter = () => {
    setGames(items
    .filter(item => item.genre.includes("Shooter")));
  };

  const getRPG = () => {
    setGames(items
    .filter(item => item.genre.includes("Role-Playing (RPG)")));
  };

  const getAdv = () => {
    setGames(items
    .filter(item => item.genre.includes("Adventure")));
  };

  const getRacing = () => {
    setGames(items
    .filter(item => item.genre.includes("Racing")));
  };

  const getIndie = () => {
    setGames(items
    .filter(item => item.genre.includes("Indie")));
  };

  const getHack = () => {
    setGames(items
    .filter(item => item.genre.includes("Hack and slash/Beat 'em up")));
  };

  const getPuzzle = () => {
    setGames(items
    .filter(item => item.genre.includes("Puzzle")));
  };

  const getSport= () => {
    setGames(items
    .filter(item => item.genre.includes("Sport")));
  };

  const getArcade= () => {
    setGames(items
    .filter(item => item.genre.includes("Arcade")));
  };

  const getPlatform= () => {
    setGames(items
    .filter(item => item.genre.includes("Platform")));
  };

  const getTurn= () => {
    setGames(items
    .filter(item => item.genre.includes("Turn-based strategy (TBS)")));
  };

  const getPoint= () => {
    setGames(items
    .filter(item => item.genre.includes("Point-and-click")));
  };

  const getSingle= () => {
    setGames(items
    .filter(item => item.mode.includes("Single player")));
  };

  const getMulti= () => {
    setGames(items
    .filter(item => item.mode.includes("Multiplayer")));
  };



      return (
        <Container fluid="md">
          <Row>
            <h2>
              Discover
            </h2>
          </Row>
          <Tabs defaultActiveKey="platform" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="platform" title="Platforms">
              <Button onClick={allGames} variant="outline-info" size="sm">All Games</Button>{' '}
              <Button onClick={getPc} variant="outline-info" size="sm">PC</Button>{' '}
              <Button onClick={getMac} variant="outline-info" size="sm">Mac</Button>{' '}
              <Button onClick={getLinux} variant="outline-info" size="sm">Linux</Button>{' '}
              <Button onClick={getPS5} variant="outline-info" size="sm">Playstation 5</Button>{' '}
              <Button onClick={getNin} variant="outline-info" size="sm">Nintendo Switch</Button>{' '}
              <Button onClick={getXone} variant="outline-info" size="sm">Xbox One</Button>{' '}
              <Button onClick={getPS4}variant="outline-info" size="sm">Playstation 4</Button>{' '}
            </Tab>

            <Tab eventKey="genre" title="Genres">
              <Button onClick={allGames} variant="outline-info" size="sm">All Games</Button>{' '}
              <Button onClick={getRPG} variant="outline-info" size="sm">Role-Playing (RPG)</Button>{' '}
              <Button onClick={getShooter} variant="outline-info" size="sm">Shooter</Button>{' '}
              <Button onClick={getAdv} variant="outline-info" size="sm">Adventure</Button>{' '}
              <Button onClick={getRacing} variant="outline-info" size="sm">Racing</Button>{' '}
              <Button onClick={getIndie} variant="outline-info" size="sm">Indie</Button>{' '}
              <Button onClick={getHack} variant="outline-info" size="sm">Hack and slash/Beat 'em up</Button>{' '}
              <Button onClick={getPuzzle} variant="outline-info" size="sm">Puzzle</Button>{' '}
              <Button onClick={getSport} variant="outline-info" size="sm">Sport</Button>{' '}
              <Button onClick={getArcade} variant="outline-info" size="sm">Arcade</Button>{' '}
              <Button onClick={getTurn} variant="outline-info" size="sm">Turn-based strategy (TBS)</Button>{' '}
              <Button onClick={getPlatform} variant="outline-info" size="sm">Platform</Button>{' '}
              <Button onClick={getPoint} variant="outline-info" size="sm">Point-and-click</Button>{' '}
            </Tab>

            <Tab eventKey="mode" title="Modes">
            <Button onClick={allGames} variant="outline-info" size="sm">All Games</Button>{' '}
            <Button onClick={getMulti} variant="outline-info" size="sm">Multiplayer</Button>{' '}
            <Button onClick={getSingle} variant="outline-info" size="sm">Singleplayer</Button>{' '}
            </Tab>
          </Tabs>
          {rendergames}
        </Container>
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