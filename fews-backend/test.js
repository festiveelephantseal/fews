import fetch from "node-fetch";

async function test() {
  const res = await fetch("http://localhost:3000/article", {
    method: "POST",
    body: {
      test: "hi pls work",
    },
  });
  const data = await res.json();
  return data;
}

console.log(test());
