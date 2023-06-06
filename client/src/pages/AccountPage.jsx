import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post('/logout');
    setUser(null);
    setRedirect('/');
  }



  if (!ready) {
    return "Loading...";
  }

 

  function linkClasses(type = null) {
    let classes = "py-2 px-6 rounded-full ";
    if (type === subpage) {
      classes += " bg-pink-500 text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"}></Navigate>;
  }


  else if(redirect){
    return <Navigate to={redirect} />
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className={linkClasses("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My Accomodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2 ">Logout</button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
