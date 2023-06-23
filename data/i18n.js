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
    hello: `Hello, I'm`,
    myName: PERSONAL_DATA.name,
    developedBy: 'Developed by',
    professionTitle: 'Full-Stack Web Developer',
    usingFooter: 'With Vite & vanilla JavaScript',
    avatarImage: PERSONAL_DATA.avatarImage,
    avatarImageAlt: 'Joan profile photo'
  },
  es: {
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    hello: `Hola, soy`,
    myName: PERSONAL_DATA.name,
    developedBy: 'Desarrollado por',
    professionTitle: 'Desarrollador Web Full-Stack',
    usingFooter: 'Con Vite & vanilla JavaScript',
    avatarImage: PERSONAL_DATA.avatarImage,
    avatarImageAlt: 'Foto de perfil de Joan'
  }
};
