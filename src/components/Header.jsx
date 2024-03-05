import React, { useEffect } from "react";
<<<<<<< HEAD
import { NavLink, useNavigate } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { LOGO, SUPPORTED_LANGUAGES, USER_AVTAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
=======
import { LOGO, USER_AVTAR } from "../utils/constants";
function Header() {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {

      })
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
<<<<<<< HEAD


  const handleLanguageChange = (e) => {
    // setLang(event.target.value);
    dispatch(changeLanguage(e.target.value))
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
=======
  useEffect(() => {

    const unsubscribe= onAuthStateChanged(auth, (user) => {
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

<<<<<<< HEAD
        const { uid, email, displayName, photoURL } = user;
        // const uid = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
=======
        const { uid, email, displayName,photoURL } = user;
        // const uid = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        // ...
        navigate('/browse')
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
<<<<<<< HEAD
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    // console.log('handle gpt search');
  };
  return (
    <div className="w-full sticky z-50 top-0">
      <div className="absolute w-full bg-gradient-to-b from-black   flex  items-center  justify-between">
        <NavLink to="/">
          <img className="w-44 m-2" src={LOGO} alt="" />
        </NavLink>
        <ul className="text-white flex items-center gap-8  ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">TV Shows</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/about">New & Popular</NavLink>
          </li>
          <li>
            <NavLink to="/contact">My List</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Browse by Languages</NavLink>
          </li>
        </ul>

        {user && (
          <div className=" cursor-pointer  flex gap-2  ">
            {
             showGptSearch&& 
             <select
             className="bg-black text-white"
            onChange={handleLanguageChange}
           
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              // <option  value={lang.identifier}>
              //   {lang.name}
              // </option>
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
            }
            

            <button onClick={handleGptSearch} className="bg-purple-500">
              GPT Search
            </button>
            <img className="w-10 h-10 " src={USER_AVTAR} alt="" />
            <button onClick={handleSignOut} className="text-white ">
              Sign Out
            </button>
          </div>
        )}
      </div>
=======
        navigate('/')

      }
    });
    return ()=>unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 w-screen bg-gradient-to-b from-black p-2  flex justify-between">
      <img
        className="w-44 m-2"
        src={LOGO}
        alt=""
      />
      {user && (
        <div className="cursor-pointer grid place-content-center grid-cols-2">
          <img
            className="w-10 h-10"
            src={USER_AVTAR}
            alt=""
          />
          <button onClick={handleSignOut} className="text-whites">Sign Out</button>
        </div>
      )}
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
    </div>
  );
}

export default Header;
