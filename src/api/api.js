import axios from 'axios';

const baseURL = "http://localhost:7000/posts";

export const getposts = () => axios.get(baseURL);

export const submitPost = (data) => axios.post(baseURL, data);

export const getpost = (id) => axios.post(baseURL + "/" + id);


export const deletepost = (id) => axios.post(baseURL + "/delete/" + id);

