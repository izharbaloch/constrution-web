import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { default as AboutNew } from "../common/About";
import TaemImg from "../../assets/images/pexels-sindre-fs-1040880.jpg";
import Hero from "../common/Hero";
import ShowTestimonials from "../common/ShowTestimonials";
import ShowMembers from "../common/ShowMembers";

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <Hero preHeading='Quality. Integrity. Value.' heading='About Us' text='I am a full-stack web developer, skilled in both front-end <br />
              and back-end development.'/>

        {/* about */}
        <AboutNew />

        {/* Our Team */}
        <ShowMembers/>
      </main>

      <ShowTestimonials/>
      <Footer />
    </>
  );
};

export default About;
