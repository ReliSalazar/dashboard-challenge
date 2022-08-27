import axios from "axios";
const baseUrl = "https://frontend-exercise.herokuapp.com/api";

const getAll = () => {
  const request = axios.get(`${baseUrl}/kpi`);
  return request.then((response) => response.data);
};

//const create = (newObject) => {
  //const request = axios.post(baseUrl, newObject);
  //return request.then((response) => response.data);
//};

//const update = (id, newObject) => {
  //const request = axios.put(`${baseUrl}/${id}`, newObject);
  //return request.then((response) => response.data);
//};

//const deletePost = (id) => {
  //const request = axios.delete(`${baseUrl}/${id}`);
  //return request.then((response) => response.data);
//};

const kpisService = { getAll };

export default kpisService;
