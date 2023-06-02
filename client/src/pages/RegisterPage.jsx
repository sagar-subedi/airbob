import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center, mb-4">Register</h1>
        <form className="mx-auto max-w-md">
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="text"
            placeholder="John Doe"
          />
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="email"
            placeholder="your@email.com"
          />
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="password"
            placeholder="password"
          />
          <button className="h-8 bg-pink-500 w-full text-white rounded-2xl ">
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
