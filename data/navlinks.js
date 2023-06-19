import getLanguage from '../utils/getLanguage';

const NAVLINKS = [
  { href: '/', linkName: 'home' },
  { href: `/${getLanguage()}/experience`, linkName: 'experience' },
  { href: `/${getLanguage()}/projects`, linkName: 'projects' }
];

export default NAVLINKS;
