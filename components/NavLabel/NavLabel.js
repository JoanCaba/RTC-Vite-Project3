import hamburgerButton from '../hamburgerButton/hamburgerButton';
import './NavLabel.css';

// const NavLabel = () => {
//   const labelElement = document.createElement('label');
//   labelElement.htmlFor = 'menu-toggle';
//   labelElement.id = 'nav-menu-label';
//   labelElement.innerHTML = `
//   <div class="bar1"></div>
//   <div class="bar2"></div>
//   <div class="bar3"></div>
//   `;
//   return labelElement;
// };

const NavLabel = () => {
  const buttonElement = hamburgerButton('nav-links');
  return buttonElement;
};

export default NavLabel;
