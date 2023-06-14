import notFound from '../pages/404/NotFound';
import { ROUTES } from '../data/data';

const router = () => {
  const path = window.location.pathname;
  const { component } = ROUTES.find((route) => route.path === path) || {};
  if (component) {
    document.querySelector('main').innerHTML = component();
  } else {
    document.querySelector('main').innerHTML = notFound();
  }
};
const onAnchorClicked = (e) => {
  const anchorPath = e.target.getAttribute('href');
  const isMainClick = e.button === 0;
  const isModifiedClick = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
  if (isMainClick && !isModifiedClick) {
    e.preventDefault();
    window.history.pushState(null, null, anchorPath);
    router();
  }
};

const initRouter = () => {
  window.addEventListener('popstate', router);
  document.addEventListener('DOMContentLoaded', router);
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', onAnchorClicked);
  });
};

export default initRouter;
