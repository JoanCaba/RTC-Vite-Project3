import { match } from 'path-to-regexp';
import NotFound from '../../pages/NotFound/NotFound';
import ROUTES from '../../data/routes';
import { updateNavLinksPage } from '../updateLinks';

const matchRouteParams = (path, currentPath) => {
  if (path === currentPath) return true;
  const matcherUrl = match(path, { decode: decodeURIComponent });
  const matched = matcherUrl(currentPath);
  if (!matched) return false;
  return true;
};

const router = () => {
  const currentPath = window.location.pathname;
  const mainElement = document.querySelector('main');
  const { component, linkClass } =
    ROUTES.find(({ path }) => matchRouteParams(path, currentPath)) || {};
  const previousLink = document.querySelector(`.current-page-link`);
  const languageLink = document.querySelector('current-language-link');
  const nextLink = document.querySelector(`.${linkClass}`);
  if (!component) mainElement.appendChild(NotFound());

  if (previousLink === nextLink && languageLink === nextLink) return;
  if (component) {
    updateNavLinksPage(linkClass);
    if (mainElement.children.length > 0) {
      const childrens = [...mainElement.children];
      childrens.forEach((child) => {
        child.classList.add('fade-out');
        child.classList.remove('fade-in');
        child.addEventListener('animationend', () => {
          child.remove();
        });
      });
    }
    mainElement.appendChild(component());
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
