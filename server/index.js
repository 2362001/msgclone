const express = require("express");
const app = express();
const helmet = require("helmet");
const { Server } = require("socket.io");
const cors = require("cors");
const server = require("http").createServer(app);

app.use(helmet());
app.use(express.json());
app.use(cors());
app.set("trust proxy", 1);

const io = new Server(server);

server.listen(process.env.PORT || 4000, () => {
  console.log("Server listening on port " + (process.env.PORT || "4000"));
});
