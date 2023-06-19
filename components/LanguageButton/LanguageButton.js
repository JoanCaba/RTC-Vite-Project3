/* eslint-disable no-param-reassign */
import './LanguageButton.css';
import { LOCALES } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';

const handleClickToHiddeLangOptions = () => {
  const ulElement = document.querySelector('.lang-selector ul');
  ulElement.classList = 'lang-display-none';
  document.removeEventListener('mouseup', handleClickToHiddeLangOptions);
};

const buttonClick = () => {
  const ulElement = document.querySelector('.lang-selector ul');
  if (ulElement.classList.contains('lang-display-none')) {
    ulElement.classList = 'lang-display';
    document.addEventListener('mouseup', handleClickToHiddeLangOptions);
  } else {
    ulElement.classList = 'lang-display-none';
  }
};

const buttonTemplate = (lang) => {
  return `
  <img class='flag-image' src="${LOCALES[lang].image}" alt="${LOCALES[lang].alt}" />
  <span class="">${LOCALES[lang].name}<span/>
  `;
};

export const updateLanguageButton = (button, lang) => {
  button.ariaLabel = LOCALES[lang].label;
  button.innerHTML = buttonTemplate(lang);
};

const LanguageButton = () => {
  const lang = getLanguage();
  const buttonElement = document.createElement('button');
  buttonElement.ariaLabel = LOCALES[lang].label;
  buttonElement.type = 'button';
  buttonElement.classList = 'language-button';
  buttonElement.addEventListener('click', buttonClick);
  buttonElement.innerHTML = buttonTemplate(lang);

  return buttonElement;
};

export default LanguageButton;

/*
document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.title').textContent = data[event.currentTarget.checked ? 'japanese' : 'english'].title;
});
*/
