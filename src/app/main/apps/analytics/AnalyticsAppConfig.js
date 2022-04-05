import { lazy } from 'react';

const AnalyticsApp = lazy(() => import('./AnalyticsApp'));

const AnalyticsAppConfig = {
  settings: {
    layout: {
      style: 'layout1',
      config: {
        scroll: 'content',
        navbar: {
          display: true,
          folded: true,
          position: 'left'
        },
        toolbar: {
          display: true,
          style: 'fixed',
          position: 'below'
        },
        footer: {
          display: true,
          style: 'fixed',
          position: 'below'
        },
        mode: 'Container'
      }
    },
  },
  routes: [
    {
      path: 'apps/analytics',
      element: <AnalyticsApp />,
    },
  ],
};

export default AnalyticsAppConfig;
