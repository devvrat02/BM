import { lazy } from 'react';


const Setting = lazy(() => import('./Setting'));

const SettingConfig = {
    settings: {
        layout: {
            config: {},
        },
    },

    routes: [
        {
            path: 'apps/setting',
            element: <Setting />,
        },
    ],
};

export default SettingConfig;
