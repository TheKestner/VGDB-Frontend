import axios from "axios";

export async function getData() {
    let response = await axios.get(`https://8000-thekestner-vgdbbackend-fuft7n78fv1.ws-us43.gitpod.io/game/`);
    return response.data;
}