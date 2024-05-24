import { useRef, useState } from "react";
import React from "react";
import Header from "./Header";
import checkValidData from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { photoURL } from "../Utils/Constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  //Creating a reference to this, and then calling the ref in the email field down below
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data -> Use a utility -> Validate.js
    //////// We can create a state variable for email and password, and when the state changes, we can check and validate
    ////// Or we can use references of the input boxes (UseRef)

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
        // name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;
    //If not Proceed with sign in or sign up

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        // name.current.value,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Update a user profile: ///////////////////////////////////////////////////
          updateProfile(user, {
            displayName:name.current.value,
            photoURL: {photoURL},
          })
            .then(() => {
              // Profile updated!
              const {uid, email, displayName, photoURL} = auth.currentUser; //--Getting this as the value needs to be updated 3h:45m    //-----> Getting things from the user function given to us 
              dispatch( addUser (
                  {uid: uid, 
                  email: email, 
                  displayName: displayName, photoURL: photoURL}
        ));
              
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

            ///////////////////////////////////////////////
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-2 m-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 m-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 my-4 w-full bg-gray-700"
        />

        <p className="text-red-400 p-2">{errorMessage}</p>

        <button
          className="bg-red-600 p-2 m-2 w-full my-4 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 p-2 m-2 my-2 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now!"
            : "Already have an account? Log In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
