import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Hero from "../common/Hero";
import Footer from "../common/Footer";
import ProjectImg from "../../assets/images/construction2.jpg";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchAllProjects = async () => {
    const res = await fetch(apiUrl + "get-projects", {
      method: "GET",
    });
    const result = await res.json();
    setProjects(result.data);
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Our Projects"
          text="I am a full-stack web developer, skilled in both front-end <br />
              and back-end development."
        />
        {/* our Projects section */}
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Our Development Projects</h2>
              <p>
                I am a full-stack web developer, skilled in both front-end and
                back-end development.
              </p>
            </div>

            {/* Single row for all columns */}
            <div className="row pt-5">
              {projects &&
                projects.map((project) => {
                  return (
                    <div key={project.id} className="col-md-6 col-lg-3">
                      <div className="items">
                        <div className="service-image">
                          <img
                            src={`${fileUrl}uploads/projects/large/${project.image}`}
                            alt=""
                            className="w-100"
                          />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>{project.title}</h3>
                          </div>
                          <div className="service-content">
                            <p>{project.short_desc}</p>
                          </div>
                          <Link
                            to={`/project/${project.id}`}
                            className="btn btn-primary small"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
