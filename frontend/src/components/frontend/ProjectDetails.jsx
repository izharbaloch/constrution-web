import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import ShowTestimonials from "../common/ShowTestimonials";

const ProjectDetails = () => {
  const [project, setProject] = useState([]);

  const params = useParams();
  const fetchProject = async () => {
    const res = await fetch(`${apiUrl}get-project/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setProject(result.data);
  };

  //   const fetchServices = async () => {
  //     const res = await fetch(`${apiUrl}get-services/`, {
  //       method: "GET",
  //     });
  //     const result = await res.json();
  //     // console.log(result);
  //     setServices(result.data);
  //   };

  useEffect(() => {
    fetchProject();
  }, [params.id]);
  return (
    <>
      <Header />

      <main>
        <section className="section-10">
          {/* hero */}
          <Hero
            preHeading="Quality. Integrity. Value."
            heading={`${project.title}`}
          />

          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-4 py-4">
                    <h3 className="mt-2 mb-2">Insight</h3>
                    <ul>
                      {project.location && (
                        <li>
                          <span>Location</span>
                          <p>
                            <b>{project.location}</b>
                          </p>
                        </li>
                      )}
                      {project.construction_type && (
                        <li>
                          <span>Construction_type</span>
                          <p>
                            <b>{project.construction_type}</b>
                          </p>
                        </li>
                      )}
                      {project.sector && (
                        <li>
                          <span>Sector</span>
                          <p>
                            <b>{project.sector}</b>
                          </p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="">
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/projects/large/${project.image}`}
                    alt=""
                  />
                </div>
                <h3 className="py-3">{project.title}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: project.content }}
                ></div>
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

export default ProjectDetails;
