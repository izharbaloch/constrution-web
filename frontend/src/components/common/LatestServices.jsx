import React, { useEffect, useState } from "react";
import ServiceImg from "../../assets/images/construction1.jpg";
import { apiUrl, fileUrl } from "./http";
import { Link } from "react-router-dom";

const LatestServices = () => {
  const [services, setServices] = useState([]);
  const fetchLatestServices = async () => {
    const res = await fetch(apiUrl + "get-letest-services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setServices(result.data);
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);
  return (
    <section className="section-3 bg-light py-5">
      <div className="container-fluid py-5">
        <div className="section-header text-center">
          <span>Our Services</span>
          <h2>Our Construction Services</h2>
          <p>
            where we create innovative, high-quality solutions designed to help
            your business grow. Let’s work together to build your success story.
          </p>
        </div>

        {/* Single row for all columns */}
        <div className="row pt-4">
          {services &&
            services.map((service) => (
              <div className="col-md-6 col-lg-3" key={service.id}>
                <div className="items">
                  <div className="service-image">
                    <img
                      src={`${fileUrl}uploads/services/large/${service.image}`}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="service-content">
                      <p>{service.short_desc}</p>
                    </div>
                    <Link to={`/service/${service.id}`} className="btn btn-primary small">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestServices;
