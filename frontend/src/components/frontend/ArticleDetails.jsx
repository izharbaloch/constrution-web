import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import ShowTestimonials from "../common/ShowTestimonials";

const ArticleDetails = () => {
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);

  const params = useParams();
  const fetchArticle = async () => {
    const res = await fetch(`${apiUrl}get-article/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setArticle(result.data);
  };

  const fetchLatestArticle = async () => {
    const res = await fetch(`${apiUrl}get-letest-articles?limit=10`, {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setArticles(result.data);
  };

  useEffect(() => {
    fetchArticle();
    fetchLatestArticle();
  }, [params.id]);
  return (
    <>
      <Header />

      <main>
        <section className="section-10">
          {/* hero */}
          <Hero
            preHeading="Quality. Integrity. Value."
            heading={`${article.title}`}
          />

          <div className="container py-5">
            <div className="row">
              <div className="col-md-8">
                <h3 className="py-3">{article.title}</h3>
                <div className="pb-3">
                  by <strong>{article.author}</strong> on {article.created_at}
                </div>
                <div className="pe-mbd-5 pb-3">
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/articles/large/${article.image}`}
                    alt=""
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-4 py-4">
                    <h3 className="mt-2 mb-2">Latest Blogs</h3>

                    {articles &&
                      articles.map((article) => (
                        <div
                          className="d-flex border-bottom mb-3 pb-2"
                          key={article.id}
                        >
                          <div className="pe-3 pb-2">
                            <Link
                              to={`/article/${article.id}`}
                              className="article-link"
                            >
                              <img
                                width={100}
                                className=""
                                src={`${fileUrl}uploads/articles/large/${article.image}`}
                                alt={article.title || "Article Image"}
                              />
                            </Link>
                          </div>
                          <Link
                            to={`/article/${article.id}`}
                            className="article-link"
                          >
                            {article.title || "Read more"}
                          </Link>
                          <hr />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section-11 bg-light">
            <ShowTestimonials />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticleDetails;
