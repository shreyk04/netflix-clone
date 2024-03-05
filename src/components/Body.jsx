import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import Main from "./Main";
function Body() {

  const appRouter = createBrowserRouter([
    {
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
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
