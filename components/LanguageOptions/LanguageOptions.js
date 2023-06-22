/* eslint-disable no-param-reassign */
import { LOCALES, i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import { updateLanguageButton } from '../LanguageButton/LanguageButton';
import Link from '../Link/Link';
import './LanguageOptions.css';

const updateLinks = (e) => {
  e.preventDefault();
  const navLinks = document.querySelectorAll('.main-link');
  const locale = e.target.getAttribute('href').split('/')[1];

  navLinks.forEach((anchor) => {
    const anchorPathName = anchor.getAttribute('href').split('/').reverse()[0];
    const path = `/${locale}/${anchorPathName}`;
    anchor.href = path;
    anchor.text = i18n[locale][anchorPathName || 'home'];
  });

  const languageButton = document.querySelector('#language-button');
  updateLanguageButton(languageButton, locale);

  const languageAnchors = document.querySelectorAll('.language-link');

  languageAnchors.forEach((anchor) => {
    const linkLocale = anchor.classList.contains(`${locale}-link`);
    if (linkLocale) {
      anchor.classList.add('current-language-link');
    } else {
      anchor.classList.remove('current-language-link');
    }
  });
};

const LanguageOptions = () => {
  const ulElement = document.createElement('ul');
  ulElement.classList = 'display-none dropdown-item';
  const currentPath = window.location.pathname;
  Object.keys(LOCALES).forEach((locale) => {
    const { name } = LOCALES[locale];
    const lang = getLanguage();
    const path = `/${locale}/${currentPath.split('/').reverse()[0]}`;
    const liElement = document.createElement('li');
    const linkElement = Link(path, name, `language-link nav-link ${locale}-link`);
    if (lang === locale) linkElement.classList.add('current-language-link');
    linkElement.addEventListener('click', updateLinks);
    liElement.append(linkElement);
    ulElement.append(liElement);
  });
  return ulElement;
};

export default LanguageOptions;
