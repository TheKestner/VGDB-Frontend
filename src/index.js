import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Game from './components/Game';
import Slider from './components/Slider';
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="game" element={<Game />}/>
          <Route path="game/:title" element={<Game />}/>
        <Route path="slider" element={<Slider />}/>
        </Route>
      </Routes>
    </BrowserRouter>
);





// Route with URL param of id
// <Route path="/:id" children={<Child />} /> 

// We can use the `useParams` hook here to access
// the dynamic pieces of the URL.
// let { id } = useParams();


