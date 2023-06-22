import Experience from '../pages/Experience/Experience';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';

const ROUTES = [
  {
    path: '/:lang(es|en|)',
    linkClass: 'home-link',
    component: Home
  },
  {
    path: '/:lang(es|en|)?/experience',
    linkClass: 'experience-link',
    component: Experience
  },
  {
    path: '/:lang(es|en|)?/projects',
    linkClass: 'projects-link',
    component: Projects
  }
];

export default ROUTES;
