import { Plans } from 'components/pages';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Plans />,
  },
]);

const RouteProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;
