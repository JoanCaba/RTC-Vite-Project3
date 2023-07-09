import EXPERIENCE from './experience';
import PROJECTS from './projects';

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
    notFoundTitle: 'Page not found...',
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    hello: `Hello, I'm`,
    myName: PERSONAL_DATA.name,
    developedBy: 'Developed by',
    professionTitle: 'Full-Stack Web Developer',
    usingFooter: 'With Vite & vanilla JavaScript',
    avatarImage: PERSONAL_DATA.avatarImage,
    avatarImageAlt: 'Joan profile photo',
    experienceTitle: `Where I've Worked`,
    experiencesList: EXPERIENCE.en,
    projectsTitle: 'Projects that I’ve Built',
    projectsList: PROJECTS.en,
    viewCode: 'View code',
    visitSite: 'Visit Site'
  },
  es: {
    notFoundTitle: 'Pagina no encontrada...',
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    hello: `Hola, soy`,
    myName: PERSONAL_DATA.name,
    developedBy: 'Desarrollado por',
    professionTitle: 'Desarrollador Web Full-Stack',
    usingFooter: 'Con Vite & vanilla JavaScript',
    avatarImage: PERSONAL_DATA.avatarImage,
    avatarImageAlt: 'Foto de perfil de Joan',
    experienceTitle: `Donde he trabajado`,
    experiencesList: EXPERIENCE.es,
    projectsTitle: 'Proyectos que he construido',
    projectsList: PROJECTS.es,
    viewCode: 'Ver el codigo',
    visitSite: 'Visitar el sitio'
  }
};
