import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
<<<<<<< HEAD
import Main from "./Main";
=======
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
function Body() {

  const appRouter = createBrowserRouter([
    {
<<<<<<< HEAD
      path: "/main",
      element: <Main />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
=======
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
