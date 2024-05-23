import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase"
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../Utils/userSlice"

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {           //-----------------------> Given by the function
        const {uid, email, displayName, photoURL} = user    //-----> Getting things from the user function given to us 
        dispatch(addUser(
          {uid: uid, 
          email: email, 
          displayName: displayName, photoURL: photoURL}
        ));

       
        //////// If a user signs in, or signs up, this will be called
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
