import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3 className="mb-3">Izhar Baloch</h3>
            <p>
              My goal is to transform ideas into functional and visually
              appealing web applications. I am committed to providing
              high-quality services tailored to meet client needs.
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Our Services</h3>
            <ul>
              <li>
                <a href="">Construction Consultation</a>
              </li>
              <li>
                <a href="">Renovation & Remodeling</a>
              </li>
              <li>
                <a href="">Commercial Construction</a>
              </li>
              <li>
                <a href="">Residential Construction</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Quik Links</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>
                <a href="">+923054533570</a>
              </li>
              <li>
                <a href="">izharbaloch570@gmail.com</a>
              </li>
              <li>
                <a href="">Pakistan,khushab,Quaidabad</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="text-center">
            <p>Cpyright © 2024 izhar developer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
