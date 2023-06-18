import './LanguageButton.css';
import { LOCALES } from '../../data/i18n';

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
  <img class='flag-image' src="${LOCALES[lang].image}" alt="Bandera de España" />
  <span class="">${LOCALES[lang].name}<span/>
  `;
};

export const updateLanguageButton = (button, lang) => {
  // eslint-disable-next-line no-param-reassign
  button.innerHTML = buttonTemplate(lang);
};

const LanguageButton = () => {
  const buttonElement = document.createElement('button');
  buttonElement.ariaLabel = 'Language selector';
  buttonElement.type = 'button';
  buttonElement.classList = 'language-button';
  buttonElement.addEventListener('click', buttonClick);
  const currentPath = window.location.pathname;

  if (currentPath.split('/')[1] === 'es') {
    buttonElement.innerHTML = buttonTemplate('es');
  } else {
    buttonElement.innerHTML = buttonTemplate('en');
  }

  return buttonElement;
};

export default LanguageButton;

/*
document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.title').textContent = data[event.currentTarget.checked ? 'japanese' : 'english'].title;
});
*/
