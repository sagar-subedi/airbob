import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav";

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let {subpage} = useParams();;
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

 

 

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"}></Navigate>;
  }


  else if(redirect){
    return <Navigate to={redirect} />
  }

  return (
   
    <div>
       <AccountNav></AccountNav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2 ">Logout</button>
        </div>
      )}
      {
        subpage ==='places' && (
          <PlacesPage></PlacesPage>
        )
      }
    </div>
   
  );
};

export default ProfilePage;
