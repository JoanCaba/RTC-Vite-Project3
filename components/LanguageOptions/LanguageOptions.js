/* eslint-disable no-param-reassign */
import { LOCALES } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import { updateLinks } from '../../utils/updateLinks';
import Link from '../Link/Link';
import './LanguageOptions.css';

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
