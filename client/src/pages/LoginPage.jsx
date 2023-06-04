import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios"
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);

  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
      const {data} = await  axios.post('/login', {email,password});
      setUser(data);
      alert('Login Successful');
      setRedirect(true);
    }catch (e){
      console.log(e);
      console.log('login failed')
    alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate  to={'/'}></Navigate> 
  }

  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center, mb-4">Login</h1>
        <form className="mx-auto max-w-md" onSubmit={handleLoginSubmit}>
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={ev=> setEmail(ev.target.value)}
          />
          <input
            className="w-full my-2 p-2 rounded-lg border"
            type="password"
            placeholder="password"
            value={password}
            onChange={ev=> setPassword(ev.target.value)}
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
