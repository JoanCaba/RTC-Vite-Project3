import './hamburgerButton.css';

const hamburgerButton = (uniqueId, iconImage) => {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('id', uniqueId);
  buttonElement.classList = 'hamburger-button';
  if (!iconImage) {
    buttonElement.innerHTML = `<span></span><span></span><span></span><span></span>`;
    buttonElement.classList.add('default-burger-icon');
  } else {
    buttonElement.innerHTML = iconImage;
  }

  buttonElement.addEventListener('click', function f() {
    this.classList.toggle('dropdown-focus');
  });
  window.addEventListener('click', function f(event) {
    if (!buttonElement.contains(event.target)) {
      buttonElement.classList.remove('dropdown-focus');
    }
  });
  return buttonElement;
};

export default hamburgerButton;
