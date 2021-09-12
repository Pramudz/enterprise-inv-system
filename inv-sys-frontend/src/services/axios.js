import axios from "axios";

const instanceOfaxios = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //Authorization: "Basic " + btoa(`${user}:${pass}`),
  },
});

export default instanceOfaxios;
