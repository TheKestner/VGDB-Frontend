import axios from "axios";

export async function getData() {
    let response = await axios.get(`https:Templink`);
    return response.data;
}