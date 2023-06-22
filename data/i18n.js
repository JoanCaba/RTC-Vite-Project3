export const LOCALES = {
  en: {
    name: 'English',
    label: 'Language selector',
    image: '/United-Kingdom-Flag.48.png',
    alt: 'United Kingdom flag'
  },
  es: {
    name: 'Castellano',
    label: 'Selector de idioma',
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
    developedBy: `<p>{Developed by ${PERSONAL_DATA.name}}</p>`,
    using: `</p><p>With Vite & vanilla JavaScript</p>`,
    image: PERSONAL_DATA.avatarImage,
    alt: 'Joan profile photo'
  },
  es: {
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    title: 'Hola',
    description: `<p>Hola, soy <span class='home-name'>${PERSONAL_DATA.name}</span> desarrollador web full-stack.</p>`,
    developedBy: `<p>{Desarrollado por ${PERSONAL_DATA.name}}</p>`,
    using: `<p>Con Vite & vanilla JavaScript</p>`,
    image: PERSONAL_DATA.avatarImage,
    alt: 'Foto de Joan'
  }
};
