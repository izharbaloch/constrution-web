import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import About from "../common/About";
import LatestServices from "../common/LatestServices";
import LatestProjects from "../common/LatestProjects";
import LatestArticles from "../common/LatestArticles";
import ShowTestimonials from "../common/ShowTestimonials";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* hero section */}

        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Expert Construction Services You Can Trust</span>
                <h1>
                  Building Your Dreams with <br /> Precision and Care
                </h1>
                <p>
                  At My Work, we specialize in creating high-quality, durable
                  structures that stand the test of time.<br></br>
                  Whether it's residential, commercial, or industrial, we have
                  the expertise to bring your vision to life..
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary larg">Contact Now</a>
                  <a className="btn btn-secondary ms-2 larg">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about us section */}

        <About />

        {/* our services section */}
        <LatestServices />

        {/* Why ChoseUs section */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Chose Us</span>
              <h2>Quality, Reliability, Innovation</h2>
              <p>Our Commitment to Quality, Reliability, and Innovation</p>
            </div>

            <div className="row pt-4">
              <div className="col-md-6 col-lg-4">
                <div className="card shadow border-0 p-4">
                  <div className="icon-card">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Quality Construction</h3>
                  </div>
                  <div>
                    <p>
                      We use only the best materials and advanced techniques to
                      ensure the highest quality in every project. Our attention
                      to detail ensures that every structure is built to last.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow border-0 p-4">
                  <div className="icon-card">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Timely Completion</h3>
                  </div>
                  <div>
                    <p>
                      We understand the importance of deadlines. Our team works
                      efficiently to complete projects on time, without
                      compromising on quality or safety.Our Commitment to
                      timely..
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow border-0 p-4">
                  <div className="icon-card">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Innovative Solutions</h3>
                  </div>
                  <div>
                    <p>
                      We embrace new technologies and methods to provide
                      innovative solutions that are cost-effective and
                      environmentally friendly, meeting the evolving needs of
                      the construction industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* our Projects section */}
        <LatestProjects />

        {/* our testimonials section */}
        <ShowTestimonials/>

        {/* our blogs section */}
        <LatestArticles />
      </main>

      <Footer />
    </>
  );
};

export default Home;
