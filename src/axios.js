import axios from "axios";
import App from "./App";

// Base URL to make requests to "The Movie database"
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;