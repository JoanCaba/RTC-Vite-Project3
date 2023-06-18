import { LOCALES } from '../../data/i18n';
import { updateLanguageButton } from '../LanguageButton/LanguageButton';
import Link from '../Link/Link';
import './LanguageOptions.css';

const updateLinks = (e) => {
  e.preventDefault();
  const navLinks = document.querySelectorAll('.main-link');
  const locale = e.target.getAttribute('href').split('/')[1];

  navLinks.forEach((anchor) => {
    const path = `/${locale}/${anchor.getAttribute('href').split('/').reverse()[0]}`;
    // eslint-disable-next-line no-param-reassign
    anchor.href = path;
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
