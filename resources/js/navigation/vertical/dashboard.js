export default [
  // {
  //   title: 'Dashboards',
  //   icon: { icon: 'tabler-smart-home' },
  //   children: [
  //     {
  //       title: 'CRM',
  //       to: 'dashboards-crm',
  //     },
  //   ],
  // },
  {
    title: 'Incidents',
    icon: { icon: 'tabler-flame' },
    subject: 'incident',
    action: 'menu',
    to: 'incident',
  },
  {
    title: 'Localisations',
    icon: { icon: 'tabler-brand-google-maps' },
    subject: 'location',
    action: 'menu',
    to: 'location',
  },
  {
    title: 'Utilisateurs',
    icon: { icon: 'tabler-users' },
    subject: 'user',
    action: 'menu',
    to: 'user',
  },
]
