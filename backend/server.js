import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./controllers/emailController.js";

// Load enviroment variables
dotenv.config();
const PORT = process.env.PORT;

const app = express();

// CORS used to allow request from specific origin
app.use(cors());

// .json() is used to parse JSON bodies
app.use(express.json());

app.post("/send-email", sendEmail);

app.listen(PORT, () => {
  console.log(`PORT running on: ${PORT}`);
});
