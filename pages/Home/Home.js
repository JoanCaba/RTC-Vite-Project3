import SocialButton from '../../components/SocialButton/SocialButton';
import { i18n } from '../../data/i18n';
import MEDIA from '../../data/mediaLinks';
import getLanguage from '../../utils/getLanguage';
import './Home.css';

const createHomeDescription = (hello, myName, professionTitle) => {
  const homeDescriptionContainer = document.createElement('div');

  const textContainer = document.createElement('div');
  const socialButtonsContainer = document.createElement('div');
  homeDescriptionContainer.classList = 'home-description';
  textContainer.classList = 'home-text';
  socialButtonsContainer.classList = 'home-social-buttons';
  textContainer.innerHTML = `
    <p>${hello} </p>
    <h1>${myName} </h1>
    <p>${professionTitle}</p>
  `;
  Object.keys(MEDIA).forEach((media) => {
    socialButtonsContainer.append(SocialButton(media));
  });
  homeDescriptionContainer.append(textContainer);
  homeDescriptionContainer.append(socialButtonsContainer);
  return homeDescriptionContainer;
};

const Home = () => {
  const { hello, myName, professionTitle } = i18n[getLanguage()];
  const homeContainer = document.createElement('div');
  const homeImageContainer = document.createElement('div');
  const homeDescriptionContainer = createHomeDescription(hello, myName, professionTitle);
  homeContainer.classList = 'home';
  homeContainer.append(homeDescriptionContainer);
  homeContainer.append(homeImageContainer);
  return homeContainer;
  // return `<div class='home'>
  // <div class='home-text'>${description}</div>
  // <img src="${image}" alt="${alt}">
  // </div>
  // `;
};

export default Home;
