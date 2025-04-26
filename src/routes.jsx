import ErrorPage from "./pages/ErrorPage";  // Ensure this path is correct
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "*", // wildcard path for errors
    element: <ErrorPage />,
  },
];

export default routes;
