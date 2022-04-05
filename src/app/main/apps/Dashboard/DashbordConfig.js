import { lazy } from 'react';

const Dashbord = lazy(() => import('./Dashbord'));


const DashboardConfig = {
    settings: {
        layout: {

        },
    },
    routes: [
        {
            path: 'apps/Dashboard',
            element: <Dashbord />,
        },
    ],

};


export default DashboardConfig;
