import ArticleCard from "./components/ArticleCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/ Nav";

const api = "http://localhost:5000/articles";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(api).then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <Nav />
        <div className="articlegrid">
          {articles.map((art, i) => {
            return (
              <ArticleCard
                key={i}
                title={art.t}
                pic={art.i}
                link={art.u}
                width={art.w}
                height={art.h}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
