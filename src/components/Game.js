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
            <h2>Game:</h2>
            {items
            .filter(item => item.title === 'Hatoful Boyfriend')
            .map((item) => <Detail key={item.id} item={item} />)}
      </div>
    );
  }

  const Detail = ({ item }) => {
    return (
      <div className="title">
      {item.title}
      <div className="des"> Description: {item.about}</div>
      </div>
    )
  }

  // {items
  //   .filter(item => item.category.title === 'Hatoful Boyfriend')
  //   .map((item) => <Detail key={item.id} item={item} />)}
  