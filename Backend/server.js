import http from 'http';
import App from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const server = http.createServer(App);
const PORT = process.env.PORT || 4000;
console.log(PORT)

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});



export default server;


