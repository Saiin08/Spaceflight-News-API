import { useEffect, useState } from "react";
import Articles from "./Articles";
import { Routes, Route } from "react-router-dom";
import ArticleDetail from "./ArticleDetail";

export default function Homepage() {
  const [articles, setArticles] = useState([]);

  const loadData = async () => {
    const response = await fetch(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );

    const data = await response.json();

    setArticles(data);
    console.log(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<Articles articles={articles} />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}
