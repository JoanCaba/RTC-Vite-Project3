import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './Footer.css';

export const updateFooterLanguage = (lang) => {
  const { developedBy, using } = lang;
  const footerElement = document.querySelector('footer');
  footerElement.innerHTML = `${developedBy}${using}`;
};

export const initFooter = () => {
  const app = document.querySelector('#app');
  const footerElement = document.createElement('footer');
  const lang = i18n[getLanguage()];
  app.append(footerElement);
  updateFooterLanguage(lang);
};
