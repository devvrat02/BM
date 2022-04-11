
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
        type: 'item',
        icon: 'apartment',
        url: 'apps/Dashboard',
      },
      {
        id: 'Client',
        title: 'Client',
        type: 'item',
        icon: 'money',
        url: 'apps/Client',
      },
      {
        id: 'Pentester',
        title: 'Pentester',
        type: 'item',
        icon: 'engineering',
        url: 'apps/Pentester',
      },
      {
        id: 'Registration',
        title: 'Registration',
        type: 'item',
        icon: 'account_box',
        url: 'apps/Register',
      },
      {
        id: 'Task-Board',
        title: 'Task Board',
        type: 'item',
        icon: 'assessment',
        url: 'apps/scrumboard',
      },
    ],
  },

];

export default navigationConfig;


