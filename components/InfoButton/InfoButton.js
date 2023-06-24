import './InfoButton.css';

const InfoButton = (cardElement, groupClass, defaultCard) => {
  const buttonElement = document.createElement('button');
  buttonElement.classList = `info-card-button ${groupClass}`;
  if (defaultCard) buttonElement.classList.add('active-card-button');
  buttonElement.addEventListener('click', function f(event) {
    if (!event.target.classList.contains('active-card-button')) {
      const currentActiveCard = document.querySelector(`.${groupClass}.active-card`);
      const currentActiveButton = document.querySelector(`.${groupClass}.active-card-button`);
      currentActiveButton.classList.remove('active-card-button');
      buttonElement.classList.add('active-card-button');
      currentActiveCard.classList.remove('active-card');
      cardElement.classList.toggle('active-card');
    }

    // if (!buttonElement.contains(event.target)) {
    // groupCardElements.forEach((card) => {
    //   card.classList.remove('active-card');
    // });

    // }
  });
  return buttonElement;
};

export default InfoButton;
