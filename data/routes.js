import Experience from '../pages/Experience/Experience';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';

const ROUTES = [
  {
    path: '/:lang(es|en|)',
    component: Home
  },
  {
    path: '/:lang(es|en|)?/experience',
    component: Experience
  },
  {
    path: '/:lang(es|en|)?/projects',
    component: Projects
  }
];

export default ROUTES;
