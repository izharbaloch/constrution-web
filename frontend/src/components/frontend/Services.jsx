import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ServiceImg from "../../assets/images/construction1.jpg";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const fetchAllServices = async () => {
    const res = await fetch(apiUrl + "get-services", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setServices(result.data);
  };

  useEffect(() => {
    fetchAllServices();
  }, []);
  return (
    <>
      <Header />
      {/* hero */}
      <Hero
        preHeading="Quality. Integrity. Value."
        heading="Services"
        text="Expert Construction Services for Every Need"
      />

      {/* our services section */}
      <section className="section-3 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>Our Services</span>
            <h2>Our Construction Services</h2>
            <p>
              We offer a wide range of construction services tailored to meet
              the diverse needs of our clients. <br />
              Whether you're planning a residential project, a commercial
              building.
            </p>
          </div>

          {/* Single row for all columns */}
          <div className="row pt-5">
            {services &&
              services.map((service) => (
                <div className="col-md-6 col-lg-3" key={service.id}>
                  <div className="items">
                    <div className="service-image">
                      <img
                        src={`${fileUrl}uploads/services/small/${service.image}`}
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

      <Footer />
    </>
  );
};

export default Services;
