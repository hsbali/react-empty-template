import { lazy } from 'react';

// project imports
import DefaultLayout from '../components/Layouts/DefaultLayout';
import Loadable from './../components/Loaders/Loadable';
import TopLoader from '../components/Loaders/TopLoader';

const HomePage = Loadable(lazy(() => import('../pages/HomePage')), TopLoader);

// ==============================|| MAIN ROUTING ||============================== //

const DefaultRoutes = {
    path: '',
    element: <DefaultLayout />,
    children: [
        {
            path: '',
            element: <HomePage />
        },
    ]
};

export default DefaultRoutes;
