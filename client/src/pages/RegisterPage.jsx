import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      var res = await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successful. Now you can log in");
    } catch (e) {
      alert("Registration failed. Please try again later");
      console.log(e);
    }
  }
  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center, mb-4">Register</h1>
        <form className="mx-auto max-w-md" onSubmit={registerUser}>
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="h-10 my-1 bg-pink-500 w-full text-white rounded-2xl ">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already have an account?
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
