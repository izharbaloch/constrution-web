import React, { useContext } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/Auth";

const Login = () => {
  const { login } = useContext(AuthContext); // Access `login` function from AuthContext
  const navigate = useNavigate(); // For navigation after successful login

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Send login request to the backend
      const res = await fetch("http://localhost:8000/api/authenticate", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json(); // Parse the response

      if (result.status === false) {
        // Display error message using toast
        toast.error(result.error || "Login failed.");
      } else {
        // Create a userInfo object with ID and token
        const userInfo = {
          id: result.id,
          token: result.token,
        };

        // Save user info in localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        // Update context with logged-in user
        login(userInfo);

        // Navigate to the admin dashboard
        navigate("/admin/dashboard");
      }
    } catch (error) {
      // Handle fetch or network errors
      console.error("Login error:", error);
      toast.error("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container my-5 d-flex justify-content-center">
          <div className="login-form my-5">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h3 className="mb-3">Login Here</h3>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      {...register("email", {
                        required: "This Field is Required.",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      type="text"
                      placeholder="Enter Email"
                      className={`form-control ${errors.email && "is-invalid"}`}
                    />
                    {errors.email && (
                      <p className="invalid-feedback">{errors.email.message}</p>
                    )}
                  </div>
                  {/* Password Field */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      {...register("password", {
                        required: "This Field is Required.",
                      })}
                      type="password"
                      placeholder="Enter Password"
                      className={`form-control ${
                        errors.password && "is-invalid"
                      }`}
                    />
                    {errors.password && (
                      <p className="invalid-feedback">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  {/* Login Button */}
                  <button className="btn btn-primary larg">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
