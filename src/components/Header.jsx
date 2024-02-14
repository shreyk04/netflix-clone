import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, USER_AVTAR } from "../utils/constants";
function Header() {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {

    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName,photoURL } = user;
        // const uid = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        // ...
        navigate('/browse')
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
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
    </div>
  );
}

export default Header;
