import axios from "axios";

export async function getData() {
    let response = await axios.get(`${process.env.REACT_APP_API_URL}/game/`);
    return response.data;
}

export async function getSearch() {
    let response = await axios.get(`${process.env.REACT_APP_API_URL}/game/?search=`);
    return response.data;
}

export async function getFav() {
    let response = await axios.get(`${process.env.REACT_APP_API_URL}/fav/`);
    return response.data;
}

export async function addFav(game, user) {
    let response = await axios.post(`${process.env.REACT_APP_API_URL}/fav/`, {
        game,
        user,
    });
    return response.data;
}

export async function delFav() {
    let response = await axios.delete(`${process.env.REACT_APP_API_URL}/fav/`, {

    });
    return response.data;
}