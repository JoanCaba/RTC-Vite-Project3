import { i18n } from '../../data/i18n';
import NAVLINKS from '../../data/navlinks';
import getLanguage from '../../utils/getLanguage';
import InputToggle from '../InputToggle/InputToggle';
import Link from '../Link/Link';
import NavLabel from '../NavLabel/NavLabel';
import hamburgerButton from '../hamburgerButton/hamburgerButton';
import './NavLinks.css';

export const updateNavLinksPage = (currentPage) => {
  const allAnchorLinks = document.querySelectorAll('.nav-link');
  allAnchorLinks.forEach((link) => {
    if (link.classList.contains(currentPage)) {
      link.classList.add('current-page-link');
    } else {
      link.classList.remove('current-page-link');
    }
  });
};

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
  ulElement.id = 'nav-links';
  ulElement.classList = 'display-none dropdown-item';
  navElement.append(hamburgerButton('nav-links-button'));
  NAVLINKS.forEach((link) => {
    const liElement = document.createElement('li');
    const anchorElement = Link(
      link.href,
      i18n[getLanguage()][link.linkName],
      `nav-link main-link ${link.linkName}-link`
    );
    anchorElement.addEventListener('click', updateLanguageLinks);
    liElement.append(anchorElement);
    ulElement.append(liElement);
  });
  navElement.append(ulElement);
  return navElement;
};

export default NavLinks;
