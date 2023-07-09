import './InfoButton.css';

const InfoButton = (text, shortText, cardElement, groupClass, defaultCard) => {
  const buttonElement = document.createElement('button');
  const spanTextElement = document.createElement('span');
  const spanShortTextElement = document.createElement('span');
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
  });
  spanTextElement.innerText = text;
  spanShortTextElement.innerText = shortText;
  buttonElement.append(spanTextElement);
  buttonElement.append(spanShortTextElement);
  return buttonElement;
};

export default InfoButton;
