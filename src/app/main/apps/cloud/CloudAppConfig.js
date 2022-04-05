import { lazy } from 'react';

const CloudApp = lazy(() => import('./CloudApp'));

const CloudAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/cloud',
      element: <CloudApp />,
    },
  ],
};

export default CloudAppConfig;
