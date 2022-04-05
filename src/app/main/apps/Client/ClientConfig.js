import { lazy } from 'react';

const Client = lazy(() => import('./Client'));


const ClientConfig = {
  settings: {
    layout: {

    },
  },
  routes: [
    {
      path: 'apps/Client',
      element: <Client />,
    },
  ],

};


export default ClientConfig;
