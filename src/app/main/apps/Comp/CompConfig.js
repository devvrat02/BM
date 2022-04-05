import { lazy } from 'react';

const Comp = lazy(() => import('./Comp'));

const CompConfig = {
    settings: {
        layout: {

        },
    },
    routes: [
        {
            path: 'apps/Comp',
            element: <Comp />,
        },
    ],
};

export default CompConfig;
