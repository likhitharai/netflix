import {React, useEffect } from "react";
import { signOut } from "firebase/auth";
import {auth} from "../Utils/Firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import {LOGO} from "../Utils/Constants"


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector( store => store.user)
  const dispatch = useDispatch();
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {           //-----------------------> Given by the function
        const {uid, email, displayName, photoURL} = user    //-----> Getting things from the user function given to us 
        dispatch(addUser(
          {uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL: photoURL}
        ));
        navigate("/browse")

       
        //////// If a user signs in, or signs up, this will be called
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //We need to unsubscribe from the event after the login process completes:
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10  w-full flex text-white justify-between">
      <img
        className="w-52 pl-6"
        src={LOGO}
        alt="Netflix-Logo"
      />
      {user && <div className="flex">
        <img className= "h-12 w-12 mx-5 my-5" src = "https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt ="User Icon" />
        <button className="mx-5 px-4 py-1 my-5 bg-red-600 rounded-lg font-bold hover:bg-red-500" onClick={handleSignOut} >Sign Out</button>
        {/* {signedIn? "Sign Out" : "Sign In"} */}
      </div> }
      
    </div>
  );
};

export default Header;
