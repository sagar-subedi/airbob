import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center, mb-4">Login</h1>
        <form className="mx-auto max-w-md">
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
            Login
          </button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link className="underline text-black" to={'/register'}>Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
