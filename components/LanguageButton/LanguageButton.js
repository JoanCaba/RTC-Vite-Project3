/* eslint-disable no-param-reassign */
import './LanguageButton.css';
import { LOCALES } from '../../data/i18n';

const LanguageButton = (lang) => {
  return `
  <img class='flag-image' src="${LOCALES[lang].image}" alt="${LOCALES[lang].alt}" />
  <span class="">${LOCALES[lang].name}<span/>
  `;
};

export default LanguageButton;
