import { i18n } from '../../data/i18n';

const Experience = (lang) => {
  const { title } = i18n[lang] || i18n[window.navigator.language.slice(0, 2)];

  return `
  <h1> EXPERIENCE ${title} </h1>
  `;
};

export default Experience;
