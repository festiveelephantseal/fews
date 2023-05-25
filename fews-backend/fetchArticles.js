import fetch from "node-fetch";
import * as cheerio from "cheerio";

// Get article meta-data from f1.com

export const getOthers = async (arr) => {
  const response = await fetch(
    "https://www.formula1.com/en/latest/all.html#default"
  );
  const body = await response.text();

  const $ = cheerio.load(body);

  $(
    ".site-wrapper > .f1-latest-listing > .f1-latest-listing--grid > .container > .row > .col-lg-4"
  ).map((i, el) => {
    const title = $(el).find(".f1-cc > .f1-cc--caption > .f1--s").text();
    const url = $(el).find(".f1-cc").attr("href");
    const img = $(el)
      .find(".f1-cc--image > .f1-cc--photo > .lazy")
      .attr("data-src");

    arr.push({
      t: title,
      u: `https://formula1.com${url}`,
      i: img,
      h: 864,
      w: 486,
    });
  });
};

// Get article meta-data from motorsports.com

export const getMotorSportComArts = async (arr) => {
  const response = await fetch("https://www.motorsport.com/f1/");
  const body = await response.text();

  const $ = cheerio.load(body);

  $(
    ".root > .ms-page-wrapper > .ms-page-content > .ms-content > .ms-content__main > .ms-centered > .ms-top-block-main > .ms-top-block-main-items > .ms-item"
  ).map((i, el) => {
    const title = $(el).attr("title");
    const url = $(el).attr("href");
    const img = $(el)
      .find(".ms-item__thumb > .ms-item__picture > .ms-item__img")
      .attr("src");
    const width = $(el)
      .find(".ms-item__thumb > .ms-item__picture > .ms-item__img")
      .attr("width");
    const height = $(el)
      .find(".ms-item__thumb > .ms-item__picture > .ms-item__img")
      .attr("height");

    arr.push({
      t: title,
      u: `https://motorsport.com${url}`,
      i: img,
      h: 266,
      w: 400,
    });
  });
};
