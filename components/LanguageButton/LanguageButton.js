/* eslint-disable no-param-reassign */
import './LanguageButton.css';
import { LOCALES } from '../../data/i18n';

export const buttonImageTemplate = (lang) => {
  return `
  <img class='flag-image' src="${LOCALES[lang].image}" alt="${LOCALES[lang].alt}" />
  <span class="">${LOCALES[lang].name}<span/>
  `;
};

export const updateLanguageButton = (button, lang) => {
  button.ariaLabel = LOCALES[lang].label;
  button.innerHTML = buttonImageTemplate(lang);
};

export default updateLanguageButton;
