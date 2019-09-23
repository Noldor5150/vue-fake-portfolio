export default {
  path: '/about',
  component: () => import('@/views/About'),
  meta: {
    displayName: 'AboutMe',
    defaultName: 'About:Education',
  },
  children: [
    {
      path: '',
      name: 'About:Education',
      component: () => import('@/views/About/Education'),
      meta: {
        displayName: 'Education',
      },
    },
    {
      path: 'career',
      name: 'About:Career',
      component: () => import('@/views/About/Career'),
      meta: {
        displayName: 'Career',
      },
    },
    {
      path: 'knowledge',
      name: 'About:Knowlefge',
      component: () => import('@/views/About/Knowledge'),
      meta: {
        displayName: 'Knowledge',
      },
    },
  ],
};
