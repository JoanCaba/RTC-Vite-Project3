/* eslint-disable no-param-reassign */
import { LOCALES, i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import { updateLanguageButton } from '../LanguageButton/LanguageButton';
import Link from '../Link/Link';
import './LanguageOptions.css';

const updateLinks = (e) => {
  e.preventDefault();
  const navLinks = document.querySelectorAll('.main-link');
  const locale = getLanguage();

  navLinks.forEach((anchor) => {
    const anchorPathName = anchor.getAttribute('href').split('/').reverse()[0];
    const path = `/${locale}/${anchorPathName}`;
    anchor.href = path;
    anchor.text = i18n[locale][anchorPathName || 'home'];
  });

  const languageButton = document.querySelector('.language-button');
  updateLanguageButton(languageButton, locale);
};

const LanguageOptions = () => {
  const ulElement = document.createElement('ul');
  ulElement.classList = 'lang-display-none';
  const currentPath = window.location.pathname;
  Object.keys(LOCALES).forEach((locale) => {
    const { name } = LOCALES[locale];
    const path = `/${locale}/${currentPath.split('/').reverse()[0]}`;
    const liElement = document.createElement('li');
    const linkElement = Link(path, name, 'language-link nav-link');
    linkElement.addEventListener('click', updateLinks);
    liElement.append(linkElement);
    ulElement.append(liElement);
  });
  return ulElement;
};

export default LanguageOptions;
