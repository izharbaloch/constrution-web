import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { useForm } from "react-hook-form";
import { apiUrl } from "../common/http";
import { toast } from "react-toastify";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch(apiUrl + "contact-now", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.status == true) {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Contact Us"
          text="I am a full-stack web developer, skilled in both front-end <br />
              and back-end development."
        />

        <section className="section-9 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span></span>
              <h2>Contact Now</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                officiis omnis ad optio. Dolores magnam natus <br />
                suscipit id quas iure adipisci.
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-4">
                    <h3>Call US</h3>
                    <div>
                      <a href="">(0600-06060606)</a>
                    </div>
                    <div>
                      <a href="">(+92305-3434570)</a>
                    </div>

                    <h3 className="mt-4">You Can Write Us</h3>
                    <div>
                      <a href="">(info@gmail.com)</a>
                    </div>
                    <div>
                      <a href="">(izhar@gmail.com)</a>
                    </div>

                    <h3 className="mt-4">Address</h3>
                    <p>
                      dumy dddress yah hai <br />
                      or eska bad@yah
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0 p-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">
                          Name
                        </label>
                        <input
                          {...register("name", {
                            required: "Name field is required",
                          })}
                          type="text"
                          placeholder="Enter a Name"
                          className={`form-control form-control-lg ${
                            errors.name && "is-invalid"
                          }`}
                        />
                        {errors.name && (
                          <p className="invalid-feedback">
                            {errors.name?.message}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          {...register("email", {
                            required: "Email field is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Please enter a valid email address.",
                            },
                          })}
                          type="text"
                          placeholder="Enter a email"
                          className={`form-control form-control-lg ${
                            errors.email && "is-invalid"
                          }`}
                        />
                        {errors.email && (
                          <p className="invalid-feedback">
                            {errors.email?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">
                          Phone No
                        </label>
                        <input
                          {...register("phone")}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter a Phone No"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="form-label">
                          Subjects
                        </label>
                        <input
                          {...register("subject")}
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Enter a Subjects"
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="form-label">
                          Messages
                        </label>
                        <textarea
                          {...register("message")}
                          rows={5}
                          className="form-control form-control-lg"
                          placeholder=""
                        ></textarea>
                      </div>
                    </div>
                    <button className="btn btn-primary larg mt-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
