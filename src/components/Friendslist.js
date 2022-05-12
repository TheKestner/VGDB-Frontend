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
            <ul>
          {items
          .filter(item => item.mode.includes("Multiplayer"))
          .slice(0,7)
          .map((item) => <Detail key={item.id} item={item} />)}
          </ul>
          </div>
      );
    }

    const Detail = ({ item }) => {
        return (
          <div className="listCon">
                <li>
                  <div className="listRow">
                  <img className="listImg" src={item.coverart}></img>
                  <div className="listTxt">
                  <Link to={`/game/${item.title}`}>{item.title}</Link>
                  {item.release_date}
                  </div>
                  </div>
                </li>
            </div>
            );
        };