import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getData } from '../utils/data';


export default function Friendlist() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      getData().then((data) => {
        setItems(data);
      });
    }, []);
  
    
      return (
          <div>
          {items
          .filter(item => item.mode.includes("Multiplayer"))
          .slice(0,7)
          .map((item) => <Detail key={item.id} item={item} />)}
          </div>
      );
    }

    const Detail = ({ item }) => {
        return (
            <ul>
                <li><img className="listImg" src={item.coverart}></img><Link to={`/game/${item.title}`}>{item.title}</Link></li>
            </ul>
            );
        };