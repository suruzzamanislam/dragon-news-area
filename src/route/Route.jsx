import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import Error from '../pages/Error/Error';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Privateroute from './Privateroute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json'),
      },
      {
        path: '/news/:id',
        element: (
          <Privateroute>
            <NewsDetails></NewsDetails>
          </Privateroute>
        ),
        loader: () => fetch('/news.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
