
const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
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
        // badge: {
        //   title: 13,
        //   bg: "rgb(9,210,97)",
        //   fg: "#FFFFFF"
        // }
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


