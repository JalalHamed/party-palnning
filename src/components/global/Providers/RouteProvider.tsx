import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
]);

const RouteProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;
