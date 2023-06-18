import i18n from '../../data/i18n';

const Home = (lang) => {
  const { title } = i18n[lang] || i18n.en;

  return `
  <h1> HOME ${title} </h1>
  `;
};

export default Home;
