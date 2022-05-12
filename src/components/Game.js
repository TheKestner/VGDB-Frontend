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

  console.log(favorites)

  // const unfollowGame = (e) => {

  // };

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
      // const formData = new FormData(form);
      // formData.append("User", user_id[1]);
      // formData.append("Game", game_id);
      console.log("we outtie")
    };
    console.log(favorites)
    // const found = favorites.find((item) => item === item.id)
    // console.log(found)
    console.log(item.id)
    const favgame = favorites.find( ({game}) => game === item.id );
    console.log(favgame)

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
          <Col className="gameArt">
            <img src={item.coverart}></img>
            <Row>
              <MyButtons />
            </Row>
          </Col>
          <Col className="dRow">
          <Row>
          <h2 className="gameTitle">{item.title}</h2>
          <h3 className="gameDate">{item.release_date}</h3>
          <h4 className="gameSub">{item.company}</h4>
          </Row>

            <div className="genre"> Genre:<ul>{item.genre.map((item) => <li key={item}>
            <Link to={`/genre/${item}`}>{item}</Link></li> )}</ul>
            </div>

            <div className="platform"> Platforms:<ul>{item.platforms.map((item) => <li key={item}>
            <Link to={`/platform/${item}`}>{item}</Link></li> )}</ul>
            </div>

            <div className="mode"> Game Modes: <ul>{item.mode.map((item) => <li key={item}>
            <Link to={`/mode/${item}`}>{item}</Link></li> )}</ul>
            </div>
            
            <div className="perspective">Player Perspective:<ul> <li><Link to={`/perspective/${item.perspective}`}>{item.perspective}</Link></li> </ul>
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




  // {found ? (
  //   <Button onClick={followGame} variant="info">Follow</Button>
  //     ) : (
  //   <Button variant="info">Followed</Button>
  //     )}
  