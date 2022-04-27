import React, { useState, useEffect} from "react";
import { getData } from '../utils/data';

export default function Game() {
  const [items, setItems] = useState([]);
  useEffect(() => {
      getData()
      .then((data) => {
      setItems(data)
      })
  
  },[]);



    return (
      <div>
        <h2> </h2>
            {items
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
      </div>
    )
  }

  // {items
  //   .filter(item => item.category.title === 'Hatoful Boyfriend')
  //   .map((item) => <Detail key={item.id} item={item} />)}
  