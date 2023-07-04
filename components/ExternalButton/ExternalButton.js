import Link from '../Link/Link';
import './ExternalButton.css';

const ExternalButton = (array) => {
  const { linkName, url, text, icon, imageAlt, type } = array;
  const linkElement = Link(url, text, `${type}-button ${linkName}-button`);
  const buttonImage = document.createElement('img');
  linkElement.rel = 'noreferrer';
  linkElement.role = 'button';
  buttonImage.src = icon;
  buttonImage.alt = imageAlt;
  linkElement.insertBefore(buttonImage, linkElement.firstChild);
  return linkElement;
};

export default ExternalButton;
