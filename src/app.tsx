import React from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BE_API_URL } from "./env.constants";

// import { Root } from "./routes";

// const router = createBrowserRouter([{ path: "*", Component: Root }]);

const App = () => {
  const [data, setData] = React.useState("Nothing todo :)");

  React.useEffect(() => {
    fetch(BE_API_URL + "/api/v1/users")
      .then((response) => response.json())
      .then((data) => setData(data.firstname));
  }, []);

  return <p>{data}</p>;
  // return <RouterProvider router={router} />;
};

export default App;
