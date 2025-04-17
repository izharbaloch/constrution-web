import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

const About = () => {
  return (
    <>
      <section className="section-2 py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={AboutImg} alt="" className="w-100" />
            </div>
            <div className="col-md-6 about-center">
              <div>
                <span>About Us</span>
                <h2>We Build with Excellence and Integrity</h2>
                <p>
                  At Construct.com, we are dedicated to providing
                  exceptional construction services. Our team of skilled
                  professionals is committed to delivering high-quality projects
                  that meet the needs and expectations of our clients.
                </p>
                <p>
                  With years of experience in the industry, we specialize in
                  residential, commercial, and industrial construction, ensuring
                  that every project is completed with precision, attention to
                  detail, and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
