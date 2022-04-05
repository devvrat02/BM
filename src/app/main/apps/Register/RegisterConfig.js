import { lazy } from 'react';

const Register = lazy(() => import('./Register'));


const RegisterConfig = {
  settings: {
    layout: {

    },
  },
  routes: [
    {
      path: 'apps/Register',
      element: <Register />,
    },
  ],

};


export default RegisterConfig;
