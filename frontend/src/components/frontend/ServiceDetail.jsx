import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import ShowTestimonials from "../common/ShowTestimonials";

const ServiceDetail = () => {
  const [service, setService] = useState([]);
  const [services, setServices] = useState([]);

  const params = useParams();
  const fetchService = async () => {
    const res = await fetch(`${apiUrl}get-service/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setService(result.data);
  };

  const fetchServices = async () => {
    const res = await fetch(`${apiUrl}get-services/`, {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setServices(result.data);
  };

  useEffect(() => {
    fetchService();
    fetchServices();
  }, [params.id]);
  return (
    <>
      <Header />

      <main>
        <section className="section-10">
          {/* hero */}
          <Hero
            preHeading="Quality. Integrity. Value."
            heading={`${service.title}`}
          />

          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-4 py-4">
                    <h3 className="mt-2 mb-2">Our Services</h3>
                    <ul>
                      {services?.length > 0 ? (
                        services.map((service) => (
                          <li key={`service-${service.id}`}>
                            <Link to={`/service/${service.id}`}>
                              {service.title}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li>No services available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="">
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/services/large/${service.image}`}
                    alt=""
                  />
                </div>
                <h3 className="py-3">{service.title}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: service.content }}
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

export default ServiceDetail;
