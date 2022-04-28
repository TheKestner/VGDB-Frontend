import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getData } from '../utils/data';

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
        .filter(item => item.title == title)
        .map((item) => <Detail key={item.id} item={item} />)}
      </div>
    );
  }

  const Detail = ({ item }) => {
    return (
      <div className="game">
      <h2>{item.title}</h2> 
      <img src={item.coverart}></img>
      {item.release_date}
      <div className="genre"> {item.genre}</div>
      <div className="platform"> {item.platforms}</div>
      <div className="des"> {item.about}</div>
      <div className="company"> {item.company}</div>
      <div className="perspective"> {item.perspective}</div>
      <div className="franchise"> {item.franchise}</div>
      </div>
    )
  }

  // {items
  //   .filter(item => item.title === 'Hatoful Boyfriend')
  //   .map((item) => <Detail key={item.id} item={item} />)}
  