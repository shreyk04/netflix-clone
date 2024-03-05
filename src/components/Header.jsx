import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
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
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };


  const handleLanguageChange = (e) => {
    // setLang(event.target.value);
    dispatch(changeLanguage(e.target.value))
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

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
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
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
    </div>
  );
}

export default Header;
