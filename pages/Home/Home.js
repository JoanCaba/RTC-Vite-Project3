import { i18n } from '../../data/i18n';
import MEDIA from '../../data/externalLinks';
import getLanguage from '../../utils/getLanguage';
import './Home.css';
import ExternalButton from '../../components/ExternalButton/ExternalButton';

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
  MEDIA.forEach((media) => {
    socialButtonsContainer.append(ExternalButton(media));
  });
  homeDescriptionContainer.append(textContainer);
  homeDescriptionContainer.append(socialButtonsContainer);
  return homeDescriptionContainer;
};

const Home = () => {
  const { hello, myName, professionTitle } = i18n[getLanguage()];
  const homeContainer = document.createElement('section');
  const homeImageContainer = document.createElement('div');
  const homeDescriptionContainer = createHomeDescription(hello, myName, professionTitle);
  homeContainer.id = 'home';
  homeContainer.classList.remove('fade-out');
  homeContainer.classList.add('fade-in');
  homeContainer.append(homeDescriptionContainer);
  homeContainer.append(homeImageContainer);
  return homeContainer;
};

export default Home;
