import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { getMotorSportComArts, getOthers } from "./fetchArticles.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/articles", async (req, res) => {
  let arr = [];

  await getOthers(arr);
  await getMotorSportComArts(arr);

  res.json(arr);
});

app.listen(process.env.PORT, () => {
  console.log(`localhost:${process.env.PORT}`);
});
