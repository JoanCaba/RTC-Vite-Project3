import hamburgerButton from '../hamburgerButton/hamburgerButton';
import './NavLabel.css';

const NavLabel = () => {
  const buttonElement = hamburgerButton('nav-links');
  return buttonElement;
};

export default NavLabel;
