import MEDIA from '../../data/mediaLinks';
import Link from '../Link/Link';
import './SocialButton.css';

const SocialButton = (media) => {
  const { mediaName, url, text, icon, imageAlt } = MEDIA[media];
  const linkElement = Link(url, text, `media-button ${mediaName}-button`);
  const buttonImage = document.createElement('img');
  linkElement.rel = 'noreferrer';
  linkElement.role = 'button';
  buttonImage.src = icon;
  buttonImage.alt = imageAlt;
  linkElement.insertBefore(buttonImage, linkElement.firstChild);
  return linkElement;
};

export default SocialButton;
