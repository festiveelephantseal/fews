import ArticleCard from "./components/ArticleCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const api = "http://localhost:5000/articles";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(api).then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="articlegrid">
        {articles.map((art, i) => {
          return <ArticleCard title={art.t} pic={art.i} />;
        })}
      </div>
    </div>
  );
}

export default App;
