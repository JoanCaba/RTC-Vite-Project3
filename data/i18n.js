export const LOCALES = {
  en: {
    name: 'English',
    image: '/United-Kingdom-Flag.48.png',
    alt: 'United Kingdom flag'
  },
  es: {
    name: 'Castellano',
    image: '/Spain-Flag.48.png',
    alt: 'Bandera de España'
  }
};

const PERSONAL_DATA = {
  name: 'Joan Cabañeros',
  avatarImage: ''
};

export const i18n = {
  en: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    title: 'Hello',
    description: `<p>Hello, I'm <span class='home-name'>${PERSONAL_DATA.name}</span> full-stack web developer.</p>`,
    image: PERSONAL_DATA.avatarImage,
    alt: 'Joan profile photo'
  },
  es: {
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    title: 'Hola',
    description: `<p>Hola, soy <span class='home-name'>${PERSONAL_DATA.name}</span> desarrollador web full-stack.</p>`,
    image: PERSONAL_DATA.avatarImage,
    alt: 'Foto de Joan'
  }
};
