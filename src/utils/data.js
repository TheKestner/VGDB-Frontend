import axios from "axios";

export async function getData() {
    let response = await axios.get(`https:https://8000-thekestner-vgdbbackend-fuft7n78fv1.ws-us42.gitpod.io/game/`);
    return response.data;
}