import * as cheerio from "cheerio";
import fetch from "node-fetch";
import express from "express";

const app = express();
app.use(express.json());

app.get("/articles", async (req, res) => {
  const response = await fetch("https://www.motorsport.com/f1/");
  const body = await response.text();

  const $ = cheerio.load(body);
  let arr = [];

  $(
    ".root > .ms-page-wrapper > .ms-page-content > .ms-content > .ms-content__main > .ms-centered > .ms-top-block-main > .ms-top-block-main-items > .ms-item"
  ).map((i, el) => {
    const title = $(el).attr("title");
    const url = $(el).attr("href");
    const img = $(el)
      .find(".ms-item__thumb > .ms-item__picture > .ms-item__img")
      .attr("src");
    arr.push({ t: title, u: `https://motorsport.com${url}`, i: img });
  });

  res.send(arr);
});

app.listen(3000, () => {
  console.log("localhost:3000");
});
