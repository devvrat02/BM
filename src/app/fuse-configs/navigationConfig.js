
const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'Dashboard',
        title: 'Dashboard',
        translate: 'Dashboard',
        type: 'item',
        icon: 'apartment',
        url: 'apps/Dashboard',
      },
      {
        id: 'Client',
        title: 'Client',
        translate: 'Client',
        type: 'item',
        icon: 'money',
        url: 'apps/Client',
      },
      {
        id: 'Pentester',
        title: 'Pentester',
        translate: 'Pentester',
        type: 'item',
        icon: 'engineering',
        url: 'apps/Pentester',
      },
      {
        id: 'Registration',
        title: 'Registration',
        translate: 'Registration',
        type: 'item',
        icon: 'account_box',
        url: 'apps/Register',
      },

      {
        id: 'Organization',
        title: 'Organization',
        translate: 'Pentester\nTeam',
        type: 'item',
        icon: 'business',
        url: 'apps/organization',
      },
      {
        id: 'analytics',
        title: 'Analytics',
        translate: 'Analytics',
        type: 'item',
        icon: 'analytics',
        url: 'apps/analytics',
      },
      {
        id: 'vulnerabilities',
        title: 'Vulnerabilities',
        translate: 'Vulnerabilities',
        type: 'item',
        icon: 'bug_report',
        url: 'apps/vulnerabilities',
      },
      {
        id: 'cloud',
        title: 'Cloud',
        translate: 'Cloud',
        type: 'item',
        icon: 'cloud',
        url: 'apps/cloud',
      },
      // {
      //   id: 'Comp',
      //   title: 'Compliance',
      //   translate: 'Compliance',
      //   type: 'item',
      //   icon: 'article',
      //   url: 'apps/comp',
      // },
      {
        id: 'TeamMembers',
        title: 'TeamMembers',
        translate: 'Team\nMembers',
        type: 'item',
        icon: 'people',
        url: 'apps/teams',
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'Calendar',
        type: 'item',
        icon: 'date_range',
        url: 'apps/calendar',
      },
      {
        id: 'support',
        title: 'Support',
        translate: 'Support',
        type: 'item',
        icon: 'support_agent',
        url: 'apps/chat',
      },
      {
        id: 'knowledge-base',
        title: 'Knowledge Base',
        type: 'item',
        icon: 'import_contacts',
        url: 'apps/knowledgebase',
      },
    ],
  },

];

export default navigationConfig;


