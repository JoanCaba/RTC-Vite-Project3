import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';

const Home = () => {
  const { title } = i18n[getLanguage()];

  return `
  <h1> HOME ${title} </h1>
  `;
};

export default Home;
