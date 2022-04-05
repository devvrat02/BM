import { lazy } from 'react';

const VulReport = lazy(() => import('./VulReport'));

const VulConfig = {
    settings: {
        layout: {
            config: {},
        },
    },

    routes: [
        {
            path: 'apps/Vulnerabilities/VulReport',
            element: <VulReport />,
        },
    ],
};

export default VulConfig;
