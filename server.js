import express from "express";
import allRoutes from "./routes/Routes.js";
import cors from "cors";

const server = express();

server.use(cors());

server.use(express.json());

server.use("/", allRoutes);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running on\nhttp://localhost:${PORT}`);
});
