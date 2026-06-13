export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Songhee Han',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Publications',
    path: '/writing',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Grants',
    path: '/projects',
  },
];

export default routes;
