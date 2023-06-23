import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './Footer.css';

export const updateFooterLanguage = (lang) => {
  const { developedBy, usingFooter, myName } = lang;
  const developedByElement = document.querySelector('footer p:nth-child(1)');
  const developedWithElement = document.querySelector('footer p:nth-child(2)');
  developedByElement.innerHTML = `${developedBy} ${myName}`;
  developedWithElement.innerHTML = usingFooter;
};

export const initFooter = () => {
  const app = document.querySelector('#app');
  const footerElement = document.createElement('footer');
  const developedByElement = document.createElement('p');
  const developedWithElement = document.createElement('p');
  footerElement.append(developedByElement);
  footerElement.append(developedWithElement);
  const lang = i18n[getLanguage()];
  app.append(footerElement);
  updateFooterLanguage(lang);
};
