import { lazy } from 'react';

const TeamsApp = lazy(() => import('./TeamsApp'));

const TeamsAppConfig = {
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
      path: 'apps/Teams',
      element: <TeamsApp />,
    },
  ],
};

export default TeamsAppConfig;
