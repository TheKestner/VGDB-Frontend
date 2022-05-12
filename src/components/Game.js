import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { addFav, getData, getFav } from '../utils/data';
import { Container, Row, Col, Button } from "react-bootstrap";
import Screenshot from "./Screenshot";



export default function Game() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
      getData()
      .then((data) => {
      setItems(data)
      })
      getFav()
      .then((data) => {
      setFavorites(data)
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

    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        getFav()
        .then((data) => {
        setFavorites(data)
        })
    },[]);

    const followGame = (e) => {
      e.preventDefault();
      addFav(item.id,1);

    };

    const favgame = favorites.find( ({game}) => game === item.id );

    const MyButtons = () => {
      if(favgame && favgame.game === item.id ) {
        return <Button variant="info">Followed</Button>
      }
      else {
        return <Button onClick={followGame} variant="info">Follow</Button>
      }
    }

    return (
      <Container fluid="md">
        <Row>
          <Col className="detailArt">
            <img src={item.coverart}></img>
            <Row className="btnRow">
              <MyButtons />
            </Row>
          </Col>
          <Col className="dRow">
          <Row>
          <h2 className="gameTitle">{item.title}</h2>
          <h3 className="gameDate">{item.release_date}</h3>
          <h4 className="gameSub">{item.company}</h4>
          </Row>
            <div className="title">Genre:</div>
            <div className="genre"> <ul>{item.genre.map((item) => <li key={item}>
            <Link to={`/genre/${item}`}>{item}</Link></li> )}</ul>
            </div>

            <div className="title">Platforms:</div>
            <div className="platform"> <ul>{item.platforms.map((item) => <li key={item}>
            <Link to={`/platform/${item}`}>{item}</Link></li> )}</ul>
            </div>

            <div className="title">Game Modes:</div>
            <div className="mode"> <ul>{item.mode.map((item) => <li key={item}>
            <Link to={`/mode/${item}`}>{item}</Link></li> )}</ul>
            </div>
            
            <div className="title">Player Perspective:</div>
            <div className="perspective"> <ul> <li><Link to={`/perspective/${item.perspective}`}>{item.perspective}</Link></li> </ul>
            </div>

            <div className="about"> {item.about}</div>
          </Col>
        </Row>
        <Row>
        <Screenshot />
        </Row>
      </Container>
    )
  }

  