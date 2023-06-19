import { i18n } from '../../data/i18n';
import NAVLINKS from '../../data/navlinks';
import getLanguage from '../../utils/getLanguage';
import Link from '../Link/Link';
import './NavLinks.css';

const updateLanguageLinks = (e) => {
  const languageAnchors = document.querySelectorAll('.language-link');
  const currentPath = e.target.getAttribute('href');
  languageAnchors.forEach((anchor) => {
    const linkLocale = anchor.getAttribute('href').split('/')[1];
    const path = `/${linkLocale}/${currentPath.split('/').reverse()[0]}`;
    // eslint-disable-next-line no-param-reassign
    anchor.href = path;
  });
};

const NavLinks = () => {
  const navElement = document.createElement('nav');
  const ulElement = document.createElement('ul');
  navElement.id = 'nav-links';
  NAVLINKS.forEach((link) => {
    const liElement = document.createElement('li');
    const anchorElement = Link(link.href, i18n[getLanguage()][link.linkName], 'nav-link main-link');
    anchorElement.addEventListener('click', updateLanguageLinks);
    liElement.append(anchorElement);
    ulElement.append(liElement);
  });
  navElement.append(ulElement);
  return navElement;
};

export default NavLinks;
