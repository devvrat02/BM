import { lazy } from 'react';

const KnowledgeBasePage = lazy(() => import('./KnowledgeBasePage'));

const KnowledgeBasePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/knowledgebase',
      element: <KnowledgeBasePage />,
    },
  ],
};

export default KnowledgeBasePageConfig;
