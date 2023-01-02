import React from "react";
import {useState } from "react";
import { useMutation } from "@apollo/client";
import Userfront from "@userfront/core";
import { ADD_USER } from "../../utils/mutations";

import Auth from '../../utils/auth';

Userfront.init();

const Signup = () => {
  const [profileData, setprofileData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (e) => {
    e.preventDefault();
    const {name, value}= e.target;
    setprofileData({...profileData, [name]: value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    Userfront.signup({
      method: "password",
      email: profileData.email,
      password: profileData.password,
      data: {
        name: profileData.name,
      },
    });

    try {
      const {data} = await addUser({
        variables: { ...profileData },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section>

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
            Name
            <input
              name="name"
              type="text"
              value={profileData.name}
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
          <button type="submit">Sign Up!</button>
        </form>
      </div>

    </section>
  );
};

export default Signup;
