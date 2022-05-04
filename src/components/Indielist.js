import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getData } from '../utils/data';


export default function Indielist() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      getData().then((data) => {
        setItems(data);
      });
    }, []);
  
    
      return (
          <ul>
          {items
          .filter(item => item.genre.includes("Indie"))
          .slice(0,7)
          .map((item) => <Detail key={item.id} item={item} />)}
          </ul>
      );
    }

    const Detail = ({ item }) => {
        return (
                <li>
                    <img className="listImg" src={item.coverart}></img>
                    <Link to={`/game/${item.title}`}>{item.title}</Link>
                </li>
            );
        };