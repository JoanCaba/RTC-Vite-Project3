import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './NotFound.css';

const NotFound = () => {
  const { notFoundTitle } = i18n[getLanguage()];
  const notFoundContainer = document.createElement('section');
  const notFoundTitleElement = document.createElement('h1');
  notFoundTitleElement.innerHTML = notFoundTitle;
  notFoundContainer.append(notFoundTitleElement);
  notFoundContainer.id = 'notfound';
  return notFoundContainer;
};

export default NotFound;
