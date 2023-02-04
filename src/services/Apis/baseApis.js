import axios from "axios";

const WEATHER = "http://api.openweathermap.org/"

export const weather = axios.create({baseURL:WEATHER})
