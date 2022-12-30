import React from "react";
import { useState } from "react";
import Userfront from "@userfront/core";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

Userfront.init();

const Signin = () => {
  const [profileData, setprofileData] = useState({ email: "", password: "" });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    setprofileData({
      [target.name]: target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    Userfront.login({
      method: "password",
      email: this.profileData.email,
      password: this.profileData.password,
    });
    try {
      const data = await loginUser({
        variables: { ...profileData },
      });
    } catch {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            name="email"
            type="text"
            value={this.profileData.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={this.profileData.password}
            onChange={this.handleInputChange}
          />
        </label>
        <buttonv type="submit">Sign In!</buttonv>
      </form>
    </div>
  );
};

export default Signin;
