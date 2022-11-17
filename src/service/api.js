import axios from "axios";

// //Deploy
// export const api = axios.create({
//   baseURL: "Deploy",
// });

//Locally
export const api = axios.create({
  baseURL: "http://localhost:4000",
});
