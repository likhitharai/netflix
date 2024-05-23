import React from "react";
import { signOut } from "firebase/auth";
import {auth} from "../Utils/Firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector( store => store.user)
  // const [signedIn, setSignedIn] = useState(true);

  // const togglesign = () => {
  //   setSignedIn (!signedIn);
  // }

  const handleSignOut= () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10  w-full flex text-white justify-between">
      <img
        className="w-52"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-Logo"
      />
      {user && <div className="flex">
        <img className= "h-12 w-12 mx-5 my-5" src = {user.photoURL} alt ="User Icon" />
        <button className="mx-5 px-4 py-1 my-5 bg-red-600 rounded-lg font-bold hover:bg-red-500" onClick={handleSignOut} >Sign Out</button>
        {/* {signedIn? "Sign Out" : "Sign In"} */}
      </div> }
      
    </div>
  );
};

export default Header;
