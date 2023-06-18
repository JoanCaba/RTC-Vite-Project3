import LanguageSelector from '../LanguageSelector/LanguageSelector';
import NavLinks from '../NavLinks/NavLinks';
import './Header.css';

const initHeader = () => {
  const app = document.querySelector('#app');
  const header = document.createElement('header');
  header.append(NavLinks());
  header.append(LanguageSelector());

  app.append(header);
};

export default initHeader;
