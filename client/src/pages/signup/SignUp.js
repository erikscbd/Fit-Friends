import React, { useState } from "react";
import logo from "../../img/fitfriends logo.png";
import logo2 from "../../img/logo2.png";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
      window.location.href = '/homepage'
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      

      <div className="sign-up-container">
        <form onSubmit={handleFormSubmit}
        
            className="sign-up-form"
            placeholder="Your username"
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
            >
        

          <div className="sign-up-title">Sign Up!</div>

          <div className="sign-up-form-content">
            <div className="enter-info">
              Username
              <input
                className="form-input"
                placeholder="username"
                name="username"
                type="username"
                // value={formState.username}
                onChange={handleChange}
              />
            </div>
            <div className="enter-info">
              Email
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                // value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="enter-info">
              Password
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                // value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="sign-up-btn"
              // style={{ cursor: 'pointer' }}
              type="submit"
            >
              Create Account
            </button>
            <div className="tagline">
              <p>
                It's more fun getting fit <span>with friends!</span>
              </p>
            </div>
          </div>
        </form>
      </div>
     
    </main>
  );
};

export default Signup;
