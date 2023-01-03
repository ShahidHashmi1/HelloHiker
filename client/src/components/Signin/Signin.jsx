import React from "react";
import { useState } from "react";
import Userfront from "@userfront/core";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from '../../utils/auth';

Userfront.init();

const Signin = () => {
  const [profileData, setprofileData] = useState({ email: "", password: "" });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (e) => {
    e.preventDefault();
    const {name, value}= e.target;
    setprofileData({...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Userfront.login({
      method: "password",
      email: profileData.email,
      password: profileData.password,
    });
    try {
      const {data}= await loginUser({
        variables: { ...profileData },
      });
      Auth.login(data.login.profile.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="titleDiv">
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={profileData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sign In!</button>
      </form>
    </div>
  );
};

export default Signin;
