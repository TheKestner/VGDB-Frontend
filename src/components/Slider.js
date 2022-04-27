import React, { useState, useEffect} from "react";
import { getData } from '../utils/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Container, Card } from "react-bootstrap";


export default function Slider() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getData()
        .then((data) => {
        setItems(data)
        })
    
    },[]);
      
  return (
    <Container>
    <Splide options={ {
        type: 'loop',
        perPage: 4,
        perMove: 1,
      } } 

      aria-label="Popular Game Images">

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1uul.png" alt="Image 1"/>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide>

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.png" alt="Image 2" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide>

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.png" alt="Image 3" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide>

    <SplideSlide>
    <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png" alt="Image 4" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text
            </Card.Text>
        </Card.Body>
    </Card>
    </SplideSlide>

  </Splide>
  </Container>
  );
}

// const Detail = ({ item }) => {
//     return (
//       <img src={item.coverart}></img>
//     )
//   }