import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/actors',
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
]);
export default routes;