import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState("");

  console.log(id);

  const loadArticles = async () => {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    );

    const data = await response.json();
    console.log(data);
    setArticle(data);
  };

  useEffect(() => {
    loadArticles();
  }, [id]);

  return (
    <div className="article_container">
      <h2>{article.title}</h2>
      <img src={article.imageUrl} alt="img" className="img" />
      <p className="summary">
        {article.summary} &nbsp;
        <a href={article.url}>Click to see more...</a>
      </p>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
}
