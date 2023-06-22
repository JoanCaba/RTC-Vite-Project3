import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './Home.css';

const Home = () => {
  const { description, image, alt } = i18n[getLanguage()];
  return `<div class='home'>
  <div class='home-text'>${description}</div>
  <img src="${image}" alt="${alt}">
  </div>
  `;
};

export default Home;
