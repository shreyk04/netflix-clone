import React, { useRef, useState } from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";

import {checkValidData} from "../utils/validate";
import {  updateProfile } from "firebase/auth";
import { BG_URL, USER_AVTAR } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import {useDispatch} from 'react-redux'
function Login() {
  const [isSignIn, setIsSignIn] = useState(false);
  const dispatch=useDispatch();
  const[errorMessage,setErrorMessage]=useState();

  const navigate=useNavigate();
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

 const handleButtonClick=()=>{
  let userEmail=email.current.value;
  let userPassword=password.current.value;
  // let userName=name.current.value;
  //  console.log(email,password,name);
   const message=checkValidData(userEmail,userPassword);
    setErrorMessage(message);

  

   if(message) return;

   //sign in sign up logic 

   //for signup form
   if(!isSignIn){
    createUserWithEmailAndPassword(auth, userEmail,userPassword)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: name.current.value, photoURL: USER_AVTAR
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          })
        )
        navigate("/browse")

        // ...
      }).catch((error) => {
        setErrorMessage(error.message)
      })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+" "+errorMessage)
      // ..
    });
  
   }
   //sign in logic
   else{
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
<<<<<<< HEAD
      // console.log(user);
=======
      console.log(user);
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
      navigate("/browse")

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+" "+errorMessage)
    });
   }


 }


  return (
    <>
      <Header />
      <div className="flex justify-center  ">
        <div className="absolute ">
          <img
            src={BG_URL}
            alt=""
          />
        </div>

        <form
          action=""
          className="w-1/3 z-20 absolute  my-16 flex flex-col  p-8 bg-black opacity-90 gap-6 rounded-sm text-white"
          onSubmit={(e)=>e.preventDefault()}
        >
          <h1 className="text-white text-3xl font-semibold text-left">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 bg-[#4C4B4B] w-full rounded-sm"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2  bg-[#4C4B4B] w-full rounded-sm"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 bg-[#4C4B4B] w-full rounded-sm"
            ref={password}
          />
          <p className="text-red-600">{errorMessage}</p>
          <button className="p-2 mt-4 bg-red-600 w-full rounded-sm" onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-left cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In here"}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
