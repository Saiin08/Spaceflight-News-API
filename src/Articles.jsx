import { Link } from "react-router-dom";
import "./Article.css";

export default function Articles({ articles }) {
  return (
    <div className="articles">
      {articles.map((article) => {
        return (
          <div className="article" key={article.id}>
            <p>{article.title}</p>
            {/* <img className="img" src={article.imageUrl} alt="img" />
            <br /> */}
            <p className="summary">
              {article.summary} &nbsp;
              <Link to={"/article/" + article.id}>Detail</Link>
              <br />
              {/* <a href={article.url}>Click to see more...</a> */}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
