import React, { useEffect, useState } from "react";
import ProjectImg from "../../assets/images/construction2.jpg";
import { apiUrl, fileUrl } from "./http";
import { Link } from "react-router-dom";

const LatestProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchLatestProjects = async () => {
    const res = await fetch(apiUrl + "get-letest-projects?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setProjects(result.data);
  };

  useEffect(() => {
    fetchLatestProjects();
  }, []);

  return (
    <section className="section-3 bg-light py-5">
      <div className="container-fluid py-5">
        <div className="section-header text-center">
          <span>Our Projects</span>
          <h2>Our Construction Projects</h2>
          <p>
            These project highlights our commitment to quality construction and
            meeting the unique needs of commercial clients.
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
  );
};

export default LatestProjects;
