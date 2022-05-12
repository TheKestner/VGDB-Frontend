import axios from "axios";

export async function getData() {
    let response = await axios.get(`https://8000-thekestner-vgdbbackend-fuft7n78fv1.ws-us44.gitpod.io/game/`);
    return response.data;
}

export async function getSearch() {
    let response = await axios.get(`https://8000-thekestner-vgdbbackend-fuft7n78fv1.ws-us44.gitpod.io/game/?search=`);
    return response.data;
}

export async function getFav() {
    let response = await axios.get(`https://8000-thekestner-vgdbbackend-fuft7n78fv1.ws-us44.gitpod.io/fav/`);
    return response.data;
}

export async function addFav(game, user) {
    let response = await axios.post(`https://8000-thekestner-vgdbbackend-fuft7n78fv1.ws-us44.gitpod.io/fav/`, {
        game,
        user,
    });
    return response.data;
}

export async function delFav() {
    let response = await axios.delete(`https://8000-thekestner-vgdbbackend-fuft7n78fv1.ws-us44.gitpod.io/fav/`, {
        game
    });
    return response.data;
}