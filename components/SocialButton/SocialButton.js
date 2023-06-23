import MEDIA from '../../data/mediaLinks';
import './SocialButton.css';

const SocialButton = (media) => {
  const { mediaName, url, text, icon, imageAlt } = MEDIA[media];
  const buttonElement = document.createElement('a');
  const buttonImage = document.createElement('img');
  buttonElement.classList = `media-button ${mediaName}-button`;
  buttonElement.href = url;
  buttonElement.rel = 'noreferrer';
  buttonElement.role = 'button';
  buttonImage.src = icon;
  buttonImage.alt = imageAlt;
  buttonElement.append(buttonImage);

  buttonElement.append(text);
  return buttonElement;
};

export default SocialButton;
