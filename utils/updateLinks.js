import { updateFooterLanguage } from '../components/Footer/Footer';
import LanguageButton from '../components/LanguageButton/LanguageButton';
import { LOCALES, i18n } from '../data/i18n';

/* eslint-disable no-param-reassign */

export const updateLanguageButton = (button, lang) => {
  button.ariaLabel = LOCALES[lang].label;
  button.innerHTML = LanguageButton(lang);
};

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

export const onNavLinkClicked = (e) => {
  if (e.target.classList.contains('current-page-link')) console.log('YEAH');
  const languageAnchors = document.querySelectorAll('.language-link');
  const currentPath = e.target.getAttribute('href');
  languageAnchors.forEach((anchor) => {
    const linkLocale = anchor.getAttribute('href').split('/')[1];
    const path = `/${linkLocale}/${currentPath.split('/').reverse()[0]}`;
    // eslint-disable-next-line no-param-reassign
    anchor.href = path;
  });
};

export const updateLinks = (e) => {
  e.preventDefault();
  const navLinks = document.querySelectorAll('.main-link');
  const locale = e.target.getAttribute('href').split('/')[1];
  updateFooterLanguage(i18n[locale]);

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
