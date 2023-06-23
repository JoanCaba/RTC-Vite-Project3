import MEDIA from '../../data/mediaLinks';
import './SocialButton.css';

const SocialButton = (media) => {
  const { mediaName, url, text } = MEDIA[media];
  const buttonElement = document.createElement('a');
  buttonElement.classList = `media-button ${mediaName}-button`;
  buttonElement.href = url;
  buttonElement.rel = 'noreferrer';
  buttonElement.role = 'button';
  buttonElement.innerText = text;
  return buttonElement;
};

export default SocialButton;
