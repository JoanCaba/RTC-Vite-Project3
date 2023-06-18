import { match } from 'path-to-regexp';
import NotFound from '../pages/NotFound/NotFound';
import ROUTES from '../data/data';

let queryParams = {};

const matchRouteParams = (path, currentPath) => {
  if (path === currentPath) return true;
  const matcherUrl = match(path, { decode: decodeURIComponent });
  const matched = matcherUrl(currentPath);
  if (!matched) return false;
  queryParams = matched.params;
  return true;
};

const router = () => {
  const currentPath = window.location.pathname;
  // const { component } = ROUTES.find((route) => route.path === path) || {};
  const { component } = ROUTES.find(({ path }) => matchRouteParams(path, currentPath)) || {};
  if (component) {
    document.querySelector('main').innerHTML = component(queryParams.lang);
  } else {
    document.querySelector('main').innerHTML = NotFound();
  }
};
const onAnchorClicked = (e) => {
  const anchorPath = e.target.getAttribute('href');
  // TODO: Add language selector from header componenet button? const language =
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
