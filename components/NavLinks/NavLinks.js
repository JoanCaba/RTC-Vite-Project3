import { i18n } from '../../data/i18n';
import NAVLINKS from '../../data/navlinks';
import getLanguage from '../../utils/getLanguage';
import { updateLanguageLinks } from '../../utils/updateLinks';
import Link from '../Link/Link';
import hamburgerButton from '../hamburgerButton/hamburgerButton';
import './NavLinks.css';

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
