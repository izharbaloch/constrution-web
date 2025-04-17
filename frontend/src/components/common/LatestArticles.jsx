import React, { useEffect, useState } from "react";
import BlogImg from "../../assets/images/construction3.jpg";
import { apiUrl, fileUrl } from "./http";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const fetchLatestArticles = async () => {
    const res = await fetch(apiUrl + "get-letest-articles?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setArticles(result.data);
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);
  return (
    <>
      {/* our blogs section */}
      <section className="section-6 py-5 bg-light">
        <div className="container  py-5">
          <div className="section-header text-center">
            <span>Blog&News</span>
            <h2>Today Update Blogs And News</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              officiis omnis ad optio. Dolores magnam natus suscipit id quas
              iure adipisci.
            </p>
          </div>

          <div className="row pt-3">
            {articles &&
              articles.map((article) => (
                <div className="col-md-6 col-lg-4 mb-3" key={article.id}>
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img
                        src={`${fileUrl}uploads/articles/large/${article.image}`}
                        alt={article.title}
                        className="w-100"
                      />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <Link to={`/article/${article.id}`} className="title">
                          {article.title}
                        </Link>
                      </div>
                      <div>
                        <p>{article.author}</p>
                      </div>
                      <div>
                      <Link
                            to={`/article/${article.id}`}
                            className="btn btn-primary small"
                          >
                            Read More
                          </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestArticles;
