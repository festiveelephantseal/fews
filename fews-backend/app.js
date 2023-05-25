import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import * as dotenv from "dotenv";
import { getMotorSportComArts, getOthers } from "./fetchArticles.js";

dotenv.config();

const app = express();
const limiter = rateLimit({
  windowMs: 120000,
  max: 1,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);
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
