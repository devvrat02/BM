import { lazy } from 'react';


const OrgTable = lazy(() => import("./OrgTable"));

const OrganizationAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/Organization',
      element: <OrgTable />,
    },
  ],
};

export default OrganizationAppConfig;
