import { CreateEvent, Plans } from 'components/pages';
import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Plans />,
  },
  {
    path: '/create',
    element: <CreateEvent />,
  },
]);

const RouteProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;
